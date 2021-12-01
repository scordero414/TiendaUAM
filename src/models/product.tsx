import { store } from "../firebaseUtil/firebaseConfig";

export interface Product {
    name: string;
    category: string[];
    id: string;
    description: string;
    image: string;
    price: number;
    createdAt: Date;
}

export interface SpecificProduct {
    color: string;
    state: string;
    size: string;
    price: number;
    image: string;
    id?: string;
}

export const getProducts = async () => {
    const { docs } = await store.collection("products").get();
    const arr = docs.map((item: any) => ({ id: item.id, ...item.data() }));
    return arr;
};

export const getSellableProducts = async (id: string) => {
    const { docs } = await store
        .collection(`/products/${id}/sellable_products`)
        .where("state", "==", "Avaliable")
        .get();
    const arr = docs.map((item: any) => ({ id: item.id, ...item.data() }));
    return arr;
};

export const getAmountOfProductsByStock = async (product: any) => {
    const { docs } = await store
        .collection(`/products/${product.idParent}/sellable_products`)
        .where("state", "==", "Avaliable")
        .where("size", "==", `${product.size}`)
        .where("color", "==", `${product.color}`)
        .get();
    const arr = docs.map((item: any) => ({ id: item.id, ...item.data() }));
    return arr;
};

export const createProduct = () => {
    const product1: Product = {
        name: "Hoodie UAM",
        category: ["ropa", "hoodie"],
        description:
            "qweqweqweqweqeqwewqqqqqqqqweqweqweqweqweqweqweqweqweqweqweqweqweqqweqwe",
        image: "https://static.dafiti.com.co/p/gap-5263-4066221-1-product.jpg",
        price: 1750000,
        createdAt: new Date(),
        id: "OGtRtJBM8PYIGQRFqeqY",
    };

    const product2: Product = {
        name: "Hoodie UAM",
        category: ["ropa", "camiseta"],
        description:
            "qweqweqweqweqeqwewqqqqqqqqweqweqweqweqweqweqweqweqweqweqweqweqweqqweqwe",
        image: "https://static.dafiti.com.co/p/lacoste-9129-5885531-1-product.jpg",
        price: 1750000,
        createdAt: new Date(),
        id: "F9gOAlK44CFcP8BwoDz1",
    };

    const product3: Product = {
        name: "Camibuzo UAM",
        category: ["ropa", "camibuzo"],
        description:
            "qweqweqweqweqeqwewqqqqqqqqweqweqweqweqweqweqweqweqweqweqweqweqweqqweqwe",
        image: "https://static.dafiti.com.co/p/nautica-3232-4848601-1-product.jpg",
        price: 1750000,
        createdAt: new Date(),
        id: "c5QNN7U7khMk44tZN4u4",
    };

    const product4: Product = {
        name: "Buzo UAM",
        category: ["ropa", "buzo"],
        description:
            "qweqweqweqweqeqwewqqqqqqqqweqweqweqweqweqweqweqweqweqweqweqweqweqqweqwe",
        image: "https://static.dafiti.com.co/p/calvin-klein-9676-0602701-1-product.jpg",
        price: 75000,
        createdAt: new Date(),
        id: "tQLMywTwUvGHVChQSRxK",
    };

    const specificProduct1: SpecificProduct = {
        color: "Rojo",
        image: "https://static.dafiti.com.co/p/gap-5263-4066221-1-product.jpg",
        price: 175000,
        state: "Avaliable",
        size: "L",
    };

    const specificProduct2: SpecificProduct = {
        color: "Negro",
        image: "https://static.dafiti.com.co/p/lacoste-9129-5885531-1-product.jpg",
        price: 1750000,
        state: "Avaliable",
        size: "XL",
    };

    const specificProduct3: SpecificProduct = {
        color: "Azul Oscuro",
        image: "https://static.dafiti.com.co/p/nautica-3232-4848601-1-product.jpg",
        price: 1750000,
        state: "Avaliable",
        size: "XL",
    };

    const specificProduct4: SpecificProduct = {
        color: "Azul claro",
        image: "https://static.dafiti.com.co/p/calvin-klein-9676-0602701-1-product.jpg",
        price: 75000,
        state: "Avaliable",
        size: "S",
    };

    createSpecificProductsByIdGeneric(product4.id, 5, specificProduct4);

    // store
    //   .collection("products")
    //   .add(product)
    //   .then((docRef: any) => {
    //     console.log("Document written with ID: ", docRef.id);
    //   })
    //   .catch((error: string) => {
    //     console.error("Error adding document: ", error);
    //   });
};

const createSpecificProductsByIdGeneric = (
    id: string,
    stock: number,
    product: SpecificProduct
) => {
    const uri = `/products/${id}/sellable_products`;
    for (let index = 0; index < stock; index++) {
        store
            .collection(uri)
            .add(product)
            .then((docRef: any) => {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error: string) => {
                console.error("Error adding document: ", error);
            });
    }
};
