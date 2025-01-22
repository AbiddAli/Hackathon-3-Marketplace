import { client } from "@/sanity/lib/client";
import { NextRequest } from "next/server";

export const dynamic = "force-static";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");

    if (slug) {
      // Fetch a single product by slug
      const product = await client.fetch(
        `*[_type == "products" && _id == $slug][0] {
          _id,
          title,
          price,
          priceWithoutDiscount,
          badge,
          "imageUrl": image.asset->url,
          category-> {
            _id,
            title
          },
          description,
          inventory,
          tags
        }`,
        { slug }
      );

      return new Response(JSON.stringify(product), {
        headers: { "Content-Type": "application/json" },
      });
    }

    // Fetch all products
    const products = await client.fetch(
      `*[_type == "products"] {
        _id,
        title,
        price,
        priceWithoutDiscount,
        badge,
        "imageUrl": image.asset->url,
        category-> {
          _id,
          title
        },
        description,
        inventory,
        tags
      }`
    );

    return new Response(JSON.stringify(products), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
