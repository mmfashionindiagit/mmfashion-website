import Image from "next/image";
import { Instagram, Youtube, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[color:var(--brand-soft-dark)] text-white py-20 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center">

        <Image
          src="/logo/logotransparent.png"
          alt="M&M Fashion"
          width={130}
          height={40}
          className="mx-auto mb-8"
        />

        <div className="flex justify-center gap-6 mb-6">
          <Instagram className="w-5 h-5 hover:text-[color:var(--brand-gold)] transition" />
          <Youtube className="w-5 h-5 hover:text-[color:var(--brand-gold)] transition" />
          <Facebook className="w-5 h-5 hover:text-[color:var(--brand-gold)] transition" />
        </div>

        <p className="text-gray-400 text-sm">
          © 2026 M&M Fashion India. All rights reserved.
        </p>

        <p className="text-gray-500 text-sm mt-2">
          info@mmfasionindia.com
        </p>
      </div>
    </footer>
  );
}