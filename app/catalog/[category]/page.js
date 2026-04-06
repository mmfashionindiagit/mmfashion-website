"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";

const products = {
  women: [
    { name: "Heels", price: "₹799", img: "/images/web3.png" },
    { name: "Sandals", price: "₹949", img: "/images/web1.png" },
    { name: "Sliders", price: "₹699", img: "/images/web5.png" },
    { name: "Slippers", price: "₹549", img: "/images/web4.png" },
  ],
  kids: [
    { name: "Kids Shoes", price: "₹349", img: "/images/kids4.webp" },
    { name: "Kids Sliders", price: "₹449", img: "/images/kids3.png" },
    { name: "Kids Scool Shoes", price: "₹399", img: "/images/kids5.webp" },
    { name: "Kids Sandals", price: "₹449", img: "/images/kids6.webp" }
  ],
  new: [
    { name: "New Trend Sandal", price: "₹599", img: "/images/web2.png" },
  ],
};

export default function CategoryPage() {
  const params = useParams();
  const category = params.category;

  const items = products[category] || [];

  return (
    <main className="px-6 py-20 bg-white">

      {/* NAVBAR */}
      <Navbar />

      {/* BACK BUTTON */}
      <Link href="/catalog">
        <button className="mb-6 text-blue-600 hover:underline">
          ← Back to Catalog
        </button>
      </Link>

      <h1 className="text-3xl text-center mb-10 capitalize">
        {category} Collection
      </h1>

      {/* PRODUCTS GRID */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {items.map((item, i) => (
          <div key={i} className="shadow rounded-xl overflow-hidden hover:scale-105 transition">

            <img src={item.img} className="h-60 w-full object-cover" />

            <div className="p-4 text-center">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-500">{item.price}</p>
            </div>

          </div>
        ))}

      </div>

      {/* BACK BUTTON BOTTOM */}
            <div className="text-center mt-12">
              <Link href="/">
                <button className="px-6 py-3 bg-black text-white rounded-full hover:scale-105 transition">
                  ← Back to Home
                </button>
              </Link>
            </div>

    </main>
  );
}