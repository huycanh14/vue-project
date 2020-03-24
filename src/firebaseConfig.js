// import Firebase from 'firebase'
var Firebase = require('firebase/app');
require('firebase/auth');
require('firebase/database');
// You don't need to import firebase/app either since it's being imported above

var firebaseConfig = {
    apiKey: "AIzaSyCOJ9htm39XxBGJn6BZlw1DifERXBIxEwE",
    authDomain: "pizza-planet-fda9c.firebaseapp.com",
    databaseURL: "https://pizza-planet-fda9c.firebaseio.com",
    projectId: "pizza-planet-fda9c",
    storageBucket: "pizza-planet-fda9c.appspot.com",
    messagingSenderId: "809735614514",
    appId: "1:809735614514:web:7d862205d3db699e654c2b"
};
  // Initialize Firebase
export const firebaseApp =  Firebase.initializeApp(firebaseConfig);
const db = firebaseApp.database();
export const dbMenuRef = db.ref('menu');