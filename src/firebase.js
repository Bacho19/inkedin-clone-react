import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBu7yyZP4mxgl3o1hDuncn-ABwD0X6_FhE",
    authDomain: "linkedin-clone-b104a.firebaseapp.com",
    projectId: "linkedin-clone-b104a",
    storageBucket: "linkedin-clone-b104a.appspot.com",
    messagingSenderId: "52488253975",
    appId: "1:52488253975:web:7d7dd07a68a75b0ec2a252"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }