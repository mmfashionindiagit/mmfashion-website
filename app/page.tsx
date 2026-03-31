"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Countdown from "./components/Countdown";
import Footer from "./components/Footer";

export default function Home() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [collection, setCollection] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [leadCount, setLeadCount] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const fetchCount = async () => {
      const res = await fetch("/api/lead");
      const data = await res.json();
      setLeadCount(data.count || 0);
    };
    fetchCount();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  // ✅ SMART SCROLL CONTROL (No duplicate + hide near form)
  useEffect(() => {
    const handleScroll = () => {
      const leadSection = document.getElementById("lead");

      if (!leadSection) return;

      const rect = leadSection.getBoundingClientRect();

      if (window.scrollY > 400 && rect.top > 200) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <main className="text-[color:var(--brand-gold)] pb-28 bg-white">

      <Navbar />

      {/* HERO */}
      <section className="bg-[#111214] px-6 pt-60 pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">

          <div className="text-center md:text-left max-w-lg">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              M&M Fashion India
            </h1>

            <p className="text-gray-300 mb-3 text-lg">
              Premium Footwear for Women & Kids
            </p>

            <p className="text-gray-400 mb-6">
              Where Comfort Meets Timeless Style
            </p>

            <div className="mt-6 mb-6">
              <Countdown />
            </div>

            {/* HERO CTA (kept intact) */}
            <a href="#lead">
              <button className="px-8 py-4 bg-[color:var(--brand-gold)] text-black rounded-full font-semibold hover:scale-105 transition">
                Get Early Access
              </button>
            </a>

            <p className="text-sm text-yellow-400 mt-4">
              ⚡ Limited early access registrations
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src="/images/model.png"
              alt="Model"
              className="w-[70%] max-w-[350px] object-contain"
            />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-black">
          About M&M Fashion India
        </h2>

        <p className="text-gray-600 leading-8">
          M&M Fashion India is a modern footwear brand bringing elegance,
          comfort, and affordability together. Designed for women and kids,
          our collections are crafted to suit every occasion.
        </p>

        <p className="text-gray-500 mt-6">
          Our mission is simple — to make every step confident, stylish,
          and comfortable.
        </p>
      </section>

      {/* COLLECTION */}
      <section id="collections" className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-12 text-black">
          Explore Our Collections
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="relative group overflow-hidden rounded-2xl shadow">
            <img src="/images/women.png"
              className="w-full h-[400px] object-cover group-hover:scale-105 transition" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-3xl text-white font-semibold">
                Women Collection
              </h3>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-2xl shadow">
            <img src="/images/kids.png"
              className="w-full h-[400px] object-cover group-hover:scale-105 transition" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h3 className="text-3xl text-white font-semibold">
                Kids Collection
              </h3>
            </div>
          </div>
        </div>
      </section>

{/* WOMAN */}
      <section className="py-20 px-6 text-center bg-white">
  <h2 className="text-3xl font-semibold mb-3 text-black">
    WOMAN SANDALS
  </h2>

  <p className="text-gray-500 mb-10">
    Elegant styles designed for modern women
  </p>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
    <img src="/images/web1.png" className="rounded-xl hover:scale-105 transition" />
    <img src="/images/web3.png" className="rounded-xl hover:scale-105 transition" />
  </div>

  <a href="https://instagram.com/mmfashionindia" target="_blank"
    className="inline-block mt-8 px-6 py-3 bg-black text-white rounded-full">
    View More
  </a>
</section>

      {/* KIDS */}
      <section className="py-20 px-6 text-center bg-gray-50">
  <h2 className="text-3xl font-semibold mb-3 text-black">
    KID'S SLIDERS
  </h2>

  <p className="text-gray-500 mb-10">
    Comfortable and fun designs for kids
  </p>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
    <img src="/images/kids2.png" className="rounded-xl hover:scale-105 transition" />
    <img src="/images/kids3.png" className="rounded-xl hover:scale-105 transition" />
  </div>

  <a href="https://instagram.com/mmfashionindia" target="_blank"
    className="inline-block mt-8 px-6 py-3 bg-black text-white rounded-full">
    View More
  </a>
</section>

        {/* NEW ARRIVALS */}
      <section className="py-20 px-6 text-center bg-white">
  <h2 className="text-3xl font-semibold mb-3 text-black">
    New Arrivals
  </h2>

  <p className="text-gray-500 mb-10">
    Discover our latest styles and trending designs
  </p>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
    <img src="/images/web4.png" className="rounded-xl hover:scale-105 transition" />
    <img src="/images/web5.png" className="rounded-xl hover:scale-105 transition" />
  </div>

  <a href="https://instagram.com/mmfashionindia" target="_blank"
    className="inline-block mt-8 px-6 py-3 bg-black text-white rounded-full">
    Explore More
  </a>
</section>

      {/* LEAD FORM */}
      {/* LEAD FORM */}
      <section id="lead" className="py-20 bg-black flex justify-center px-4">

        <div className="w-full max-w-md bg-[#111214] border border-[#2a2a2a] rounded-3xl p-8 text-white shadow-xl">

          <h3 className="text-2xl mb-3 text-center">
            Get Notified at Launch
          </h3>

          <p className="text-sm text-gray-400 text-center mb-4">
            {leadCount}+ people already joined
          </p>

          <div className="space-y-4">

            {/* ✅ FIXED INPUTS */}
            <input type="text" placeholder="Name" value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white text-black placeholder-gray-500" />

            <input type="tel" placeholder="Phone" value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white text-black placeholder-gray-500" />

            <input type="email" placeholder="Email" value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white text-black placeholder-gray-500" />

            <select value={city} onChange={(e) => setCity(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white text-black">
              <option value="">City</option>
              <option>Hyderabad</option>
              <option>Mumbai</option>
              <option>Delhi</option>
            </select>

            <select value={collection} onChange={(e) => setCollection(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white text-black">
              <option value="">Interested In</option>
              <option>Women</option>
              <option>Kids</option>
              <option>Both</option>
            </select>

            <button onClick={handleSubmit} disabled={loading}
              className="w-full bg-[color:var(--brand-gold)] text-black py-3 rounded-xl font-semibold hover:scale-105 transition">
              {loading ? "Saving..." : "Notify Me"}
            </button>

            {/* ✅ SUCCESS */}
            {message === "success" && (
              <motion.p className="text-green-400 text-center">
                Registered Successfully!
              </motion.p>
            )}

            {/* ✅ ERROR (THIS WAS MISSING) */}
            {message && message !== "success" && (
              <p className="text-red-400 text-center">
                {message}
              </p>
            )}

          </div>
        </div>
      </section>
      {/* LOCATION */}
      <section className="py-16 bg-[#111214] text-center text-white">
        <h3 className="text-2xl mb-4">📍 Opening Soon in Hyderabad</h3>
        <p className="text-gray-400">
          Grand Opening at Next Galleria Mall
        </p>
      </section>

      <Footer />

      {/* WHATSAPP */}
      <a href="https://wa.me/6302800945" target="_blank"
        className="fixed bottom-6 right-4 bg-green-500 text-white px-5 py-3 rounded-full shadow-2xl hover:scale-110 transition z-50">
        Chat on WhatsApp
      </a>

      {/* STICKY CTA */}
      {showStickyCTA && (
        <motion.a
          href="#lead"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-[color:var(--brand-gold)] text-black px-6 py-3 rounded-full shadow-xl font-semibold z-40">
          Get Early Access
        </motion.a>
      )}

      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 w-[90%] max-w-md text-center relative">

            <button onClick={() => setShowPopup(false)}
              className="absolute top-3 right-4 text-gray-500">
              ✕
            </button>

            <h2 className="text-2xl font-semibold mb-4">
              🎁 Get Early Access
            </h2>

            <p className="text-gray-600 mb-6">
              Join M&M Fashion before launch & get exclusive offers
            </p>

            <button
              onClick={() => {
                setShowPopup(false);
                document.getElementById("lead")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-black text-white px-6 py-3 rounded-full">
              Join Now
            </button>
          </div>
        </div>
      )}

    </main>
  );
}