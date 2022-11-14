// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDH4L_4OmwKAiSllmfHcvqLiNy_serjc5Q",
  authDomain: "online-canteen-6264f.firebaseapp.com",
  projectId: "online-canteen-6264f",
  storageBucket: "online-canteen-6264f.appspot.com",
  messagingSenderId: "980264643478",
  appId: "1:980264643478:web:9cc3c0d149ddf9a4868bb7",
  measurementId: "G-4XF12QCD2W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)
console.log('Hello UP Cebu!')