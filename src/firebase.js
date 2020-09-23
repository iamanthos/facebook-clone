import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAnlqFL9Dq3ZGkI1jWhsjOwlEWc_u6onGI",
    authDomain: "fb-cloned.firebaseapp.com",
    databaseURL: "https://fb-cloned.firebaseio.com",
    projectId: "fb-cloned",
    storageBucket: "fb-cloned.appspot.com",
    messagingSenderId: "815973011870",
    appId: "1:815973011870:web:519b6fb0ab44326283468f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  // const db = firebaseApp.firestore();
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;