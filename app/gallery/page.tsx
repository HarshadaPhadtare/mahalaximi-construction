"use client";

import { useState } from "react";
import { constructionCards ,realEstateCards,interiorCards} from "../component/cardStatic";


const allCards = [
  ...constructionCards.map((card) => ({ ...card, category: "Construction Projects" })),
  ...realEstateCards.map((card) => ({ ...card, category: "Real Estate" })),
  ...interiorCards.map((card) => ({ ...card, category: "Interior Design" }))
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter cards based on selected category
  const filteredCards = selectedCategory === "All" 
    ? allCards 
    : allCards.filter(card => card.category === selectedCategory);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>

      {/* Category Filter */}
      <div className="flex justify-center mb-6">
        <button onClick={() => setSelectedCategory("All")} className="px-4 py-2 font-semibold text-lg">
          All
        </button>
        <button onClick={() => setSelectedCategory("Construction Projects")} className="px-4 py-2 font-semibold text-lg">
          🏗️ Construction Projects
        </button>
        <button onClick={() => setSelectedCategory("Real Estate")} className="px-4 py-2 font-semibold text-lg">
          🏠 Real Estate
        </button>
        <button onClick={() => setSelectedCategory("Interior Design")} className="px-4 py-2 font-semibold text-lg">
          🛋️ Interior Design
        </button>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCards.map((card, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer">
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{card.desc}</p>
              <p className="text-gray-500 text-xs mt-1">{card.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
