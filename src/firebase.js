import firebase from 'firebase/app';
// import firebase from 'firebase';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBBZ93Icb39FBrjTPVNefSh1troBOrXKwQ",
    authDomain: "ecommerce-react-coderhou-4325a.firebaseapp.com",
    projectId: "ecommerce-react-coderhou-4325a",
    storageBucket: "ecommerce-react-coderhou-4325a.appspot.com",
    messagingSenderId: "536311631503",
    appId: "1:536311631503:web:2968829b1d60c409f62afa",
    measurementId: "G-L3C9GD9JNG"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();