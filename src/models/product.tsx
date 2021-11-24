import { store } from "../firebaseUtil/firebaseConfig";

export interface Product {
    name: string, 
    category: string [],
    size: {size: string, stock: number}[]
    description: string,
    color: string,
    image: string,
    price: number, 
    createdAt: Date
}
export const getProducts = async () => {
    const { docs } = await store.collection("products").get();
    const arr = docs.map((item: any) => ({ id: item.id, ...item.data() }));
    return arr;
};

export const createProduct = (product: Product) => {
    
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
      .collection("products")
      .add(product)
      .then((docRef: any) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error: string) => {
        console.error("Error adding document: ", error);
      });
  };