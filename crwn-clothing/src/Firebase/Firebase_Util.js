import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";




const firebaseConfig = {
    apiKey: "AIzaSyCtJY15q9WUpkUt5NW6Sli6qtlameDRk8E",
    authDomain: "crown-db-5d43c.firebaseapp.com",
    databaseURL: "https://crown-db-5d43c.firebaseio.com",
    projectId: "crown-db-5d43c",
    storageBucket: "crown-db-5d43c.appspot.com",
    messagingSenderId: "226046575291",
    appId: "1:226046575291:web:fcab70ecde5233c91e9f9e",
    measurementId: "G-XQML909L9S"
};


firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;