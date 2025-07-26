# Udyam Leap - AI Business Plan Generator

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://udyami-leap-v2.web.app)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)
![Gemini](https://img.shields.io/badge/Google%20Gemini-F4B400?logo=google&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?logo=vite&logoColor=FFD62E)
![License](https://img.shields.io/badge/license-MIT-blue)

## 🌟 Live Demo

Experience Udyam Leap now:  
🔗 [https://udyami-leap-v2.web.app](https://udyami-leap-v2.web.app)

## 🚀 Project Overview

Udyam Leap is an AI-powered platform that transforms business ideas into actionable plans using Google's Gemini Flash API. Built with React and Firebase, it provides young entrepreneurs with personalized business strategies in seconds. The application features secure authentication, cloud data storage, and user-managed API keys for Gemini integration.

## ✨ Key Features

- **AI-Powered Business Plans**: Generate comprehensive action plans using Gemini Flash
- **Secure Authentication**: Firebase-based sign-up/login
- **Cloud Storage**: Firestore database for saving plans
- **Goal Planning**: Create and track business milestones
- **API Key Management**: Use your own Gemini API key
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS
- **Free to Use**: No subscription required

## 🧩 Tech Stack

- **Frontend**: React + Vite
- **Styling**: Tailwind CSS
- **Authentication**: Firebase Auth
- **Database**: Firestore
- **AI Engine**: Google Gemini Flash API
- **Hosting**: Firebase Hosting
- **Development**: Replit

## 📂 Project Structure
## Project Structure

```text
udyam-leap-final/
├── src/
│   ├── components/
│   │   ├── Auth.jsx          # Authentication UI
│   │   ├── Dashboard.jsx     # Main application dashboard
│   │   └── GoalPlanner.jsx   # Business goal planning
│   ├── App.jsx               # Root application component
│   ├── firebase.js           # Firebase configuration
│   ├── gemini.js             # Gemini API integration
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global CSS styles
├── public/                   # Static assets
├── dist/                     # Production build output
├── firebase/                 # Firebase configuration
├── .env.local                # Environment variables
├── firebase.json             # Firebase deployment config
├── .firebaserc               # Firebase project aliases
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── vite.config.js            # Vite configuration
├── package.json              # Project dependencies
└── README.md                 # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- Google Gemini API key ([Get API Key](https://aistudio.google.com/app/apikey))

### Local Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yashtiwari750/udyam-leap-final.git
   cd udyam-leap-final

2. **Install dependencies**:
   ```
   npm install
   ```
3.**Configure enviroment Variables**
- create  .env.local file in the project root
```
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-bucket.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
VITE_GEMINI_API_KEY=your-gemini-api-key
```
4. **Run the development Server:**
   ```
   npm run dev
   ```
5.**Access the application:**
```
npm run dev
```
6.**Acess the application:**
-open http://localhost:5173 in your browser

##🔑 Using Your Own Gemini API Key
1.Visit the live app: https://udyami-leap-v2.web.app
2.Sign in with Google 
3.Navigate to the Settings page
4.Enter your Google Gemini API key
5.Save changes - all future AI requests will use your key

## 🛠 Development Commands

| Command                | Description                   |
|------------------------|-------------------------------|
| `npm run dev`          | Start development server      |
| `npm run build`        | Create production build       |
| `npm run preview`      | Preview production build      |
| `firebase deploy`      | Deploy to Firebase Hosting    |
| `node test-gemini.js`  | Test Gemini API integration   |


## 🌐 Deployment

Deploy to Firebase Hosting:

### 1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```
### 2.Login to Firebase:
```bash
firebase login --no-localhost
```
### 3.Initialize Project(select Hosting):
```bash
firebase init
```
### 4.Deploy application:
```bash
firebase deploy
```

### your app will be availabe at 
- `https://<your-project-id>.web.app`

