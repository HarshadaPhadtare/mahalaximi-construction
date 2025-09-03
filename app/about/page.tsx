// pages/about.tsx
import Image from "next/image";
import { FaHammer, FaHome, FaPaintBrush } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-page bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-8">Building a Better Future, One Project at a Time</p>
        <Image
          src="/home1.jpg"
          alt="Construction Image"
          width={1200}
          height={600}
          className="w-full h-auto object-cover rounded-lg shadow-xl"
        />
      </section>

      {/* About Us Section */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-3xl font-bold mb-4 text-gray-700">Who We Are</h2>
        <p className="text-lg text-gray-800 mb-6">
          We are a multidisciplinary firm specializing in construction, interior design, and real estate. With years of
          experience, we bring creative and practical solutions to every project we take on.
        </p>
        <p className="text-lg text-gray-800 mb-6">
          Our mission is to create spaces that inspire, build properties that last, and guide clients to make informed
          real estate decisions.
        </p>
      </section>

      {/* Our Services Section */}
      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-700">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Construction */}
          <div className="p-6 bg-white rounded-lg shadow-lg text-center">
            <FaHammer className="text-4xl text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">Construction</h3>
            <p className="text-gray-700 mt-4">
              From residential to commercial projects, we handle all aspects of construction, ensuring precision and
              quality at every stage.
            </p>
          </div>

          {/* Real Estate */}
          <div className="p-6 bg-white rounded-lg shadow-lg text-center">
            <FaHome className="text-4xl text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">Real Estate</h3>
            <p className="text-gray-700 mt-4">
              We offer expert real estate services, including property buying, selling, and investment consulting.
            </p>
          </div>

          {/* Interior Design */}
          <div className="p-6 bg-white rounded-lg shadow-lg text-center">
            <FaPaintBrush className="text-4xl text-red-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">Interior Design</h3>
            <p className="text-gray-700 mt-4">
              Our team transforms spaces into functional and aesthetic environments, combining design with practical
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          {/* <div className="team-member">
            <Image
              src="/images/team1.jpg"
              alt="Team Member"
              width={200}
              height={200}
              className="w-48 h-48 rounded-full mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg">John Doe</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div> */}

          {/* Team Member 2 */}
          {/* <div className="team-member">
            <Image
              src="/images/team2.jpg"
              alt="Team Member"
              width={200}
              height={200}
              className="w-48 h-48 rounded-full mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg">Jane Smith</h3>
            <p className="text-gray-600">Interior Designer</p>
          </div>  */}

      
          {/* <div className="team-member">
            <Image
              src="/images/team3.jpg"
              alt="Team Member"
              width={200}
              height={200}
              className="w-48 h-48 rounded-full mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg">Robert Brown</h3>
            <p className="text-gray-600">Lead Architect</p>
          </div> */}
        {/* </div>
      </section> */}

      {/* Contact Section */}
      <section className="py-16 px-6 bg-blue-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg mb-8">Ready to start your next project? We’d love to hear from you.</p>
        <button className="bg-yellow-500 text-white py-2 px-6 rounded-lg text-lg hover:bg-yellow-600 transition-all">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default About;
