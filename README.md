# My Portfolio 🚀

This is a personal portfolio website built using **React**, **Vite**, and **React Router**, styled with **Bootstrap** and custom CSS. It is fully responsive and deployable to **GitHub Pages**.

## 🌐 Live Demo

[View Portfolio](https://DaChe01.github.io/My-Portfolio)

---

## 📆 Tech Stack

* ⚛️ React (with JSX components)
* ⚡ Vite (for fast dev + build)
* 🌐 React Router DOM
* 🎨 Bootstrap (CDN) + Custom CSS
* 📁 JSON-based dynamic content
* 🚀 GitHub Pages for deployment

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/DaChe01/My-Portfolio.git
cd My-Portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Locally

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔧 Customize Your Portfolio

All content is dynamically loaded from simple JSON files. You can update your profile without touching any code!

### 🔧 Data Files

Located in:

```bash
/src/data/
```

#### ✏️ Update these files:

* `about.json` – Your intro and bio
* `skills.json` – Skill categories and ratings
* `education.json` – Degrees, institutions, timelines
* `works.json` – Projects, descriptions, links

Just edit them like this:

```json
[
  {
    "category": "Programming Languages",
    "items": [
      { "name": "Python", "rating": 5 },
      { "name": "C++", "rating": 4 }
    ]
  }
]
```

No rebuild or redeploy needed if you're running locally.

---

## 📤 Deploy to GitHub Pages

1. Set the correct `homepage` in `package.json`:

```json
"homepage": "https://DaChe01.github.io/My-Portfolio"
```

2. Add the base URL to `vite.config.js`:

```js
export default defineConfig({
  base: "/My-Portfolio/",
});
```

3. Deploy with:

```bash
npm run deploy
```

---

## 👤 Author

**Da Che (Khangembam Alex D Nelson)**
📬 [adkhangembam@gmail.com](mailto:adkhangembam@gmail.com)
🔍 [GitHub: DaChe01](https://github.com/DaChe01)

---

## 📄 License

This project is open source and free to use. Credit is appreciated but not required.
