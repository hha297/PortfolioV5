The portfolio is inspired by the template/concept from @EkiZR.

# Portfolio V5  
Hello everyone!  
Let me introduce myself, I’m Dang Hoang Ha. On this occasion, I’d like to share the portfolio website project that I’ve developed.  

**Tech Stack used:**  
- ReactJS  
- Tailwind CSS  
- AOS  
- Firebase  
- Framer Motion  
- Lucide  
- Material UI  
- SweetAlert2  



---

# Tutorial: Running the Project  

Here’s a simple guide to run this project.  

## Prerequisites  

Ensure that you have already installed:  
- **Node.js**  

---

## Steps to Run the Project  

1. **Download this project:**  

   ```bash  
   git clone https://github.com/EkiZR/Portofolio_V5.git  
   ```  

2. **Install all dependencies:**  

   ```bash  
   npm install  
   ```  
   Or use:  

   ```bash  
   npm install --legacy-peer-deps  
   ```  

3. **Run the project:**  

   ```bash  
   npm run dev  
   ```  

4. **Open in browser:**  

   Access the application through the link displayed in your terminal.  

---

## Creating a Production Build  

To create a production-ready build:  

1. Run the build command:  

   ```bash  
   npm run build  
   ```  

2. The build files will be saved in the `dist` folder. You can upload this folder to your hosting server.  

---

## Notes  

If you encounter issues while running the project, ensure that:  
- Node.js is correctly installed.  
- You’re in the correct project directory.  
- All dependencies are installed without errors.  

---

## Firebase Configuration  

To configure Firebase for this project, follow these steps:  

1. **Add Firebase to the Project:**  
   - Go to the [Firebase Console](https://console.firebase.google.com/).  
   - Create a new project or use an existing one.  

2. **Enable Firestore Database:**  
   - Create a database.  

3. **Go to Project Settings:**  
   - Click the settings icon.  
   - Copy the Firebase configuration.  

4. **Go to Rules:**  
   - Set the rules to `true`.  

5. **Adjust the Collection Structure:**  
   - Set up the collections as shown in the following images:  

6. **Update `firebase.js` and `firebase-comment.js` and `constants/assets/certificates` and also `constants/assets/projects`  Files:**  
   - Replace the `firebaseConfig` content with your Firebase configuration.  

---
