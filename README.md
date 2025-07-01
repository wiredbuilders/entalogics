# Entalogics Website - Next.js + TypeScript

A modern, responsive website for Entalogics, a full-stack development agency. Built with Next.js, **TypeScript**, React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional design with glass morphism effects
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Responsive**: Fully responsive design that works on all devices
- **Animations**: Smooth animations powered by Framer Motion
- **Performance**: Optimized with Next.js for fast loading
- **SEO Ready**: Built with Next.js for better SEO
- **Type Safety**: All components and pages are written in TypeScript (`.tsx`/`.ts`), providing static type checking and safer code

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: Next.js App Router

## 📁 Project Structure

```
ada/
├── pages/                    # Next.js pages (.tsx)
│   ├── _app.tsx              # App wrapper with theme provider
│   ├── index.tsx             # Homepage
│   ├── services/             # Service pages
│   │   └── [serviceSlug].tsx # Dynamic service routes
│   └── case-studies/         # Case study pages
│       └── ecommerce-redesign.tsx
├── src/
│   ├── components/           # React components (.tsx)
│   ├── context/              # React context (ThemeProvider, .ts)
│   ├── data/                 # Static data (.ts)
├── public/                   # Static files
├── index.css                 # Global styles
├── tailwind.config.js        # Tailwind configuration
├── next.config.js            # Next.js configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ada
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors
The brand color is `#512feb` (rgb(81, 47, 235)) and is used throughout the site for buttons, links, and accents.

### Components
All components are located in `src/components/` and are now written in TypeScript (`.tsx`).

### Data
Service data is managed in `src/data/servicesData.ts` and can be easily updated.

## 📱 Mobile Responsiveness

The site is fully responsive and optimized for:
- Mobile phones (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🌙 Dark Mode

The site includes a built-in dark/light mode toggle that:
- Persists user preference
- Provides smooth transitions
- Maintains accessibility
- Works across all components

## 🔧 Configuration

### Tailwind CSS
Tailwind configuration is in `tailwind.config.js` and includes custom colors and animations.

### Next.js
Next.js configuration is in `next.config.js` with optimizations for:
- Image optimization
- Performance
- SEO

### TypeScript
- All components, pages, and data files are now `.tsx`/`.ts`.
- Minimal type annotations are provided for props, state, and context.
- No changes to UI, styling, or content—just safer code!

## 📄 Pages

- **Homepage** (`/`) - Main landing page with all sections
- **Services** (`/services/[slug]`) - Individual service pages
- **Case Studies** (`/case-studies/ecommerce-redesign`) - Portfolio examples

## 🚀 Deployment

The site can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- Any static hosting service

### Vercel Deployment
1. Connect your repository to Vercel
2. Vercel will automatically detect Next.js + TypeScript
3. Deploy with zero configuration

## 📞 Support

For questions or support, please contact the development team.

---

**Note**: This project is now fully migrated to Next.js + TypeScript with minimal type annotations and no changes to UI, styling, or content.
