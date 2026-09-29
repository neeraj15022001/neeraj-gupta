const projects = {
  "ai-gateway": {
    "category": "AI platforms · Senior Software Engineer",
    "title": "One gateway for organization-wide AI.",
    "intro": "A shared AI gateway built on LiteLLM, giving teams a central place to manage model access, usage, and budgets.",
    "contribution": [
      "Started the implementation independently by self-deploying and extending the open-source LiteLLM project, then moved into a leading role.",
      "Led frontend architecture and UI, implementing role-based access control and Microsoft SSO.",
      "Led a direct report who delivered Gemini real-time support and batch request handling; continued resolving issues and extending the platform as requirements evolved."
    ],
    "outcome": "8M+ requests per month",
    "context": "The gateway managed approximately $10,000 in monthly AI spend across the organization.",
    "tags": [
      "LiteLLM",
      "Frontend architecture",
      "RBAC",
      "Microsoft SSO",
      "AI integrations"
    ]
  },
  "legacy-migration": {
    "category": "Architecture & team leadership · Senior Software Engineer",
    "title": "Three legacy portals. A modern frontend.",
    "intro": "Three internal Vidal Health portals had been built in .NET 12–15 years earlier, with a shrinking pool of maintainers.",
    "contribution": [
      "Led discovery of existing flows, features, and business rules before defining the migration architecture and technology choices.",
      "Directed two developers in migrating the frontend to React and Next.js, using AI-assisted coding.",
      "Owned stakeholder communication, architecture, and technical decisions throughout the development phase."
    ],
    "outcome": "3 portals · 2 developers · 2 weeks",
    "context": "The team completed the development phase for all three portal migrations in two weeks.",
    "tags": [
      "React",
      "Next.js",
      "Legacy modernization",
      "Architecture",
      "Team leadership"
    ]
  },
  "id-verification": {
    "category": "Workflow automation · Senior Software Engineer",
    "title": "Quarterly ID audits without the spreadsheet chase.",
    "intro": "The IT team previously exported shared-ID owners, emailed them individually, collected replies, and manually consolidated quarterly audit decisions.",
    "contribution": [
      "Designed and built a React portal independently in about one week with AI-assisted development.",
      "Enabled owners to confirm whether generic/shared IDs should be extended or closed.",
      "Automated the administrative collection and consolidation work behind the quarterly verification process."
    ],
    "outcome": "~15 days → 1–2 minutes",
    "context": "Automated quarterly verification processing replaced roughly 15 days of administrative effort with 1–2 minutes of processing.",
    "tags": [
      "React",
      "Workflow automation",
      "Internal tooling",
      "AI-assisted development"
    ]
  },
  "rule-engine": {
    "category": "Platform UX · Senior Software Engineer",
    "title": "Making business rules easier to manage.",
    "intro": "A centralized platform lets applications execute shared business rules through APIs instead of embedding all logic within each application.",
    "contribution": [
      "Rebuilt the existing platform UI from scratch to clarify journey execution, configuration, and expected outputs.",
      "Worked with product management and platform users to incorporate direct feedback.",
      "Added AI-assisted interactions, including conversational creation of new rules."
    ],
    "outcome": "Clearer configuration and rule creation",
    "context": "My scope covered the interface and specific platform features, rather than building the entire business rule engine.",
    "tags": [
      "Platform UX",
      "Business rules",
      "AI-assisted interfaces",
      "Product collaboration"
    ]
  },
  "lab-booking": {
    "category": "Product engineering · Software Development Engineer",
    "title": "A faster lab-booking journey for doctors.",
    "intro": "DRX Labs is a B2B booking platform that lets doctors book tests for patients, including use of eligible patients’ cashless wallets.",
    "contribution": [
      "Built the React, Next.js, and TypeScript booking experience with Module Federation microfrontend architecture.",
      "Used optimistic updates, server-state management, and client-side caching to reduce waiting during the booking flow.",
      "Supported assisted and self-service journeys for doctors and MLT agents."
    ],
    "outcome": "10,000+ monthly bookings · 75% less booking time",
    "context": "Average booking time fell by 75%. The single-page journey accounted for 12–15% of total bookings.",
    "tags": [
      "React",
      "Next.js",
      "TypeScript",
      "Module Federation",
      "Optimistic updates"
    ]
  },
  "call-pulse": {
    "category": "AI analytics · Software Development Engineer",
    "title": "Turning calls into useful context.",
    "intro": "Call Pulse analyzes incoming calls to provide agent insights and context for follow-up conversations. An early proof of concept was later revived in 2025.",
    "contribution": [
      "Architected the React dashboard for transcription, sentiment analysis, and call insights.",
      "Integrated real-time speech transcription and sentiment metrics into the agent-facing experience."
    ],
    "outcome": "50,000+ calls analyzed per month",
    "context": "Sentiment precision was approximately 90%, verified through manual review.",
    "tags": [
      "React",
      "AI analytics",
      "Speech transcription",
      "Sentiment analysis"
    ]
  },
  "design-system": {
    "category": "Design systems · Associate Software Development Engineer",
    "title": "A shared design language, delivered in three weeks.",
    "intro": "Following a company rebrand, DRX needed a consistent component foundation under a tight delivery deadline.",
    "contribution": [
      "Extended Tamagui instead of building every component from scratch to meet the three-week deadline.",
      "Configured design tokens for brand colors, spacing, border radii, and other interface foundations.",
      "Worked with open-source maintainers and fixed token-related issues to ship DLS v1 for DRX."
    ],
    "outcome": "3× frontend development productivity",
    "context": "A tokenized, reusable component library helped teams build consistent interfaces. Related DRX work refactored high-traffic appointment and consultation modules and integrated analytics.",
    "tags": [
      "Tamagui",
      "Design tokens",
      "Component architecture",
      "Open source",
      "Reusable UI"
    ]
  },
  "eclinic": {
    "category": "Performance & architecture · Software Development Engineer Intern",
    "title": "A clinic platform with a tenant-aware foundation.",
    "intro": "A white-label clinic platform lets doctors use their own branding, custom domain, or free-tier subdomain within a shared application.",
    "contribution": [
      "Solo-built tenant routing using Next.js middleware to detect the domain, fetch doctor details, and render the matching clinic view.",
      "Combined Nginx, Cloudflare, and dynamic SSL certificates for custom-domain support.",
      "Added PWA capabilities, service workers, offline booking-history access, and Web Push Notifications.",
      "Used Webpack Bundle Analyzer and tree shaking to reduce bundle size by 30–35%; improved performance with server-rendered page caching and Redis.",
      "Refactored booking forms with React Hook Form, Zod, and React Query, reducing duplicate code by 40% and increasing booking conversion by 35%."
    ],
    "outcome": "30–35% smaller bundles · Lighthouse 95–100",
    "context": "Performance work covered Core Web Vitals, SEO, caching, and delivery of a lighter clinic experience.",
    "tags": [
      "Next.js",
      "Multi-tenancy",
      "PWA",
      "Webpack",
      "Redis",
      "Core Web Vitals"
    ]
  },
  "caching": {
    "category": "Performance engineering · Associate Software Development Engineer",
    "title": "Less fetching. More efficiency.",
    "intro": "Reducing repeated backend requests while improving page performance and SEO.",
    "contribution": [
      "Implemented Next.js Incremental Static Regeneration for page delivery.",
      "Used Redis page/data caching to reduce unnecessary requests to backend services."
    ],
    "outcome": "API calls: 120,000 → 15,000",
    "context": "Over 87% fewer backend API calls through caching and incremental regeneration.",
    "tags": [
      "Next.js",
      "ISR",
      "Redis",
      "Caching",
      "SEO"
    ]
  },
  "opd-claims": {
    "category": "AI workflow integration · Software Development Engineer",
    "title": "Supporting high-volume OPD claims workflows.",
    "intro": "A claims-processing pipeline for Rajasthan state government OPD health claims, governed by defined thresholds and operating procedures.",
    "contribution": [
      "Built frontend and processing-pipeline components for the claims workflow.",
      "Integrated LLM-based approval and rejection logic within the prescribed process."
    ],
    "outcome": "Pipeline scale: 1–2M claims per hour",
    "context": "Contributed frontend and processing components to the broader claims pipeline operating at this scale.",
    "tags": [
      "LLM integration",
      "Claims workflows",
      "Frontend engineering",
      "Processing pipelines"
    ]
  }
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

const githubShowcase = document.createElement('section');
githubShowcase.className = 'github-section wrap';
githubShowcase.id = 'github';
githubShowcase.setAttribute('aria-labelledby', 'github-title');
githubShowcase.innerHTML = `<div class="github-heading"><div><p class="section-context">Public work on GitHub</p><h2 id="github-title">Built in public.</h2></div><a class="github-profile-link" href="https://github.com/neeraj15022001" target="_blank" rel="noopener noreferrer">View GitHub profile ↗</a></div><p class="github-intro">Projects with latest activity more than four days ago, selected from my public repositories.</p><div class="github-grid"><a class="github-card" href="https://github.com/neeraj15022001/watchparty-app" target="_blank" rel="noopener noreferrer"><div class="repo-top"><span class="repo-mark">◉</span><span class="repo-language js-dot">JavaScript</span></div><h3>watchparty-app</h3><p>Watch together, with a focused frontend experience for shared playback.</p><div class="repo-meta"><span>Activity · 14 days ago</span><span>GitHub ↗</span></div></a><a class="github-card" href="https://github.com/neeraj15022001/DeskOrbit" target="_blank" rel="noopener noreferrer"><div class="repo-top"><span class="repo-mark">◉</span><span class="repo-language swift-dot">Swift</span></div><h3>DeskOrbit</h3><p>A macOS desktop experiment exploring fast, native interaction patterns.</p><div class="repo-meta"><span>Activity · 14 days ago</span><span>GitHub ↗</span></div></a><a class="github-card" href="https://github.com/neeraj15022001/create-api-launch" target="_blank" rel="noopener noreferrer"><div class="repo-top"><span class="repo-mark">◉</span><span class="repo-language ts-dot">TypeScript</span></div><h3>create-api-launch</h3><p>A developer tool for getting API projects from idea to launch.</p><div class="repo-meta"><span>Activity · 23 days ago</span><span>GitHub ↗</span></div></a></div>`;
document.querySelector('#about').before(githubShowcase);
