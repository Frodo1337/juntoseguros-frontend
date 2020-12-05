import app from "firebase/app";
import "firebase/database";
import "firebase/storage";
import "firebase/auth";

let firebaseConfig = {
  apiKey: "AIzaSyDOYJEfoxpNko2gum16qUo3Uf1e7qfV-KA",
  authDomain: "juntoseguros-todolist.firebaseapp.com",
  projectId: "juntoseguros-todolist",
  databaseURL: "https://juntoseguros-todolist-default-rtdb.firebaseio.com/",
  storageBucket: "juntoseguros-todolist.appspot.com",
  messagingSenderId: "330907459321",
  appId: "1:330907459321:web:458d26e7618e78289c0c28"
 };

app.initializeApp(firebaseConfig);

var firebase = app;

export default firebase;
