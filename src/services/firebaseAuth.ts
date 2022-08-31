import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4Ej2vgFLNI8U_Oa00p2q-Eq0gBh8C3zI",
  authDomain: "amigosdoreiprojeto1.firebaseapp.com",
  projectId: "amigosdoreiprojeto1",
  storageBucket: "amigosdoreiprojeto1.appspot.com",
  messagingSenderId: "694862512666",
  appId: "1:694862512666:web:c1b87b528c6544f9c007a3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);