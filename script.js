document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');

  form.addEventListener('submit', () => {
    const btn = form.querySelector('.btn-submit');
    btn.textContent = 'Submitting...';
    btn.disabled = true;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.about-card, .step, .form-group').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
  });
});
