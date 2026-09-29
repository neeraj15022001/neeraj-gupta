import { buildMailtoUrl, buildWhatsAppUrl } from './connect-links.mjs';

const tablist = document.querySelector('[role="tablist"]');
const tabs = [...tablist.querySelectorAll('[role="tab"]')];

function activateTab(selectedTab, moveFocus = false) {
  for (const tab of tabs) {
    const selected = tab === selectedTab;
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
    document.getElementById(tab.getAttribute('aria-controls')).hidden = !selected;
  }
  if (moveFocus) selectedTab.focus();
}

tabs.forEach(tab => tab.addEventListener('click', () => activateTab(tab)));
tablist.addEventListener('keydown', event => {
  const current = tabs.indexOf(document.activeElement);
  let next = current;
  if (event.key === 'ArrowRight') next = (current + 1) % tabs.length;
  else if (event.key === 'ArrowLeft') next = (current - 1 + tabs.length) % tabs.length;
  else if (event.key === 'Home') next = 0;
  else if (event.key === 'End') next = tabs.length - 1;
  else return;
  event.preventDefault();
  activateTab(tabs[next], true);
});

function wireMessageForm(formId, messageId, buildTarget) {
  const form = document.getElementById(formId);
  const message = document.getElementById(messageId);
  message.addEventListener('input', () => message.setCustomValidity(''));
  form.addEventListener('submit', event => {
    event.preventDefault();
    message.setCustomValidity(message.value.trim() ? '' : 'Please enter a message.');
    if (!form.reportValidity()) return;
    window.location.assign(buildTarget());
  });
}

wireMessageForm('whatsapp-form', 'whatsapp-message', () =>
  buildWhatsAppUrl(document.getElementById('whatsapp-message').value)
);
wireMessageForm('email-form', 'email-message', () =>
  buildMailtoUrl(
    document.getElementById('email-subject').value,
    document.getElementById('email-message').value
  )
);

const progress = document.querySelector('.scroll-progress span');
function updateProgress() {
  const available = document.documentElement.scrollHeight - window.innerHeight;
  const percent = available > 0 ? Math.min(100, Math.max(0, window.scrollY / available * 100)) : 0;
  progress.style.width = `${percent}%`;
}
window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);
updateProgress();
