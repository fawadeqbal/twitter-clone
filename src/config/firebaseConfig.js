// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


const firebaseConfig = {
  apiKey:  "AIzaSyDL-KgNCEIjU3gnL1kHHQjBmXkPTU5tZxA",
  authDomain: "twitter-7e4b7.firebaseapp.com",
  projectId: "twitter-7e4b7" ,
  storageBucket: "twitter-7e4b7.appspot.com",
  messagingSenderId: "815347950475" ,
  appId: "1:815347950475:web:fcf0a05aca14049133858e" ,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app);
const storage = getStorage(app);
export { app, db, storage };