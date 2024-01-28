
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBb0QpJDzOqjYAX3yyTDqNz9Ip20NwG2wc",
  authDomain: "authentication-fb-2ab58.firebaseapp.com",
  projectId: "authentication-fb-2ab58",
  storageBucket: "authentication-fb-2ab58.appspot.com",
  messagingSenderId: "1084268883755",
  appId: "1:1084268883755:web:7da912bb7e019917535f6e"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);