import firebase from 'firebase/app'
import 'firebase/firestore'
import "firebase/auth/";

var firebaseConfig = {
    apiKey: "AIzaSyBYkVoCRQP5yLHRv4O_fuGY08M_ZfXCcpA",
    authDomain: "proyectoa-64c43.firebaseapp.com",
    projectId: "proyectoa-64c43",
    storageBucket: "proyectoa-64c43.appspot.com",
    messagingSenderId: "1099023271033",
    appId: "1:1099023271033:web:3d35ef5e3b462fcc5d80a8"
  };
  // Initialize Firebase
//export default firebase.initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
 const auth = firebase.auth()

  export default {
      firebase,
      db,
      auth
  }
