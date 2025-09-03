"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";

type Card = {
  img: string;
  title: string;
  desc: string;
};

type CardSliderProps = {
  cards: Card[];
  title: string;
};

export default function CardSlider({ cards, title }: CardSliderProps) {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>("");

  // Function to handle opening the modal with the selected image
  const openModal = (img: string) => {
    setSelectedImage(img);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {cards.map((card, i) => (
          <SwiperSlide key={i}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
              onClick={() => openModal(card.img)} // Open modal on image click
            >
              <Image
                src={card.img}
                alt={card.title}
                width={400}
                height={250}
                className="w-full h-48 object-contain"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{card.desc}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal for displaying full image */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal} // Close modal on background click
        >
          <div
            className="relative bg-white p-4 max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
          >
            {/* Full image */}
            <Image
              src={selectedImage}
              alt="Full Image"
              width={1000} // Larger width for full image view
              height={1000} // Larger height for full image view
              className="max-w-full max-h-screen object-contain" // Ensure the image fits without cropping
            />
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 m-4 text-white text-3xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
