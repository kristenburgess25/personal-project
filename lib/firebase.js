import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDE-k5mSHBauXLEenA_VhZvpBSJFZ8XgMg",
  authDomain: "personal-project-3c259.firebaseapp.com",
  databaseURL: "https://personal-project-3c259.firebaseio.com",
  storageBucket: "personal-project-3c259.appspot.com",
  messagingSenderId: "100075585149"
};

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
export const reference = firebase.database().ref('barrel-races');
