// import Image from "next/image";

// const products = [
//   {
//     id: 1,
//     name: "Library Stool Chair",
//     price: "$89",
//     image: "/images/11.jpg",
//   },
//   {
//     id: 2,
//     name: "Library Stool Chair",
//     price: "$89",
//     image: "/images/09.png",
//   },
//   {
//     id: 3,
//     name: "Library Stool Chair",
//     price: "$89",
//     image: "/images/07.png",
//   },
//   {
//     id: 4,
//     name: "Library Stool Chair",
//     price: "$89",
//     image: "/images/03.jpg",
//   },
//   {
//     id: 5,
//     name: "Library Stool Chair",
//     price: "$89",
//     image: "/images/13.png",
//   },
// ];

// const LibraryStoolChair = () => {
//   return (
//     <div className="max-w-screen-xl mx-auto p-6 bg-white">
//       {/* Hero Section */}
//       <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
//         {/* Left Image Section */}
//         <div className="relative w-full md:w-[500px] h-[400px] md:h-[550px]">
//           <Image
//             src="/images/15.png" // Replace with the uploaded image path
//             alt="Library Stool Chair"
//             layout="fill"
//             objectFit="cover"
//             className="rounded-lg"
//           />
//         </div>

//         {/* Right Content Section */}
//         <div className="w-full md:w-1/2 space-y-10 mb-20 ">
//           <h2 className="text-5xl font-bold text-gray-900 leading-tight ">
//             Library Stool <br></br> Chair
//           </h2>
//           <div>
//             <button className="bg-[#029FAE] text-white px-6 py-3 rounded-full text-lg font-semibold">
//               $20.00 USD
//             </button>
            
//           </div>
//           <div className="border-[1px]"/>

//           <p className="text-gray-700 leading-relaxed text-lg">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
//             tincidunt erat enim, nec fermentum lacus interdum non. Lorem ipsum
//             dolor sit amet, consectetur adipiscing elit.
//           </p>

//           <button className="w-[180px] flex items-center justify-center px-4 py-3 bg-[#029FAE] text-white text-sm font-medium rounded hover:bg-teal-600 space-x-2">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.35 6.73A2 2 0 007.61 22h8.78a2 2 0 001.96-2.27L17 13M9 22a2 2 0 104 0"
//               />
//             </svg>
//             <span>Add To Cart</span>
//           </button>
//         </div>
//       </div>

//       {/* Featured Products Section */}
//       <section className="px-6 py-8 max-w-screen-xl mx-auto">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-8">
//         <h2 className="text-2xl font-bold text-gray-900 tracking-wide">
//           FEATURED PRODUCTS
//         </h2>
//         <a
//           href="#"
//           className="text-sm font-semibold text-gray-600 hover:text-black"
//         >
//           View all
//         </a>
//       </div>

//       {/* Product Cards */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="flex flex-col items-center border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition"
//           >
//             {/* Product Image with consistent aspect ratio */}
//             <div className="relative w-full h-[200px]">
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 layout="fill"
//                 objectFit="cover"
//                 className="rounded-t-lg"
//               />
//             </div>

//             {/* Product Info */}
//             <div className="p-4 text-center">
//               <h3 className="text-sm font-medium text-gray-800 mb-1">
//                 {product.name}
//               </h3>
//               <p className="text-sm font-bold text-gray-900">{product.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//     </div>
//   );
// };

// export default LibraryStoolChair;

import { getProducts } from "@/sanity/lib/fetch";
import Link from "next/link";
import Image from "next/image";

interface Product {
  _id: string;
  imageUrl: string;
  title: string;
  description: string;
  price: number;
}

const ProductPage = async () => {
  // Fetch products
  const products: Product[] = await getProducts();

  if (!products || products.length === 0) {
    return (
      <div className="text-center text-red-500 text-xl py-8">
        No products found.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product: Product) => (
        <Link
          key={product._id}
          href={`/Product/${product._id}`}
          className="block border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          {/* Product Image */}
          <Image
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-auto object-cover transition-transform duration-200 hover:scale-105"
            width={300}
            height={300}
          />

          {/* Product Info */}
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">
              {product.title}
            </h2>
            <p className="text-sm text-gray-500 truncate">
              {product.description}
            </p>
            <p className="text-green-600 font-bold mt-2">${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductPage;