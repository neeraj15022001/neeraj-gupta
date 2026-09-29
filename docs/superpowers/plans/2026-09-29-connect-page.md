# Connect with Me Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add one accessible contact page where visitors compose a WhatsApp or email message, and route every “Let’s Talk” navigation link to it.

**Architecture:** Keep the portfolio static and dependency-free. Put URL construction in a pure ES module with Node built-in tests; use a small browser script for tab interaction, form validation, keyboard navigation, and handoff. Add one styled route and themed NG assets, update three links, then refresh all three recurring showcases before publishing.

**Tech Stack:** HTML, CSS, browser ES modules, Node.js `node:test`, Python HTTP server, Playwright CLI.

---

## File map

- Create `outputs/portfolio/connect-links.mjs`: validates and builds WhatsApp and `mailto:` URLs; no DOM access.
- Create `outputs/portfolio/tests/connect-links.test.mjs`: tests URL targets, encoding, trimming, and empty-message rejection using Node’s built-in runner.
- Create `outputs/portfolio/connect.html`: accessible tab panels and contact composers.
- Create `outputs/portfolio/connect.css`: responsive WhatsApp/Gmail-inspired presentation, progress bar, focus states, and reduced-motion treatment.
- Create `outputs/portfolio/connect.js`: tab keyboard behavior, form validation, and navigation to helper-generated handoff URLs.
- Create `outputs/portfolio/assets/monogram-connect.svg` and `favicon-connect.svg`: shared NG artwork in green contact-page colors.
- Modify `outputs/portfolio/index.html`, `github.html`, and `corporate/index.html`: point “Let’s Talk” links to the new route.
- Modify `outputs/portfolio/README.md` and the six Markdown files in `memory-bank/`: document route, test command, architecture, and current completion state.

## Task 1: Add tested contact URL builders

**Files:**
- Create: `tests/connect-links.test.mjs`
- Create: `connect-links.mjs`

- [ ] **Step 1: Write failing URL tests**

Create `tests/connect-links.test.mjs`:

```js
import assert from 'node:assert/strict';
import test from 'node:test';
import { buildMailtoUrl, buildWhatsAppUrl } from '../connect-links.mjs';

test('buildWhatsAppUrl trims and URL-encodes message', () => {
  assert.equal(
    buildWhatsAppUrl('  Hello & welcome!  '),
    'https://wa.me/918847624755?text=Hello%20%26%20welcome!'
  );
});

test('buildWhatsAppUrl rejects blank messages', () => {
  assert.throws(() => buildWhatsAppUrl('  \n '), { message: 'Message is required.' });
});

test('buildMailtoUrl encodes subject and multiline body', () => {
  assert.equal(
    buildMailtoUrl(' Quick question & thanks ', 'Line 1\nLine 2 & <3 '),
    'mailto:gneeraj32595@gmail.com?subject=Quick%20question%20%26%20thanks&body=Line%201%0ALine%202%20%26%20%3C3'
  );
});

test('buildMailtoUrl omits blank subject and rejects blank body', () => {
  assert.equal(
    buildMailtoUrl('  ', ' Hello '),
    'mailto:gneeraj32595@gmail.com?body=Hello'
  );
  assert.throws(() => buildMailtoUrl('Question', '  '), { message: 'Message is required.' });
});
```

- [ ] **Step 2: Run tests and confirm failure**

Run from `outputs/portfolio/`:

```sh
node --test tests/connect-links.test.mjs
```

Expected: test command fails because `connect-links.mjs` does not exist yet.

- [ ] **Step 3: Add pure URL builders**

Create `connect-links.mjs`:

