# 🌙 Nouvel Parallax Website

An interactive front-end project that demonstrates a smooth **parallax scrolling effect** using pure HTML, CSS, and JavaScript.
The design creates a sense of depth by moving visual elements at different speeds as the user scrolls.

---

## ✨ Features

* 🌌 Parallax scrolling effect based on scroll position
* 🌙 Layered scene (stars, moon, mountains, river, boat)
* 🎯 Dynamic element movement with different speeds (depth illusion)
* 🔤 Animated typography (Nouvel title scales & reacts to scroll)
* 🎨 Gradient background transitions
---

## 🧠 How It Works

The core concept is based on calculating the **scroll progress**:

```js
const progress = scrollY / maxScroll;
```

Each element moves based on this value but with a different multiplier:

* **Moon** → moves faster (foreground feeling)
* **Mountains** → move slower (background depth)
* **Stars** → subtle horizontal motion
* **Boat & River** → synchronized movement

This variation in speed creates the **parallax illusion of depth**.

---

## 🛠️ Technologies Used

* **HTML5** – Structure of the page
* **CSS3** – Layout, styling, gradients, and positioning
* **JavaScript (Vanilla JS)** – Scroll-based animation logic

---

## 🎨 UI Highlights

* Clean navigation bar with hover effects
* Full-screen hero section
* Layered visual composition using absolute positioning
* Smooth transitions tied to user interaction

---

## 📸 Preview

<img width="1342" height="632" alt="image" src="https://github.com/user-attachments/assets/2b2835f8-b98a-4f4f-aed7-9ac8ea001a82" />

---

## 📂 Project Structure

```bash
/project-folder
│── index.html
│── style.css
│── main.js
│── imgs/
```

---

## 🚀 Key Learning Outcomes

* Understanding **parallax scrolling mechanics**
* Working with **scroll events in JavaScript**
* Creating **responsive layouts using relative units (vh, vw)**
* Managing layered UI using **positioning and z-index**
* Improving performance and animation control

---

