# El Mehdi Noreddine - Portfolio Website

A premium, luxury-themed portfolio website showcasing full-stack development and viral growth expertise.

## 🎨 Design Features

- **Dubai/Saudi Luxury Aesthetic**: Deep blues, gold accents, and glassmorphism effects
- **Premium Dark Mode**: Slate-950 backgrounds with subtle gradients
- **Smooth Animations**: Framer Motion for elegant transitions
- **Responsive Design**: Mobile-first approach with beautiful layouts

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Fonts**: Inter (body) + Playfair Display (headings)

## 📂 Project Structure

```
my-portfolio/
├── src/
│   ├── app/                    # Pages
│   │   ├── layout.tsx          # Root layout with fonts & metadata
│   │   ├── page.tsx            # Home page
│   │   └── portfolio/
│   │       └── page.tsx        # Portfolio gallery with filters
│   ├── components/             # Reusable components
│   │   ├── ui/                 # Shadcn UI components
│   │   ├── navbar.tsx          # Glassmorphism navbar
│   │   ├── hero-section.tsx    # Hero with stats bar
│   │   ├── project-card.tsx    # Premium project cards
│   │   └── footer.tsx          # Footer with CTA
│   ├── lib/
│   │   ├── data.ts             # All project & personal data
│   │   └── utils.ts            # Utility functions
│   └── styles/
│       └── globals.css         # Global styles with luxury theme
└── public/
    └── images/                 # Project images
```

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Update Personal Information

Edit `src/lib/data.ts` to customize:
- Personal info (name, tagline, bio, location)
- Projects (add/remove/modify)
- Services offered
- Stats displayed in hero
- Social media links

### Add Your CV

Place your CV file as `public/cv.pdf` for the download functionality to work.

### Add Project Images

Replace the Unsplash URLs in `src/lib/data.ts` with your own project screenshots.

## 🎯 Key Features

- **Hero Section**: Eye-catching headline with 700M+ views stat bar
- **Services**: 3-column layout showcasing expertise
- **Portfolio Gallery**: Filterable project showcase (Software/Content)
- **Project Cards**: Glassmorphism cards with metrics and hover effects
- **Responsive Navigation**: Smooth glassmorphism navbar with mobile menu
- **CTA Footer**: Relocation availability (Dubai/Canada)

## 🌈 Color Scheme

- **Background**: Slate-950 (Deep dark blue)
- **Primary**: Yellow-400 to Yellow-500 (Gold gradient)
- **Secondary**: Blue-500 (Accent blue)
- **Text**: Slate-200/300 (Light gray)
- **Borders**: White/5-10 (Subtle borders)

## 📱 Pages

1. **Home** (`/`): Hero, Services, Selected Work, Contact CTA
2. **Portfolio** (`/portfolio`): Full project gallery with filters

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

© 2026 El Mehdi Noreddine. All rights reserved.
