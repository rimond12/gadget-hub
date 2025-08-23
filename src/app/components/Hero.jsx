"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative bg-gray-900 text-white min-h-[800px] mt-18 flex items-center justify-center"
      style={{
        backgroundImage: "url('https://i.ibb.co/k6myTwkL/n1wpopgdrfhs6ly0ttqo.webp')", // 👉 ekhane correct link use koro
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Centered Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          Welcome to <span className="text-blue-400">GadgetHub</span>
        </h1>

        {/* Subtext */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-8">
          Explore the latest gadgets and manage your products effortlessly in one place.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-4">
          <Link
            href="/products"
            className="px-8 py-3 rounded-2xl bg-blue-600 text-white font-medium shadow-lg hover:bg-blue-700 hover:shadow-xl transition"
          >
            🚀 View Products
          </Link>
          <Link
            href="#"
            className="px-8 py-3 rounded-2xl border border-gray-300/50 text-white font-medium hover:bg-white/10 transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
