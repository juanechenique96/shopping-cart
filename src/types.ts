export interface ProductsData {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amount: number;
};

export interface ProductsError {
    id: number;
    message: string;
}