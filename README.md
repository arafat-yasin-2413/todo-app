# 🚀 TypeScript Todo App

A modern, fast, and type-safe Task Manager built with pure **TypeScript**, raw **HTML5**, and **Tailwind CSS**. This project uses **Vite** as the build tool and leverages **LocalStorage** for persistent data management. No heavy frontend frameworks used-just pure vanilla power!

✨ **Live Demo:** [View Live Site](https://todo-app-lac-two-21.vercel.app/)

---

## 🔥 Features

- **Full CRUD Functionality:** Add, view, complete, and delete tasks smoothly.
- **Persistent Storage:** Tasks are automatically saved to and synchronized with `localStorage`, so your data survives page refreshes.
- **Dynamic Stats:** Real-time counter showing total tasks vs. completed tasks with beautifully styled Tailwind badges.
- **Batch Operations:** A "Clear Completed" button that dynamically appears only when there are tasks marked as done.
- **Type-Safe DOM Manipulation:** Written entirely in TypeScript with interface declarations and proper type casting.
- **Modern Dark UI:** Sleek, responsive, glassmorphism-inspired interface optimized for mobile and desktop screens.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, Tailwind CSS
- **Language:** TypeScript
- **Build Tool:** Vite
- **Deployment:** Vercel

---

## 📂 Project Structure

```text
todo-app/
├── index.html          # Main HTML structure
├── src/
│   ├── main.ts         # TypeScript core logic & DOM interactions
│   └── style.css       # Tailwind CSS directives
|-- package.json        # Dependencies and scripts
|-- vite.config.ts      # vite config file
└── tsconfig.json       # TypeScript compiler options
```

---
## 💻 Getting Started Locally
Follow these steps to set up adn run the project on your locall machine: 

**1. Clone the Repository**
```bash
git clone https://github.com/arafat-yasin-2413/todo-app.git
```
**2. Install Dependencies**
```bash
pnpm install
```
**3. Run Development Server**
```bash
pnpm dev
```

## 🚀 Deployment on Vercel
This project is fully optimized for Vercel deployment. You can easily deploy it using the Vercel CLI or via GitHub integration:

### Via GitHub (Recommended)
1. Push your code to a GitHub repository.
2. Go to Vercel and click Add New > Project.
3. Import your repository. Vercel will auto-detect Vite and configure the build settings (npm run build and dist folder) automatically.
4. Click Deploy!