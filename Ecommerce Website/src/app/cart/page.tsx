import Image from "next/image"
import { Heart, Trash2 } from 'lucide-react'

type CartItem = {
  id: number
  name: string
  details: string
  size: string
  quantity: number
  price: number
  image: string
}

const cartItems: CartItem[] = [
  {
    id: 1,
    name: "Library Stool Chair",
    details: "Ashen Slate/Cobalt Bliss",
    size: "L",
    quantity: 1,
    price: 99,
    image: "/images/03.jpg"
  },
  {
    id: 2,
    name: "Library Stool Chair",
    details: "Ashen Slate/Cobalt Bliss",
    size: "L",
    quantity: 1,
    price: 99,
    image: "/images/13.png"
  }
]

export default function Cart() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0)
  const shipping = 0 // Free shipping
  const total = subtotal + shipping

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-bold mb-6">Bag</h1>
          <div className="space-y-8">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 pb-6 border-b">
                <div className="relative w-24 h-24 bg-gray-50 rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 flex justify-between">
                  <div className="space-y-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.details}</p>
                    <div className="flex gap-8 text-sm text-gray-600">
                      <p>Size: {item.size}</p>
                      <p>Quantity: {item.quantity}</p>
                    </div>
                    <div className="flex gap-4 pt-2">
                      <button className="text-gray-600 hover:text-gray-900">
                        <Heart className="h-5 w-5" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">
                      MRP: ${item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div>
          <div className="mt-10 ml-10">
            <h2 className="text-xl font-medium mb-4">Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Estimated Delivery & Handling</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-medium pt-4 ">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button
                className="w-full h-[60px] top-[235px] rounded-full bg-[#029FAE] hover:bg-teal-800 text-white mt-4"
              >
                Member Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


