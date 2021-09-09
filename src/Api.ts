import { ProductsData, ProductsError } from "./types";

export async function getProducts(): Promise<Array<ProductsData>> {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    const resData: ProductsError = await res.json();
    throw new Error(resData.message);
  }

  const resData = await res.json();

  return resData;
}