```js
export const WHATSAPP_NUMBER = '918847624755';
export const CONTACT_EMAIL = 'gneeraj32595@gmail.com';

function requiredMessage(value) {
  const message = String(value ?? '').trim();
  if (!message) throw new Error('Message is required.');
  return message;
}

export function buildWhatsAppUrl(message) {
  const text = requiredMessage(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function buildMailtoUrl(subject, message) {
  const body = requiredMessage(message);
  const cleanSubject = String(subject ?? '').trim();
  const query = [];
  if (cleanSubject) query.push(`subject=${encodeURIComponent(cleanSubject)}`);
  query.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${CONTACT_EMAIL}?${query.join('&')}`;
}
```

- [ ] **Step 4: Run URL tests and confirm pass**

Run:

```sh
node --test tests/connect-links.test.mjs
```

Expected: four tests pass. Confirm generated WhatsApp URL contains digits-only international number and email URL contains encoded subject/body.

- [ ] **Step 5: Commit helper and tests**

```sh
git add connect-links.mjs tests/connect-links.test.mjs
git commit -m "feat: add contact link builders"
```

## Task 2: Build responsive contact route

**Files:**
- Create: `connect.html`
- Create: `connect.css`
- Create: `connect.js`
- Create: `assets/monogram-connect.svg`
- Create: `assets/favicon-connect.svg`

- [ ] **Step 1: Add accessible page structure**

Create `connect.html` exactly as follows. It uses relative assets for domain-root and GitHub Pages project-path hosting:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#f5f4ef">
  <meta name="description" content="Contact Neeraj Gupta by WhatsApp or email.">
  <title>Connect with Neeraj Gupta</title>
  <link rel="icon" type="image/svg+xml" href="./assets/favicon-connect.svg">
  <link rel="stylesheet" href="./brand.css">
  <link rel="stylesheet" href="./connect.css">
  <script type="module" src="./connect.js"></script>
</head>
<body>
  <div class="scroll-progress" aria-hidden="true"><span></span></div>
  <a class="skip" href="#main">Skip to content</a>
  <main id="main" class="connect-shell">
    <header class="site-header">
      <a class="identity" href="./" aria-label="Neeraj Gupta, portfolio home">
        <img class="brand-mark" src="./assets/monogram-connect.svg" width="43" height="34" alt="">
        <span>Neeraj Gupta<small>Senior Software Engineer</small></span>
      </a>
      <a class="back" href="./">← Back to portfolio</a>
    </header>
    <section class="connect-hero" aria-labelledby="connect-title">
      <p class="eyebrow">LET’S CONNECT</p>
      <h1 id="connect-title">Have something in mind?</h1>
      <p>Choose a channel. Write a note. It will open in your app, ready to send.</p>
    </section>
    <section class="contact-card" aria-label="Contact options">
      <div class="contact-tabs" role="tablist" aria-label="Choose how to contact me">
        <button id="tab-whatsapp" type="button" role="tab" aria-selected="true"
          aria-controls="panel-whatsapp" data-tab="whatsapp" tabindex="0">WhatsApp</button>
        <button id="tab-email" type="button" role="tab" aria-selected="false"
          aria-controls="panel-email" data-tab="email" tabindex="-1">Email</button>
      </div>
      <section id="panel-whatsapp" role="tabpanel" aria-labelledby="tab-whatsapp">
        <div class="chat-window">
          <header class="chat-header">
            <img src="./assets/monogram-connect.svg" width="40" height="32" alt="">
            <div><strong>Neeraj Gupta</strong><span>WhatsApp message</span></div>
          </header>
          <div class="chat-history" aria-live="polite">
            <p class="chat-bubble">Hi! Leave me a message here.</p>
            <p class="chat-note">WhatsApp opens with your message ready to send.</p>
          </div>
          <form id="whatsapp-form" class="message-form">
            <label class="visually-hidden" for="whatsapp-message">Your WhatsApp message</label>
            <textarea id="whatsapp-message" name="message" rows="2" required
              placeholder="Write a message…"></textarea>
            <button type="submit">Continue in WhatsApp <span aria-hidden="true">↗</span></button>
          </form>
        </div>
      </section>
      <section id="panel-email" role="tabpanel" aria-labelledby="tab-email" hidden>
        <div class="email-window">
          <div class="email-title"><span class="gmail-mark" aria-hidden="true">M</span>New message</div>
          <form id="email-form" class="email-form">
            <label for="email-to">To</label>
            <input id="email-to" value="gneeraj32595@gmail.com" readonly>
            <label for="email-subject">Subject</label>
            <input id="email-subject" name="subject" autocomplete="off">
            <label for="email-message">Message</label>
            <textarea id="email-message" name="message" rows="7" required></textarea>
            <button type="submit">Open in email app <span aria-hidden="true">↗</span></button>
          </form>
        </div>
      </section>
    </section>
    <footer><span>Based in Pune, India</span><span>Choose the channel that works for you.</span></footer>
  </main>
</body>
</html>
```

- [ ] **Step 2: Add contact-page styles**

