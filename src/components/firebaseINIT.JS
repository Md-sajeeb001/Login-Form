import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHfwlTeQU1R5-d7d1Xm1vNorCW4-3bqWE",
  authDomain: "login-form-487c5.firebaseapp.com",
  projectId: "login-form-487c5",
  storageBucket: "login-form-487c5.firebasestorage.app",
  messagingSenderId: "195778192339",
  appId: "1:195778192339:web:27ff33dcc50c86f2a7c526"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;