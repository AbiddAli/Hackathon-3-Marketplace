import React from "react";
import Image from "next/image";

// Import images
import hero from "/public/images/Product Image.png";
import brand1 from "/public/images/zapier.png";
import brand2 from "/public/images/pipedrive.png";
import brand3 from "/public/images/cib bank.png";
import brand4 from "/public/images/z.png";
import brand5 from "/public/images/burnt toast.png";
import brand6 from "/public/images/pandaDoc.png";
import brand7 from "/public/images/Moz.png";
import pic1 from "/public/images/01.png";
import pic2 from "/public/images/02.jpg";
import pic3 from "/public/images/03.jpg";
import pic4 from "/public/images/04.jpg";
import pic5 from "/public/images/05.jpg";
import pic6 from "/public/images/06.jpg";
import pic7 from "/public/images/07.png";
import pic8 from "/public/images/08.jpg";
import pic9 from "/public/images/09.png";
import pic10 from "/public/images/10.png";
import pic11 from "/public/images/11.jpg";
import pic12 from "/public/images/12.png";
import pic13 from "/public/images/13.png";


const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="flex justify-center items-center bg-[#F0F2F3] py-6 px-6 sm:px-10 lg:px-16">
        <div className="max-w-screen-xl w-full flex flex-col sm:flex-row justify-between items-center">
          {/* Text Section */}
          <div className="flex flex-col items-center sm:items-start w-full sm:w-1/2 space-y-6">
            <h1 className="text-sm pt-10 sm:pt-20 font-normal text-[#272343] text-center sm:text-left">
              WELCOME TO CHAIRY
            </h1>
            <h2 className="text-center sm:text-left text-3xl sm:text-5xl font-bold">
              Best Furniture Collection for your interior.
            </h2>
            <button className="bg-[#029FAE] text-white py-3 px-6 rounded-md hover:bg-blue-700">
              Shop Now
            </button>
          </div>
          {/* Image Section */}
          <div className="w-full sm:w-1/2 flex justify-center mt-6 sm:mt-0">
            <Image src={hero} alt="Hero Product Image" width={434} height={584} />
          </div>
        </div>
      </section>

      {/* Brand Section */}
      <section className="flex flex-wrap justify-center items-center gap-16 py-10 px-10">
        {[brand1, brand2, brand3, brand4, brand5, brand6, brand7].map((brand, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image src={brand} alt={`Brand Logo ${index + 1}`} width={70} height={50} />
          </div>
        ))}
      </section>

      {/* Products Section */}
      <section className="py-16 px-10">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-xl sm:text-3xl font-semibold mb-10">Featured Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[pic1, pic2, pic3, pic4].map((pic, index) => (
              <div key={index} className="relative p-4 shadow-sm flex flex-col">
                <Image className="w-full h-80 object-cover mb-4" src={pic} alt={`Product ${index + 1}`} />
                <div className="flex flex-col space-y-2">
                  <h3 className="text-sm font-medium text-gray-800">
                    Library Stool Chair {index + 1}
                  </h3>
                  <p className="text-gray-500 text-sm">$20</p>
                </div>
                <button className="absolute bottom-4 right-4 bg-[#007580] text-white p-2 rounded-full shadow-lg hover:bg-[#005e5e] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4m-.4 8h14m-8 6a1 1 0 100 2 1 1 0 000-2zm6 0a1 1 0 100 2 1 1 0 000-2z" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Categories */}
      <section className="py-12 px-6">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-xl sm:text-3xl font-semibold mb-8">Top Categories</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[pic5, pic6, pic7].map((pic, index) => (
              <div key={index} className="relative bg-white shadow-lg rounded-lg overflow-hidden">
                <Image src={pic} alt={`Category ${index + 1}`} width={400} height={400} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <h3 className="text-lg font-medium">Category {index + 1}</h3>
                  <p className="text-sm">1,204 Products</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Styles */}
      <header className="container mx-auto px-4 py-12 lg:py-16">
        <div className="relative grid grid-cols-1 gap-5 md:grid-cols-[auto_1fr]">
          <h3 className="absolute-left items-start py-10">
            <Image src="/images/Explorer.png" alt="exp" width={29} height={2} />
          </h3>
          <div className="flex flex-col md:flex-row items-start gap-4 mt-8">
            <div className="w-full md:w-[48%] h-full">
              <Image src={pic3} alt="Orange modern chair" className="h-full w-full object-cover" width={500} height={400} priority />
            </div>
            <div className="grid grid-cols-2 gap-x-4 w-full md:w-[48%] lg:w-[48%] h-full mt-5">
              {[pic4, pic9, pic8, pic1].map((pic, index) => (
                <div key={index} className="aspect-square">
                  <Image src={pic} alt={`Chair ${index + 1}`} className="h-full w-full object-cover" width={500} height={500} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Additional Products */}
      <section className="py-16 px-10">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-xl sm:text-3xl font-semibold mb-10 text-center">Our Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[pic12, pic2, pic3, pic4].map((pic, index) => (
              <div key={index} className="relative p-4 shadow-sm flex flex-col">
                <Image className="w-full h-80 object-cover mb-4" src={pic} alt={`Product ${index + 1}`} />
                <div className="flex flex-col space-y-2">
                  <h3 className="text-sm font-medium text-gray-800">Library Stool Chair {index + 1}</h3>
                  <p className="text-gray-500 text-sm">$20</p>
                </div>
                <button className="absolute bottom-4 right-4 bg-[#007580] text-white p-2 rounded-full shadow-lg hover:bg-[#005e5e] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4m-.4 8h14m-8 6a1 1 0 100 2 1 1 0 000-2zm6 0a1 1 0 100 2 1 1 0 000-2z" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
        <section className="py-16 px-10">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[pic13, pic10, pic11, pic9].map((pic, index) => (
              <div key={index} className="relative p-4 shadow-sm flex flex-col">
                <Image className="w-full h-80 object-cover mb-4" src={pic} alt={`Product ${index + 1}`} />
                <div className="flex flex-col space-y-2">
                  <h3 className="text-sm font-medium text-gray-800">Library Stool Chair {index + 1}</h3>
                  <p className="text-gray-500 text-sm">$20</p>
                </div>
                <button className="absolute bottom-4 right-4 bg-[#007580] text-white p-2 rounded-full shadow-lg hover:bg-[#005e5e] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4m-.4 8h14m-8 6a1 1 0 100 2 1 1 0 000-2zm6 0a1 1 0 100 2 1 1 0 000-2z" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      </section>
    
    </div>
  );
};

export default Home;
