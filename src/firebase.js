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
    constructor(){
        // Initialize Firebase
        firebaseApp.initializeApp(firebaseConfig);

        // a specie of "export default of database"
        this.firebaseApp = firebaseApp.database()
    };

    login(email, password){
        return firebaseApp.auth().signInWithEmailAndPassword(email, password)
        }

    async register(email, password, name){
        await firebaseApp.auth().createUserWithEmailAndPassword(email, password);
        const uid = firebaseApp.auth().currentUser.uid;
        return firebaseApp.database().ref('users').child(uid).set({
            name: name
        })
    }
    
    logout(){
        firebaseApp.auth().signOut()
    }

    isInitialized(){
        return new Promise(resolve => {
            firebaseApp.auth().onAuthStateChanged(resolve)
        });
    };

    getCurrent(){
        return firebaseApp.auth().currentUser && firebaseApp.auth().currentUser.email;
    }

    async getUserName(callback){
        if(!firebaseApp.auth().currentUser){
            return null;
        }
        const uid = firebaseApp.auth().currentUser.uid;
        await firebaseApp.database().ref('users').child(uid).once('value')
            .then(callback)

        }
    }

export default new Firebase;