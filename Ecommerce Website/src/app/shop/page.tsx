// "use client";
// import React from "react";
// import Image from "next/image";
// import { useRouter } from "next/router";

// import pic2 from "/public/images/02.jpg";
// import pic3 from "/public/images/03.jpg";
// import pic4 from "/public/images/04.jpg";
// import pic6 from "/public/images/06.jpg";
// import pic7 from "/public/images/07.png";
// import pic9 from "/public/images/09.png";
// import pic10 from "/public/images/10.png";
// import pic11 from "/public/images/11.jpg";
// import pic12 from "/public/images/12.png";
// import pic13 from "/public/images/13.png";

// const products = [
//   { id: 1, name: "Library Stool Chair", slug: "library-stool-chair", image: pic12 },
//   { id: 2, name: "Library Stool Chair", slug: "library-stool-chair-2", image: pic2 },
//   { id: 3, name: "Library Stool Chair", slug: "library-stool-chair-3", image: pic3 },
//   { id: 4, name: "Library Stool Chair", slug: "library-stool-chair-4", image: pic4 },
//   { id: 5, name: "Library Stool Chair", slug: "library-stool-chair-5", image: pic6 },
//   { id: 6, name: "Library Stool Chair", slug: "library-stool-chair-6", image: pic10 },
//   { id: 7, name: "Library Stool Chair", slug: "library-stool-chair-7", image: pic11 },
//   { id: 8, name: "Library Stool Chair", slug: "library-stool-chair-8", image: pic9 },
//   { id: 9, name: "Library Stool Chair", slug: "library-stool-chair-9", image: pic13 },
//   { id: 10, name: "Library Stool Chair", slug: "library-stool-chair-10", image: pic2 },
//   { id: 11, name: "Library Stool Chair", slug: "library-stool-chair-11", image: pic3 },
//   { id: 12, name: "Library Stool Chair", slug: "library-stool-chair-12", image: pic7 },
// ];

// export default function Shop() {
//   const router = useRouter();
  
//   const handleProductClick = (slug: string) => {
//     router.push(`/shop/product/${slug}`);
//   };

//   return (
//     <div>
//       <section className="py-16 px-10">
//         <div className="max-w-screen-xl mx-auto">
//           <h1 className="text-xl sm:text-3xl font-semibold mb-10">All Products</h1>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             {products.slice(0, 4).map((product, index) => (
//               <div key={index} className="relative p-4 shadow-sm flex flex-col" onClick={() => handleProductClick(product.slug)}>
//                 <Image className="w-full h-80 object-cover mb-4" src={product.image} alt={`Product ${index + 1}`} />
//                 <div className="flex flex-col space-y-2">
//                   <h3 className="text-sm font-medium text-gray-800">{product.name} {index + 1}</h3>
//                   <p className="text-gray-500 text-sm">$20</p>
//                 </div>
//                 <button className="absolute bottom-4 right-4 bg-[#007580] text-white p-2 rounded-full shadow-lg hover:bg-[#005e5e] transition-colors">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4m-.4 8h14m-8 6a1 1 0 100 2 1 1 0 000-2zm6 0a1 1 0 100 2 1 1 0 000-2z" />
//                   </svg>
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <section className="py-16 px-10">
//         <div className="max-w-screen-xl mx-auto">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             {products.slice(4, 8).map((product, index) => (
//               <div key={index} className="relative p-4 shadow-sm flex flex-col" onClick={() => handleProductClick(product.slug)}>
//                 <Image className="w-full h-80 object-cover mb-4" src={product.image} alt={`Product ${index + 1}`} />
//                 <div className="flex flex-col space-y-2">
//                   <h3 className="text-sm font-medium text-gray-800">{product.name} {index + 1}</h3>
//                   <p className="text-gray-500 text-sm">$20</p>
//                 </div>
//                 <button className="absolute bottom-4 right-4 bg-[#007580] text-white p-2 rounded-full shadow-lg hover:bg-[#005e5e] transition-colors">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4m-.4 8h14m-8 6a1 1 0 100 2 1 1 0 000-2zm6 0a1 1 0 100 2 1 1 0 000-2z" />
//                   </svg>
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <section className="py-16 px-10">
//         <div className="max-w-screen-xl mx-auto">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//             {products.slice(8, 12).map((product, index) => (
//               <div key={index} className="relative p-4 shadow-sm flex flex-col" onClick={() => handleProductClick(product.slug)}>
//                 <Image className="w-full h-80 object-cover mb-4" src={product.image} alt={`Product ${index + 1}`} />
//                 <div className="flex flex-col space-y-2">
//                   <h3 className="text-sm font-medium text-gray-800">{product.name} {index + 1}</h3>
//                   <p className="text-gray-500 text-sm">$20</p>
//                 </div>
//                 <button className="absolute bottom-4 right-4 bg-[#007580] text-white p-2 rounded-full shadow-lg hover:bg-[#005e5e] transition-colors">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4m-.4 8h14m-8 6a1 1 0 100 2 1 1 0 000-2zm6 0a1 1 0 100 2 1 1 0 000-2z" />
//                   </svg>
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <section className="bg-white py-16 px-6 sm:px-10">
//         <div className="max-w-screen-xl mx-auto text-center">
//           {/* Newsletter Subscription */}
//           <div className="mb-12">
//             <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
//               Or Subscribe To The Newsletter
//             </h2>
//             <div className="flex justify-center items-center mb-8">
//               <input
//                 type="email"
//                 placeholder="Email Address..."
//                 className="py-3 px-6 w-full sm:w-1/2 border border-gray-300 rounded-md"
//               />
//               <button className="bg-[#029FAE] text-white py-3 px-6 rounded-md ml-4 hover:bg-blue-700">
//                 Subscribe
//               </button>
//             </div>
//           </div>

