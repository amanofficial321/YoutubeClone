import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'


const firebaseConfig = {
    apiKey: "AIzaSyCrWJv53rWzOauR6EpBWqBU-9sWVQLg3QY",
    authDomain: "aman-you-tube-clone.firebaseapp.com",
    projectId: "aman-you-tube-clone",
    storageBucket: "aman-you-tube-clone.appspot.com",
    messagingSenderId: "95128926599",
    appId: "1:95128926599:web:86b12fbb1b190ff6147b22"
  };


  firebase.initializeApp(firebaseConfig);

  export default firebase.auth()
