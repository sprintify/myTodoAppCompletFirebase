// In your actual app, this file should be called
// firebase.js and imported into main.js as such

import { initializeApp } from "firebase";

const app = initializeApp({
  apiKey: "AIzaSyCXVpcYdboBF1TjXNHaE27qoIECv_dn6KA",
  authDomain: "vue-complete-todo-app.firebaseapp.com",
  databaseURL: "https://vue-complete-todo-app.firebaseio.com",
  projectId: "vue-complete-todo-app",
  storageBucket: "vue-complete-todo-app.appspot.com",
  messagingSenderId: "457133922641",
  appId: "1:457133922641:web:bad1ff2b40821111"
})

export const db = app.firestore();
