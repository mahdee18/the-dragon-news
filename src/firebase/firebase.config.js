// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFE3tqiw1cO8XSwt35g45GAh-HoVi95Iw",
  authDomain: "the-dragon-news-7819b.firebaseapp.com",
  projectId: "the-dragon-news-7819b",
  storageBucket: "the-dragon-news-7819b.appspot.com",
  messagingSenderId: "591032692393",
  appId: "1:591032692393:web:a8422cd94c2db341bd83b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app