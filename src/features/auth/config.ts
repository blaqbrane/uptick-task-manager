
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDPY6SzayXhoQQVTHK_rsI-rr_GVOjUYqk",
  authDomain: "task-manager-e3f78.firebaseapp.com",
  projectId: "task-manager-e3f78",
  storageBucket: "task-manager-e3f78.appspot.com",
  messagingSenderId: "508562884449",
  appId: "1:508562884449:web:f286d597b50056153ba720",
  measurementId: "G-MBB8P7M12J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export {app,auth}