Create `connect.css` with this complete stylesheet:

```css
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Source+Serif+4:wght@400;500;600&display=swap');
:root{--paper:#f5f4ef;--ink:#202923;--muted:#68736d;--green:#16834b;--green-soft:#e7f4eb;--blue:#1a73e8;--red:#d93025;font-family:Manrope,Arial,sans-serif;color:var(--ink);background:var(--paper);font-synthesis:none}
*{box-sizing:border-box}html{scrollbar-width:none}html::-webkit-scrollbar{display:none}body{margin:0}a{color:inherit;text-decoration:none}button,input,textarea{font:inherit}button,a,input,textarea{ -webkit-tap-highlight-color:transparent}button:focus-visible,a:focus-visible,input:focus-visible,textarea:focus-visible{outline:3px solid var(--green);outline-offset:3px}
.connect-shell{width:min(1000px,calc(100% - 48px));margin:auto}.scroll-progress{position:fixed;z-index:30;inset:0 0 auto;height:3px}.scroll-progress span{display:block;width:0;height:100%;background:var(--green)}.skip{position:fixed;z-index:40;top:-80px;left:16px;padding:12px;background:white}.skip:focus{top:12px}
.site-header{height:96px;display:flex;align-items:center;justify-content:space-between}.identity{display:flex;align-items:center;gap:12px;font-weight:700}.identity small{display:block;color:var(--muted);font-size:11px;font-weight:400}.back{color:var(--muted);font-size:13px}
.connect-hero{padding:42px 0 30px}.eyebrow{color:var(--green);font-size:11px;font-weight:700;letter-spacing:.14em}.connect-hero h1{max-width:760px;margin:18px 0;font:500 clamp(44px,7vw,76px)/1.02 'Source Serif 4',Georgia,serif;letter-spacing:-.055em}.connect-hero p:last-child{color:var(--muted);font-size:15px}
.contact-card{max-width:760px;margin:12px auto 64px}.contact-tabs{display:flex;gap:8px;border-bottom:1px solid #d9ded8}.contact-tabs [role=tab]{position:relative;border:0;background:transparent;padding:15px 20px;color:var(--muted);font-weight:600;cursor:pointer}.contact-tabs [aria-selected=true]{color:var(--green)}.contact-tabs [aria-selected=true]::after{position:absolute;right:12px;bottom:-1px;left:12px;height:3px;border-radius:3px;background:var(--green);content:''}.contact-tabs [data-tab=email][aria-selected=true]{color:var(--blue)}.contact-tabs [data-tab=email][aria-selected=true]::after{background:var(--blue)}[role=tabpanel][hidden]{display:none}
.chat-window,.email-window{overflow:hidden;border:1px solid #dce2dc;border-radius:14px;background:white;box-shadow:0 20px 55px #18362112}.chat-window{margin-top:20px;background:#efe9df}.chat-header{display:flex;align-items:center;gap:12px;padding:15px 20px;background:#f9fffb;border-bottom:1px solid #dce5dc}.chat-header strong,.chat-header span{display:block}.chat-header span{margin-top:3px;color:var(--muted);font-size:11px}.chat-history{min-height:180px;padding:24px;background-color:#e8e4d9;background-image:radial-gradient(#d4d0c5 0.6px,transparent .6px);background-size:10px 10px}.chat-bubble{width:fit-content;max-width:min(420px,90%);margin:0;padding:13px 16px;border-radius:4px 16px 16px;background:white;box-shadow:0 2px 2px #0000000b;font-size:14px}.chat-note{margin:14px 0 0;color:#758078;font-size:11px}.message-form{display:flex;align-items:end;gap:12px;padding:14px;background:#f8fbf8}.message-form textarea,.email-form textarea,.email-form input{width:100%;border:0;border-bottom:1px solid #d5ddd7;background:transparent;padding:12px 10px;color:var(--ink);resize:vertical}.message-form textarea{min-height:48px;max-height:180px;border:1px solid #d8e1da;border-radius:9px;background:white}.message-form button,.email-form button{flex:none;border:0;border-radius:999px;padding:12px 18px;background:var(--green);color:white;font-weight:700;cursor:pointer}.message-form button:hover{background:#11683c}
.email-window{margin-top:20px}.email-title{display:flex;align-items:center;gap:12px;padding:15px 20px;background:#f2f6fc;font-weight:600}.gmail-mark{color:var(--red);font-size:22px;font-weight:800}.email-form{display:grid;grid-template-columns:70px minmax(0,1fr);align-items:center;padding:12px 20px 20px}.email-form label{align-self:center;color:var(--muted);font-size:12px}.email-form input,.email-form textarea{grid-column:2}.email-form textarea{min-height:150px;border-bottom:0}.email-form input[readonly]{color:#626d77}.email-form button{grid-column:2;justify-self:start;margin-top:12px;background:var(--blue)}.email-form button:hover{background:#1558b0}.visually-hidden{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap}
footer{display:flex;justify-content:space-between;gap:18px;border-top:1px solid #d9ded8;padding:22px 0 28px;color:var(--muted);font-size:11px}main{animation:page-enter .8s ease-out backwards}@media(max-width:600px){.connect-shell{width:calc(100% - 36px)}.site-header{height:80px}.connect-hero{padding:32px 0 20px}.connect-hero h1{font-size:clamp(42px,12vw,60px)}.contact-card{margin-bottom:42px}.message-form{align-items:stretch;flex-direction:column}.message-form button{align-self:flex-end}.email-form{grid-template-columns:54px minmax(0,1fr);padding:10px 14px 16px}.chat-history{min-height:150px;padding:18px}footer{flex-direction:column;gap:9px}}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important}}
```

