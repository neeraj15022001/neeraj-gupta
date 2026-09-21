const themeColors = {
  cobalt: ['#214fd3', '#edf2ff'],
  ocean: ['#08747e', '#e6f5f4'],
  plum: ['#79447f', '#f5edf6'],
};

document.querySelectorAll('[data-theme]').forEach(button => {
  button.addEventListener('click', () => {
    const colors = themeColors[button.dataset.theme];
    document.querySelector('#demo-card').style.setProperty('--demo', colors[0]);
    document.querySelector('#demo-card').style.setProperty('--demo-soft', colors[1]);
    document.querySelectorAll('[data-theme]').forEach(option => {
      option.setAttribute('aria-pressed', String(option === button));
    });
  });
});

const demoForm = document.querySelector('#demo-form');
const confirmation = document.querySelector('#demo-confirmation');
demoForm.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(demoForm);
  document.querySelector('#confirmation-detail').textContent = `${data.get('visit')} · ${data.get('time')}`;
  demoForm.hidden = true;
  confirmation.hidden = false;
  document.querySelector('#demo-reset').focus();
});
document.querySelector('#demo-reset').addEventListener('click', () => {
  confirmation.hidden = true;
  demoForm.hidden = false;
  demoForm.querySelector('input:checked').focus();
});

const projects = {
  'design-system': {
    category: 'Design systems · Associate Software Development Engineer',
    title: 'One design language. Reusable building blocks.',
    intro: 'A shared UI foundation for consistent product experiences across devices.',
    contribution: ['Created and deployed a custom Design Language System.', 'Configured themes and published a private, reusable component library.', 'Built frontend components with scalability and testability in mind.'],
    outcome: '3× improvement in development productivity',
    context: 'The component library helped teams deliver consistent interfaces across multiple devices.',
    tags: ['Component architecture', 'Theming', 'Reusable UI', 'Testability'],
  },
  eclinic: {
    category: 'Performance & architecture · Software Development Engineer Intern',
    title: 'Making EClinic faster and more capable.',
    intro: 'A clinic platform supporting multiple tenants and domains, with performance and progressive web capabilities.',
    contribution: ['Built multi-tenant, multi-domain architecture with Next.js SSR, Cloudflare, and NGINX.', 'Supported dynamic SSL, tenant routing, and scalable deployments.', 'Added service workers, offline caching, and Web Push Notifications.', 'Improved SEO and Core Web Vitals through lazy loading, compression, and other performance optimizations.'],
    outcome: 'Lighthouse scores: 60–65 → 95–100',
    context: 'The work brought stronger page performance alongside real-time updates and offline caching.',
    tags: ['Next.js SSR', 'Core Web Vitals', 'PWA', 'Cloudflare', 'NGINX'],
  },
  'lab-booking': {
    category: 'Product engineering · Software Development Engineer',
    title: 'Lab booking, in one journey.',
    intro: 'A single-page portal supporting both assisted and self-service lab bookings for doctors and MLT agents.',
    contribution: ['Engineered the Assisted/Self Lab Booking Portal.', 'Brought the booking journey into a single-page experience for the doctors and MLT agents team.'],
    outcome: '12–15% of total bookings',
    context: 'The portal supports the doctors and MLT agents team across assisted and self-service bookings.',
    tags: ['Booking workflows', 'Single-page experience', 'Healthcare'],
  },
  caching: {
    category: 'Performance engineering · Associate Software Development Engineer',
    title: 'Less fetching. More efficiency.',
    intro: 'Reducing API request volume while improving SEO and page performance.',
    contribution: ['Implemented strategic caching to reduce repeated API requests.', 'Used Next.js Incremental Static Regeneration (ISR) as part of the page-performance and SEO work.'],
    outcome: 'API calls: 120,000 → 15,000',
    context: 'Over 87% fewer API calls through caching and incremental page regeneration.',
    tags: ['Next.js', 'ISR', 'Caching', 'SEO', 'Performance'],
  },
};

const projectDialog = document.querySelector('#project-dialog');
let projectTrigger;
function addElement(parent, tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  parent.append(element);
  return element;
}
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const project = projects[button.dataset.project];
    if (!project) return;
    projectTrigger = button;
    const container = document.querySelector('#dialog-content');
    container.replaceChildren();
    addElement(container, 'p', 'section-context', project.category);
    const title = addElement(container, 'h2', 'dialog-title', project.title);
    title.id = 'dialog-title';
    addElement(container, 'p', 'dialog-intro', project.intro);
    const contribution = addElement(container, 'section', 'dialog-section');
    addElement(contribution, 'h3', '', 'My contribution');
    const list = addElement(contribution, 'ul');
    project.contribution.forEach(item => addElement(list, 'li', '', item));
    const outcome = addElement(container, 'section', 'dialog-section');
    addElement(outcome, 'h3', '', 'The outcome');
    addElement(outcome, 'div', 'dialog-metric', project.outcome);
    addElement(outcome, 'p', '', project.context);
    const tags = addElement(container, 'div', 'tag-list');
    project.tags.forEach(tag => addElement(tags, 'span', '', tag));
    addElement(container, 'p', 'dialog-note', 'Portfolio visuals are independent interface concepts, not screenshots of internal products.');
    projectDialog.showModal();
    document.body.style.overflow = 'hidden';
  });
});
document.querySelector('.dialog-close').addEventListener('click', () => projectDialog.close());
projectDialog.addEventListener('click', event => {
  if (event.target !== projectDialog) return;
  const rect = projectDialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) projectDialog.close();
});
projectDialog.addEventListener('close', () => {
  document.body.style.overflow = '';
  projectTrigger?.focus();
});
