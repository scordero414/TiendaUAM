import { store } from "../firebaseUtil/firebaseConfig";

export interface Suborder {
    product: string,
    subtotal: number,
    amount: number,
    size: string
}

export const createOrder = (order: any) => {
    store
    .collection("orders")
    .doc("OD " +  order.date)
    .set(order, { merge: false })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error: any) => {
      console.error("Error writing document: ", error);
    });
}