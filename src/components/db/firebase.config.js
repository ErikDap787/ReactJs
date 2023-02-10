import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnHwGBTwIrc4prpux1q06eGpsDbdJWDcE",
  authDomain: "barcino-lunden-consolas.firebaseapp.com",
  projectId: "barcino-lunden-consolas",
  storageBucket: "barcino-lunden-consolas.appspot.com",
  messagingSenderId: "989499524359",
  appId: "1:989499524359:web:188eefe6249dff1728f1a2",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
