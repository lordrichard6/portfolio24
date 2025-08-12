<div align="center">
  <br />
    <a href="https://www.pauloreizinho.com/" target="_blank">
      <img width="300px" marginBottom="20px" src="./src//assets//images//me_crossed_arms.png" alt="Project Banner">
    </a>
  <br />
  <br />
  <h1 align="center">Paulo Reizinho Frontend Developer Portfolio</h1>
  <br />
  <div>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">Portfolio</h3>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🚀 [Performance](#performance)
6. 🛡️ [Security](#security)
7. 📁 [Project Structure](#project-structure)
8. 💻 [Development](#development)
9. 🚀 [Deployment](#deployment)
10. 📄 [License](#license)

## <a name="introduction">🤖 Introduction</a>

In today's digital age, a strong online presence is paramount, especially for professionals seeking to showcase their skills, projects, and achievements. This Portfolio was created with React – dynamic, interactive, and visually stunning platforms that encapsulate one's journey, expertise, and creative endeavors.

Imagine a portfolio where every pixel reflects your unique style and professionalism, seamlessly blending modern design principles with cutting-edge technologies. My Portfolio – an embodiment of innovation crafted with React, meticulously designed in Figma, and polished with the elegance of Tailwind CSS.

**🌐 Live Demo:** [pauloreizinho.com](https://www.pauloreizinho.com/)

## <a name="tech-stack">⚙️ Tech Stack</a>

### Frontend Framework
- **React 18.3.1** - Modern React with hooks and functional components
- **React Router 6.23.0** - Client-side routing and navigation

### Styling & UI
- **Tailwind CSS 3.4.3** - Utility-first CSS framework
- **Sass 1.90.0** - Advanced CSS preprocessing
- **Framer Motion 11.18.2** - Smooth animations and transitions

### Build Tools & Development
- **Vite 7.1.2** - Lightning-fast build tool and dev server
- **ESLint 8.57.0** - Code linting and quality assurance
- **Prettier 3.3.3** - Code formatting and consistency

### Additional Features
- **EmailJS** - Contact form functionality
- **React Icons 5.5.0** - Comprehensive icon library
- **PropTypes** - Runtime type checking for React props

## <a name="features">🔋 Features</a>

👉 **Modern Design**: Clean, professional design with attention to detail

👉 **Responsive Layout**: Fully responsive across all devices and screen sizes

👉 **Dark/Light Mode**: Toggle between dark and light themes with smooth transitions

👉 **Smooth Animations**: Engaging animations powered by Framer Motion

👉 **Interactive Navigation**: Intuitive navigation with active state indicators

👉 **Project Showcase**: Detailed project presentations with live links and repositories

👉 **Skills Display**: Visual representation of technical skills and expertise

👉 **Contact Integration**: Functional contact form with EmailJS integration

👉 **Performance Optimized**: Fast loading times and optimized bundle sizes

👉 **SEO Friendly**: Proper meta tags and semantic HTML structure

👉 **Security Hardened**: Zero security vulnerabilities with latest dependencies

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

### Prerequisites

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en) (v18.0.0 or higher)
- [npm](https://www.npmjs.com/) (v9.0.0 or higher)

### Cloning the Repository

```bash
git clone https://github.com/lordrichard6/portfolio24.git
cd portfolio24
```

### Installation

Install the project dependencies using npm:

```bash
npm install
```

### Running the Project

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

## <a name="performance">🚀 Performance</a>

- **Build Time**: ~1.1s (optimized with Vite v7)
- **Bundle Size**: 
  - JavaScript: 377.30 kB (126.63 kB gzipped)
  - CSS: 62.69 kB (12.12 kB gzipped)
- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience

## <a name="security">🛡️ Security</a>

- ✅ **Zero Security Vulnerabilities**
- ✅ **Regular Dependency Updates**
- ✅ **Secure External Link Handling**
- ✅ **Modern Sass API** (no deprecated warnings)
- ✅ **ESLint Security Rules** enabled

## <a name="project-structure">📁 Project Structure</a>

```
portfolio24/
├── public/                 # Static assets
├── src/
│   ├── _root/             # Root layout and pages
│   │   ├── layout/        # Layout components
│   │   └── pages/         # Page components
│   ├── assets/            # Images, icons, and media
│   ├── components/        # Reusable UI components
│   ├── constants/         # Data constants and configurations
│   ├── context/           # React context providers
│   ├── hooks/             # Custom React hooks
│   └── styles/            # SCSS stylesheets
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── README.md              # Project documentation
```

## <a name="development">💻 Development</a>

### Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run preview          # Preview production build

# Code Quality
npm run lint             # Run ESLint
npm run lint:fix         # Fix ESLint issues automatically
npm run format           # Format code with Prettier
npm run format:check     # Check code formatting

# Maintenance
npm run deps:check       # Check for outdated dependencies
npm run security:audit   # Run security audit
```

### Code Style

This project uses ESLint and Prettier for code quality and formatting:
- **ESLint**: Enforces coding standards and catches potential errors
- **Prettier**: Ensures consistent code formatting
- **Sass**: Modern CSS with variables and mixins

## <a name="deployment">🚀 Deployment</a>

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deploy to Vercel

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the Vite configuration
4. Deploy with zero configuration needed

### Environment Variables

For contact form functionality, add these environment variables:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## <a name="license">📄 License</a>

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Made with ❤️ by <a href="https://www.pauloreizinho.com/">Paulo Reizinho</a></p>
  <p>
    <a href="https://www.linkedin.com/in/paulo-reizinho/">LinkedIn</a> •
    <a href="https://github.com/lordrichard6">GitHub</a> •
    <a href="mailto:paulolopesreizinho@gmail.com">Email</a>
  </p>
</div>