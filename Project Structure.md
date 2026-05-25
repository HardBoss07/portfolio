# Project Structure

```
portfolio/
├── app/
│   ├── [slug]/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── legal/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── UI/
│   │   └── ProjectButton.tsx
│   ├── contact/
│   │   ├── ContactIcon.tsx
│   │   └── ContactItem.tsx
│   ├── cookie-consent/
│   │   ├── BannerActionButtons.tsx
│   │   ├── BannerOverlay.tsx
│   │   ├── ClientConsentWrapper.tsx
│   │   ├── CookieConsent.tsx
│   │   ├── PreferenceToggle.tsx
│   │   └── VercelAnalytics.tsx
│   ├── legal/
│   │   ├── LegalLayout.tsx
│   │   ├── LegalSection.tsx
│   │   └── LegalTabs.tsx
│   ├── project/
│   │   ├── Code.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectTemplate.tsx
│   │   ├── ProjectVideo.tsx
│   │   └── YoutubeWrapper.tsx
│   ├── Experience.tsx
│   ├── Featured.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── Technologies.tsx
├── content/
│   └── projects/
│       ├── asm-tic-tac-toe.mdx
│       ├── auto-ocr.mdx
│       ├── cord-path.mdx
│       ├── css-valentines-card.mdx
│       ├── java-calculator.mdx
│       ├── java-jokemon.mdx
│       ├── java-to-do-list.mdx
│       ├── project-structure.mdx
│       ├── rust-snake.mdx
│       ├── serverless-runner.mdx
│       ├── tauri-resource-monitor.mdx
│       ├── ts-barcode.mdx
│       ├── ts-client-portfolio.mdx
│       └── wordle-bot.mdx
├── hooks/
│   └── useConsent.ts
├── lib/
│   ├── consts.ts
│   ├── legal-content.ts
│   ├── projects.ts
│   ├── seo_metadata.ts
│   └── technologies.ts
├── public/
│   └── assets/
│       └── images/
│           ├── headshot.png
│           └── java-jokemon.png
├── styles/
│   ├── components.css
│   ├── layout.css
│   ├── typography.css
│   └── variables.css
├── types/
│   └── project.ts
├── LICENSE
├── Project Structure.md
├── README.md
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```
