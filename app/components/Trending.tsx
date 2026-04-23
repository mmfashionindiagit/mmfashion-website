"use client";

import { useEffect, useState } from "react";

const items = [
  { name: "Kids Daily Wear Comfort", image: "/images/kids2.png" },
  { name: "Kids Sandals", image: "/images/kids6.webp" },
  { name: "Daily Wear Comfort", image: "/images/kids3.png" },
];

export default function Trending() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-black text-white text-center px-6">

      <h2 className="text-3xl mb-6">
        Trending Now
      </h2>

      <p className="text-gray-400 mb-10">
        Popular choices among our customers
      </p>

      <div className="max-w-md mx-auto">

        <img
          src={items[current].image}
          alt={items[current].name}
          className="rounded-xl mx-auto mb-4 transition duration-500"
        />

        <p className="text-lg font-semibold">
          {items[current].name}
        </p>

      </div>

    </section>
  );
}