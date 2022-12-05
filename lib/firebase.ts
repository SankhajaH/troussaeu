import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAggAlU9RALs_Bl0vbZ87Glaez2peadF_c",
  authDomain: "trousseau-49df5.firebaseapp.com",
  projectId: "trousseau-49df5",
  storageBucket: "trousseau-49df5.appspot.com",
  messagingSenderId: "150121142011",
  appId: "1:150121142011:web:e3e9655bf4e75eab59c25e"
};


const app = !getApps.length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)

export { db, auth, storage }