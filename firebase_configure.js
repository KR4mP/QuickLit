import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDownloadURL, putString } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB6FbKWsOPMDK_CN86JvMnUR5xCNN_Ax1k",
  authDomain: "quicklit-949a1.firebaseapp.com",
  projectId: "quicklit-949a1",
  storageBucket: "quicklit-949a1.appspot.com",
  messagingSenderId: "166794135300",
  appId: "1:166794135300:web:4cee7c6216e6a5e3b13251",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
