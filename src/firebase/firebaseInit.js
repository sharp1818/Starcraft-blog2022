import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCxyvvc0fh7TLRGMyhUlGXgkU7b87_qxgI",
    authDomain: "fireblog-2021.firebaseapp.com",
    projectId: "fireblog-2021",
    storageBucket: "fireblog-2021.appspot.com",
    messagingSenderId: "1094510636384",
    appId: "1:1094510636384:web:1e94e7aafe023de2440205"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp}
export default firebaseApp.firestore() 