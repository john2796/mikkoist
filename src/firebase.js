import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCDc4ApBcJHPFif4VVgNzn64Iul7WiKMO4",
  authDomain: "mikkoist-5b6fd.firebaseapp.com",
  databaseURL: "https://mikkoist-5b6fd.firebaseio.com",
  projectId: "mikkoist-5b6fd",
  storageBucket: "mikkoist-5b6fd.appspot.com",
  messagingSenderId: "74876217003",
  appId: "1:74876217003:web:388cae44d78deac8c3b9ee"
})

export { firebaseConfig as firebase }
