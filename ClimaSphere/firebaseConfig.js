// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC-2nVgMJQKmRQydaDu34MQgErJdtzbwCQ",
    authDomain: "climatsphere-934a5.firebaseapp.com",
    projectId: "climatsphere-934a5",
    storageBucket: "climatsphere-934a5.appspot.com",
    messagingSenderId: "591288213690",
    appId: "1:591288213690:web:8878d5ffc973db837a2283"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
