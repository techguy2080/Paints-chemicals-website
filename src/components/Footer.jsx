"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [isMounted, setIsMounted] = useState(false);

  // Macro ink colors
  const inkColors = [
    "#ff1744", // Vibrant Red
    "#ffd600", // Yellow
    "#2979ff", // Blue
    "#00e676", // Green
    "#d500f9", // Magenta
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <footer className="relative bg-gray-900 text-white pt-16 overflow-hidden">
      {/* Animated macro ink gradient background */}
      <motion.div
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{
          background: "linear-gradient(120deg, #ff1744 0%, #ffd600 25%, #2979ff 50%, #00e676 75%, #d500f9 100%)",
          backgroundSize: "200% 200%",
          opacity: 0.12,
        }}
      />
      {/* Animated floating ink blobs */}
      <motion.div
        className="pointer-events-none absolute inset-0 w-full h-full z-0"
        initial={false}
        animate={{}}
      >
        <motion.div
          className="absolute rounded-full blur-2xl opacity-30"
          style={{ background: "#ff1744", width: 220, height: 220, bottom: 40, left: 40 }}
          animate={{
            y: [0, 30, -20, 0],
            x: [0, 20, -10, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full blur-2xl opacity-20"
          style={{ background: "#ffd600", width: 180, height: 180, bottom: 80, right: 80 }}
          animate={{
            y: [0, -20, 20, 0],
            x: [0, -10, 10, 0],
            scale: [1, 1.08, 0.92, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full blur-2xl opacity-20"
          style={{ background: "#2979ff", width: 160, height: 160, top: 40, left: 120 }}
          animate={{
            y: [0, 15, -15, 0],
            x: [0, 10, -10, 0],
            scale: [1, 1.12, 0.98, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full blur-2xl opacity-20"
          style={{ background: "#00e676", width: 120, height: 120, top: 100, right: 120 }}
          animate={{
            y: [0, -10, 10, 0],
            x: [0, 8, -8, 0],
            scale: [1, 1.08, 0.92, 1],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full blur-2xl opacity-20"
          style={{ background: "#d500f9", width: 100, height: 100, bottom: 120, left: "60%" }}
          animate={{
            y: [0, 10, -10, 0],
            x: [0, -8, 8, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Macro Ink Gradient Wave Top Transition */}
      <div className="absolute top-0 inset-x-0 h-8 overflow-hidden -translate-y-full z-10">
        {isMounted ? (
          <motion.svg
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            className="w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <defs>
              <linearGradient id="footer-macroink" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff1744" />
                <stop offset="25%" stopColor="#ffd600" />
                <stop offset="50%" stopColor="#2979ff" />
                <stop offset="75%" stopColor="#00e676" />
                <stop offset="100%" stopColor="#d500f9" />
              </linearGradient>
            </defs>
            <path
              d="M0,0 C200,40 400,60 600,50 C800,40 1000,10 1200,30 L1200,60 L0,60 Z"
              fill="url(#footer-macroink)"
            />
            <path
              d="M0,30 C200,10 400,40 600,30 C800,20 1000,15 1200,25 L1200,60 L0,60 Z"
              fill="#1a202c"
            />
          </motion.svg>
        ) : (
          <div className="w-full h-full bg-gray-900" />
        )}
      </div>

      <div className="container mx-auto px-4 pb-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="relative text-xl font-bold mb-6 inline-block">
              <span className="relative z-10">AC Company Limited</span>
              {isMounted && (
                <motion.div 
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#ff1744] via-[#ffd600] via-[#2979ff] via-[#00e676] to-[#d500f9]"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              )}
            </h3>
            <p className="mb-4 text-gray-300">
              A diversified and innovative company committed to excellence in manufacturing
              and services since 2022.
            </p>
            {/* Premium Logo/Badge */}
            {isMounted && (
              <motion.div
                className="mt-6 w-16 h-16 relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff1744] via-[#ffd600] via-[#2979ff] via-[#00e676] to-[#d500f9] p-0.5">
                  <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                    <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff1744] via-[#ffd600] via-[#2979ff] via-[#00e676] to-[#d500f9]">AC</span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="relative text-xl font-bold mb-6 inline-block">
              <span className="relative z-10">Quick Links</span>
              {isMounted && (
                <motion.div 
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#ff1744] via-[#ffd600] via-[#2979ff] via-[#00e676] to-[#d500f9]"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              )}
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/products", label: "Products" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" },
              ].map((link, i) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <span className="inline-block w-1.5 h-1.5 mr-2 rounded-full bg-gray-600 group-hover:bg-gradient-to-r group-hover:from-[#ff1744] group-hover:via-[#ffd600] group-hover:via-[#2979ff] group-hover:via-[#00e676] group-hover:to-[#d500f9]" />
                    <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#ff1744] group-hover:via-[#ffd600] group-hover:via-[#2979ff] group-hover:via-[#00e676] group-hover:to-[#d500f9]">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="relative text-xl font-bold mb-6 inline-block">
              <span className="relative z-10">Contact Information</span>
              {isMounted && (
                <motion.div 
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#ff1744] via-[#ffd600] via-[#2979ff] via-[#00e676] to-[#d500f9]"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              )}
            </h3>
            <address className="not-italic text-gray-300">
              <p>Juba Central Equatoria State</p>
              <p>South Sudan</p>
              <p className="mt-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +211911011236 / +211918558844
              </p>
              <p className="flex items-center mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                customercare@acinvest.org
              </p>
            </address>
          </div>
          
          {/* Follow Us */}
          <div>
            <h3 className="relative text-xl font-bold mb-6 inline-block">
              <span className="relative z-10">Follow Us</span>
              {isMounted && (
                <motion.div 
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#ff1744] via-[#ffd600] via-[#2979ff] via-[#00e676] to-[#d500f9]"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              )}
            </h3>
            <div className="flex space-x-5">
              {[
                {
                  label: "WhatsApp",
                  icon: <path fillRule="evenodd" d="M12.043 6.925a4.982 4.982 0 00-4.975 4.975c-.001.87.224 1.719.651 2.467L6.5 17.5l3.183-1.219a4.958 4.958 0 002.36.594h.004a4.982 4.982 0 004.97-4.975 4.943 4.943 0 00-1.449-3.525 4.944 4.944 0 00-3.525-1.45zm0-2a6.977 6.977 0 016.975 6.975 6.977 6.977 0 01-6.975 6.975h-.006a6.95 6.95 0 01-3.318-.84l-3.794 1.45 1.453-3.787a6.957 6.957 0 01-.91-3.444 6.977 6.977 0 016.575-7.329z" clipRule="evenodd" />,
                  color: "#25D366"
                },
                {
                  label: "Facebook",
                  icon: <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />,
                  color: "#1877F2"
                },
                {
                  label: "Instagram",
                  icon: <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />,
                  color: "#E1306C"
                }
              ].map((social, i) => (
                <motion.a 
                  href="#" 
                  key={i}
                  aria-label={social.label}
                  className="relative group"
                  whileHover={{ y: -3 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + (i * 0.1) }}
                >
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff1744] via-[#ffd600] via-[#2979ff] via-[#00e676] to-[#d500f9] opacity-0 group-hover:opacity-100 blur-sm transition-opacity"></span>
                  <span className="relative block p-2 bg-gray-800 rounded-full group-hover:bg-gray-700 transition-colors">
                    <svg className="w-6 h-6" fill={social.color} viewBox="0 0 24 24" aria-hidden="true">
                      {social.icon}
                    </svg>
                  </span>
                </motion.a>
              ))}
            </div>
            
            {/* Newsletter Subscription */}
            <div className="mt-6 bg-gray-800 bg-opacity-50 p-4 rounded-lg">
              <h4 className="text-sm font-semibold mb-2">Subscribe to our newsletter</h4>
              <div className="flex mt-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow bg-gray-700 text-white px-3 py-2 text-sm rounded-l-md focus:outline-none"
                />
                <button className="bg-gradient-to-r from-[#ff1744] via-[#ffd600] via-[#2979ff] via-[#00e676] to-[#d500f9] text-white px-3 py-2 rounded-r-md text-sm font-medium hover:scale-105 transition-transform">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright Bar with Macro Ink Gradient Border */}
        <div className="mt-12 pt-6 relative">
          {/* Macro Ink Top Border */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff1744] via-[#ffd600] via-[#2979ff] via-[#00e676] to-[#d500f9]" />
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} AC Company Limited. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <Link href="/privacy" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#ff1744] hover:via-[#ffd600] hover:via-[#2979ff] hover:via-[#00e676] hover:to-[#d500f9]">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#ff1744] hover:via-[#ffd600] hover:via-[#2979ff] hover:via-[#00e676] hover:to-[#d500f9]">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}