import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/database'



const  config = {
  apiKey: "AIzaSyAe-PYi7oEJMUC7IpApa7e4ksqLb5_L2AQ",
  authDomain: "disaster-management-syst-e7340.firebaseapp.com",
  databaseURL: "https://disaster-management-syst-e7340-default-rtdb.firebaseio.com",
  projectId: "disaster-management-syst-e7340",
  storageBucket: "disaster-management-syst-e7340.appspot.com",
  messagingSenderId: "755542775811",
  appId: "1:755542775811:web:ee03565d6dd4afcb511636",
  measurementId: "G-NYS72TTZP3"
};


firebase.initializeApp(config);
// firebase.database();
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;
