## 📦 Sprint 5 – React

This repository contains the completed project for Sprint 5 of the IT Academy Frontend course, focused on building a responsive landing page using React, TypeScript, and Tailwind CSS.

---

### 📝 Project Overview

The goal of this sprint is to create a modern, responsive landing page by migrating a previous HTML/CSS project to React. The project is structured into reusable components, uses TypeScript for type safety, and leverages Tailwind CSS for rapid styling and responsive design.

Key features include a mobile hamburger menu, tabbed features section, extension download cards, and a FAQ accordion—all built with accessibility and best practices in mind.

---

### 🚀 Main Goals

✅ Learn and apply core React concepts: components, hooks, and props  
✅ Use TypeScript for type safety and improved developer experience  
✅ Style the project with Tailwind CSS for fast, responsive design  
✅ Refactor a static HTML/CSS page into a dynamic React app  
✅ Organize the UI into clear, reusable components  
✅ Implement a mobile-friendly navigation menu and interactive sections  
✅ Add unit tests for key components

---

### 💻 Technologies Used

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/react)
- [@testing-library/user-event](https://testing-library.com/docs/user-event/intro/)

---

### 📁 Project Structure

```
├── public/              
│   └── images/         
├── src/
│   ├── App.css
│   ├── App.tsx       
│   ├── assets/
│   │   └── images/     
│   ├── components/
│   │   ├── atoms/    
│   │   │   ├── Button.tsx
│   │   │   ├── EmailInput.tsx
│   │   │   ├── Icon.tsx
│   │   │   ├── Logo.tsx
│   │   │   └── __tests__/
│   │   ├── molecules/
│   │   │   ├── FeatureCard.tsx
│   │   │   ├── MobileMenu.tsx
│   │   │   ├── NavMenu.tsx
│   │   │   └── __tests__/
│   │   └── organisms/
│   │       ├── Downloads.tsx
│   │       ├── Faq.tsx
│   │       ├── Features.tsx
│   │       ├── Header.tsx
│   │       ├── Hero.tsx
│   │       ├── Newsletter.tsx
│   │       └── SiteFooter.tsx
│   ├── index.css
│   ├── main.tsx      
│   ├── pages/
│   │   └── HomePage.tsx
│   └── types/    
├── index.html
├── package.json
├── tsconfig.json    
├── tsconfig.app.json
├── tsconfig.node.json
├── tsconfig.test.json
├── jest.config.js    
├── vite.config.ts    
├── tailwind.config.js 
├── postcss.config.js
└── eslint.config.js 
```

### ⚙️ How to Run the Project

Make sure you have **Node.js** and **npm** installed. Then:

1. **Clone the repository**
   ```bash
   git clone https://github.com/druedaro/sprint5-React.git
   ```

2. **Open the project folder**
   ```bash
   cd YOUR_REPO
   ```

3. **Install project dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open the app in your browser**  
   Visit the local URL shown in your terminal (usually [http://localhost:5173](http://localhost:5173)).

6. **Run tests**
   ```bash
   npm test
   ```
   
   To run tests in watch mode:
   ```bash
   npm test -- --watch
   ```

---

### 🤝 Contributions

Contributions are welcome! Feel free to open issues or pull requests.

---

### ⏳ Project Status

This project was developed as a learning exercise for React, TypeScript, and responsive web design. Folder organization and documentation will be improved in future versions.

---

**Note:**  
All images and SVGs are located in the `public/images/` folder.  
Each section/component has its own file for easier maintenance and learning purposes.
