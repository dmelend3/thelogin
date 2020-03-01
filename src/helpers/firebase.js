import Vue from "vue"

import firebase from "firebase/app"
import "firebase/firebase-auth"

import * as firebaseui from "firebaseui"

const firebaseConfig = {
  apiKey: "AIzaSyAN4jrRzObpWeod2HIAJwgxx4u7IwNJ_Is",
  authDomain: "loginexample-eb517.firebaseapp.com",
  databaseURL: "https://loginexample-eb517.firebaseio.com",
  projectId: "loginexample-eb517",
  storageBucket: "loginexample-eb517.appspot.com",
  messagingSenderId: "796507056287",
  appId: "1:796507056287:web:61a636041c8a30edd25aaa"
}

firebase.initializeApp(firebaseConfig)
const ui = new firebaseui.auth.AuthUI(firebase.auth())

Vue.prototype.$firebase = firebase
Vue.prototype.$firebaseui = ui