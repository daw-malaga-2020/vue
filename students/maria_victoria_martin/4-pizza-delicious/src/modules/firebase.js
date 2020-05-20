import Firebase from 'firebase'
import {store} from '@/store'
import {router} from '@/router'

const firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyB7B_plmn-CjHz6C6ueVe6meY03b7UNbeA",
  authDomain: "pizza-delicious-96c19.firebaseapp.com",
  databaseURL: "https://pizza-delicious-96c19.firebaseio.com",
  projectId: "pizza-delicious-96c19",
  storageBucket: "pizza-delicious-96c19.appspot.com",
  messagingSenderId: "937513632491",
  appId: "1:937513632491:web:3e55617d1f2c3279c134ae",
  measurementId: "G-P8KLH0KVEE"

});

export const db = firebaseApp.firestore() //base de datos firestore
export const users = db.collection('users') //base de datos firestore
export const storage = firebaseApp.storage() //almacenamiento de ficheros
export const auth = firebaseApp.auth() //autenticación

auth.onAuthStateChanged((user) => {

  store.commit('setCurrentUser', user)
   
  if (!user) {
    router.push('/')
  }
  });