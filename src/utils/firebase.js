import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDSauAjCxAlDguO7ONdNSknrGnvlxXcrLs",
  authDomain: "dpsguia11.firebaseapp.com",
  projectId: "dpsguia11",
  storageBucket: "dpsguia11.appspot.com",
  messagingSenderId: "161375709572",
  appId: "1:161375709572:web:075af36251c64342f015d1"
};

firebase.initializeApp(firebaseConfig);
// Initialize Firebase
export default firebase;