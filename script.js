/* Custom cursor */
const cd = document.getElementById('cd'),
  cr = document.getElementById('cr');
let mx = 0,
  my = 0,
  rx = 0,
  ry = 0;
document.addEventListener('mousemove', (e) => {
  mx = e.clientX;
  my = e.clientY;
  cd.style.left = mx + 'px';
  cd.style.top = my + 'px';
});
(function loop() {
  rx += (mx - rx) * 0.15;
  ry += (my - ry) * 0.15;
  cr.style.left = rx + 'px';
  cr.style.top = ry + 'px';
  requestAnimationFrame(loop);
})();
document.querySelectorAll('a,button,.skill-tag,.project-card').forEach((el) => {
  el.addEventListener('mouseenter', () => cr.classList.add('h'));
  el.addEventListener('mouseleave', () => cr.classList.remove('h'));
});

/* Mobile nav */
const hb = document.getElementById('hb'),
  nl = document.getElementById('nl');
hb.addEventListener('click', () => {
  hb.classList.toggle('open');
  nl.classList.toggle('open');
});
nl.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    hb.classList.remove('open');
    nl.classList.remove('open');
  }),
);

/* Scroll reveal */
const ro = new IntersectionObserver(
  (es) =>
    es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        ro.unobserve(e.target);
      }
    }),
  { threshold: 0.1 },
);
document.querySelectorAll('.reveal').forEach((el) => ro.observe(el));

/* Active nav link */
const secs = document.querySelectorAll('section[id]'),
  nas = document.querySelectorAll('.nav-links a');
window.addEventListener(
  'scroll',
  () => {
    let cur = '';
    secs.forEach((s) => {
      if (window.scrollY >= s.offsetTop - 140) cur = s.id;
    });
    nas.forEach((a) =>
      a.classList.toggle('active', a.getAttribute('href') === '#' + cur),
    );
  },
  { passive: true },
);

/* Experience tabs */
document.querySelectorAll('.exp-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document
      .querySelectorAll('.exp-tab')
      .forEach((t) => t.classList.remove('active'));
    document
      .querySelectorAll('.exp-panel')
      .forEach((p) => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.panel).classList.add('active');
  });
});
