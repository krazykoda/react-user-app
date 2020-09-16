import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAY9Zl8MfBXuKULW4XuRCX4G4RavIwtpMs",
    authDomain: "userapp-aa68e.firebaseapp.com",
    databaseURL: "https://userapp-aa68e.firebaseio.com",
    projectId: "userapp-aa68e",
    storageBucket: "userapp-aa68e.appspot.com",
    messagingSenderId: "314166295512",
    appId: "1:314166295512:web:5d60dcbd484ab7e59a90ad"
};

firebase.initializeApp(firebaseConfig);

export default firebase;