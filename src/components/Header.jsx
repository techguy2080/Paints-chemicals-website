"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
import { motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const lastScrollY = useRef(0);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY > lastScrollY.current && window.scrollY > 80) {
        setHideHeader(true); // scrolling down
      } else {
        setHideHeader(false); // scrolling up
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: hideHeader ? -80 : 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg border-b-4 border-transparent"
          : "bg-white/80 backdrop-blur-sm"
      }`}
      style={{
        boxShadow: scrolled
          ? "0 4px 32px 0 rgba(255,23,68,0.08), 0 1.5px 0 0 rgba(41,121,255,0.08)"
          : undefined,
        borderImage: scrolled
          ? "linear-gradient(90deg,#ff1744,#ffd600,#2979ff,#00e676,#d500f9) 1"
          : undefined,
      }}
    >
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3 group z-10">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Logo />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-bold text-gray-800 group-hover:text-[#ff1744] transition-colors"
            style={{
              background:
                "linear-gradient(90deg,#ff1744,#ffd600,#2979ff,#00e676,#d500f9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            AC Paints
          </motion.span>
        </Link>

        {/* Mobile menu button */}
        <motion.button
          className="md:hidden relative z-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-50 shadow-sm">
            {isMenuOpen ? (
              <svg
                className="w-5 h-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </div>
        </motion.button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {[
            { name: "Home", href: "/" },
            { name: "About Us", href: "/about" },
            { name: "Products", href: "/products" },
            { name: "Services", href: "/services" },
            { name: "Resources", href: "/resources" }, // Added Resources page
            { name: "Contact", href: "/contact" },
          ].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -2 }}
            >
              <Link
                href={item.href}
                className="relative px-4 py-2 text-gray-700 font-medium rounded-full transition-colors group"
              >
                {item.name}
                <span
                  className="absolute left-1/2 -translate-x-1/2 bottom-1 h-1 w-0 group-hover:w-4/5 transition-all duration-300 rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg,#ff1744,#ffd600,#2979ff,#00e676,#d500f9)",
                  }}
                />
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="ml-2 bg-gradient-to-r from-[#ff1744] via-[#ffd600] via-[#2979ff] via-[#00e676] to-[#d500f9] text-white px-5 py-2 rounded-full font-medium hover:shadow-lg transition-all shadow-md"
              style={{
                boxShadow:
                  "0 4px 24px 0 rgba(255,23,68,0.15), 0 1.5px 0 0 rgba(41,121,255,0.10)",
              }}
            >
              Get a Quote
            </Link>
          </motion.div>
        </nav>
      </div>

      {/* Mobile navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <motion.nav className="bg-white/95 backdrop-blur-md px-6 pt-2 pb-6 border-t border-gray-100">
          <div className="flex flex-col space-y-4">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "/about" },
              { name: "Products", href: "/products" },
              { name: "Services", href: "/services" },
              { name: "Resources", href: "/resources" }, // Added Resources page
              { name: "Contact", href: "/contact" },
            ].map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 px-4 text-gray-800 font-medium rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block mt-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg font-medium text-center shadow-sm hover:shadow-md transition-all"
              >
                Get a Quote
              </Link>
            </motion.div>
          </div>
        </motion.nav>
      </motion.div>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-[40px]" />
    </motion.header>
  );
}