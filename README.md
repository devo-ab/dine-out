# 🍽️ Dine Out – Restaurant Order App

**Dine Out** is a responsive **restaurant order management web application** built with **React**, **Tailwind CSS**, and **JavaScript**.  
It allows users to order food items like pizza and burgers, manage their orders, and view real-time order updates with filtering and summaries.

---

## [🌐 Live Demo](https://dine-out-nine-navy.vercel.app)

---

---

## 📌 Features

- 🛒 **Order Food** – Users can order items (Pizza, Burger, etc.)  
- ✍️ **Customer Details** – Input customer name during order  
- 📊 **Order Details Panel** – Displays all orders with customer name, quantity, and status  
- 🔄 **Order Management** – Update status (Pending ➝ Delivered)  
- ❌ **Delete Orders** – Remove unwanted orders  
- 🔍 **Filter Orders** – View:
  - All Orders  
  - Pending Orders  
  - Delivered Orders  
- 📈 **Order Summary** – Shows:
  - Total Orders  
  - Pending Orders  
  - Delivered Orders  
- ⚡ **Real-time Updates** – Summary and filters update synchronously with actions  
- 📱 **Responsive Design** – Works seamlessly on all devices  

---

## 🛠️ Tech Stack

- **React 19**
- **Tailwind CSS 4**
- **Vite**
- **Custom Components**

---

## 📁 Folder Structure

```
dine-out
├── src
│   ├── components
│   │   ├── svg
│   │   │   ├── DownArrow.jsx
│   │   │   ├── Funnel.jsx
│   │   │   ├── Minus.jsx
│   │   │   └── Plus.jsx
│   │   ├── orderCard
│   │   │   ├── FilterOrder.jsx
│   │   │   ├── NameInput.jsx
│   │   │   ├── OrderItem.jsx
│   │   │   ├── OrderTable.jsx
│   │   │   └── SummaryCard.jsx
│   │   ├── Header.jsx
│   │   └── OrderMain.jsx
│   ├── assets
│   │   ├── chicken.svg
│   │   ├── hamburger.svg
│   │   ├── logo.svg
│   │   ├── pizza.svg
│   │   └── submarine.svg
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public
│   └── logo.svg
├── .gitignore
├── eslint.config.js
├── index.html
├── jsconfig.json
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```


---

## 📦 Dependencies

```json
"dependencies": {
  "@tailwindcss/vite": "^4.1.12",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "tailwindcss": "^4.1.12"
}
```


---

---

## 📸 Screenshots

### 🖼️ Full Preview
![Preview](./src/assets/preview/hero.png)

---

## 👥 How to Clone, Setup & Run

### 📥 Clone the Repository

```bash
git clone https://github.com/devo-ab/dine-out.git
cd dine-out
```

### Install Dependencies
```
npm install
```

### Start Development Server
```
npm run dev
```
### Build for Production
```
npm run build
```
### Preview Production Build
```
npm run preview
```

# 👤 Author
# Avi Jit
## :mailbox: Reach me out
<p align="left">
<a href="https://linkedin.com/in/itsavijitb" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="itsavijitb" height="30" width="40" /></a>
<a href="https://twitter.com/itsavijitb" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="itsavijitb" height="30" width="40" /></a>
<a href="https://facebook.com/itsavijitb" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/facebook.svg" alt="itsavijitb" height="30" width="40" /></a>
<a href="https://instagram.com/itsavijitb" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="itsavijitb" height="30" width="40" /></a>
</p>