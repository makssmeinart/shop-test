import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDcgH5ul3xmdf9oQ6ZX43NCnv_g6vuwgWA",
    authDomain: "shop-e15f6.firebaseapp.com",
    projectId: "shop-e15f6",
    storageBucket: "shop-e15f6.appspot.com",
    messagingSenderId: "1002291497104",
    appId: "1:1002291497104:web:29654a8d3cb06df8a5b015",
    measurementId: "G-CDB2G9FL4K"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
