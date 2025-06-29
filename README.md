# 🔐 AuthFlow - Firebase Authentication App

A modern authentication app built using **React.js**, **Firebase Auth**, and **Tailwind CSS**. AuthFlow offers clean UI and user-friendly components for sign up, login, and dashboard access with secure authentication flow.

## 🌐 Live Demo

https://authentication-firebase-chi.vercel.app/

---

## 🚀 Features

- User Sign Up with Firebase Authentication
- Secure Login with Firebase Auth
- Real-time Auth State Monitoring
- Password strength indicator
- Password visibility toggles
- Protected Dashboard
- Responsive UI with Tailwind CSS
- Custom error handling & feedback messages

---

## 🛠️ Tech Stack

- **Frontend:** React.js (with Vite)
- **Styling:** Tailwind CSS
- **Auth:** Firebase Authentication
- **Routing:** React Router v6

---

## 📁 Project Structure

```
authentication/
├── public/
│ └── logo.png
├── src/
│ ├── config.js # Firebase configuration
│ ├── App.jsx # Main routing component
│ ├── Home.jsx # Dashboard after login
│ ├── Login.jsx # Login form
│ ├── Signup.jsx # Signup form with validation
│ ├── index.css # Tailwind base styles
│ └── main.jsx # React entry point
├── .env # Firebase keys (secured)
├── package.json
├── vite.config.js
└── README.md
```


---

## 🔐 Environment Variables

Create a `.env` file in the root with your Firebase config:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

🧩 Installation & Setup
1.Clone the repo
  https://github.com/Vishwanathangit/Authentication---Firebase.git
  cd authentication
2.Install dependencies
  npm install
3.Add environment variables
  Create .env file in the root directory and add your Firebase keys.
4.Start the development server
  npm run dev

## 🧠 Learnings
Firebase Auth integration with React

Managing auth state with onAuthStateChanged

Routing protection with React Router

Dynamic form validation and UI feedback

## 📌 Todos
Add Google / GitHub OAuth login

Add password reset functionality

Add route guards (private routes)

Deploy on Vercel
