const firebaseConfig = {
    apiKey: "AIzaSyB5-3jbENh_DV7ReEcOFPODNiB0eXolxvk",
    authDomain: "avaliador-enem-70f32.firebaseapp.com",
    projectId: "avaliador-enem-70f32",
    storageBucket: "avaliador-enem-70f32.appspot.com",
    messagingSenderId: "66544156127",
    appId: "1:66544156127:web:7ed8403c4c42809457586a",
    measurementId: "G-6EF5Z8GZ9F"
}

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const colRef = db.collection("authors")

exports = {colRef}