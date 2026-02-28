import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "M&M Fashion | Elegant Footwear for Women & Kids",
  description:
    "M&M Fashion offers stylish and comfortable footwear for women and kids. Grand store opening soon. Stay tuned for our online launch.",
  keywords: [
    "M&M Fashion",
    "Women Footwear",
    "Kids Footwear",
    "Fashion India",
    "Footwear Store",
  ],
  authors: [{ name: "M&M Fashion India" }],
  creator: "M&M Fashion",
  metadataBase: new URL("https://mmfasionindia.com"),
  openGraph: {
  title: "M&M Fashion | Elegant Footwear for Women & Kids",
  description:
    "Stylish and comfortable footwear for women and kids. Grand opening soon.",
  url: "https://mmfasionindia.com",
  siteName: "M&M Fashion",
  locale: "en_IN",
  type: "website",
},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} font-serif antialiased bg-white text-black`}
      >
        {children}
      </body>
    </html>
  );
}