- [ ] **Step 3: Add tab, validation, handoff, and progress behavior**

Create `connect.js`:

```js
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
```

Run `node --check connect.js` and `node --test tests/connect-links.test.mjs`; both must pass.

- [ ] **Step 4: Add themed NG SVG assets**

Run this exact asset-copy script from `outputs/portfolio/`:

```sh
python3 -c "from pathlib import Path; pairs=[('assets/monogram-blog.svg','assets/monogram-connect.svg'),('assets/favicon-blog.svg','assets/favicon-connect.svg')]; [Path(dst).write_text(Path(src).read_text().replace('#1a8917','#16834b')) for src,dst in pairs]"
python3 -c "import xml.etree.ElementTree as ET; from pathlib import Path; paths=['assets/monogram-connect.svg','assets/favicon-connect.svg']; [ET.parse(Path(path)) for path in paths]; print('Both connect SVG assets parse.')"
```

- [ ] **Step 5: Commit the contact route**

```sh
git add connect.html connect.css connect.js connect-links.mjs assets/monogram-connect.svg assets/favicon-connect.svg tests/connect-links.test.mjs
git commit -m "feat: add WhatsApp and email contact page"
```

## Task 3: Route “Let’s Talk” links and update project docs

**Files:**
- Modify: `index.html`
- Modify: `github.html`
- Modify: `corporate/index.html`
- Modify: `README.md`
- Modify: all six files in `memory-bank/`

- [ ] **Step 1: Update all labeled navigation links**

Change only these existing anchors:

```html
<!-- index.html -->
<a class="contact" href="./connect.html">Let’s talk ↗</a>

<!-- github.html -->
<a class="nav-contact" href="./connect.html">Let’s talk <span aria-hidden="true">↗</span></a>

<!-- corporate/index.html -->
<a class="nav-contact" href="../connect.html">Let’s talk <span aria-hidden="true">↗</span></a>
```

Keep the corporate contact section’s visible email-address link as `mailto:gneeraj32595@gmail.com`.

- [ ] **Step 2: Document route and recurring workflow**

Add `connect.html` and `connect-links.mjs` to README page/tool descriptions. Add `node --test tests/connect-links.test.mjs` to local verification instructions. In `projectbrief.md`, `productContext.md`, `activeContext.md`, `systemPatterns.md`, `techContext.md`, and `progress.md`, record the route, static handoff behavior, no-storage choice, tests, and final deployment state. Keep memory outside repository; do not create a duplicate bank.

- [ ] **Step 3: Commit navigation and docs**

```sh
git add index.html github.html corporate/index.html README.md
git commit -m "feat: route contact navigation to connect page"
```

Update six memory-bank files separately; the bank lives outside this Git repository and is not staged in this commit.

## Task 4: Verify UI, refresh showcases, and publish

**Files:**
- Verify: all routes and `tests/connect-links.test.mjs`
- Refresh if stale: `github.html`, `youtube.html`, `blog.html`

- [ ] **Step 1: Run automated checks**

