"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Catalog() {
  return (
    <main className="bg-white px-6 py-20">

      {/* NAVBAR */}
      <Navbar />

      {/* BACK BUTTON */}
      <Link href="/">
        <button className="mb-8 text-sm text-blue-600 hover:underline">
          ← Back to Home
        </button>
      </Link>

      <h1 className="text-4xl text-center mb-12">
        Product Catalog
      </h1>

      {/* CATEGORY GRID */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {[
          { img: "/images/women.png", title: "Women Collection", slug: "women" },
          { img: "/images/kids.png", title: "Kids Collection", slug: "kids" },
          { img: "/images/kids2.png", title: "New Arrivals", slug: "new" },
        ].map((item, i) => (

          <Link key={i} href={`/catalog/${item.slug}`}>

            <div className="cursor-pointer rounded-xl overflow-hidden shadow hover:scale-105 transition">

              <img src={item.img} className="w-full h-64 object-cover" />

              <div className="p-4 text-center">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-2">
                  Starting ₹449
                </p>
              </div>

            </div>

          </Link>

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