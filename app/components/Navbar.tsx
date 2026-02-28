"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Youtube, Facebook } from "lucide-react";

export default function Navbar() {
  return (
    // <header className="w-full fixed top-0 left-0 z-50 bg-transparent">
    <header className="fixed w-full top-0 left-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5">

        {/* Logo */}
        <Link href="/">
          <Image
            className="w-50 md:w-50 mt-4"
            src="/logo/logotransparent.png"
            alt="M&M Fashion Logo"
            width={150}
            height={150}
            priority
          />
        </Link>

        {/* Social Icons */}
        <div className="flex items-center gap-6 text-white">
          <a
            href="https://instagram.com/mmfashionindia"
            target="_blank"
          >
            <Instagram className="w-5 h-5 text-black hover:text-[color:var(--brand-gold)] transition" />
          </a>

          <a
            href="https://youtube.com/@mmfashionindia"
            target="_blank"
          >
            <Youtube className="w-5 h-5 text-black hover:text-[color:var(--brand-gold)] transition" />
          </a>

          <a
            href="https://facebook.com/mmfashionindia"
            target="_blank"
          >
            <Facebook className="w-5 h-5 text-black hover:text-[color:var(--brand-gold)] transition" />
          </a>
        </div>
      </div>
    </header>
  );
}