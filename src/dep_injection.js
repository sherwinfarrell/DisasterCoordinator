import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAe-PYi7oEJMUC7IpApa7e4ksqLb5_L2AQ",
  authDomain: "disaster-management-syst-e7340.firebaseapp.com",
  databaseURL:
    "https://disaster-management-syst-e7340-default-rtdb.firebaseio.com",
  projectId: "disaster-management-syst-e7340",
  storageBucket: "disaster-management-syst-e7340.appspot.com",
  messagingSenderId: "755542775811",
  appId: "1:755542775811:web:ee03565d6dd4afcb511636",
  measurementId: "G-NYS72TTZP3",
};

class Singleton {
//   constructor() {
//     this.fireBaseApp = firebase.initializeApp(config);
//     this.fireStore = this.fireBaseApp.firestore();
//     if (!Singleton.instance) {
//       Singleton.instance = this;
//     }
//     // Initialize object
//     return Singleton.instance;
//   }
  // Properties & Methods
}

const instance = new Singleton();
Object.freeze(instance);

export default instance;
