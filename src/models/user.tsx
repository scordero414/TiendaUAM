import { store } from "../firebaseUtil/firebaseConfig";

export interface User {
  name?: string,
  familyName?: string,
  givenName?: string,
  id?: string,
  email?: string,
  photoUrl?: string,
}

export const createUser = (user: User) => {
  // const product: Product = {
  //   name: "Camibuzo azul oscuro UAM",
  //   category: ["ropa", "camibuzo"],
  //   size: [
  //     { size: "S", stock: 22 },
  //     { size: "M", stock: 3 },
  //     { size: "L", stock: 7 },
  //   ],
  //   description:
  //     "qweqweqweqweqeqwewqqqqqqqqweqweqweqweqweqweqweqweqweqweqweqweqweqqweqwe",
  //   color: "Azul oscuro",
  //   image:
  //     "https://static.dafiti.com.co/p/nautica-3232-4848601-1-product.jpg",
  //   price: 1750000,
  //   createdAt: new Date(),
  // };

  store
    .collection("users")
    .doc(user.id)
    .set(user)
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error: any) => {
      console.error("Error writing document: ", error);
    });
};
