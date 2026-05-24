document.addEventListener('DOMContentLoaded', () => {

  // Nav scroll effect
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // Form submit UX
  const form = document.querySelector('.form');
  if (form) {
    form.addEventListener('submit', () => {
      const btn = form.querySelector('.btn-submit');
      btn.textContent = 'Gönderiliyor...';
      btn.disabled = true;
    });
  }

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll(
    '.feature-card, .quote-card, .step, .form-group, .faq-item, .section-label, .section h2, .section-desc, .form-note'
  ).forEach((el, i) => {
    el.classList.add('fade-up');
    el.style.transitionDelay = `${(i % 6) * 0.06}s`;
    observer.observe(el);
  });

  // FAQ: close others when one opens
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        document.querySelectorAll('.faq-item').forEach(other => {
          if (other !== item) other.removeAttribute('open');
        });
      }
    });
  });

});
