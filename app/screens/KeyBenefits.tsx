// KeyBenefits.tsx
export default function KeyBenefits() {
  return (
    <div className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-700">Why Choose Us?</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Quality Assurance</h3>
          <p className="text-gray-600">We maintain the highest standards of quality and ensure every project is completed to perfection.</p>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Timely Delivery</h3>
          <p className="text-gray-600">Our team is committed to delivering projects on schedule, ensuring you meet your deadlines.</p>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold mb-2 text-gray-700">Sustainability</h3>
          <p className="text-gray-600">We implement eco-friendly practices in construction and design to minimize environmental impact.</p>
        </div>
      </div>
    </div>
  );
}
