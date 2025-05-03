# 🔐 React Password Generator App
![Screenshot password](https://github.com/user-attachments/assets/5165ee03-4721-40c2-bdaa-cf118301434c)

A secure and customizable password generator built with **React**. This app allows users to generate strong random passwords by selecting different character types (uppercase, lowercase, numbers, symbols) and password length.
 
## 🚀 Features

✅ Generate strong random passwords  
🔠 Toggle uppercase and lowercase characters  
🔢 Include/exclude numbers and symbols  
🎚️ Adjustable password length (8 to 20 characters)  
📋 Copy password to clipboard  
🔔 User notifications with `react-toastify`  
⚛️ Built using React functional components and Hooks

---

## 📁 Project Structure

src/
├── App.css
├── App.js
├── data/
│ └── PassChar.js # Contains character sets (UC, LC, NC, SC)
├── index.js
└── logo.svg

🛠️ Tech Stack
React

React Hooks (useState)

React Toastify

JavaScript (ES6)

HTML & CSS

## 🧠 How It Works

### 1. App Component (`App.js`)

- State hooks control:
  - Selected character types (`uppercase`, `lowercase`, `number`, `symbols`)
  - Password length
  - Final generated password
- Password is created by randomly picking characters from a compiled set based on selections
- Clipboard API is used to copy the password
- Input validation and feedback are provided using `react-toastify`

### 2. `PassChar.js`

Contains strings of:
- Uppercase letters (UC)
- Lowercase letters (LC)
- Numbers (NC)
- Symbols (SC)

Example:
```js
export const UC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
export const LC = "abcdefghijklmnopqrstuvwxyz";
export const NC = "0123456789";
export const SC = "~!@#$%^&*()_+=-`{}[]|:;<>,.?/";

📌 Notes
At least one character type must be selected to generate a password.

The length can be set between 8 and 20 characters.

The generated password is read-only and can be copied using the "Copy" button.

Notifications require react-toastify
