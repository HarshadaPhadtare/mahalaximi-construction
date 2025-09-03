// Testimonials.tsx
export default function Testimonials() {
  return (
    <div className="py-16 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-700">What Our Clients Say</h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 p-6 bg-white rounded-lg shadow-lg">
          <p className="text-gray-600">"The team delivered our construction project on time and beyond expectations. Highly recommended!"</p>
          {/* <p className="font-semibold mt-4">John Doe, CEO at RealCorp</p> */}
        </div>
        <div className="flex-1 p-6 bg-white rounded-lg shadow-lg">
          <p className="text-gray-600">"Excellent interior design work. Our office space now feels like home, and the team's attention to detail is outstanding."</p>
          {/* <p className="font-semibold mt-4">Jane Smith, Marketing Director at TechCo</p> */}
        </div>
      </div>
    </div>
  );
}
