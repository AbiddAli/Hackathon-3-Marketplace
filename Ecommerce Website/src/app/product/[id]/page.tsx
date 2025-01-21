import { getProducts } from "@/sanity/lib/fetch";
import { notFound } from "next/navigation";
import Image from "next/image";

interface Product {
  _id: string;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  inventory: number;
}

const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const products: Product[] = await getProducts();
  const product = products.find((p: Product) => p._id === params.id);

  if (!product) {
    return notFound(); // Show a 404 page if the product is not found
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src={product.imageUrl}
            alt={product.title}
            className="w-full max-w-md h-auto rounded-lg object-cover shadow-md"
            width={500}
            height={500}
          />
        </div>

        {/* Product Details Section */}
        <div className="flex flex-col justify-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-lg text-gray-600 leading-relaxed">{product.description}</p>
          <p className="text-2xl font-semibold text-green-600">${product.price}</p>
          <p className="text-sm text-gray-500">Stock: {product.inventory}</p>
          <button className="px-6 py-3 mt-6 text-white bg-black rounded-md shadow hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
