
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAuiYyEuzsoYfUAPwO-YFqdIWTadClvLTo",
    authDomain: "studentdb-32b03.firebaseapp.com",
    projectId: "studentdb-32b03",
    storageBucket: "studentdb-32b03.appspot.com",
    messagingSenderId: "985923939761",
    appId: "1:985923939761:web:2e803575c0c0a5bac06190",
    measurementId: "G-07QP0W7E75"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