//           {/* Instagram Follow Section */}
//           <div>
//             <h3 className="text-4xl sm:text-3xl font-bold text-gray-800 mb-4">
//               Follow Products And Discounts On Instagram
//             </h3>
//             <div className="flex justify-center gap-6 flex-wrap">
//               <div className="w-32 h-32 rounded-lg overflow-hidden shadow-md">
//                 <Image
//                   src={pic6}
//                   alt="Instagram Product 1"
//                   width={128}
//                   height={128}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="w-32 h-32 rounded-lg overflow-hidden shadow-md">
//                 <Image
//                   src={pic13}
//                   alt="Instagram Product 2"
//                   width={128}
//                   height={128}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="w-32 h-32 rounded-lg overflow-hidden shadow-md">
//                 <Image
//                   src={pic2}
//                   alt="Instagram Product 3"
//                   width={128}
//                   height={128}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="w-32 h-32 rounded-lg overflow-hidden shadow-md">
//                 <Image
//                   src={pic9}
//                   alt="Instagram Product 4"
//                   width={128}
//                   height={128}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="w-32 h-32 rounded-lg overflow-hidden shadow-md">
//                 <Image
//                   src={pic3}
//                   alt="Instagram Product 5"
//                   width={128}
//                   height={128}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="w-32 h-32 rounded-lg overflow-hidden shadow-md">
//                 <Image
//                   src={pic7}
//                   alt="Instagram Product 5"
//                   width={128}
//                   height={128}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Use the correct useRouter for the App Router

const products = [
  { id: 1, name: "Library Stool Chair", slug: "library-stool-chair", price: 20, image: "/images/12.png" },
  { id: 2, name: "Library Stool Chair", slug: "library-stool-chair-2", price: 25, image: "/images/02.jpg" },
  { id: 3, name: "Library Stool Chair", slug: "library-stool-chair-3", price: 30, image: "/images/03.jpg" },
  { id: 4, name: "Library Stool Chair", slug: "library-stool-chair-4", price: 22, image: "/images/04.jpg" },
  { id: 5, name: "Library Stool Chair", slug: "library-stool-chair-5", price: 28, image: "/images/06.jpg" },
  { id: 6, name: "Library Stool Chair", slug: "library-stool-chair-6", price: 35, image: "/images/10.png" },
  { id: 7, name: "Library Stool Chair", slug: "library-stool-chair-7", price: 32, image: "/images/11.jpg" },
  { id: 8, name: "Library Stool Chair", slug: "library-stool-chair-8", price: 20, image: "/images/09.png" },
  { id: 9, name: "Library Stool Chair", slug: "library-stool-chair-9", price: 40, image: "/images/13.png" },
  { id: 10, name: "Library Stool Chair", slug: "library-stool-chair-10", price: 15, image: "/images/02.jpg" },
];

export default function Shop() {
  const router = useRouter(); // Correct useRouter hook for Next.js 13+ App Router

  const handleProductClick = (slug: string) => {
    router.push(`/shop/product/${slug}`); // Navigate to dynamic slug page
  };

  return (
    <div>
      <section className="py-16 px-10">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-xl sm:text-3xl font-semibold mb-10">All Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative p-4 shadow-sm flex flex-col cursor-pointer"
                onClick={() => handleProductClick(product.slug)}
              >
                <Image
                  className="w-full h-80 object-cover mb-4"
                  src={product.image}
                  alt={product.name}
                  width={320}
                  height={320}
                />
                <div className="flex flex-col space-y-2">
                  <h3 className="text-sm font-medium text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
