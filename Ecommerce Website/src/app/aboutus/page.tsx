import Image from "next/image"
import Link from "next/link"

type Product = {
  id: number
  name: string
  price: number
  imageUrl: string
  width: number
  height: number
}

const products: Product[] = [
  {
    id: 1,
    name: "The Poplar suede sofa",
    price: 99.00,
    imageUrl: "/images/16.jpg",
    width: 580,
    height: 360
  },
  {
    id: 2,
    name: "The Dandy chair",
    price: 99.00,
    imageUrl: "/images/17.jpg",
    width: 380,
    height: 360
  },
  {
    id: 3,
    name: "The Dandy chair",
    price: 99.00,
    imageUrl: "/images/18.jpg",
    width: 280,
    height: 360
  }
]

const features = [
  {
    icon: "🚚",
    title: "Next day as standard",
    description: "Order before 3pm and get your order the next day as standard"
  },
  {
    icon: "🛠️",
    title: "Made by true artisans",
    description: "Handmade crafted goods made with real passion and craftsmanship"
  },
  {
    icon: "💰",
    title: "Unbeatable prices",
    description: "For our materials and quality you won't find better prices anywhere"
  },
  {
    icon: "♻️",
    title: "Recycled packaging",
    description: "We use 100% recycled packaging to ensure our footprint is more manageable"
  }
]

export default function HomePage() {
  return (
    <main className="max-w-[1320px] mx-auto px-4">
      {/* About Section */}
      <section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#115E59] text-white rounded-lg p-12 flex flex-col justify-center min-h-[478px]">
            <h2 className="text-3xl font-bold mb-6">About Us - Comforty</h2>
            <p className="text-base mb-8 leading-relaxed opacity-90">
              At Comforty, we believe that the right chair can transform your space
              and elevate your comfort. Specializing in ergonomic design, premium
              materials, and modern aesthetics, we craft chairs that seamlessly blend
              style with functionality.
            </p>
            <Link 
              href="/collection"
              className="inline-flex px-6 py-3 bg-white text-[#115E59] rounded-md font-medium hover:bg-gray-100 transition-colors w-fit"
            >
              View collection
            </Link>
          </div>
          <div className="rounded-lg overflow-hidden h-[478px]">
            <Image
              src="/images/01.png"
              alt="Comforty Chair"
              width={619}
              height={478}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Makes Our Brand Different
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 bg-white border border-gray-200 rounded-lg text-center"
            >
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-12">Our Popular Products</h2>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6">
            <Link href={`/product/${products[0].id}`} className="group block">
              <div className="relative">
                <Image
                  src={products[0].imageUrl}
                  alt={products[0].name}
                  width={580}
                  height={360}
                  className="w-full h-[390px] rounded-lg"
                  priority
                />
                <div className="mt-4">
                  <h3 className="text-lg font-medium group-hover:text-[#115E59] transition-colors">
                    {products[0].name}
                  </h3>
                  <p className="text-gray-600">
                    ${products[0].price.toFixed(2)}
                  </p>
                </div>
              </div>
            </Link>
          </div>
          {products.slice(1).map((product) => (
            <div key={product.id} className="col-span-12 md:col-span-3">
              <Link href={`/product/${product.id}`} className="group block">
                <div className="relative">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={product.width}
                    height={product.height}
                    className="w-full rounded-lg"
                  />
                  <div className="mt-4">
                    <h3 className="text-lg font-medium group-hover:text-[#115E59] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}



