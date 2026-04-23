"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Countdown from "./components/Countdown";
import Footer from "./components/Footer";
import Trending from "./components/Trending";

export default function Home() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [collection, setCollection] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [leadCount, setLeadCount] = useState(120);

  const [showPopup, setShowPopup] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 6000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      setMessage("success");
      setLeadCount(prev => prev + 1);
      setLoading(false);

      setName("");
      setPhone("");
      setEmail("");
      setCity("");
      setCollection("");
    }, 1000);
  };

  return (
    <main className="bg-white text-[color:var(--brand-gold)] pb-28">

      <Navbar />

      {/* HERO PREMIUM */}
      <section className="relative bg-gradient-to-b from-black to-[#111214] px-6 pt-52 pb-28 overflow-hidden">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            {/* <img src="/images/logo.png" className="w-32 mb-6" /> */}

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 mt-12 md:mt-16">
              M&M Fashion
            </h1>

            <p className="text-gray-300 text-lg mb-2">
              Stylish & Affordable Footwear for Women & Kids
            </p>

            <p className="text-gray-400 mb-6">
              Designed for Comfort, Trend & Everyday Use
            </p>

            <Countdown />

            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center sm:items-start">

  <a href="#collections" className="w-full sm:w-auto">
    <button className="w-full sm:w-auto px-6 py-3 bg-[color:var(--brand-gold)] text-black rounded-full font-semibold hover:scale-105 transition">
      View Collections
    </button>
  </a>

  <a href="#lead" className="w-full sm:w-auto">
    <button className="w-full sm:w-auto px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
      Contact Us
    </button>
  </a>

  <a href="/catalog" className="w-full sm:w-auto">
    <button className="w-full sm:w-auto px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
      View Catalog
    </button>
  </a>

</div>
          </div>

          <img src="/images/model.png" className="w-[75%] mx-auto drop-shadow-2xl" />

        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 px-6 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl text-black mb-6">About M&M Fashion</h2>
        <p className="text-gray-600 leading-8">
          M&M Fashion is a growing footwear brand focused on stylish,
          comfortable, and affordable products for women and kids.
          Built for modern retail environments and high-demand categories.
        </p>
      </section>

      {/* BRAND EXPERIENCE (CARRY BAG) */}
<section className="py-24 bg-gray-50 px-6 text-center">
  
  <h2 className="text-3xl text-black mb-6">
    Premium Brand Experience
  </h2>

  <p className="text-gray-600 max-w-3xl mx-auto mb-12">
    Every purchase at M&M Fashion is designed to deliver not just products,
    but a premium retail experience you can carry with you.
  </p>

  <div className="max-w-3xl mx-auto">
    <img
      src="/images/carrybag.png"
      className="rounded-xl shadow-xl mx-auto"
      alt="M&M Fashion Carry Bag"
    />
  </div>

</section>

      {/* WHY PREMIUM CARDS */}
      <section className="py-24 bg-gray-50 text-center">
        <h2 className="text-3xl text-black mb-12">Why M&M Fashion</h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6">

          {["Affordable Pricing", "Trend-Focused Designs", "High Demand Category"].map((item) => (
            <div key={item}
              className="p-8 bg-white/70 backdrop-blur rounded-2xl shadow-lg hover:scale-105 transition">
              {item}
            </div>
          ))}

        </div>
      </section>

      {/* COLLECTIONS */}
      <section id="collections" className="py-24 px-6 bg-white text-center">

        <h2 className="text-3xl text-black mb-4">Product Range</h2>

        <div className="flex justify-center mb-10">
          <span className="bg-[color:var(--brand-gold)] text-black px-6 py-2 rounded-full font-semibold shadow">
            Starting from ₹449
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          <div className="relative group">
            <img src="/images/women.png" className="rounded-xl" />
            <p className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded">
              Women Footwear
            </p>
          </div>

          <div className="relative group">
            <img src="/images/kids.png" className="rounded-xl" />
            <p className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded">
              Kids Footwear
            </p>
          </div>

        </div>
      </section>

      <Trending />

      {/* STORE GALLERY */}
      <section className="py-24 bg-gray-50 text-center px-6">

        <h2 className="text-3xl text-black mb-6">
          Store Concept & Experience
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Designed for modern retail with high visibility and smooth customer experience.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">

          <img src="/images/store1.webp"
            className="rounded-xl shadow-lg hover:scale-105 transition" />

          <img src="/images/store2.webp"
            className="rounded-xl shadow-lg hover:scale-105 transition" />

        </div>

      </section>

      <section className="py-24 px-6 bg-white text-center">

  <h2 className="text-3xl text-black mb-6">
    Store Layout & Display
  </h2>

  <p className="text-gray-600 max-w-3xl mx-auto mb-12">
    Optimized layout for maximum visibility, customer flow, and product display efficiency.
  </p>

  <div className="max-w-4xl mx-auto">
    <img
      src="/images/store-layout.png"
      className="rounded-xl shadow-lg mx-auto"
      alt="Store Layout"
    />
  </div>

</section>

      <section className="py-24 px-6 bg-white text-center">

  <h2 className="text-3xl text-black mb-6">
    Expansion Roadmap
  </h2>

  <p className="text-gray-600 max-w-3xl mx-auto mb-12">
    M&M Fashion is focused on expanding across high-footfall malls
    and retail locations in major cities across India.
  </p>

  <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

    <div className="p-6 bg-gray-50 rounded-xl shadow">
      <h3 className="font-semibold mb-2">Phase 1</h3>
      <p className="text-gray-500">Hyderabad (Active)</p>
    </div>

    <div className="p-6 bg-gray-50 rounded-xl shadow">
      <h3 className="font-semibold mb-2">Phase 2</h3>
      <p className="text-gray-500">Kolkata (Active)</p>
    </div>

    <div className="p-6 bg-gray-50 rounded-xl shadow">
      <h3 className="font-semibold mb-2">Phase 3</h3>
      <p className="text-gray-500">Mumbai | Bangalore | Lucknow</p>
    </div>

    <div className="p-6 bg-gray-50 rounded-xl shadow">
      <h3 className="font-semibold mb-2">Phase 4</h3>
      <p className="text-gray-500">Pan India Expansion</p>
    </div>

  </div>

</section>

<section className="py-24 bg-gray-50 text-center px-6">

  <h2 className="text-3xl text-black mb-6">
    Store Requirements
  </h2>

  <p className="text-gray-600 max-w-3xl mx-auto mb-12">
    Optimized for mall environments with efficient space utilization
    and high visual appeal.
  </p>

  <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

    <div className="p-6 bg-white rounded-xl shadow">
      <h3 className="font-semibold">Area</h3>
      <p className="text-gray-500">200 – 400 sq ft</p>
    </div>

    <div className="p-6 bg-white rounded-xl shadow">
      <h3 className="font-semibold">Format</h3>
      <p className="text-gray-500">Kiosk / Inline Store</p>
    </div>

    <div className="p-6 bg-white rounded-xl shadow">
      <h3 className="font-semibold">Category</h3>
      <p className="text-gray-500">Footwear – Women & Kids</p>
    </div>

  </div>

</section>

<section className="py-24 px-6 bg-white text-center">

  <h2 className="text-3xl text-black mb-12">
    Business Highlights
  </h2>

  <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">

    <div>
      <p className="text-3xl font-bold text-[color:var(--brand-gold)]">
        ₹449+
      </p>
      <p className="text-gray-500">Starting Price</p>
    </div>

    <div>
      <p className="text-3xl font-bold text-[color:var(--brand-gold)]">
        High
      </p>
      <p className="text-gray-500">Demand Category</p>
    </div>

    <div>
      <p className="text-3xl font-bold text-[color:var(--brand-gold)]">
        Fast
      </p>
      <p className="text-gray-500">Inventory Movement</p>
    </div>

    <div>
      <p className="text-3xl font-bold text-[color:var(--brand-gold)]">
        Modern
      </p>
      <p className="text-gray-500">Retail Concept</p>
    </div>

  </div>

</section>

      {/* FORM */}
      <section id="lead" className="py-24 bg-black flex justify-center px-4">

        <div className="w-full max-w-md bg-[#111214] border border-[#2a2a2a] rounded-3xl p-8 text-white shadow-2xl">

          <h3 className="text-2xl text-center mb-4">
            Partner With M&M Fashion
          </h3>

          <p className="text-gray-400 text-center mb-4">
            {leadCount}+ business inquiries received
          </p>

          <div className="space-y-4">

            <input value={name} onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="w-full px-4 py-3 bg-white text-black rounded-lg" />

            <input value={phone} onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              className="w-full px-4 py-3 bg-white text-black rounded-lg" />

            <input value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full px-4 py-3 bg-white text-black rounded-lg" />

            <button onClick={handleSubmit}
              className="w-full bg-[color:var(--brand-gold)] text-black py-3 rounded-xl hover:scale-105 transition">
              {loading ? "Sending..." : "Submit Inquiry"}
            </button>

            {message === "success" && (
              <p className="text-green-400 text-center">
                Inquiry Submitted Successfully!
              </p>
            )}

          </div>
        </div>
      </section>

      {/* VISIT US */}
<section className="py-20 bg-gray-50 text-center px-6">

  <h2 className="text-3xl text-black mb-6">
    Visit Our Store
  </h2>

  <p>
    M&M Fashion
  </p>

  <p className="text-gray-500 mb-8">
    L4, Next Galleria Mall,<br />
    Musarambagh, Hyderabad – 500036
  </p>

  <a
    href="https://maps.google.com/?q=Next+Galleria+Mall+Musarambagh+Hyderabad"
    target="_blank"
    className="inline-block px-6 py-3 bg-black text-white rounded-full hover:scale-105 transition"
  >
    Get Directions
  </a>

</section>

      <Footer />

      {/* WHATSAPP */}
      <a href="https://wa.me/6302800945"
        className="fixed bottom-6 right-4 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg">
        WhatsApp
      </a>

      {/* STICKY CTA */}
      {showStickyCTA && (
        <motion.a
          href="#lead"
          className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-[color:var(--brand-gold)] text-black px-6 py-3 rounded-full shadow-xl">
          Contact Us
        </motion.a>
      )}

      {/* POPUP */}
{showPopup && (
  <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">

    <div className="relative bg-white p-6 md:p-8 rounded-2xl text-center shadow-2xl max-w-sm w-full">

      {/* CLOSE BUTTON (FIXED & VISIBLE) */}
      <button
        onClick={() => setShowPopup(false)}
        className="absolute top-3 right-3 text-black text-xl font-bold hover:scale-110 transition"
      >
        ✕
      </button>

      {/* CONTENT */}
      <h3 className="text-2xl font-semibold mb-4 text-black">
        Partner With M&M Fashion
      </h3>

      <p className="text-gray-500 mb-6 px-2">
        For leasing opportunities, brand collaborations, and retail partnerships
      </p>

      {/* CTA BUTTON */}
      <button
        onClick={() => {
          setShowPopup(false);
          document.getElementById("lead")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="px-6 py-3 bg-black text-white rounded-full hover:scale-105 transition"
      >
        Contact Now
      </button>

    </div>
  </div>
)}

    </main>
  );
}