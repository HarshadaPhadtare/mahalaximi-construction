// "use client";

// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";
// import Image from "next/image";

// export default function CardSlider() {
//   const cards = [
//     {
//       img: "/plotarea.jpg",
//       title: "Smart City Solar",
//       desc: "Clean energy solutions for urban areas.",
//     },
//     {
//       img: "/plot.png",
//       title: "Solar Farms",
//       desc: "Large-scale renewable energy projects.",
//     },
//     {
//       img: "/interior.jpg",
//       title: "Industrial Rooftops",
//       desc: "Sustainable energy for industries.",
//     },
//     {
//       img: "/building.jpg",
//       title: "Engineering Teams",
//       desc: "Expert planning & execution.",
//     },
//   ];

//   return (
//     <div className="p-6">
//       <Swiper
//         modules={[Navigation]}
//         navigation
//         spaceBetween={20}
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//       >
//         {cards.map((card, i) => (
//           <SwiperSlide key={i}>
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.98 }}
//               className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
//             >
//               <Image
//                 src={card.img}
//                 alt={card.title}
//                 width={400}
//                 height={250}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="text-lg font-semibold">{card.title}</h3>
//                 <p className="text-gray-600 text-sm mt-2">{card.desc}</p>
//               </div>
//             </motion.div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";

export default function CardSlider({ cards, title }) {
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
            >
              <Image
                src={card.img}
                alt={card.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{card.desc}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
