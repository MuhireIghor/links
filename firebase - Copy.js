import firebase from 'firebase'

const firebaseConfig = { 
    apiKey: "AIzaSyBdoLq-C5o-ZEwIBGrMqRVYyykjkgI5824",
    authDomain: "linkedin-clone-yt-98271.firebaseapp.com",
    projectId: "linkedin-clone-yt-98271",
    storageBucket: "linkedin-clone-yt-98271.appspot.com",
    messagingSenderId: "405669442282",
    appId: "1:405669442282:web:5242bb092f15e0f1561d93"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth()

export{db, auth};
