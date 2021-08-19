import * as firebase from "firebase/firebase";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDRu2I0L9vfN9r3KGE42oaKGk41CShN_GE",
  authDomain: "elevation-6a96f.firebaseapp.com",
  projectId: "elevation-6a96f",
  storageBucket: "elevation-6a96f.appspot.com",
  messagingSenderId: "825190815032",
  appId: "1:825190815032:web:81440b1524da1c4ea69dcd",
  measurementId: "G-N9Y24SHRZF",
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export { storage, firebase as default };
