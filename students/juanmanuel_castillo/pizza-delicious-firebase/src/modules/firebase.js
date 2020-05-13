import Firebase from 'firebase'
import { store } from '@/store'

const firebaseConfig = {
  apiKey: "AIzaSyBp7DOqXg2hQS3Trj3iz9l6y7h9YFOkNWk",
  authDomain: "pizza-delicious-56543.firebaseapp.com",
  databaseURL: "https://pizza-delicious-56543.firebaseio.com",
  projectId: "pizza-delicious-56543",
  storageBucket: "pizza-delicious-56543.appspot.com",
  messagingSenderId: "858521662065",
  appId: "1:858521662065:web:a145e1ef3dcbe4f8a0a1d0",
  measurementId: "G-FLWDRV8XRE"
};

const firebaseApp = Firebase.initializeApp(firebaseConfig);

export const Db = firebaseApp.firestore() //base de datos firestore
export const Storage = firebaseApp.storage() //almacenamiento de ficheros
export const Auth = firebaseApp.auth() //autenticación

Auth.onAuthStateChanged((user) => {

  store.commit('setCurrentUser', user)

  console.info('Cambia sesión de usuario en Firebase')
  console.info(user)

  if (!user) {
    //enviamos a la página principal
  }
});
