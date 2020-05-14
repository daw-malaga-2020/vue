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
export const ProductsRef = Db.collection('products') //base de datos firestore
export const UsersRef = Db.collection('users') //base de datos firestore
export const ContactsRef = Db.collection('contacts') //base de datos firestore
export const Storage = firebaseApp.storage() //almacenamiento de ficheros
export const Auth = firebaseApp.auth() //autenticación

Auth.onAuthStateChanged(async (user) => {

  if(user){
    //con user = null aquí no entra (no hay sesión activa o se acaba de cerrar
    
    let userData = await (await UsersRef.doc(user.uid).get())
    userData = userData.data()

    //la información del usuario autenticado (user)
    user.firstname = userData.firstname
    user.lastname = userData.lastname
    user.profile = userData.profile
    
  }

  store.commit('setCurrentUser', user)

  if (!user) {
    //enviamos a la página principal
  }
});
