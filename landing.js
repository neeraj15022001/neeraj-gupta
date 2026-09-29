const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const sculpture = document.querySelector('.sculpture');
const scene = document.querySelector('.scene');
sculpture.addEventListener('pointermove', event => {
  if (motionPreference.matches || event.pointerType === 'touch') return;
  const bounds = sculpture.getBoundingClientRect();
  scene.style.setProperty('--ry', `${((event.clientX - bounds.left) / bounds.width - 0.5) * 22}deg`);
  scene.style.setProperty('--rx', `${((event.clientY - bounds.top) / bounds.height - 0.5) * -18}deg`);
});
sculpture.addEventListener('pointerleave', () => {
  scene.style.setProperty('--rx', '0deg');
  scene.style.setProperty('--ry', '0deg');
});
const progress = document.querySelector('.progress');
function updateProgress() {
  const available = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${available > 0 ? Math.min(1, Math.max(0, window.scrollY / available)) : 0})`;
}
window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);
updateProgress();
