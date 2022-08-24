importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js')

firebase.initializeApp({
  apiKey: "AIzaSyBzkJARebwHnYIsYhXLW5TIZRFgD0GWHEY",
  authDomain: "test-admin-100haryt.firebaseapp.com",
  projectId: "test-admin-100haryt",
  storageBucket: "test-admin-100haryt.appspot.com",
  messagingSenderId: "182167472968",
  appId: "1:182167472968:web:01853d6071f8a7589d817d",
  measurementId: "G-WME57QY6SX"
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage(function (payload) {
  console.log('background message', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  }
  self.ServiceWorkerRegistration.showNotification(notificationTitle, notificationOptions)
});
