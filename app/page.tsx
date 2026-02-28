import Navbar from "./components/Navbar";
import Countdown from "./components/Countdown";

export default function Home() {
  return (
    // <main className="min-h-screen bg-white text-black">
    <main className="text-[color:var(--brand-gold)]">

      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-[#111214] px-6 pt-60 pb-20">

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">

    {/* LEFT SIDE - TEXT */}
    <div className="text-center md:text-left">

      <h1 className="text-4xl md:text-6xl font-bold text-[color:var(--brand-gold)] mb-6">
        M&M Fashion
      </h1>

      <p className="text-gray-300 mb-3">
        Where Comfort Meets Style
      </p>

      <p className="text-gray-400 mb-6">
        Footwear Brand | Women and Kids
      </p>

      <p className="text-gray-400 mb-6">
        Grand Store Opening Soon
      </p>

      <Countdown />

    </div>

    {/* RIGHT SIDE - MODEL IMAGE */}
    <div className="flex justify-center md:justify-end">
      <img
        src="/images/model.png"
        alt="Kids Collection"
        className="w-[60%] max-w-[300px] h-auto select-none"
      />
    </div>

  </div>

</section>

      {/* COLLECTION PREVIEW */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Explore Our Collections
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto py-20 px-6">

  <div className="relative group overflow-hidden rounded-2xl">
    <img
      src="/images/women.png"
      alt="Women Collection"
      className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-500"
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
      className="w-full h-[400px] object-cover group-hover:scale-105 transition duration-500"
    />
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
      <h3 className="text-3xl text-white font-semibold">
        Kids Collection
      </h3>
    </div>
  </div>

</div>
      </section>

      {/* EMAIL SECTION */}
      <section className="py-20 bg-black text-white text-center">
        <h3 className="text-2xl mb-4">
          Get Notified at Launch
        </h3>
        <p className="mb-6 text-gray-300">
          Subscribe for exclusive opening offers
        </p>

        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-md w-64"
          />
          <button className="bg-white text-black px-6 py-2 rounded-r-md">
            Notify Me
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-sm text-gray-500 border-t">
  <p className="mb-3">© 2026 M&M Fashion India. All rights reserved.</p>

  {/* <div className="flex justify-center gap-6 mb-3">
    <a href="https://instagram.com/mmfashionindia" target="_blank">Instagram</a>
    <a href="https://youtube.com/@mmfashionindia" target="_blank">YouTube</a>
    <a href="https://facebook.com/mmfashionindia" target="_blank">Facebook</a>
  </div> */}

  <p>info@mmfasionindia.com</p>
</footer>

      <a
  href="https://wa.me/"
  target="_blank"
  className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-3 rounded-full shadow-xl hover:scale-105 transition"
>
  WhatsApp
</a>

    </main>
  );
}