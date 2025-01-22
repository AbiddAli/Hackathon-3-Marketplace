import { client } from "./client";
import { getProducts as productQuery } from "../../sanity/lib/queries";

export const getProducts = async () => {
  try {
    const products = await client.fetch(productQuery);
    console.log("Fetched products:", products);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
