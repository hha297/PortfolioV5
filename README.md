# Portfolio

Hello, I'm
Dang Hoang Ha

I'm a software developer with experience in JavaScript, TypeScript and frameworks like React, Node.js, and Next.js. I have a strong passion for building interactive, high-performance applications and enjoy tackling complex technical challenges.

## 🌟 About This Portfolio

This is my personal portfolio website showcasing my projects, skills, and professional experience. The portfolio features a modern, responsive design with smooth animations and interactive elements.

### ✨ Key Features:

- 📱 **Responsive Design**: Optimized for all devices
- 🎨 **Modern UI/UX**: Clean and professional interface
- ⚡ **Smooth Animations**: AOS (Animate On Scroll) integration
- 🔥 **Firebase Integration**: Real-time comments system
- 📊 **Interactive Sections**: Projects, Experience, Tech Stack
- 💬 **Contact Form**: Direct communication with visitors
- 🌐 **Multi-language Support**: English interface

### 🛠️ Tech Stack:

- **Frontend**: ReactJS, Tailwind CSS
- **UI Components**: Material UI, Lucide Icons
- **Animations**: AOS, Framer Motion
- **Backend**: Firebase (Firestore)
- **Notifications**: SweetAlert2
- **Deployment**: Vercel

---

# 🚀 Getting Started

This guide will help you set up and run the portfolio project locally on your machine.

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v16.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** package manager
- **Git** - [Download here](https://git-scm.com/)

### System Requirements:

- **Operating System**: Windows 10+, macOS 10.15+, or Linux
- **RAM**: Minimum 4GB (8GB recommended)
- **Disk Space**: At least 500MB free space

---

## ⚡ Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/hha297/PortfolioV5.git
cd PortfolioV5
```

### 2. Install Dependencies

```bash
npm install
```

> **Note**: If you encounter peer dependency conflicts, use:
>
> ```bash
> npm install --legacy-peer-deps
> ```

### 3. Start Development Server

```bash
npm run dev
```

### 4. Access the Application

Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

---

## 🏗️ Development Commands

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server with hot reload |
| `npm run build`   | Create production build                  |
| `npm run preview` | Preview production build locally         |
| `npm run lint`    | Run ESLint for code quality checks       |

---

## 📦 Production Deployment

### Building for Production

```bash
npm run build
```

This command will:

- Optimize the code for production
- Minify CSS and JavaScript files
- Generate static assets in the `dist` folder
- Enable tree-shaking to reduce bundle size

### Deployment Options

The built files in the `dist` folder can be deployed to:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Push `dist` contents to `gh-pages` branch
- **Traditional Hosting**: Upload `dist` folder contents to your web server

---

## 🔧 Troubleshooting

### Common Issues


**Dependency Issues:**

```bash
# Clear npm cache
npm cache clean --force
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build Errors:**

- Ensure Node.js version is 16.0 or higher
- Check for TypeScript errors: `npm run lint`
- Verify all environment variables are set correctly

---

## 🔥 Firebase Configuration

This portfolio uses Firebase for the comments system. Follow these steps to set up Firebase:

### 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter project name (e.g., "portfolio-comments")
4. Enable Google Analytics (optional)
5. Click "Create project"

### 2. Enable Firestore Database

1. In your Firebase project, go to **Firestore Database**
2. Click "Create database"
3. Choose **Start in test mode** (for development)
4. Select a location for your database
5. Click "Done"

### 3. Get Firebase Configuration

1. Go to **Project Settings** (gear icon)
2. Scroll down to "Your apps" section
3. Click "Web" icon (`</>`)
4. Register your app with a nickname
5. Copy the Firebase configuration object

### 4. Configure Security Rules

In Firestore Database → Rules, set:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true; // For development only
    }
  }
}
```

> **⚠️ Security Note**: The above rule allows public read/write access. For production, implement proper authentication and security rules.

### 5. Update Project Files

Replace the Firebase configuration in these files:

- `src/firebase.js`
- `src/firebase-comment.js`

```javascript
// Example configuration
const firebaseConfig = {
        apiKey: 'your-api-key',
        authDomain: 'your-project.firebaseapp.com',
        projectId: 'your-project-id',
        storageBucket: 'your-project.appspot.com',
        messagingSenderId: '123456789',
        appId: 'your-app-id',
};
```

### 6. Test the Setup

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Try submitting a comment
4. Check Firestore Database to verify the comment was saved

---

## 📚 Additional Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Made with ❤️ by Dang Hoang Ha**

---
