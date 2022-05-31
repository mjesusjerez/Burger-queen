import { initializeApp } from "firebase/app";
//import { getAnalytics,  } from "firebase/analytics";
import { addDoc, collection, getFirestore, Timestamp, getDocs, updateDoc, doc  } from "firebase/firestore"
//import {totalPedido} from "../src/view/Mesero.js"


 //SDK

const firebaseConfig = {
    apiKey: "AIzaSyDBNkOcufTr0pHP0NR7zRt7IuA2Dq76SN8",
    authDomain: "burgerqueen-3993f.firebaseapp.com",
    databaseURL: "https://burgerqueen-3993f-default-rtdb.firebaseio.com",
    projectId: "burgerqueen-3993f",
    storageBucket: "burgerqueen-3993f.appspot.com",
    messagingSenderId: "380004688235",
    appId: "1:380004688235:web:46c1432357d11310d76c2e",
    measurementId: "G-YX6XM54RSC"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);


//firestore
const db = getFirestore(app);


//función guardar pedidos
export const guardarPedido = async (cliente, pedido) => {
  console.log("este es el pedido")
//colección firestore - pedidos
  const docRef = await addDoc(collection(db, "pedidos"), {
    cliente,
    pedido,
    estado: 'pendiente',
    createdAt: Timestamp.now(), 
  })
  
}; 

export const muroCocina = async() =>{
  const querySnapshot = await getDocs(collection(db, 'pedidos'))
  return querySnapshot.docs

}

export const completarPedido = async (id, status) => {
  const updateId = doc(db, "pedidos", id);
  const pedidoListo = { estado: "Listo" }
  await updateDoc(updateId, pedidoListo);
  console.log(pedidoListo)
};
