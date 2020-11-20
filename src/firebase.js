import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAEN0X3DULn6lkDB7bnOMlFtZ9UgieoJ8I",
  authDomain: "react-twitter-clone-96338.firebaseapp.com",
  databaseURL: "https://react-twitter-clone-96338.firebaseio.com",
  projectId: "react-twitter-clone-96338",
  storageBucket: "react-twitter-clone-96338.appspot.com",
  messagingSenderId: "232576974663",
  appId: "1:232576974663:web:48ad7c4569853219379662",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
