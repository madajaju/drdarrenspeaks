document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');
    const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
    window.dataLayer = window.dataLayer || [];

    if (!document.querySelector('.skip-link')) {
        const skipLink = document.createElement('a');
        skipLink.className = 'skip-link';
        skipLink.href = '#main-content';
        skipLink.textContent = 'Skip to content';
        document.body.prepend(skipLink);
    }

    const main = document.querySelector('main');
    if (main && !main.id) {
        main.id = 'main-content';
    }

    const trackEvent = (eventName, payload = {}) => {
        const eventPayload = { event: eventName, ...payload };
        window.dataLayer.push(eventPayload);
        if (window.gtag) {
            window.gtag('event', eventName, payload);
        }
    };

    if (navToggle && nav) {
        navToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
            navToggle.setAttribute('aria-expanded', !expanded);
        });

        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && nav.classList.contains('active')) {
                nav.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.focus();
            }
        });
    }

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        const linkPath = new URL(link.href, window.location.origin).pathname.replace(/\/$/, '') || '/';
        if (linkPath === currentPath || (linkPath !== '/' && currentPath.startsWith(linkPath + '/'))) {
            link.setAttribute('aria-current', 'page');
        }

        link.addEventListener('click', () => {
            if (nav) {
                nav.classList.remove('active');
            }
            if (navToggle) {
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });

    const trackableElements = document.querySelectorAll('[data-track]');
    trackableElements.forEach(element => {
        element.addEventListener('click', () => {
            trackEvent(element.dataset.track, {
                label: element.dataset.trackLabel || element.textContent.trim(),
                destination: element.getAttribute('href') || null
            });
        });
    });

    const copyStatus = document.querySelector('[data-copy-status]');
    const setCopyStatus = message => {
        if (copyStatus) {
            copyStatus.textContent = message;
        }
    };

    const copyTextToClipboard = async text => {
        if (!text) {
            return false;
        }

        if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(text);
            return true;
        }

        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        const copied = document.execCommand('copy');
        document.body.removeChild(textarea);
        return copied;
    };

    document.querySelectorAll('[data-copy-source]').forEach(button => {
        button.addEventListener('click', async () => {
            const sourceSelector = button.getAttribute('data-copy-source');
            const source = sourceSelector ? document.querySelector(sourceSelector) : null;
            const text = source ? source.innerText.trim() : (button.getAttribute('data-copy-text') || '').trim();
            const originalText = button.getAttribute('data-original-text') || button.textContent.trim();

            if (!button.getAttribute('data-original-text')) {
                button.setAttribute('data-original-text', originalText);
            }

            try {
                const copied = await copyTextToClipboard(text);
                if (!copied) {
                    throw new Error('Copy failed');
                }
                button.textContent = 'Copied';
                button.setAttribute('aria-pressed', 'true');
                setCopyStatus('Copied to clipboard.');
                trackEvent('copy_text', {
                    label: originalText,
                    destination: sourceSelector || null
                });
                window.setTimeout(() => {
                    button.textContent = button.getAttribute('data-original-text') || originalText;
                    button.setAttribute('aria-pressed', 'false');
                }, 1500);
            } catch (error) {
                setCopyStatus('Copy failed. Use the download link instead.');
            }
        });
    });

    document.querySelectorAll('img').forEach(image => {
        if (!image.hasAttribute('loading') && !image.closest('.hero') && !image.closest('.video-bg-container')) {
            image.setAttribute('loading', 'lazy');
        }
        if (!image.hasAttribute('decoding')) {
            image.setAttribute('decoding', 'async');
        }
    });

    const commonCtaSelectors = [
        'a[href="/contact"]',
        'a[href="/media-kit/"]',
        'a[href="/keynotes/"]',
        'a[href="/workshops/"]',
        'a[href="/books/"]',
        'a[href="/testimonials/"]'
    ];
    document.querySelectorAll(commonCtaSelectors.join(',')).forEach(element => {
        if (element.dataset.trackAttached === 'true') {
            return;
        }
        element.dataset.trackAttached = 'true';
        element.addEventListener('click', () => {
            trackEvent('cta_click', {
                label: element.textContent.trim(),
                destination: element.getAttribute('href')
            });
        });
    });

    const bookingForms = document.querySelectorAll('form[data-track-form]');
    bookingForms.forEach(form => {
        form.addEventListener('submit', event => {
            event.preventDefault();
            trackEvent(form.dataset.trackForm || 'booking_form_submit', {
                form_id: form.id || null
            });
            const mailtoTarget = form.dataset.mailto;
            if (mailtoTarget) {
                const fields = new FormData(form);
                const get = key => (fields.get(key) || '').toString().trim();
                const subject = encodeURIComponent(`Speaking inquiry from ${get('name') || 'website visitor'}`);
                const bodyLines = [
                    `Name: ${get('name')}`,
                    `Organization: ${get('organization')}`,
                    `Email: ${get('email')}`,
                    `Phone: ${get('phone')}`,
                    `Event date: ${get('event_date')}`,
                    `Location: ${get('event_location')}`,
                    `Format: ${get('format')}`,
                    `Audience size: ${get('audience_size')}`,
                    `Budget range: ${get('budget_range')}`,
                    `Topic of interest: ${get('topic')}`,
                    '',
                    'Message:',
                    get('message')
                ];
                const body = encodeURIComponent(bodyLines.join('\n'));
                window.location.href = `mailto:${mailtoTarget}?subject=${subject}&body=${body}`;
                return;
            }
            window.location.href = '/thank-you.html';
        });
    });
});
