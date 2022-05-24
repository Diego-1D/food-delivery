import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyC1SsvOFp2IR03w7EyY0_7QYWNlbGXjBao",
  authDomain: "food-delivery-dedfb.firebaseapp.com",
  databaseURL: "https://food-delivery-dedfb-default-rtdb.firebaseio.com",
  projectId: "food-delivery-dedfb",
  storageBucket: "food-delivery-dedfb.appspot.com",
  messagingSenderId: "876412390755",
  appId: "1:876412390755:web:336c57b263614b7ced9756"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage }