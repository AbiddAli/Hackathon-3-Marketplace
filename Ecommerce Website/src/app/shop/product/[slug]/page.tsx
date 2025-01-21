"use client"
import { useParams } from "next/navigation";
import Image from "next/image";


// Example product data (you can replace this with an API call)
const products = [
  { id: 1, name: "Library Stool Chair", slug: "library-stool-chair", price: 20, description: "A comfortable chair.", image: "/images/12.png" },
  { id: 2, name: "Library Stool Chair 2", slug: "library-stool-chair-2", price: 25, description: "Elegant and durable.", image: "/images/02.jpg" },
  { id: 3, name: "Library Stool Chair 3", slug: "library-stool-chair-3", price: 30, description: "Perfect for study rooms.", image: "/images/03.jpg" },
  // Add more products as needed
];

export default function ProductDetail() {
  const { slug } = useParams();

  // Find the product by slug
  const product = products.find((product) => product.slug === slug);

  // If no product is found, return an error message
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-screen-md mx-auto py-16 px-6">
      <div className="flex flex-col items-center">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="mb-6"
        />
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          {product.name}
        </h1>
        <p className="text-gray-500 mb-4">${product.price}</p>
        <p className="text-gray-600">{product.description}</p>
      </div>
    </div>
  );
}
