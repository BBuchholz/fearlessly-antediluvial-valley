import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsnPaJiBvlBtXuk7XjyqEmTppS1Tym3ak",
  authDomain: "tutorial-vue-firebase-auth.firebaseapp.com",
  projectId: "tutorial-vue-firebase-auth",
  storageBucket: "tutorial-vue-firebase-auth.appspot.com",
  messagingSenderId: "37053177347",
  appId: "1:37053177347:web:0321fa2a5658fa49e9f836",
  measurementId: "G-E0X8DTVQQ3"
};

// Initialize Firebase, adapted to reflect the tutorial at 
// https://learnvue.co/articles/vue-firebase-authentication#adding-firebase-to-vue-3
// const app already in use, but tutorial just calls without storing
const fireBaseApp = initializeApp(firebaseConfig);

const app = createApp(App);


const analytics = getAnalytics(fireBaseApp);


app.use(router);

app.mount('#app');
