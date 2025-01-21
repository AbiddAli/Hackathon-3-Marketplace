"use client"; // For Next.js 13+ App Router

const faqs = [
  {
    question: "What types of chairs do you offer?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "How can we get in touch with you?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "Do your chairs come with a warranty?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "What will be delivered? And When?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "Can I try a chair before purchasing?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
  {
    question: "How do I clean and maintain my Comferty chair?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
  },
];

export default function FAQSection() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <h2 className="text-center text-3xl font-bold mb-4">Questions Looks Here</h2>
      <p className="text-center text-gray-500 mb-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      {/* FAQ Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="p-5 bg-gray-100 rounded-lg shadow"
          >
            {/* Question */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {faq.question}
            </h3>

            {/* Answer */}
            <p className="text-gray-600">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
