import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore" 
import { getMessaging, getToken, onMessage } from "firebase/messaging";


const firebaseConfig = {
  // apiKey: process.env.ADMIN_KEY,
  apiKey: "AIzaSyBzkJARebwHnYIsYhXLW5TIZRFgD0GWHEY",
  authDomain: "test-admin-100haryt.firebaseapp.com",
  projectId: "test-admin-100haryt",
  storageBucket: "test-admin-100haryt.appspot.com",
  messagingSenderId: "182167472968",
  appId: "1:182167472968:web:01853d6071f8a7589d817d",
  measurementId: "G-WME57QY6SX"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(firebaseApp);

const messaging = getMessaging(firebaseApp)

export const fetchToken = (setTokenFound: Function, setFcmToken: Function) => {
  return getToken(messaging, {
    vapidKey: "BHi0j2Jyt0MTyezHS7kmCgYj_FsLkeetVhxAbWthOBLmmE5FwpTxfUcTpnor0qeqbvhKeGLE1dsUIZpMuWQUd2w"
  }).then((currentToken) => {
    if(currentToken) {
      setTokenFound(true)
      setFcmToken(currentToken)
    } else {
      console.log("no token found");
      setTokenFound(false)
      setFcmToken("")
    }
  }).catch(err => {
    console.log("err", err);
  })
}

export const onMessageListener = () => {
  new Promise((resolve) => {
    onMessage(messaging,(payload) => {
      resolve(payload)
    })
  })
}
