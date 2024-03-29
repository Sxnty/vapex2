import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export const addOrder = async (products, price, uid, time) => {
  try {
    const docRef = await addDoc(collection(db, "orders"), {
      products: products,
      price: price,
      uid,
      time
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};


export const getProducts = async () => {
  
    const querySnapshot = await getDocs(collection(db, "products"));
    return querySnapshot.docs.map((doc) => {
      let document = {
        id: doc.id,
        ...doc.data()
      }
      return document
    });
  };

  export const getOrders = async () => {
  
    const querySnapshot = await getDocs(collection(db, "orders"));
    return querySnapshot.docs.map((doc) => {
      let document = {
        id: doc.id,
        ...doc.data()
      }
      return document
    });
  };