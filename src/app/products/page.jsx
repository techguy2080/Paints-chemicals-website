"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import useIsMobile from '../../hooks/useIsMobile';

const PaintCanvas = dynamic(() => import('../../components/PaintCanvas'), { ssr: false });

export default function ProductsPage() {
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  useEffect(() => { setIsMounted(true); }, []);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const dripsY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const paintColors = [
    { name: "Crimson Red", class: "from-red-500 via-red-400 to-red-600", hex: "#e53e3e" },
    { name: "Amber Sunset", class: "from-orange-500 via-orange-400 to-orange-600", hex: "#ed8936" },
    { name: "Sunflower Yellow", class: "from-yellow-500 via-yellow-400 to-yellow-600", hex: "#ecc94b" },
    { name: "Evergreen", class: "from-green-500 via-green-400 to-green-600", hex: "#48bb78" },
    { name: "Ocean Blue", class: "from-blue-500 via-blue-400 to-blue-600", hex: "#4299e1" },
    { name: "Royal Indigo", class: "from-indigo-500 via-indigo-400 to-indigo-600", hex: "#667eea" },
    { name: "Lavender Purple", class: "from-purple-500 via-purple-400 to-purple-600", hex: "#9f7aea" },
    { name: "Rose Pink", class: "from-pink-500 via-pink-400 to-pink-600", hex: "#ed64a6" },
  ];

  // --- HERO SECTION ---
  return (
    <div className="bg-white overflow-hidden relative min-h-screen" ref={containerRef}>
      {/* Animated Macro Ink Background */}
      <motion.div className="pointer-events-none fixed top-0 left-0 w-full h-full z-0" initial={false} animate={{}}>
        {/* Red blob */}
        <motion.div className="absolute rounded-full" style={{
          background: "#ff1744", width: isMobile ? 120 : 320, height: isMobile ? 120 : 320,
          top: isMobile ? 30 : 80, left: isMobile ? 10 : 40, filter: isMobile ? "blur(8px)" : "blur(32px)",
          opacity: isMobile ? 0.12 : 0.40, willChange: "transform, opacity"
        }} animate={{
          y: isMobile ? [0, 12, -8, 0] : [0, 40, -30, 0], x: isMobile ? [0, 8, -6, 0] : [0, 30, -20, 0],
          scale: [1, isMobile ? 1.05 : 1.15, isMobile ? 0.98 : 0.95, 1],
        }} transition={{
          duration: isMobile ? 10 : 18, repeat: Infinity, ease: "easeInOut"
        }} />
        {/* Yellow blob */}
        <motion.div className="absolute rounded-full" style={{
          background: "#ffd600", width: isMobile ? 90 : 260, height: isMobile ? 90 : 260,
          top: isMobile ? 80 : 200, right: isMobile ? 20 : 60, filter: isMobile ? "blur(8px)" : "blur(32px)",
          opacity: isMobile ? 0.09 : 0.30, willChange: "transform, opacity"
        }} animate={{
          y: isMobile ? [0, -8, 8, 0] : [0, -30, 30, 0], x: isMobile ? [0, -6, 6, 0] : [0, -20, 20, 0],
          scale: [1, isMobile ? 1.03 : 1.1, isMobile ? 0.97 : 0.9, 1],
        }} transition={{
          duration: isMobile ? 12 : 22, repeat: Infinity, ease: "easeInOut"
        }} />
        {/* Only show extra blobs on desktop */}
        {!isMobile && (
          <>
            {/* Blue blob */}
            <motion.div className="absolute rounded-full" style={{
              background: "#2979ff", width: 300, height: 300, bottom: 80, left: 120,
              filter: "blur(32px)", opacity: 0.30, willChange: "transform, opacity"
            }} animate={{
              y: [0, 30, -30, 0], x: [0, 20, -20, 0], scale: [1, 1.12, 0.98, 1],
            }} transition={{
              duration: 20, repeat: Infinity, ease: "easeInOut"
            }} />
            {/* Green blob */}
            <motion.div className="absolute rounded-full" style={{
              background: "#00e676", width: 220, height: 220, bottom: 100, right: 100,
              filter: "blur(32px)", opacity: 0.30, willChange: "transform, opacity"
            }} animate={{
              y: [0, -20, 20, 0], x: [0, 15, -15, 0], scale: [1, 1.08, 0.92, 1],
            }} transition={{
              duration: 24, repeat: Infinity, ease: "easeInOut"
            }} />
            {/* Magenta blob */}
            <motion.div className="absolute rounded-full" style={{
              background: "#d500f9", width: 180, height: 180, top: 400, left: "50%",
              filter: "blur(32px)", opacity: 0.30, willChange: "transform, opacity"
            }} animate={{
              y: [0, 15, -15, 0], x: [0, -10, 10, 0], scale: [1, 1.1, 0.9, 1],
            }} transition={{
              duration: 26, repeat: Infinity, ease: "easeInOut"
            }} />
          </>
        )}
        {/* Soft white overlay for luminosity */}
        <div className="absolute inset-0 bg-white/60 pointer-events-none" />
      </motion.div>

      {/* HERO */}
      <div className="relative bg-gradient-to-r from-red-700 via-purple-800 to-blue-700 text-white py-32 overflow-hidden">
        {/* Paint splatter background - only rendered client-side */}
        {isMounted && (
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full opacity-20"
                  style={{
                    top: `${10 + (i * 8)}%`,
                    left: `${5 + (i * 9)}%`,
                    width: `${30 + (i * 15)}px`,
                    height: `${30 + (i * 15)}px`,
                    background: `linear-gradient(45deg, ${paintColors[i % paintColors.length].hex}, ${paintColors[(i + 2) % paintColors.length].hex})`,
                    filter: "blur(8px)"
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: i * 0.3
                  }}
                />
              ))}
            </div>
          </div>
        )}
        
        {/* Animated paint splash background elements */}
        <div className="absolute inset-0">
          {isMounted ? (
            <>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.3, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-red-400 blur-3xl"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.25, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.2 }}
                className="absolute -bottom-20 left-1/3 w-80 h-80 rounded-full bg-yellow-400 blur-3xl"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.2, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.4 }}
                className="absolute top-40 left-10 w-60 h-60 rounded-full bg-green-400 blur-3xl"
              />
              
              {/* Paint spatters with motion */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                className="absolute top-1/4 right-1/4 w-24 h-24"
              >
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <path d="M54.2,21.3c5.2,0,9.5,4.3,9.5,9.5s-4.3,9.5-9.5,9.5s-9.5-4.3-9.5-9.5S49,21.3,54.2,21.3z M21.5,49.4 c4.4,0,8,3.6,8,8s-3.6,8-8,8s-8-3.6-8-8S17.1,49.4,21.5,49.4z M66.4,58.8c3.6,0,6.5,2.9,6.5,6.5s-2.9,6.5-6.5,6.5 s-6.5-2.9-6.5-6.5S62.8,58.8,66.4,58.8z M30.5,84.9c2.7,0,4.9,2.2,4.9,4.9s-2.2,4.9-4.9,4.9s-4.9-2.2-4.9-4.9 S27.8,84.9,30.5,84.9z M83.7,28.4c4.4,0,8,3.6,8,8s-3.6,8-8,8s-8-3.6-8-8S79.3,28.4,83.7,28.4z M86.9,6.8 c2.7,0,4.9,2.2,4.9,4.9s-2.2,4.9-4.9,4.9S82,14.4,82,11.7S84.2,6.8,86.9,6.8z M38.4,5.5c2.7,0,4.9,2.2,4.9,4.9 s-2.2,4.9-4.9,4.9s-4.9-2.2-4.9-4.9S35.7,5.5,38.4,5.5z M14.1,21.3c2.7,0,4.9,2.2,4.9,4.9s-2.2,4.9-4.9,4.9s-4.9-2.2-4.9-4.9 S11.4,21.3,14.1,21.3z" fill="#fff"/>
                </svg>
              </motion.div>
            </>
          ) : (
            <>
              {/* Empty placeholders for server-side rendering */}
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-0" />
              <div className="absolute -bottom-20 left-1/3 w-80 h-80 rounded-full opacity-0" />
              <div className="absolute top-40 left-10 w-60 h-60 rounded-full opacity-0" />
            </>
          )}
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          {isMounted ? (
            <>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex items-center justify-center mb-8"
              >
                {/* Paint brush stroke animation before heading */}
                <svg width="120" height="40" viewBox="0 0 120 40" className="mr-4">
                  <motion.path
                    d="M10,20 Q30,5 50,15 Q70,25 90,20 Q110,15 120,20"
                    stroke="#f9fafb"
                    strokeWidth="8"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                  />
                </svg>
                
                {/* Paint can icon */}
                <motion.div
                  initial={{ rotate: -15 }}
                  animate={{ rotate: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 mr-2"
                >
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 11H5V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V11Z" fill="#f9fafb"/>
                    <path d="M7 11V9C7 6.79086 8.79086 5 11 5H13C15.2091 5 17 6.79086 17 9V11" stroke="#f9fafb" strokeWidth="2"/>
                    <path d="M10 5V3H14V5" stroke="#f9fafb" strokeWidth="2"/>
                    <path d="M4.5 11H19.5" stroke="#f9fafb" strokeWidth="2"/>
                  </svg>
                </motion.div>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg text-center"
              >
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-blue-300 relative">
                  Products
                  {/* Paint drip under text */}
                  <motion.svg
                    width="100%"
                    height="15"
                    viewBox="0 0 200 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-0 -bottom-2 w-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <path
                      d="M0,0 C20,10 40,18 60,12 C80,6 100,10 120,15 C140,20 160,18 180,12 C190,9 195,5 200,0"
                      stroke="url(#paint-drip)"
                      strokeWidth="2"
                    />
                    <defs>
                      <linearGradient id="paint-drip" x1="0" y1="0" x2="100%" y2="0">
                        <stop offset="0%" stopColor="#FBBF24" />
                        <stop offset="50%" stopColor="#EC4899" />
                        <stop offset="100%" stopColor="#93C5FD" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
                  
                  {/* NEW: Additional paint drips */}
                  {[20, 60, 100, 140, 180].map((xPos, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      style={{
                        left: `${xPos}px`,
                        top: '100%',
                        width: '2px',
                        height: 0,
                        background: `linear-gradient(to bottom, ${paintColors[i % paintColors.length].hex}, transparent)`
                      }}
                      initial={{ height: 0 }}
                      animate={{ height: 10 + (i * 3) }}
                      transition={{ delay: 1.2 + (i * 0.1), duration: 0.8 }}
                    />
                  ))}
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl max-w-3xl mx-auto text-center text-blue-50"
              >
                AC Company Limited offers a comprehensive range of paint and soap products 
                suitable for both residential and commercial applications.
              </motion.p>
              
              {/* Paint color palette preview */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex justify-center mt-8 flex-wrap"
              >
                {paintColors.map((color, index) => (
                  <motion.div
                    key={index}
                    className="relative mx-1 my-1"
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                      scale: 1.1
                    }}
                    initial={{ scale: 0, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5 + (index * 0.05), type: "spring" }}
                  >
                    <div 
                      className={`w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-r ${color.class} shadow-md`}
                    />
                    <motion.div
                      className="absolute -bottom-1 left-1/2 w-1 bg-white"
                      style={{ height: 0, x: "-50%" }}
                      initial={{ height: 0 }}
                      animate={{ height: 3 }}
                      transition={{ delay: 0.8 + (index * 0.05), duration: 0.2 }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </>
          ) : (
            <>
              {/* Static version for server rendering */}
              <div className="flex items-center justify-center mb-8 opacity-0">
                <div className="w-120 h-40 mr-4"></div>
                <div className="w-12 h-12 mr-2"></div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg opacity-0 text-center">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-blue-300">Products</span>
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto text-center text-blue-50 opacity-0">
                AC Company Limited offers a comprehensive range of paint and soap products 
                suitable for both residential and commercial applications.
              </p>
            </>
          )}
        </div>
        
        {/* Enhanced paint drip effect at bottom of hero with more realistic drips */}
        <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
          {isMounted ? (
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-24">
                <path 
                  d="M0,0 C150,120 271,120 501,30 C690,60 750,0 1200,80 L1200,120 L0,120 Z" 
                  className="fill-white"
                />
              </svg>
            </motion.div>
          ) : (
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-24">
              <path 
                d="M0,0 C150,120 271,120 501,30 C690,60 750,0 1200,80 L1200,120 L0,120 Z" 
                className="fill-white"
              />
            </svg>
          )}
        </div>
        
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/products/app.jpg"
            alt="AC Products"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* 1. WHY OUR PRODUCTS STAND OUT */}
      <section className="py-16 relative overflow-hidden bg-gray-50">
        {isMounted && (
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%">
              <filter id="noise">
                <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .15 0"/>
              </filter>
              <rect width="100%" height="100%" filter="url(#noise)"/>
            </svg>
          </div>
        )}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-white border border-blue-200 rounded-2xl shadow-xl p-10">
            <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">
              Why Our Products Stand Out
            </h2>
            <ul className="list-disc pl-6 text-blue-900 space-y-2 text-lg">
              <li>Premium quality raw materials for lasting performance</li>
              <li>Wide color selection and custom color matching</li>
              <li>Eco-friendly, low-VOC, and safe for indoor use</li>
              <li>Expert support for both residential and commercial projects</li>
              <li>Modern manufacturing and strict quality control</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT CATEGORIES */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-16 relative"
          >
            {/* Paintbrush stroke behind section title - client only */}
            {isMounted && (
              <motion.div 
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-24 md:w-96 md:h-32 -z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <svg width="100%" height="100%" viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.path
                    d="M20,50 C50,30 100,20 150,40 C200,60 250,70 300,50 C350,30 380,40 395,50"
                    stroke="url(#brush-gradient)"
                    strokeWidth="40"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                  <defs>
                    <linearGradient id="brush-gradient" x1="0" y1="0" x2="100%" y2="0">
                      <stop offset="0%" stopColor="rgba(37, 99, 235, 0.1)" />
                      <stop offset="50%" stopColor="rgba(126, 34, 206, 0.1)" />
                      <stop offset="100%" stopColor="rgba(219, 39, 119, 0.1)" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            )}
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative z-10"
            >
              Product Categories
            </motion.h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Paints Category */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.2 },
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className="bg-gradient-to-br from-red-50 via-yellow-50 to-blue-50 rounded-2xl shadow-xl overflow-hidden border-t-4 border-transparent relative"
              style={{ borderImage: "linear-gradient(to right, #ef4444, #eab308, #3b82f6) 1" }}
            >
              {/* Rainbow paint drips from top border */}
              {isMounted && (
                <>
                  {paintColors.map((color, i) => (
                    <motion.div
                      key={i}
                      className="absolute top-0 rounded-b-full z-10"
                      style={{
                        left: `${5 + (i * 13)}%`,
                        width: i % 2 === 0 ? '3px' : '2px',
                        background: color.hex
                      }}
                      initial={{ height: 0 }}
                      animate={{ height: 15 + (i * 2) }}
                      transition={{ duration: 0.8, delay: 0.1 + (i * 0.1) }}
                    />
                  ))}
                </>
              )}
              
              <div className="relative h-72 overflow-hidden">
                <Image 
                  src="/images/products/app.jpg"
                  alt="Paint Products"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <h2 className="text-3xl font-bold text-white drop-shadow-lg">Paints & Coatings</h2>
                </div>
                
                {/* Paint splash overlay with animation - client only */}
                {isMounted && (
                  <>
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 0.2 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="absolute -top-10 -right-10 w-40 h-40 bg-red-500 rounded-full blur-2xl"
                    />
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 0.2 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="absolute -bottom-5 -left-5 w-32 h-32 bg-yellow-500 rounded-full blur-2xl"
                    />
                  </>
                )}
                
                {/* Paint roller overlay - client only */}
                {isMounted && (
                  <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 0.9 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute top-5 right-5 w-16 h-16"
                  >
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16 5H18C19.1046 5 20 5.89543 20 7V11C20 12.1046 19.1046 13 18 13H16V5Z" fill="white" fillOpacity="0.9"/>
                      <path d="M14 5H5C3.89543 5 3 5.89543 3 7V11C3 12.1046 3.89543 13 5 13H14V5Z" fill="white" fillOpacity="0.7"/>
                      <path d="M12 13V20M12 20H10M12 20H14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M16 9H20" stroke="white" strokeWidth="2"/>
                    </svg>
                  </motion.div>
                )}
              </div>
              
              <div className="p-8">
                <p className="mb-8 text-lg text-gray-700">
                  Our paint products are designed to provide the perfect finish while ensuring 
                  long-lasting protection for various surfaces. From undercoats to weather-resistant 
                  emulsions, we have everything you need for your painting projects.
                </p>
                <div className="flex justify-between items-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      href="/products/paints" 
                      className="inline-block bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                    >
                      {/* Enhanced paint splash effect on hover */}
                      <span className="absolute inset-0 w-full h-full">
                        {isMounted && paintColors.slice(0, 5).map((color, i) => (
                          <motion.span
                            key={i}
                            className="absolute rounded-full bg-white"
                            style={{
                              top: `${20 + (i * 15)}%`,
                              left: `${10 + (i * 20)}%`,
                              width: `${4 + (i % 3) * 2}px`,
                              height: `${4 + (i % 3) * 2}px`,
                              opacity: 0
                            }}
                            whileHover={{
                              opacity: 0.3,
                              y: -5,
                              transition: { delay: i * 0.05 }
                            }}
                          />
                        ))}
                      </span>
                      View Paint Products
                    </Link>
                  </motion.div>
                  
                  {/* Paint color samples with enhanced interaction */}
                  <div className="flex space-x-1">
                    {["#ef4444", "#3b82f6", "#22c55e", "#eab308"].map((color, i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        initial={isMounted ? { y: 20, opacity: 0 } : { opacity: 0 }}
                        animate={isMounted ? { y: 0, opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                        className="relative w-6 h-6 rounded-full border-2 border-white shadow-md"
                        style={{ backgroundColor: color }}
                      >
                        {/* Paint drip from color swatch - client only */}
                        {isMounted && (
                          <motion.div
                            className="absolute -bottom-4 left-1/2 w-0.5 rounded-b-full"
                            style={{ 
                              height: 0, 
                              backgroundColor: color,
                              transform: "translateX(-50%)"
                            }}
                            whileHover={{ height: 8 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Soaps Category */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.2 },
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-purple-500 relative"
            >
              {/* Paint drips from top border - client only with fixed values */}
              {isMounted && (
                <>
                  <motion.div
                    className="absolute top-0 left-1/5 w-2 bg-purple-500 rounded-b-full z-10"
                    initial={{ height: 0 }}
                    animate={{ height: 18 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  />
                  <motion.div
                    className="absolute top-0 left-3/4 w-1 bg-purple-500 rounded-b-full z-10"
                    initial={{ height: 0 }}
                    animate={{ height: 12 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  />
                  <motion.div
                    className="absolute top-0 left-1/3 w-3 bg-purple-500 rounded-b-full z-10"
                    initial={{ height: 0 }}
                    animate={{ height: 22 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                </>
              )}
              
              <div className="relative h-72 overflow-hidden">
                <Image 
                  src="/images/products/soaps/flowers.jpg"
                  alt="Soap Products"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <h2 className="text-3xl font-bold text-white drop-shadow-lg">Soaps & Cleaning Products</h2>
                </div>
                
                {/* Bubble overlay with animation - client only */}
                {isMounted && (
                  <>
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 0.2 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500 rounded-full blur-2xl"
                    />
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 0.2 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="absolute -bottom-5 -right-5 w-32 h-32 bg-purple-500 rounded-full blur-2xl"
                    />
                  </>
                )}
                
                {/* Soap bubbles animation */}
                {isMounted && (
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-6 h-6 rounded-full bg-white/30 backdrop-blur-sm"
                        style={{
                          left: `${20 + (i * 10)}%`,
                          top: '100%',
                          border: '1px solid rgba(255,255,255,0.4)'
                        }}
                        animate={{
                          y: [0, -300 - (i * 20)],
                          x: [0, (i % 2 === 0 ? 50 : -50)],
                          opacity: [0, 0.7, 0]
                        }}
                        transition={{
                          duration: 10 + (i * 0.5),
                          repeat: Infinity,
                          delay: i * 0.5,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
              
              <div className="p-8">
                <p className="mb-8 text-lg text-gray-700">
                  Our soap products range from liquid soaps to shampoos and laundry solutions, 
                  all designed to provide effective cleaning while being gentle on skin and surfaces.
                  Premium quality for all your cleaning needs.
                </p>
                <div className="flex justify-between items-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      href="/products/soaps" 
                      className="inline-block bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                    >
                      View Soap Products
                    </Link>
                  </motion.div>
                  
                  {/* Soap color samples */}
                  <div className="flex space-x-1">
                    {["#a78bfa", "#ec4899", "#60a5fa", "#4ade80"].map((color, i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        initial={isMounted ? { y: 20, opacity: 0 } : { opacity: 0 }}
                        animate={isMounted ? { y: 0, opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: i * 0.1, duration: 0.3 }}
                        className="relative w-6 h-6 rounded-full border-2 border-white shadow-md"
                        style={{ backgroundColor: color }}
                      >
                        {/* Soap drip effect - client only */}
                        {isMounted && (
                          <motion.div
                            className="absolute -bottom-4 left-1/2 w-0.5 rounded-b-full"
                            style={{ 
                              height: 0, 
                              backgroundColor: color,
                              transform: "translateX(-50%)"
                            }}
                            whileHover={{ height: 8 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. COVERAGE & CALCULATION */}
      <section className="py-20 bg-white relative z-20">
        <div className="max-w-3xl mx-auto border border-blue-200 rounded-2xl shadow-xl p-10">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
            Coverage &amp; Coverage Calculation for Emulsion Paints
          </h2>
          <p className="mb-4 text-blue-900">
            The coverage of 20 litres of emulsion paint depends on several factors such as:
          </p>
          <ul className="list-disc pl-6 mb-4 text-blue-900">
            <li>Surface texture (smooth vs. rough)</li>
            <li>Type of emulsion (standard, premium, or textured)</li>
            <li>Number of coats</li>
            <li>Application method (brush, roller, spray)</li>
          </ul>
          <h3 className="font-semibold text-blue-700 mb-2">General Coverage Estimate</h3>
          <table className="w-full text-sm mb-4 border">
            <thead>
              <tr className="bg-blue-100">
                <th className="p-2 border">Surface Type</th>
                <th className="p-2 border">Coverage (per coat)</th>
                <th className="p-2 border">Coverage with 20L (1 coat)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">Smooth surface</td>
                <td className="p-2 border">10–12 m² per litre</td>
                <td className="p-2 border">200–240 m²</td>
              </tr>
              <tr>
                <td className="p-2 border">Semi-rough surface</td>
                <td className="p-2 border">7–9 m² per litre</td>
                <td className="p-2 border">140–180 m²</td>
              </tr>
              <tr>
                <td className="p-2 border">Rough surface</td>
                <td className="p-2 border">5–7 m² per litre</td>
                <td className="p-2 border">100–140 m²</td>
              </tr>
            </tbody>
          </table>
          <p className="mb-4 text-blue-900 text-sm">
            <strong>Note:</strong> These are estimates for one coat. Most emulsion paint jobs require two coats, which means you should divide the total area by 2 for full coverage.
          </p>
          <h4 className="font-semibold text-blue-700 mb-2">Example Calculation</h4>
          <ul className="list-disc pl-6 mb-4 text-blue-900">
            <li>You have a smooth wall and plan to apply 2 coats.</li>
            <li>Area to paint: 120 m²</li>
            <li>Coverage: ~10 m² per litre</li>
            <li>
              <strong>Total paint required:</strong> (120 m² × 2 coats) ÷ 10 m²/L = 24 litres
            </li>
            <li>
              So, 20L will cover about 100–120 m² with two coats on a smooth wall.
            </li>
          </ul>
          <h4 className="font-semibold text-blue-700 mb-2">Tips for Maximizing Coverage</h4>
          <ul className="list-disc pl-6 text-blue-900">
            <li>Proper surface preparation (smooth, clean walls)</li>
            <li>Use of primer to reduce paint absorption</li>
            <li>Apply with a roller for even spreading</li>
            <li>Avoid painting in high humidity (can affect drying and coverage)</li>
          </ul>
        </div>
      </section>

      {/* 4. APPLICATION GUIDE */}
      <section className="py-20 bg-white relative z-20">
        <div className="max-w-3xl mx-auto border border-blue-200 rounded-2xl shadow-xl p-10">
          <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
            Application of Emulsion Paints
          </h2>
          <h3 className="font-semibold text-blue-700 mb-2">A. Tools &amp; Materials Needed</h3>
          <ul className="list-disc pl-6 mb-4 text-blue-900">
            <li>Emulsion paint</li>
            <li>Paint roller &amp; tray</li>
            <li>Paintbrush (for edges and corners)</li>
            <li>Sandpaper</li>
            <li>Putty knife or filler</li>
            <li>Painter's tape</li>
            <li>Drop cloths or plastic sheets</li>
            <li>Primer (optional, depending on the surface)</li>
            <li>Clean cloth or sponge</li>
            <li>Ladder (if needed)</li>
          </ul>
          <h3 className="font-semibold text-blue-700 mb-2">B. Step-by-Step Guide</h3>
          <ol className="list-decimal pl-6 mb-4 text-blue-900 space-y-2">
            <li>
              <strong>Surface Preparation:</strong>
              <ul className="list-disc pl-6">
                <li>Clean the surface: Remove dust, dirt, grease, or flaking paint using a damp cloth or sponge.</li>
                <li>Repair: Fill cracks or holes with wall filler or putty. Let it dry, then sand smooth.</li>
                <li>Sand: Lightly sand the surface to remove gloss from old paint and create a smooth base.</li>
                <li>Remove dust: Wipe off any sanding dust with a clean, dry cloth.</li>
              </ul>
            </li>
            <li>
              <strong>Masking:</strong>
              <ul className="list-disc pl-6">
                <li>Use painter’s tape to cover edges, trims, light switches, and sockets.</li>
                <li>Cover furniture and floors with drop cloths.</li>
              </ul>
            </li>
            <li>
              <strong>Priming (if needed):</strong>
              <ul className="list-disc pl-6">
                <li>Apply a primer if:
                  <ul className="list-disc pl-6">
                    <li>The wall is newly plastered</li>
                    <li>You’re painting over a dark or uneven surface</li>
                    <li>The old paint is glossy</li>
                  </ul>
                </li>
                <li>Allow the primer to dry completely before applying emulsion.</li>
              </ul>
            </li>
            <li>
              <strong>Mixing the Paint:</strong>
              <ul className="list-disc pl-6">
                <li>Stir the emulsion paint thoroughly to ensure even color and consistency.</li>
                <li>You can slightly dilute it with water (about 5-10%) for the first coat, especially on new walls.</li>
              </ul>
            </li>
            <li>
              <strong>Cutting In:</strong>
              <ul className="list-disc pl-6">
                <li>Use a paintbrush to cut in along the edges of walls, corners, and around fittings.</li>
                <li>This helps you cover the areas the roller can’t reach.</li>
              </ul>
            </li>
            <li>
              <strong>Rolling the Paint:</strong>
              <ul className="list-disc pl-6">
                <li>Dip a paint roller into the tray and roll off excess.</li>
                <li>Start from the top of the wall and roll in a "W" or "M" pattern for even coverage.</li>
                <li>Work in sections and blend edges while the paint is still wet.</li>
              </ul>
            </li>
            <li>
              <strong>Apply Second Coat:</strong>
              <ul className="list-disc pl-6">
                <li>Allow the first coat to dry completely (typically 2–4 hours, but check the paint can).</li>
                <li>Apply a second coat for a richer finish and better coverage.</li>
              </ul>
            </li>
            <li>
              <strong>Clean Up:</strong>
              <ul className="list-disc pl-6">
                <li>Remove painter’s tape before the paint fully dries to avoid peeling.</li>
                <li>Wash brushes and rollers with water (since emulsion is water-based).</li>
                <li>Store leftover paint in a sealed container.</li>
              </ul>
            </li>
          </ol>
          <h3 className="font-semibold text-blue-700 mb-2">C. Tips for Best Results</h3>
          <ul className="list-disc pl-6 text-blue-900">
            <li>Work in daylight or good lighting.</li>
            <li>Don’t overload the roller to avoid drips.</li>
            <li>Maintain a wet edge to avoid lap marks.</li>
            <li>Use high-quality paint and tools for a better finish.</li>
          </ul>
        </div>
      </section>

      {/* 5. HEALTH & SAFETY */}
      <section className="my-20 relative z-30">
        <div className="max-w-3xl mx-auto bg-white border-2 border-blue-400 rounded-xl p-6 shadow-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex-shrink-0">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth={2} />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
              Health &amp; Safety Information
            </h2>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="w-full flex items-center justify-center gap-2 text-lg font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg py-3 px-6 shadow transition mb-6"
            aria-expanded={open}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01" />
            </svg>
            {open ? "Hide Details" : "View Health & Safety Details"}
          </button>
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                className="text-blue-900"
              >
                <h3 className="text-xl font-bold mb-2 text-blue-800">Low Risk (Compared to Oil-Based Paints)</h3>
                <ul className="list-disc pl-6 mb-4 text-blue-900">
                  <li>Emulsion paints generally contain fewer harmful chemicals (low or zero VOCs).</li>
                  <li>They are non-flammable and produce less odor, making them safer for indoor use.</li>
                </ul>
                <h4 className="font-semibold mb-2 text-blue-700">Potential Hazards &amp; First Aid</h4>
                <table className="w-full text-sm mb-4 border">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="p-2 border">Exposure</th>
                      <th className="p-2 border">Risk / Reaction</th>
                      <th className="p-2 border">Advice</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border">Inhalation</td>
                      <td className="p-2 border">Mild headache, nausea, dizziness</td>
                      <td className="p-2 border">Use in well-ventilated rooms. Use fans or open windows.</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Skin Contact</td>
                      <td className="p-2 border">Dryness, irritation, rash</td>
                      <td className="p-2 border">Use gloves; wash hands after use.</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Eye Contact</td>
                      <td className="p-2 border">Irritation, redness</td>
                      <td className="p-2 border">Rinse immediately with clean water for several minutes.</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Ingestion</td>
                      <td className="p-2 border">Harmful if swallowed</td>
                      <td className="p-2 border">Do not eat/drink near painting area. Seek medical help if swallowed.</td>
                    </tr>
                  </tbody>
                </table>
                <h4 className="font-semibold mb-2 text-blue-700">Environmental Safety</h4>
                <ul className="list-disc pl-6 mb-2 text-blue-900">
                  <li>Water-based, so less harmful to the environment than oil-based alternatives.</li>
                  <li>Many modern emulsions are low in VOCs, reducing air pollution.</li>
                </ul>
                <h4 className="font-semibold mb-2 text-blue-700">Environmental Concerns &amp; Disposal</h4>
                <table className="w-full text-sm mb-4 border">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="p-2 border">Concern</th>
                      <th className="p-2 border">Advice</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border">Waste Disposal</td>
                      <td className="p-2 border">Don’t pour leftover paint down the drain or soil.</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Cleaning</td>
                      <td className="p-2 border">Wash tools in a sink that connects to the sewage system, not outdoors.</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Storage</td>
                      <td className="p-2 border">Keep unused paint in sealed containers away from direct sunlight and frost.</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Packaging</td>
                      <td className="p-2 border">Dispose of empty containers through designated waste programs or recycling centers.</td>
                    </tr>
                  </tbody>
                </table>
                <h4 className="font-semibold mb-2 text-blue-700">Protective Measures</h4>
                <ul className="list-disc pl-6 text-blue-900">
                  <li>Wear gloves, mask, and eye protection if splashing is likely.</li>
                  <li>Keep children and pets away while painting and during drying time.</li>
                  <li>Always read the label and safety data sheet (SDS) from the manufacturer for specific ingredients and risks.</li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 6. CUSTOM PAINT CTA */}
      <section className="py-24 relative overflow-hidden">
        {/* Rainbow gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600"></div>
        
        {/* Dynamic Paint Canvas Background - client only, moved to separate component */}
        {isMounted && <PaintCanvas paintColors={paintColors} />}
        
        {/* Paint splatter decorations - client only with fixed positions */}
        <div className="absolute inset-0">
          {isMounted ? (
            <>
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.2 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="absolute top-10 left-10 w-40 h-40 rounded-full bg-yellow-300 blur-2xl"
              />
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0.2 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-green-300 blur-2xl"
              />
            </>
          ) : (
            <>
              <div className="absolute top-10 left-10 w-40 h-40 rounded-full opacity-0" />
              <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full opacity-0" />
            </>
          )}
        </div>
        
        {/* Rainbow pattern overlay - client only */}
        {isMounted && (
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%">
              <defs>
                <linearGradient id="rainbow" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF0000"/>
                  <stop offset="14%" stopColor="#FF7F00"/>
                  <stop offset="28%" stopColor="#FFFF00"/>
                  <stop offset="42%" stopColor="#00FF00"/>
                  <stop offset="56%" stopColor="#0000FF"/>
                  <stop offset="70%" stopColor="#4B0082"/>
                  <stop offset="85%" stopColor="#8B00FF"/>
                  <stop offset="100%" stopColor="#FF0000"/>
                </linearGradient>
                <pattern id="paintGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <circle cx="30" cy="30" r="20" fill="url(#rainbow)" fillOpacity="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#paintGrid)" />
            </svg>
          </div>
        )}
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 text-center shadow-xl"
          >
            {/* Paint can icon - client only */}
            {isMounted && (
              <motion.div
                initial={{ rotate: -15 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 mx-auto mb-6"
              >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 11H5V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V11Z" fill="white"/>
                  <path d="M7 11V9C7 6.79086 8.79086 5 11 5H13C15.2091 5 17 6.79086 17 9V11" stroke="white" strokeWidth="1.5"/>
                  <path d="M10 5V3H14V5" stroke="white" strokeWidth="1.5"/>
                  <path d="M4.5 11H19.5" stroke="white" strokeWidth="1.5"/>
                  
                  {/* Animated paint drips from can */}
                  <motion.path
                    d="M7 11V13"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1, duration: 1, repeat: Infinity, repeatDelay: 3 }}
                  />
                  <motion.path
                    d="M12 11V14"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatDelay: 4 }}
                  />
                  <motion.path
                    d="M17 11V13"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 2, duration: 1, repeat: Infinity, repeatDelay: 3.5 }}
                  />
                </svg>
              </motion.div>
            )}
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Looking for a Custom Paint Solution?
            </h2>
            <p className="text-lg mb-8 text-blue-100">
              We offer custom colors and formulations to meet your specific needs.
              Our experts are ready to help you find the perfect solution.
            </p>
            
            {/* Enhanced paint sample swatches - client only */}
            {isMounted ? (
              <div className="flex flex-wrap justify-center mb-8 gap-2">
                {paintColors.map((color, i) => (
                  <motion.div
                    key={i}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    whileHover={{ 
                      y: -10, 
                      scale: 1.1, 
                      transition: { duration: 0.2 },
                      zIndex: 10
                    }}
                    className="relative group"
                  >
                    <div className={`w-12 h-12 rounded-full shadow-lg bg-gradient-to-r ${color.class}`} />
                    
                    {/* Color name tooltip */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white text-gray-800 text-xs py-1 px-2 rounded whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-20"
                    >
                      {color.name}
                    </motion.div>
                    
                    {/* Paint drip effect */}
                    <motion.div
                      className="absolute -bottom-4 left-1/2 w-1 rounded-b-full"
                      style={{ 
                        height: 0, 
                        background: `linear-gradient(to bottom, ${color.hex}, transparent)`,
                        transform: "translateX(-50%)"
                      }}
                      whileHover={{ height: 8 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="h-12 mb-8"></div>
            )}
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <a 
                href="/products/custom"
                className="inline-block bg-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 relative overflow-hidden group"
              >
                Request Custom Products
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}