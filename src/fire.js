import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD50AymgeZGcsLCI2Jjc2Vm3kv5DrRf-xs",
  authDomain: "wine-shop-685be.firebaseapp.com",
  projectId: "wine-shop-685be",
  storageBucket: "wine-shop-685be.appspot.com",
  messagingSenderId: "56027179276",
  appId: "1:56027179276:web:f04af29ca546da3df0c129",
  measurementId: "G-7EJTV16E49",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
