# Mr. Tok

Full-stack developer portfolio built with **Next.js 15** and deployed on **Vercel**. Features live GitHub integration, smooth animations, and a fully responsive design.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** SCSS Modules
- **Animations:** AOS (Animate on Scroll)
- **Icons:** Font Awesome
- **Data Source:** GitHub REST API (repos, languages, READMEs)
- **Deployment:** Vercel

## Features

- Live GitHub repository integration — projects auto-populate from the `tahaalkadi58` account
- Filterable project cards grouped by type (web, mobile, game, etc.)
- Smooth scroll navigation with active section tracking
- Animated typing effect on the hero section
- Fully responsive layout for all screen sizes
- Testimonials carousel
- Contact form

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |

## Project Structure

```
├── app/                # App Router pages & layout
├── lib/
│   ├── contexts/       # React contexts (GitHub repos)
│   ├── fetchs/         # Data fetching utilities
│   ├── types/          # TypeScript type definitions
│   ├── utils/          # Helper functions (dates, scroll, etc.)
│   └── wrappers/       # Provider wrappers
├── public/
│   └── photos/         # Static images
└── ui/
    └── Home/
        ├── about-me/
        ├── contact-us/
        ├── hero/
        ├── navigation/
        ├── our-works/  # Project cards section
        ├── services/
        └── testimonials/
```

## Deployment

The site is deployed on Vercel. Pushes to the `main` branch trigger automatic deployments.

## Author

**Taha Alkadi**
