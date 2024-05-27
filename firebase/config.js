const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeyd1jab2b6nyAriOFlxOd6fMDelcWrVg",
  authDomain: "artgallery-6f6fd.firebaseapp.com",
  projectId: "artgallery-6f6fd",
  storageBucket: "artgallery-6f6fd.appspot.com",
  messagingSenderId: "183983181881",
  appId: "1:183983181881:web:291250b8d895910603bde8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export database to use where I need it:
exports.db = getFirestore(app);
