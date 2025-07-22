"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Dialog } from "@headlessui/react";
import * as Popover from "@radix-ui/react-popover";
import CookieConsent from "./components/CookieConsent";
import useIsMobile from "../hooks/useIsMobile";

export default function HomePage() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef(null);

  // Macro ink colors
  const inkColors = [
    "#ff1744", // Vibrant Red
    "#ffd600", // Yellow
    "#2979ff", // Blue
    "#00e676", // Green
    "#d500f9", // Magenta
  ];

  // Example featured products (add more as needed)
  const featuredProducts = [
    {
      id: 1,
      name: "Weather Guard Emulsion",
      description: "Premium exterior emulsion paint designed to withstand harsh weather conditions.",
      image: "/images/products/top.jpg",
      category: "paint",
    },
    {
      id: 2,
      name: "AC AquaClean",
      description: "Multipurpose liquid soap for hand washing and general cleaning.",
      image: "/images/products/aqa.jpg",
      category: "soap",
    },
    {
      id: 3,
      name: "Vinyl Silk",
      description: "Luxurious, high-sheen finish emulsion paint for interior and exterior surfaces.",
      image: "/images/products/app.jpg",
      category: "paint",
    },
  ];

  return (
    <div className="overflow-hidden bg-white min-h-screen relative">
      {/* Animated floating ink blobs */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-full h-full z-0"
        initial={false}
        animate={{}}
      >
        {/* Red blob */}
        <motion.div
          className="absolute rounded-full"
          style={{
            background: "#ff1744",
            width: isMobile ? 120 : 320,
            height: isMobile ? 120 : 320,
            top: isMobile ? 40 : 80,
            left: isMobile ? 10 : 40,
            filter: isMobile ? "blur(8px)" : "blur(32px)",
            opacity: isMobile ? 0.13 : 0.4,
            willChange: "transform, opacity"
          }}
          animate={{
            y: isMobile ? [0, 10, -8, 0] : [0, 40, -30, 0],
            x: isMobile ? [0, 8, -6, 0] : [0, 30, -20, 0],
            scale: [1, isMobile ? 1.05 : 1.15, isMobile ? 0.98 : 0.95, 1],
          }}
          transition={{
            duration: isMobile ? 10 : 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Yellow blob */}
        <motion.div
          className="absolute rounded-full"
          style={{
            background: "#ffd600",
            width: isMobile ? 90 : 260,
            height: isMobile ? 90 : 260,
            top: isMobile ? 120 : 200,
            right: isMobile ? 20 : 60,
            filter: isMobile ? "blur(8px)" : "blur(32px)",
            opacity: isMobile ? 0.09 : 0.3,
            willChange: "transform, opacity"
          }}
          animate={{
            y: isMobile ? [0, -8, 8, 0] : [0, -30, 30, 0],
            x: isMobile ? [0, -6, 6, 0] : [0, -20, 20, 0],
            scale: [1, isMobile ? 1.03 : 1.1, isMobile ? 0.97 : 0.9, 1],
          }}
          transition={{
            duration: isMobile ? 12 : 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Only show extra blobs on desktop */}
        {!isMobile && (
          <>
            {/* Blue blob */}
            <motion.div
              className="absolute rounded-full"
              style={{
                background: "#2979ff",
                width: 300,
                height: 300,
                bottom: 80,
                left: 120,
                filter: "blur(32px)",
                opacity: 0.3,
                willChange: "transform, opacity"
              }}
              animate={{
                y: [0, 30, -30, 0],
                x: [0, 20, -20, 0],
                scale: [1, 1.12, 0.98, 1],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Green blob */}
            <motion.div
              className="absolute rounded-full"
              style={{
                background: "#00e676",
                width: 220,
                height: 220,
                bottom: 100,
                right: 100,
                filter: "blur(32px)",
                opacity: 0.3,
                willChange: "transform, opacity"
              }}
              animate={{
                y: [0, -20, 20, 0],
                x: [0, 15, -15, 0],
                scale: [1, 1.08, 0.92, 1],
              }}
              transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Magenta blob */}
            <motion.div
              className="absolute rounded-full"
              style={{
                background: "#d500f9",
                width: 180,
                height: 180,
                top: 400,
                left: "50%",
                filter: "blur(32px)",
                opacity: 0.3,
                willChange: "transform, opacity"
              }}
              animate={{
                y: [0, 15, -15, 0],
                x: [0, -10, 10, 0],
                scale: [1, 1.1, 0.9, 1],
              }}
              transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}
      </motion.div>

      {/* Macro Ink Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden z-10">
        {/* Macro Ink Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="absolute object-cover w-full h-full"
            style={{ filter: "brightness(1.05) saturate(1.2)" }}
          >
            <source src="/videos/macro-ink.mp4" type="video/mp4" />
            {/* Replace with your macro ink video */}
            Your browser does not support the video tag.
          </video>
          {/* Soft white overlay for luminosity */}
          <div className="absolute inset-0 bg-white/60 pointer-events-none" />
          {/* Subtle swirling organic overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 1440 900" fill="none" className="w-full h-full">
              <motion.path
                d="M0,600 Q360,800 720,600 T1440,600"
                stroke="url(#swirlGradient)"
                strokeWidth="120"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                opacity={0.08}
              />
              <defs>
                <linearGradient id="swirlGradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#ff1744" />
                  <stop offset="0.25" stopColor="#ffd600" />
                  <stop offset="0.5" stopColor="#2979ff" />
                  <stop offset="0.75" stopColor="#00e676" />
                  <stop offset="1" stopColor="#d500f9" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          {/* Animated border at the bottom */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-2"
            style={{
              background:
                "linear-gradient(90deg,#ff1744,#ffd600,#2979ff,#00e676,#d500f9)",
            }}
            animate={{
              filter: [
                "blur(0px)",
                "blur(6px)",
                "blur(0px)",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
        {/* Hero Content */}
        <div className="container relative mx-auto px-4 z-10">
          <div className="max-w-3xl mt-32">
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-900 drop-shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <span className="block">AC Company Limited</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ff1744] via-[#ffd600] via-[#2979ff] via-[#00e676] to-[#d500f9] drop-shadow-lg">
                Excellence in Paints & Surface Solutions
              </span>
            </motion.h1>
            <p className="text-xl text-gray-700 mb-10 drop-shadow max-w-xl">
              Creating vibrant, durable, and eco-friendly paints and soaps for homes, businesses, and industry. Driven by innovation, quality, and a passion for color since 2022.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/products"
                  className="px-8 py-4 bg-gradient-to-r from-[#ff1744] via-[#ffd600] to-[#2979ff] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  Explore Products
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-bold rounded-full hover:bg-gray-900 hover:text-white transition-all"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Macro Ink Color Palette */}
      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 drop-shadow">
              <span className="relative">
                Signature Paint Palette
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ff1744] via-[#ffd600] via-[#2979ff] via-[#00e676] to-[#d500f9]"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </span>
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              Explore our vibrant, long-lasting paint colors—crafted for beauty, durability, and a flawless finish on every surface.
            </p>
          </motion.div>
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-8">
              {inkColors.map((color, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: isMobile ? 10 : 20, scale: isMobile ? 0.9 : 0.8, rotate: 0 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 360 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8, type: "spring" }}
                  whileHover={{
                    y: isMobile ? -4 : -10,
                    scale: isMobile ? 1.07 : 1.15,
                    rotate: 0,
                    filter: "blur(1px)",
                    boxShadow: isMobile
                      ? `0 10px 15px -5px ${color}30`
                      : `0 20px 25px -5px ${color}40, 0 10px 10px -5px ${color}30`,
                    transition: { duration: 0.2 },
                  }}
                  className="group cursor-pointer"
                >
                  <div
                    className="w-28 h-28 md:w-40 md:h-40 rounded-full shadow-xl group-hover:shadow-2xl transition-all duration-300 flex items-center justify-center relative overflow-hidden"
                    style={{ backgroundColor: color }}
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <span className="text-white font-bold mb-1 text-lg drop-shadow">
                        {color}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 relative inline-block text-gray-900 drop-shadow">
              Featured Products
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ff1744] via-[#ffd600] via-[#2979ff] via-[#00e676] to-[#d500f9]"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular premium quality products, designed to
              deliver exceptional results.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{
                  y: -10,
                  boxShadow: `0 25px 50px -12px ${inkColors[index % inkColors.length]}40`,
                  transition: { duration: 0.2 },
                }}
                className="bg-white rounded-xl overflow-hidden shadow-xl group border border-gray-100"
              >
                <div className="h-64 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20 z-10" />
                  <div className="absolute top-0 left-0 w-full h-1 z-10 bg-gradient-to-r from-[#ff1744] via-[#ffd600] via-[#2979ff] via-[#00e676] to-[#d500f9]" />
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white py-1 px-3 rounded-full z-10">
                    <span
                      className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#ff1744] via-[#ffd600] via-[#2979ff] via-[#00e676] to-[#d500f9]"
                    >
                      {product.category === "paint" ? "Paint" : "Soap"}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 drop-shadow">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <Link href={`/products/${product.id}`}>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center text-transparent bg-clip-text bg-gradient-to-r from-[#ff1744] via-[#ffd600] via-[#2979ff] via-[#00e676] to-[#d500f9] font-semibold cursor-pointer"
                    >
                      <span>View Details</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.div>
                  </Link>
                </div>
                {/* Quick Info Popover */}
                <Popover.Root>
                  <Popover.Trigger asChild>
                    <button className="underline text-[#2979ff]">Quick Info</button>
                  </Popover.Trigger>
                  <Popover.Portal>
                    <Popover.Content className="rounded-lg p-4 bg-white shadow-xl border border-gray-200">
                      <span className="font-bold">{product.name}</span>
                      <p className="text-gray-600">{product.description}</p>
                    </Popover.Content>
                  </Popover.Portal>
                </Popover.Root>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-16">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/products"
                className="inline-block bg-gradient-to-r from-[#ff1744] via-[#ffd600] to-[#2979ff] hover:shadow-lg text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all"
              >
                Explore All Products
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AC Company Limited At a Glance */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900 drop-shadow">
              About AC Company Limited
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Since 2022, AC Company Limited has been a leader in premium paints, coatings, and soaps—serving homes, businesses, and industries with innovation, quality, and sustainability. Our products are designed for durability, beauty, and environmental safety.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="bg-white/80 rounded-xl shadow-lg p-6 w-64"
              >
                <h3 className="font-bold text-xl mb-2 text-blue-700">Our Vision</h3>
                <p className="text-gray-700 text-base">
                  To be the most trusted name in paints, soaps, and chemical solutions—enhancing and protecting homes and businesses while promoting sustainability and innovation.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="bg-white/80 rounded-xl shadow-lg p-6 w-64"
              >
                <h3 className="font-bold text-xl mb-2 text-purple-700">Our Mission</h3>
                <p className="text-gray-700 text-base">
                  To deliver high-performance, eco-friendly products and empower communities through skills and knowledge.
                </p>
              </motion.div>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { label: "Quality", color: "from-green-400 to-blue-400" },
                { label: "Integrity", color: "from-yellow-400 to-pink-400" },
                { label: "Innovation", color: "from-purple-400 to-indigo-400" },
                { label: "Customer Focus", color: "from-blue-400 to-green-400" },
                { label: "Sustainability", color: "from-pink-400 to-green-400" },
              ].map((item, idx) => (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.1, y: -6 }}
                  className={`px-5 py-2 rounded-full text-white font-semibold bg-gradient-to-r ${item.color} shadow`}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {item.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Why Choose AC Paints?</h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-blue-600">Premium Quality</h3>
                <p className="text-gray-700">Crafted with the finest ingredients for a superior finish, durability, and long-lasting protection.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-green-600">Eco-Friendly</h3>
                <p className="text-gray-700">Committed to sustainable, safe, and environmentally responsible manufacturing.</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-pink-600">Customer Focus</h3>
                <p className="text-gray-700">From product selection to after-sales support, your satisfaction is our priority.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Subscription Modal */}
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4">
          <Dialog.Panel className="mx-auto max-w-md w-full bg-white rounded-2xl p-8 shadow-2xl relative">
            <Dialog.Title className="text-2xl font-bold mb-4 text-gray-900">Subscribe to Updates</Dialog.Title>
            <p className="mb-6 text-gray-600">Get the latest news, offers, and color inspiration from AC Paints.</p>
            <form>
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="w-full py-2 bg-gradient-to-r from-[#2979ff] to-[#d500f9] text-white rounded-lg font-semibold hover:scale-105 transition"
              >
                Subscribe
              </button>
            </form>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl"
              aria-label="Close"
            >
              &times;
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Join Our Newsletter Button */}
      <div className="flex justify-center mt-8 z-10 relative">
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-3 bg-gradient-to-r from-[#2979ff] to-[#d500f9] text-white rounded-full shadow-lg hover:scale-105 transition"
        >
          Join Our Newsletter
        </button>
      </div>
      <CookieConsent />
    </div>
  );
}
