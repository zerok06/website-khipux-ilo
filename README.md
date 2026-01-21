# KHIPUx Ilo 2026

<p align="center">
  <img src="public/favicon.svg" alt="KHIPUx Logo" width="80" height="80">
</p>

<p align="center">
  <strong>🌐 AI meets Aymara Community</strong><br>
  Latin American Event in Artificial Intelligence
</p>

<p align="center">
  <a href="#sobre-el-evento">Español</a> •
  <a href="#about-the-event">English</a> •
  <a href="#getting-started">Get Started</a>
</p>

---

## 📅 Event Details

- **Date**: August 18-19, 2026
- **Location**: Ilo, Moquegua, Perú
- **Venue**: Universidad Nacional de Moquegua
- **Format**: Hybrid (In-person + Virtual)
- **Expected Attendance**: 150 in-person, 100 virtual

---

## Sobre el Evento

KHIPUx Ilo es un evento híbrido diseñado para fusionar la **Inteligencia Artificial** con la **comunidad Aymara** (Perú, Bolivia, Argentina y Chile), destacando su relevancia para las comunidades nativas de América Latina.

### Objetivos
- 🎯 Preservación y revitalización de lenguas indígenas mediante IA
- 🤖 Desarrollo de NLP para lenguas de bajos recursos
- 💪 Empoderamiento tecnológico de comunidades originarias

### Organizadores
- **Honorio Apaza Alanoca** - Director del Comité Organizador (AiMara Lab)
- **Allison Inguer Reynoso Serra** - Coordinador de Contenido (AiMara Lab)
- **Brigida Huahualuque Mamani** - Coordinador Outreach Comunitario

---

## About the Event

KHIPUx Ilo is a hybrid event designed to merge **Artificial Intelligence** with the **Aymara community** (Peru, Bolivia, Argentina, and Chile), highlighting its relevance for native communities in Latin America.

### Goals
- 🎯 Preservation and revitalization of indigenous languages through AI
- 🤖 NLP development for low-resource languages
- 💪 Technological empowerment of indigenous communities

### Organizers
- **Honorio Apaza Alanoca** - Organizing Committee Director (AiMara Lab)
- **Allison Inguer Reynoso Serra** - Content Coordinator (AiMara Lab)
- **Brigida Huahualuque Mamani** - Community Outreach Coordinator

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [Astro](https://astro.build) | 5.x | Static Site Generator |
| [Tailwind CSS](https://tailwindcss.com) | 4.x | Styling |
| [TypeScript](https://www.typescriptlang.org) | 5.x | Type Safety |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/aimaralab/khipux-ilo.git
cd khipux-ilo

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## 📁 Project Structure

```
khipux-ilo/
├── public/              # Static assets
├── src/
│   ├── components/      # Astro components
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Speakers.astro
│   │   ├── Sponsors.astro
│   │   ├── Venue.astro
│   │   └── ...
│   ├── data/            # JSON data files
│   │   ├── site.json
│   │   ├── hero.json
│   │   ├── speakers.json
│   │   ├── schedule.json
│   │   └── sponsors.json
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages
│   │   ├── [lang]/      # i18n routes (es, en)
│   │   └── index.astro
│   └── styles/          # Global styles
├── astro.config.mjs
├── tailwind.config.js
└── package.json
```

---

## 🌍 Internationalization

The website supports two languages:

- 🇪🇸 **Español** (`/es`)
- 🇺🇸 **English** (`/en`)

All content is managed via JSON files in `src/data/`.

---

## 🎨 Design System

### Colors

| Name | Hex | Usage |
|------|-----|-------|
| Primary | `#d85120` | Brand orange, CTAs |
| Background | `#000000` | Page background |
| Text | `#ffffff` | Primary text |
| Muted | `#9ca3af` | Secondary text |

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold weight
- **Body**: Regular weight

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📧 Contact

- **Email**: info@khipu.ai
- **Website**: [khipu.ai](https://khipu.ai)

---

<p align="center">
  Made with ❤️ in Latin America by <a href="https://github.com/aimaralab">AiMara Lab</a>
</p>
