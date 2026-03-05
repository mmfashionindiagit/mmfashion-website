"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Countdown from "./components/Countdown";

export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [collection, setCollection] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [leadCount, setLeadCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      const res = await fetch("/api/lead");
      const data = await res.json();
      setLeadCount(data.count || 0);
    };
    fetchCount();
  }, []);

  const handleSubmit = async () => {
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          city,
          collection,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("success");

        setName("");
        setPhone("");
        setEmail("");
        setCity("");
        setCollection("");

        // Refresh count
        const countRes = await fetch("/api/lead");
        const countData = await countRes.json();
        setLeadCount(countData.count || 0);
      } else {
        setMessage(data.message);
      }

    } catch (error) {
      setMessage("Server Error");
    }

    setLoading(false);
  };

  return (
    <main className="text-[color:var(--brand-gold)] pb-28">

      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-[#111214] px-6 pt-60 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">

          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              M&M Fashion
            </h1>

            <p className="text-gray-300 mb-3">
              Where Comfort Meets Style
            </p>

            <p className="text-gray-400 mb-6">
              Footwear Brand | Women and Kids
            </p>

            <Countdown />

            <p className="text-sm text-red-400 mt-4">
              ⚡ Early access limited to first 300 registrations
            </p>

          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src="/images/model.png"
              alt="Model"
              className="w-[60%] max-w-[300px] h-auto"
            />
          </div>
        </div>
      </section>

      {/* COLLECTION SECTION */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Explore Our Collections
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto py-20 px-6">
          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src="/images/women.png"
              alt="Women Collection"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-3xl text-white font-semibold">
                Women Collection
              </h3>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl">
            <img
              src="/images/kids.png"
              alt="Kids Collection"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-3xl text-white font-semibold">
                Kids Collection
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* LEAD CARD SECTION */}
      <section className="py-20 bg-black flex justify-center px-4">

        <div className="w-full max-w-md bg-[#111214] border border-[#2a2a2a] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-8 text-white">

          <h3 className="text-2xl mb-3 text-center">
            Get Notified at Launch
          </h3>

          <p className="text-sm text-gray-400 text-center mb-4">
             {leadCount}+ people already joined
          </p>

          <p className="mb-6 text-gray-400 text-center">
            Subscribe for exclusive opening offers
          </p>

          <div className="space-y-4">

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white text-black"
            />

            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white text-black"
            />

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white text-black"
            />

            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white text-black"
            >
              <option value="">Select your city</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Chennai</option>
              <option>Bangalore</option>
              <option>Hyderabad</option>
              <option>Kolkata</option>
            </select>

            <select
              value={collection}
              onChange={(e) => setCollection(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white text-black"
            >
              <option value="">Interested In</option>
              <option>Women Collection</option>
              <option>Kids Collection</option>
              <option>Both</option>
            </select>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-[color:var(--brand-gold)] text-black px-6 py-3 rounded-xl font-semibold hover:scale-[1.02] active:scale-95 transition-all duration-200"
            >
              {loading ? "Saving..." : "Notify Me"}
            </button>

            {message === "success" && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-green-400 text-center mt-2"
              >
                Registered Successfully!
              </motion.p>
            )}

          </div>

        </div>

      </section>

      {/* STORE LOCATION TEASER */}
      <section className="py-16 bg-[#111214] text-center text-white">
        <h3 className="text-2xl mb-4">
          📍 Opening Soon in Hyderabad
        </h3>
        <p className="text-gray-400">
          Grand Opening at Next Galleria Mall – Stay Tuned!
        </p>
      </section>

        {/* FOOTER */}
      <footer className="py-12 text-center text-sm text-gray-500 border-t">
        <p className="mb-3">
          © 2026 M&M Fashion India. All rights reserved.
        </p>
        {/* <p>info@mmfasionindia.com</p> */}
      </footer>

<a
  href="https://wa.me/6302800945"   // ← replace with your real number
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-full shadow-xl hover:scale-105 transition duration-300"
>
  WhatsApp
</a>

    </main>
  );
}