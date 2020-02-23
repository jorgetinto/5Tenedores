import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBX7drLQgqSNB8SCmv3HKrumQ34a_6xBAA",
    authDomain: "tenedores-d80dd.firebaseapp.com",
    databaseURL: "https://tenedores-d80dd.firebaseio.com",
    projectId: "tenedores-d80dd",
    storageBucket: "tenedores-d80dd.appspot.com",
    messagingSenderId: "731234414799",
    appId: "1:731234414799:web:296a4b3f53e2f34ffe07ba"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
