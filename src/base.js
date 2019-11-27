import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD_4IsY7_r-bX8FVpjLQxEeAbI6-LYnf8Q",
  authDomain: "recettes-ec714.firebaseapp.com",
  databaseURL: "https://recettes-ec714.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
