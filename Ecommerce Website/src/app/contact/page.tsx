import { MapPin, Phone, Clock, Trophy, Shield, Headphones } from 'lucide-react'

export default function ContactForm() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-semibold mb-2">Get In Touch With Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          For More Information About Our Product & Services, Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-teal-500 mt-1" />
            <div>
              <h3 className="font-medium mb-2">Address</h3>
              <p className="text-gray-600">
                236 5th SE Avenue, New<br />
                York NY10000, United<br />
                States
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-teal-500 mt-1" />
            <div>
              <h3 className="font-medium mb-2">Phone</h3>
              <p className="text-gray-600">
                Mobile: +(84) 546-6789<br />
                Hotline: +(84) 456-6789
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock className="w-6 h-6 text-teal-500 mt-1" />
            <div>
              <h3 className="font-medium mb-2">Working Time</h3>
              <p className="text-gray-600">
                Monday-Friday: 9:00 -<br />
                22:00<br />
                Saturday-Sunday: 9:00 -<br />
                21:00
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Your name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="Abc"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email address</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="Abc@gmail.com"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="This is an optional"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="Hi! I'd like to ask about"
            />
          </div>

          <button
            type="submit"
            className="w-[237px] h-[55px] top-[235px] bg-[#029FAE] hover:bg-teal-800 text-white mt-4"          >
            Submit
          </button>
        </form>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 mt-16 bg-gray-50 p-8 rounded-lg">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-white rounded-full">
            <Trophy className="w-6 h-6 text-teal-500" />
          </div>
          <div>
            <h3 className="font-medium">High Quality</h3>
            <p className="text-sm text-gray-600">Crafted from top materials</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-3 bg-white rounded-full">
            <Shield className="w-6 h-6 text-teal-500" />
          </div>
          <div>
            <h3 className="font-medium">Warranty Protection</h3>
            <p className="text-sm text-gray-600">Over 2 years</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-3 bg-white rounded-full">
            <Headphones className="w-6 h-6 text-teal-500" />
          </div>
          <div>
            <h3 className="font-medium">24 / 7 Support</h3>
            <p className="text-sm text-gray-600">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
  )
}