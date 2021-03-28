import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


    var firebaseConfig = {
        apiKey: "AIzaSyD4aQrHErSY7bsC-7APr6Qt-JskLcFA6Uw",
        authDomain: "pinnyproject.firebaseapp.com",
        projectId: "pinnyproject",
        storageBucket: "pinnyproject.appspot.com",
        messagingSenderId: "648884869604",
        appId: "1:648884869604:web:26991032ee27624e9f8ff1",
        measurementId: "G-DG0Y23R2PG"
    };

    // Initialize Firebase
    if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig); }

    export default firebaseConfig;