import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/storage'

var firebaseConfig = {
  apiKey: 'AIzaSyBH-rhyR8tHJ0b6jsCqVkkZeYQKgKinndo',
  authDomain: 'fishingbuddy-web.firebaseapp.com',
  databaseURL: 'https://fishingbuddy-web-default-rtdb.firebaseio.com',
  projectId: 'fishingbuddy-web',
  storageBucket: 'fishingbuddy-web.appspot.com',
  messagingSenderId: '1004313328108',
  appId: '1:1004313328108:web:7f3ef10e51cab8fcb168c9',
}

var fireDb = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

export default fireDb.database()
