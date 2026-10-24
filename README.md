# Bookmark Landing Page

A fully responsive landing page built with **React**, optimized for achieving high Core Web Vitals results, featuring robust WCAG-compliant accessibility (A11y) and seamless keyboard navigation.

**🌐 Live Demo: [Click!](https://bookmark-landing-page-psi-eight.vercel.app/)**

---

## ⚛️ Technologies & Tools

### Environment

- Vite
- React
  - Functional Components
  - `useState`
  - `useEffect`
  - `useRef`

### Styling

- CSS Modules
- BEM Methodology
- Mobile-first

### Deployment

- Vercel

---

## 📁 Project Structure

```text
bookmark-landing-page/
├── public/
│   └── fonts/
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── Container/
│   │   ├── Extension/
│   │   ├── Faq/
│   │   ├── Features/
│   │   ├── Footer/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── icons/
│   │   ├── Modal/
│   │   └── Newsletter/
│   ├── App.jsx
│   ├── global.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

---

## 🔰 Getting Started

### Installation

```bash
git clone https://github.com/bartolinidev/bookmark-landing-page.git
cd bookmark-landing-page
npm install
npm run dev
```

---

## ✴️ Key Features

- Fully Responsive Layout

- Mobile Navigation

- Interactive Features Tabs

- FAQ Accordion

- Animated Counter

- Newsletter Validation

- Modal on Mouseleave top & Timeout

---

## ✅ Performance

The project was created with a focus on accessibility, performance, and responsiveness.

Check it yourself by pasting the live preview's URL on the [PageSpeed Insights website](https://pagespeed.web.dev/) and click "Analyze" button.

![Lighthouse Score](public/core-web-vitals.png)

---

## ↗️ Areas to improve

### Native Dark Mode

Implement automatic system theme detection

### Backend Integration

Connect the newsletter form to a backend API such as:

- Node / Express.js
- express-validator
