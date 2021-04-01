import {combineReducers} from "redux";
import authReducer from "./authReducer";
import taskReducer from "./taskReducer";
import mapReducer from "./mapReducer"
import {firestoreReducer} from "redux-firestore";
import {firebaseReducer} from "react-redux-firebase";


const rootReducer = combineReducers({
    map: mapReducer,
    auth: authReducer,
    task: taskReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    }
);


export default rootReducer