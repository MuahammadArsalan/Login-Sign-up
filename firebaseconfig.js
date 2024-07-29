import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDI6hl-FtSttkoWEcvlmtBpPTyTgQa0a9E",
  authDomain: "login-signup-dc732.firebaseapp.com",
  projectId: "login-signup-dc732",
  storageBucket: "login-signup-dc732.appspot.com",
  messagingSenderId: "536296065061",
  appId: "1:536296065061:web:813ed8075cbf58d521d7cc",
  measurementId: "G-LNS2FFJPPL"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db = getFirestore(app);












