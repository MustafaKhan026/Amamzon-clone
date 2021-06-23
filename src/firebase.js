import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBGH1CkBRbbDMkSFIIF_UHfbwdc6PMt2a8",
  authDomain: "clone-b7979.firebaseapp.com",
  projectId: "clone-b7979",
  storageBucket: "clone-b7979.appspot.com",
  messagingSenderId: "737273829468",
  appId: "1:737273829468:web:f686897125867148d92e99",
  measurementId: "G-9PQCBMCVR8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}

