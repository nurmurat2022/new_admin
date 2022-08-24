import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBzkJARebwHnYIsYhXLW5TIZRFgD0GWHEY",
  authDomain: "test-admin-100haryt.firebaseapp.com",
  projectId: "test-admin-100haryt",
  storageBucket: "test-admin-100haryt.appspot.com",
  messagingSenderId: "182167472968",
  appId: "1:182167472968:web:01853d6071f8a7589d817d",
  measurementId: "G-WME57QY6SX"
};

const app = initializeApp(firebaseConfig);

function requestPermission() {
  console.log('Requesting permission...');
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');

      const messaging = getMessaging(app);

      getToken(messaging, {vapidKey: "BHi0j2Jyt0MTyezHS7kmCgYj_FsLkeetVhxAbWthOBLmmE5FwpTxfUcTpnor0qeqbvhKeGLE1dsUIZpMuWQUd2w"})
        .then(currentToken => {
          console.log(currentToken)
          if (currentToken) {
            console.log('Current Token', currentToken);
          } else {
            console.log("Can't get token");
          }
        });
    } else {
      console.log("Do not permission");
    }
  })
}

requestPermission();
