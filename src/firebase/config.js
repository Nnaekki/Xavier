import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCKHsgjZsNRU-WPFNk-ZAgKPK9-YNRKo5Q",
    authDomain: "xavier-ae941.firebaseapp.com",
    projectId: "xavier-ae941",
    storageBucket: "xavier-ae941.appspot.com",
    messagingSenderId: "869988725955",
    appId: "1:869988725955:web:100ea8351e6313fed8de76"
  };


  initializeApp (firebaseConfig)

  const auth = getAuth()

  export {auth}