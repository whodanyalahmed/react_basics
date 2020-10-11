import * as firebase from 'firebase/app';
import 'firebase/database'
import 'firebase/auth'


// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAks3gfQLLhJlV4jltH76qxmbnpNhlQJTQ",
    authDomain: "firsttodoapp-d426a.firebaseapp.com",
    databaseURL: "https://firsttodoapp-d426a.firebaseio.com",
    projectId: "firsttodoapp-d426a",
    storageBucket: "firsttodoapp-d426a.appspot.com",
    messagingSenderId: "903312161330",
    appId: "1:903312161330:web:51aafc07f32199aec89a2b"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);