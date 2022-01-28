// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhSHbVGPXKoDCcxrp0lr9FGg85nu2fEYw",
  authDomain: "alejandromj-notes.firebaseapp.com",
  databaseURL: "https://alejandromj-notes-default-rtdb.firebaseio.com/",
  projectId: "alejandromj-notes",
  storageBucket: "alejandromj-notes.appspot.com",
  messagingSenderId: "705731646230",
  appId: "1:705731646230:web:a9d7e2f1f4bd59ec1d7637"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);