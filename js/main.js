/* typerwriter animation */
const phrases = [
  'UI/UX Designer (learning)',
  'VP Web Dev @ UONotes',
  'AI Developer Intern',
  'Software Engineering student',
];

let pi = 0, ci = 0, deleting = false;
const el = document.getElementById('typewriter');

function type() {
  const current = phrases[pi];
  if (!deleting) {
    el.textContent = current.slice(0, ++ci);
    if (ci === current.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    el.textContent = current.slice(0, --ci);
    if (ci === 0) {
      deleting = false;
      pi = (pi + 1) % phrases.length;
    }
  }
  setTimeout(type, deleting ? 35 : 65);
}

type();

/* fade in animation */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
