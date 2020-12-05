import firebase from 'firebase';

firebase.initializeApp({
    apiKey: "AIzaSyCr4a58D_mxd5KtneeQtglB3rVK9CfnsGs",
    authDomain: "onliner-4be0a.firebaseapp.com",
    databaseURL: "https://onliner-4be0a-default-rtdb.firebaseio.com",
    projectId: "onliner-4be0a",
    storageBucket: "onliner-4be0a.appspot.com",
    messagingSenderId: "779006557385",
    appId: "1:779006557385:web:ed3369d4f95651ce126118"
  });
  
  const db = firebase.firestore();

  export {db}