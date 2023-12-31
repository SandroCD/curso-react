import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8ojruFvq7s4b4MMoER4XEg9NsqUueB40",
  authDomain: "miniblog-35f9a.firebaseapp.com",
  projectId: "miniblog-35f9a",
  storageBucket: "miniblog-35f9a.appspot.com",
  messagingSenderId: "770914138443",
  appId: "1:770914138443:web:74ea7085a162d6d9ad50ce"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };