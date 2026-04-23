export default function Footer() {
  return (
    <footer className="bg-[color:var(--brand-soft-dark)] text-white pt-10 pb-10">

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* BRAND */}
        <h3 className="text-2xl font-semibold text-white mb-2">
          M&M Fashion
        </h3>

        <p className="text-gray-400 text-sm mb-6">
          Where comfort meets style
        </p>

        {/* EMAIL */}
        <p className="text-gray-500 text-sm mb-6">
          info@mmfasionindia.com
        </p>

        {/* COPYRIGHT */}
        <p className="text-gray-500 text-xs">
          © 2026 M&M Fashion India. All rights reserved.
        </p>

      </div>
    </footer>
  );
}