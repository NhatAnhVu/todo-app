import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDYvGcQySWsp3XZXUpCdTyz_hoQeSNg-qI",
  authDomain: "todo-7245b.firebaseapp.com",
  projectId: "todo-7245b",
  storageBucket: "todo-7245b.appspot.com",
  messagingSenderId: "487258567435",
  appId: "1:487258567435:web:03e4c222d5dc58427b680e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)