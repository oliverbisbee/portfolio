# Currently Working On
Working links to projects (2 more to go)

Images for Projects (2 more to go)

# Portfolio Website

A modern, responsive portfolio website built with Next.js and TypeScript. This site showcases my projects, experience, and skills as a Computer Science student at the University of Toronto.

🔗 **Live Site:** [oliverbisbeeportfolio.vercel.app](https://oliverbisbeeportfolio.vercel.app/)

## About

This portfolio serves as a central hub for my work and experience in software development. Currently focused on full-stack development with growing interests in data science and machine learning.

## Features

- **Responsive Design** - Optimized for all device sizes
- **Modern UI** - Built with Tailwind CSS for a clean, professional aesthetic
- **Project Showcase** - Detailed case studies of my development work
- **Interactive Resume** - Downloadable resume with work experience and education
- **Contact Form** - Easy way to get in touch
- **Fast Performance** - Optimized with Next.js App Router and server components

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Deployment:** [Vercel](https://vercel.com/)
- **Icons & Assets:** SVG components

## Project Structure

```
my-portfolio/
├── app/
│   ├── components/      # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── Resume.tsx
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── public/
│   └── images/          # Static assets
└── ...config files
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository
```bash
git https://github.com/oliverbisbee/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development

The project uses Next.js 14 with the App Router. Key files:

- `app/page.tsx` - Main landing page
- `app/layout.tsx` - Root layout with global configuration
- `app/components/` - Reusable React components
- `app/globals.css` - Global styles and Tailwind directives

### Building for Production

```bash
npm run build
npm start
```

## Deployment

This site is deployed on Vercel. Any push to the main branch automatically triggers a new deployment.

To deploy your own instance:
1. Fork this repository
2. Import to [Vercel](https://vercel.com/new)
3. Deploy with zero configuration

## Contact

**YOUR_NAME** - Computer Science Student @ University of Toronto

- Email: oli.bisbee+portfolio@gmail.com
- LinkedIn: [linkedin.com/in/oliver-bisbee](https://linkedin.com/in/oliver-bisbee)
- GitHub: [@OliverBisbee](https://github.com/OliverBisbee)
