# 🚀 JYOTHISH M - Personal Portfolio Website

A modern, responsive, and professional personal developer & data analyst portfolio website designed for **JYOTHISH M (Data Analyst)**. Built with **HTML5, CSS3, Bootstrap 5, and JavaScript**, featuring a sleek dark theme with glowing neon purple and cyan accents.

---

## 🌟 Live Preview & Features

- **Sleek Dark Theme Aesthetic:** Modern dark UI (`#0a0b11`) with curated purple (`#8b5cf6`) and cyan/blue (`#38bdf8`) neon gradient highlights and glassmorphic card styling.
- **Hero Section:**
  - Name: **JYOTHISH M**
  - Dynamic typewriter role animation: **DATA ANALYST**, **PYTHON & SQL ENTHUSIAST**, **POWER BI & DASHBOARD BUILDER**, **EDA & STATISTICAL MODELER**.
  - Availability badge with pulsating radar dot.
  - Action buttons (*"View My Work"*, *"Contact Me"*) and social links.
- **Profile Showcase:** High-resolution developer & data analyst avatar with glowing backdrop aura and floating tech badges.
- **About Me:** Biography, career goals, technical highlights, and responsive statistic counters (100K+ Records Analyzed, 100% Data Integrity).
- **Skills Matrix:** Organized cards for:
  - **PYTHON**
  - **SQL**
  - **EXCEL**
  - **POWER BI**
  - **EDA (Exploratory Data Analysis)**
  - **Pandas & NumPy**
  - **Data Visualization (Matplotlib, Seaborn)**
  - **Git & GitHub**
- **Featured Projects:**
  1. **EDA PROJECT - Exploratory Data Analysis** (Comprehensive statistical analysis, missing value handling, correlation heatmaps, customer purchase behaviors, and churn patterns)
  2. **AutoResq - Mechanic Assistance App** (Real-time on-demand roadside assistance and mechanic tracking via GPS)
  3. **Blessing - Islamic Tracker** (Spiritual lifestyle companion with accurate GPS prayer times, Qibla compass, and streak tracker)
  - Detailed modal popups with feature breakdowns, screenshots, and repository links.
- **Education Pathway:** Modern vertical timeline showcasing academic milestones and specialized Data Analytics training.
- **Interactive Contact Form:** Includes client-side validation, submit state indicator, feedback alerts, direct email/WhatsApp links, and beginner guidance for backend integration.
- **Fully Responsive:** Seamlessly adapts to smartphones, tablets, laptops, and ultra-wide desktop monitors.
- **Clean & Beginner-Friendly Code:** Structured with thorough inline comments for easy modification during workshops or self-learning.

---

## 📁 Project Directory Structure

```text
portfolio/
├── index.html            # Main semantic HTML5 webpage structure
├── style.css             # Custom CSS design system, dark theme, and animations
├── script.js             # Interactive JavaScript logic (typewriter, navbar, form)
├── assets/
│   └── images/
│       ├── profile.jpg           # Jyothish M data analyst avatar portrait
│       ├── project-eda.jpg       # EDA data analytics dashboard mockup
│       ├── project-autoresq.jpg  # AutoResq roadside app mockup
│       └── project-blessing.jpg  # Blessing Islamic tracker mockup
└── README.md             # Documentation, setup guide, and customization tips
```

---

## 🖥️ How to Run & Preview the Website

You don't need any complex build tools to view or edit this project! Choose any of the following simple methods:

### Option 1: Direct Browser Open (Simplest)
1. Open the project folder `portfolio/` in File Explorer.
2. Double-click `index.html` to open it in your web browser (Chrome, Edge, Firefox, Brave).

### Option 2: Using Built-in Python Server
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

### Option 3: Using VS Code Live Server
1. Open the `portfolio` folder in **Visual Studio Code** or **Antigravity IDE**.
2. Right-click on `index.html` and click **"Open with Live Server"**.

---

## 🛠️ How to Customize for Your Profile

### 1. Change Your Name and Role
- In `index.html`, search for `JYOTHISH M` and replace it with your full name.
- In `script.js`, edit the `roles` array to customize your titles:
  ```javascript
  const roles = [
    "DATA ANALYST",
    "BUSINESS INTELLIGENCE SPECIALIST",
    "SQL PRACTITIONER"
  ];
  ```

### 2. Replace the Profile Picture
- Place your image inside `assets/images/` (e.g., `my-photo.jpg`).
- In `index.html`, locate `<img src="assets/images/profile.jpg" ...>` and update the `src` attribute.

### 3. Add or Modify Skills
- Look for `<div class="skill-card">` in `index.html`.
- Duplicate or modify any card to adjust skill names and progress percentages (`style="width: 90%;"`).

### 4. Hooking up the Contact Form to Send Real Emails
Currently, the form validates inputs and displays a success alert using JavaScript. To receive real messages in your personal email inbox:
1. Sign up at [formspree.io](https://formspree.io).
2. Create a form and copy your unique form ID.
3. Update `<form id="portfolioContactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">` in `index.html`.

---

## 🌐 Free Deployment Options

- **GitHub Pages:**
  1. Create a GitHub repo named `<username>.github.io`.
  2. Push the project files to the `main` branch.
  3. Enable GitHub Pages in **Settings > Pages > Branch: main / root**.
- **Vercel / Netlify:**
  - Drag and drop your project folder directly into [Netlify Drop](https://app.netlify.com/drop) or connect your GitHub repository.

---

## 📜 License & Workshop Usage

Created for educational and personal portfolio showcase purposes. Feel free to clone, customize, and build upon this template!
