// Utility types

type Product = {
    id : number;
    name : string;
    price: string;
    stock : number;
    color ?: string;
}

type ProductSummary = Pick<Product, 'id'|'name'|'price'>
type productEithoutStock = Omit<Product, 'stock' | 'color'>
type ProductwithColor = Required<Product>