Run from `outputs/portfolio/`:

```sh
node --test tests/connect-links.test.mjs
node --check connect.js
git diff --check
```

Expected: four tests pass; syntax and whitespace checks pass.

- [ ] **Step 2: Run local browser checks**

Start the server in one terminal:

```sh
python3 -m http.server 4173
```

In another terminal:

```sh
/Users/neerajgupta/.codex/skills/playwright/scripts/playwright_cli.sh open http://127.0.0.1:4173/connect.html
/Users/neerajgupta/.codex/skills/playwright/scripts/playwright_cli.sh snapshot
/Users/neerajgupta/.codex/skills/playwright/scripts/playwright_cli.sh eval '() => ({selected: document.querySelector("#tab-whatsapp").getAttribute("aria-selected"), emailHidden: document.querySelector("#panel-email").hidden})'
/Users/neerajgupta/.codex/skills/playwright/scripts/playwright_cli.sh eval '() => { document.querySelector("#tab-email").click(); return {selected: document.querySelector("#tab-email").getAttribute("aria-selected"), whatsappHidden: document.querySelector("#panel-whatsapp").hidden}; }'
/Users/neerajgupta/.codex/skills/playwright/scripts/playwright_cli.sh eval 'async () => { const links = await import("./connect-links.mjs"); return {whatsapp: links.buildWhatsAppUrl(" Hello & thanks "), mailto: links.buildMailtoUrl(" Quick question ", "Line 1\nLine 2")}; }'
```

Expected: initially `selected: "true"` and `emailHidden: true`; after click `selected: "true"` and `whatsappHidden: true`; URL results are `https://wa.me/918847624755?text=Hello%20%26%20thanks` and `mailto:gneeraj32595@gmail.com?subject=Quick%20question&body=Line%201%0ALine%202`.

Use `resize 390 844` and `resize 1280 900`, then evaluate `document.documentElement.scrollWidth === document.documentElement.clientWidth`; both must be true. Test arrow-key tab movement after focusing `#tab-whatsapp`. Submit whitespace-only message and confirm browser validation prevents handoff. Run `set-reduced-motion reduce`, reload, and confirm `getComputedStyle(document.querySelector("main")).animationDuration` is `0s`. Check each “Let’s Talk” href on landing, GitHub, and corporate pages resolves to `/connect.html` under the correct relative path.

- [ ] **Step 3: Refresh all recurring showcases from live sources**

Refresh even if contact implementation does not affect them:

- Dev.to: GET `https://dev.to/api/articles?username=neeraj15022001&per_page=6`; retain newest authored six, exact titles/tags/dates/links.
- GitHub: page through `https://api.github.com/users/neeraj15022001/repos?per_page=100&page=<n>&sort=pushed`; exclude forks, private repos, `Neeraj15022001`, and `neeraj-gupta`; retain newest six eligible projects.
- YouTube: fetch official Atom feed at `https://www.youtube.com/feeds/videos.xml?channel_id=UCPd7f1lvH47fAUqfvfB24mQ`; retain newest six entries.

Update showcase pages only where live source data differs. Record source date and validation in `activeContext.md` and `progress.md`.

- [ ] **Step 4: Verify production routes and push**

```sh
git status --short
git push github main
gh api repos/neeraj15022001/neeraj-gupta/pages/builds/latest --jq .status
```

Repeat the last command until output is `built`. Check all public routes:

```sh
python3 - <<'PY'
import urllib.request
base = 'https://neeraj15022001.github.io/neeraj-gupta/'
for route in ['', 'connect.html', 'corporate/', 'github.html', 'youtube.html', 'blog.html']:
    with urllib.request.urlopen(base + route, timeout=20) as response:
        assert response.status == 200, route
        print(response.status, route or '/')
PY
git status --short
```

Expected: six `200` results and no output from final `git status --short`.

## Self-review

- Spec coverage: new route, tabs, keyboard navigation, input validation, WhatsApp handoff, email handoff, brand, responsiveness, reduced motion, all “Let’s Talk” links, no persistence, docs, showcases, and GitHub Pages validation each appear in a task.
- Placeholder scan: no TODO, TBD, or unfinished implementation steps.
- Interface consistency: URL helpers trim messages and encode values; forms validate the same fields before navigation; tab IDs and panel IDs match; phone and email destinations match approved spec.
