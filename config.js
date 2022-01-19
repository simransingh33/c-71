import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here

const firebaseConfig = {
    apiKey: "AIzaSyDTB6u92sW6KcGgNN7L1I0eIXN1Y6EWEDA",
    authDomain: "c-71-80e68.firebaseapp.com",
    projectId: "c-71-80e68",
    storageBucket: "c-71-80e68.appspot.com",
    messagingSenderId: "496387773291",
    appId: "1:496387773291:web:38f7ab8e55d3b825f6f22e"
  };



firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


