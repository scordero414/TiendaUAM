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