# Connect with Me Page Design

**Status:** Approved direction; awaiting spec review before implementation  
**Date:** 2026-09-29

## Goal

Give visitors one place to choose WhatsApp or email and compose a message. Route every portfolio link labeled “Let’s Talk” to this page.

## Page and navigation

Add `connect.html` at the repository root. Use existing relative paths so the page works at both the domain root and the GitHub Pages project path. Reuse the themed NG monogram, favicon pattern, hidden scrollbar, top scroll progress, and shared 0.8-second entrance animation with reduced-motion support. Provide a clear link back to the portfolio landing page.

Update the “Let’s Talk” links on the landing, GitHub, and corporate pages to point to `connect.html` using each page’s correct relative path. Keep the corporate page’s explicit email-address link as a direct `mailto:` action.

## Contact interface

Show two accessible tabs: **WhatsApp** and **Email**. WhatsApp is selected by default. Use semantic buttons with tab roles, selected state, keyboard navigation, and linked tab panels. On narrow screens, keep tabs and composer usable without horizontal scrolling.

The WhatsApp panel presents a restrained chat-inspired composer with a message field and send action. Reject empty or whitespace-only messages. On submit, navigate to `https://wa.me/918847624755?text=<encoded-message>`. WhatsApp click-to-chat requires the full international number without `+`, punctuation, or separators; its official help page documents this format: <https://faq.whatsapp.com/5913398998672934>. The message appears prefilled in WhatsApp for the visitor to send.

The Email panel presents a Gmail-inspired compose form. Keep recipient fixed to `gneeraj32595@gmail.com`; provide subject and message fields. On submit, navigate to a `mailto:` URL with URL-encoded subject and body. The visitor’s configured mail app completes delivery.

## Privacy and behavior

No backend, analytics, persistence, or message storage. Form submission only hands the visitor’s text to the selected external app. Do not claim that a message was sent by the website.

## Visual direction

Use the portfolio’s editorial spacing and hero alignment. Keep the overall frame neutral and page-specific accents clear: WhatsApp green in its tab and chat surface; Gmail-inspired blue/red accents in its compose surface. Avoid copying third-party logos or implying either service is embedded. Make the contact preview visibly an interface simulation.

## Validation

- Check tab switching, selected state, keyboard access, and hidden inactive panel.
- Check empty-message validation and URL encoding for WhatsApp text, email subject, and email body.
- Confirm targets retain exact phone and email destinations.
- Check desktop and 390px mobile layouts, no horizontal overflow, visible focus, progress indicator, shared page animation, and reduced-motion behavior.
- Run local HTTP server and browser-check `/connect.html` plus landing, GitHub, and corporate “Let’s Talk” navigation.
- Verify relative paths under the GitHub Pages project prefix.

## Scope

This design adds one static contact route and updates three existing navigation links. It does not add a server, email API, direct WhatsApp sending, form persistence, or changes to the existing corporate email-address link.
