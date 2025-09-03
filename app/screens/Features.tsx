// Features.tsx
import { FaHammer, FaHome, FaPaintBrush } from "react-icons/fa";

export default function Features() {
  return (
    <div className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-700">Our Expertise</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Construction Service */}
        <div className="p-6 bg-white rounded-lg shadow-lg text-center">
          <FaHammer className="text-4xl text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700">Construction</h3>
          <p className="text-gray-600 mt-4">From residential to commercial projects, we handle all aspects of construction with precision and quality. Our team ensures every project is delivered on time and within budget.</p>
        </div>

        {/* Real Estate Service */}
        <div className="p-6 bg-white rounded-lg shadow-lg text-center">
          <FaHome className="text-4xl text-green-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700">Real Estate</h3>
          <p className="text-gray-600 mt-4">We offer expert real estate services from property buying/selling to consulting. Let us help you find the perfect investment or dream home.</p>
        </div>

        {/* Interior Design Service */}
        <div className="p-6 bg-white rounded-lg shadow-lg text-center">
          <FaPaintBrush className="text-4xl text-red-500 mb-4" />
          <h3 className="text-xl font-semibold text-gray-700">Interior Design</h3>
          <p className="text-gray-600 mt-4">Transforming interiors into functional and aesthetic spaces. We specialize in residential and commercial interior design that fits your lifestyle and vision.</p>
        </div>
      </div>
    </div>
  );
}
