import firebaseApp from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'


let firebaseConfig = {
    apiKey: "AIzaSyArHTFPEYt9Leh5XRxHmjaxssfsYBwpT7Y",
    authDomain: "firstproject-200d5.firebaseapp.com",
    databaseURL: "https://firstproject-200d5-default-rtdb.firebaseio.com",
    projectId: "firstproject-200d5",
    storageBucket: "firstproject-200d5.appspot.com",
    messagingSenderId: "364495673810",
    appId: "1:364495673810:web:a52e5897d57337b919900b",
    measurementId: "G-ZMS810QY8S"
  };
  

class Firebase{
    constructor(props){
        // Initialize Firebase
        firebaseApp.initializeApp(firebaseConfig);
        this.firebaseApp = firebaseApp.database()
    };

    login(email, password){
        return firebaseApp.auth().signInWithEmailAndPassword(email, password)
        }

    async register(email, password, name){
        await firebaseApp.auth().createUserWithEmailAndPassword(email, password, name);
        const uid = firebaseApp.auth().currentUser.uid;
        return firebaseApp.database().ref('users').child(uid).set({
            name: name
        })
    }
    
    isInitialized(){
        return new Promise(resolve => {
            firebaseApp.auth().onAuthStateChanged(resolve)
        });
    }
}

export default new Firebase;