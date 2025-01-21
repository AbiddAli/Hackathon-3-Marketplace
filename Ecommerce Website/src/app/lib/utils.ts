// import { createClient } from "next-sanity"
// import imageUrlBuilder from "@sanity/image-url"

// export const client = createClient({
//   projectId: "xlyoex12",
//   dataset: "production",
//   apiVersion: "2021-10-21",
//   useCdn: process.env.NODE_ENV === "production",
// })

// const builder = imageUrlBuilder(client)

// export function urlForImage(source: string) {
//   return builder.image(source)
// }

// export async function getProducts() {
//   return client.fetch(`*[_type == "products"] {
//     _id,
//     title,
//     price,
//     priceWithoutDiscount,
//     badge,
//     "imageUrl": image.asset->url,
//     category-> {
//       _id,
//       title
//     },
//     description,
//     inventory,
//     tags
//   }`)
// }

// export async function getCategories() {
//   return client.fetch(`*[_type == "categories"] {
//     _id,
//     title,
//     "imageUrl": image.asset->url
//   }`)
// }

// export async function getProduct(slug: string) {
//   return client.fetch(
//     `*[_type == "products" && slug.current == $slug][0]{
//     _id,
//     title,
//     price,
//     priceWithoutDiscount,
//     badge,
//     "imageUrl": image.asset->url,
//     category-> {
//       _id,
//       title
//     },
//     description,
//     inventory,
//     tags
//   }`,
//     { slug },
//   )
// }

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
