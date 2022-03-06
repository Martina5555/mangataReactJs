// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyBkYgjI7jL09do0XVB3dCuboZNfL_w61G8",
  authDomain: "reactjs-mangata.firebaseapp.com",
  projectId: "reactjs-mangata",
  storageBucket: "reactjs-mangata.appspot.com",
  messagingSenderId: "163098641872",
  appId: "1:163098641872:web:780f349e1521b59e37e5d5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getfirestoreApp() {
  return initializeApp;
}
