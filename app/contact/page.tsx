"use client";

import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setStatusMessage(
        "Thank you for reaching out! We will get back to you shortly."
      );
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-2 text-black">
        Contact Us
      </h1>
      <p className="text-center text-gray-600 mb-6">
        We'd love to hear from you! Fill out the form below, and we’ll get in
        touch.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block font-semibold mb-1 text-black"
          >
            Your Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md text-black focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block font-semibold mb-1 text-black"
          >
            Your Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md text-black focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block font-semibold mb-1 text-black"
          >
            Your Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full p-2 border rounded-md text-black focus:ring focus:ring-blue-300"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`p-2 rounded-md text-white font-semibold transition ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>

      {statusMessage && (
        <div className="mt-4 text-center text-green-600 font-medium">
          {statusMessage}
        </div>
      )}

      <div className="mt-8 text-center">
        <h2 className="text-lg font-bold mb-2 text-black">
          Our Contact Information:
        </h2>
        <p className="text-black">
          📧 Email:{" "}
          <a
            href="mailto:imahalaximi00096@gmail.com"
            className="text-blue-600 hover:underline"
          >
            imahalaximi00096@gmail.com
          </a>
        </p>
        <p className="text-black">
          📞 Phone:{" "}
          <a href="tel:+917757998804" className="text-blue-600 hover:underline">
            +91 7757998804
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
