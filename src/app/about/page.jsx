"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import useIsMobile from "@/hooks/useIsMobile";

export default function AboutPage() {
  const isMobile = useIsMobile();

  // Paint color palette for various sections
  const paintColors = [
    "from-red-500 via-red-400 to-red-600",
    "from-orange-500 via-orange-400 to-orange-600",
    "from-yellow-500 via-yellow-400 to-yellow-600",
    "from-green-500 via-green-400 to-green-600",
    "from-blue-500 via-blue-400 to-blue-600",
    "from-indigo-500 via-indigo-400 to-indigo-600",
    "from-purple-500 via-purple-400 to-purple-600",
    "from-pink-500 via-pink-400 to-pink-600",
  ];

  const coreValues = [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      title: "Quality",
      description: "We uphold the highest standards in our products and services.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
        </svg>
      ),
      title: "Integrity",
      description: "We conduct our business with honesty and transparency.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
        </svg>
      ),
      title: "Innovation",
      description: "We embrace innovation to improve our products and training.",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      ),
      title: "Customer Focus",
      description: "We are committed to exceeding customer expectations.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
        </svg>
      ),
      title: "Sustainability",
      description: "We promote eco-friendly and sustainable practices.",
      color: "from-blue-500 to-blue-600"
    },
  ];

  return (
    <div className="bg-white overflow-hidden relative min-h-screen">
      {/* Macro Ink Animated Background */}
      <motion.div
        className="pointer-events-none fixed inset-0 w-full h-full z-0"
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
            top: isMobile ? 30 : 80,
            left: isMobile ? 10 : 40,
            filter: isMobile ? "blur(8px)" : "blur(32px)",
            opacity: isMobile ? 0.13 : 0.35,
            willChange: "transform, opacity"
          }}
          animate={{
            y: isMobile ? [0, 14, -10, 0] : [0, 50, -35, 0],
            x: isMobile ? [0, 10, -8, 0] : [0, 35, -25, 0],
            scale: [1, isMobile ? 1.07 : 1.18, isMobile ? 0.97 : 0.93, 1],
          }}
          transition={{
            duration: isMobile ? 12 : 21,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Yellow blob */}
        <motion.div
          className="absolute rounded-full"
          style={{
            background: "#ffd600",
            width: isMobile ? 90 : 250,
            height: isMobile ? 90 : 250,
            top: isMobile ? 90 : 220,
            right: isMobile ? 20 : 80,
            filter: isMobile ? "blur(8px)" : "blur(32px)",
            opacity: isMobile ? 0.09 : 0.22,
            willChange: "transform, opacity"
          }}
          animate={{
            y: isMobile ? [0, -10, 10, 0] : [0, -38, 38, 0],
            x: isMobile ? [0, -8, 8, 0] : [0, -28, 28, 0],
            scale: [1, isMobile ? 1.05 : 1.13, isMobile ? 0.96 : 0.87, 1],
          }}
          transition={{
            duration: isMobile ? 14 : 25,
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
                width: 310,
                height: 310,
                bottom: 90,
                left: 140,
                filter: "blur(32px)",
                opacity: 0.23,
                willChange: "transform, opacity"
              }}
              animate={{
                y: [0, 38, -38, 0],
                x: [0, 28, -28, 0],
                scale: [1, 1.15, 0.95, 1],
              }}
              transition={{ duration: 23, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Green blob */}
            <motion.div
              className="absolute rounded-full"
              style={{
                background: "#00e676",
                width: 200,
                height: 200,
                bottom: 120,
                right: 120,
                filter: "blur(32px)",
                opacity: 0.20,
                willChange: "transform, opacity"
              }}
              animate={{
                y: [0, -28, 28, 0],
                x: [0, 18, -18, 0],
                scale: [1, 1.12, 0.92, 1],
              }}
              transition={{ duration: 27, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Magenta blob */}
            <motion.div
              className="absolute rounded-full"
              style={{
                background: "#d500f9",
                width: 160,
                height: 160,
                top: 420,
                left: "54%",
                filter: "blur(32px)",
                opacity: 0.20,
                willChange: "transform, opacity"
              }}
              animate={{
                y: [0, 18, -18, 0],
                x: [0, -12, 12, 0],
                scale: [1, 1.09, 0.91, 1],
              }}
              transition={{ duration: 29, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* Extra subtle blob for depth */}
            <motion.div
              className="absolute rounded-full"
              style={{
                background: "#ffd600",
                width: 100,
                height: 100,
                top: 500,
                left: "70%",
                filter: "blur(32px)",
                opacity: 0.10,
                willChange: "transform, opacity"
              }}
              animate={{
                y: [0, 10, -10, 0],
                x: [0, 8, -8, 0],
                scale: [1, 1.05, 0.95, 1],
              }}
              transition={{ duration: 33, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}
        {/* Soft white overlay for luminosity */}
        <div className="absolute inset-0 bg-white/60 pointer-events-none" />
      </motion.div>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 via-purple-800 to-pink-800 text-white py-36 overflow-hidden">
        {/* Animated paint splash background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isMobile ? 0.18 : 0.3, scale: 1 }}
            transition={{ duration: 1.5 }}
            className={`absolute -top-10 -right-10 ${isMobile ? "w-40 h-40" : "w-72 h-72"} rounded-full bg-red-400 ${isMobile ? "blur-lg" : "blur-3xl"}`}
          />
          {!isMobile && (
            <>
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
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.15, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.6 }}
                className="absolute -bottom-10 right-20 w-72 h-72 rounded-full bg-blue-400 blur-3xl"
              />
            </>
          )}
        </div>
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-white/20 rounded-2xl shadow-2xl px-8 py-12 max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-blue-300">
              About AC Company Limited
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto text-blue-50 mb-6">
              A diversified and innovative company committed to excellence in manufacturing and services since 2022.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mt-6 flex justify-center"
            >
              <Link
                href="/"
                className="inline-block bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-purple-500/30 transition-all"
              >
                Back to Home
              </Link>
            </motion.div>
          </motion.div>
        </div>
        {/* Wavy divider */}
        <motion.svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-24"
          initial={{ x: 0 }}
          animate={{ x: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <path 
            d="M0,0 C150,120 271,120 501,30 C690,60 750,0 1200,80 L1200,120 L0,120 Z" 
            className="fill-white"
          />
        </motion.svg>
        {/* ...existing background image... */}
      </div>

      {/* Company Overview */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">Overview</h2>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                AC Company Limited is a diversified and innovative company committed to excellence in manufacturing
                and services. Established in 2022 with a vision to provide top-quality products and practical training
                solutions, we specialize in the production of premium quality paints and coatings and top-quality soaps,
                offer professional painting services, supply a wide range of chemicals, and deliver expert training in both
                paint and soap manufacturing.
              </p>
              <p>
                Our products are designed for durability, aesthetic appeal, and environmental safety, ensuring a long-lasting
                and flawless finish for every project.
              </p>
              <p>
                With a strong foundation in research, quality control, and customer satisfaction, we pride ourselves on
                being a reliable partner for individuals, businesses, and industries seeking dependable and sustainable
                products and services.
              </p>
            </div>
          </motion.div>
          
          {/* Colorful paint cans decoration */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 flex justify-center"
          >
            <div className="flex space-x-2 md:space-x-4">
              {(isMobile ? ["#ff0000", "#00ff00", "#0000ff"] : ["#ff0000", "#ffff00", "#00ff00", "#0000ff", "#8b00ff", "#ff7700"]).map((color, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 10, rotate: 0, scale: 1 }}
                  animate={{
                    y: isMobile ? [10, -5, 10] : [20, -10, 20],
                    rotate: [0, 8, -8, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                  whileHover={{ y: -15, scale: 1.1, boxShadow: `0 8px 24px 0 ${color}55` }}
                  className={`w-12 h-12 md:w-20 md:h-20 rounded-full shadow-lg flex items-center justify-center relative group cursor-pointer`}
                  style={{ backgroundColor: color }}
                >
                  {/* Show color code on hover */}
                  <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/40 rounded-full">
                    {color.toUpperCase()}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-white to-transparent z-10"></div>
        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white to-transparent z-10"></div>
        
        {/* Colorful background elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 1 }}
              className={`absolute ${i % 2 === 0 ? 'left-1/4' : 'right-1/4'} top-${20 * i} w-${40 + i * 10} h-${40 + i * 10} rounded-full bg-gradient-to-r ${paintColors[i % paintColors.length]}`}
              style={{
                top: `${(i * 20) % 80}%`,
                left: i % 2 === 0 ? `${(i * 15) % 50}%` : 'auto',
                right: i % 2 !== 0 ? `${(i * 15) % 50}%` : 'auto',
                width: `${40 + (i * 10)}px`,
                height: `${40 + (i * 10)}px`,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500"
          >
            Our Vision & Mission
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/70 backdrop-blur-lg p-8 md:p-12 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-t-4 border-blue-500"
            >
              <div className="bg-gradient-to-r from-blue-400 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-700">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be a leading provider of superior-quality paints, soaps, chemical supplies, and training services in the
                region and beyond and become the most trusted name in the chemical industry, providing superior quality
                products and solutions that enhance and protect the surfaces of homes and businesses, while promoting
                sustainability and innovation.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/70 backdrop-blur-lg p-8 md:p-12 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border-t-4 border-purple-500"
            >
              <div className="bg-gradient-to-r from-purple-400 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-purple-700">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To consistently deliver high-performance products and services that meet international standards while
                empowering communities through skills development and knowledge transfer. We aim to continuously
                develop innovative, durable, and environmentally-friendly products that deliver exceptional performance,
                providing long-term value to our clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-500 to-purple-500"
          >
            Our Core Values
          </motion.h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.07,
                  boxShadow: `0 8px 32px 0 ${value.color.split(' ')[0].replace('from-', '')}55`
                }}
                className={`text-center rounded-xl bg-white/60 backdrop-blur-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-t-4 ${value.color} group relative`}
              >
                <div className={`bg-gradient-to-r ${value.color} p-6 flex flex-col items-center`}>
                  <motion.div
                    className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200"
                    animate={{
                      scale: [1, 1.08, 1],
                      rotate: [0, 8, -8, 0]
                    }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }}
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-1 text-white">{value.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700">{value.description}</p>
                </div>
                {/* Animated paint drip effect */}
                <div className={`relative h-1 w-full bg-gradient-to-r ${value.color} overflow-visible`}>
                  <motion.div
                    className="absolute left-1/4 w-2 h-6 rounded-b-full"
                    style={{ background: "inherit" }}
                    animate={{ y: isMobile ? [0, 4, 0] : [0, 8, 0] }}
                    transition={{ duration: isMobile ? 1.5 : 2.5, repeat: Infinity, delay: index * 0.3, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute left-1/2 w-1 h-4 rounded-b-full"
                    style={{ background: "inherit" }}
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 + index * 0.2, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated wavy divider for section transitions */}
      <motion.svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="absolute bottom-0 w-full h-24"
        initial={{ x: 0 }}
        animate={{ x: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <path 
          d="M0,0 C150,120 271,120 501,30 C690,60 750,0 1200,80 L1200,120 L0,120 Z" 
          className="fill-white"
        />
      </motion.svg>

      {/* Rainbow Quality Commitment Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-800 to-pink-800"></div>
        {/* Rainbow pattern overlay */}
        <motion.svg
          width="100%" height="100%"
          animate={{ x: [0, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ position: 'absolute', inset: 0 }}
        >
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
        </motion.svg>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
              Our Quality Commitment
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Premium Ingredients",
                    description: "We use only the highest quality materials in our products",
                    color: "from-red-400 to-red-600"
                  },
                  {
                    title: "Rigorous Testing",
                    description: "Every batch undergoes extensive quality assurance",
                    color: "from-orange-400 to-orange-600"
                  },
                  {
                    title: "Color Consistency",
                    description: "Precise color matching across all our product lines",
                    color: "from-yellow-400 to-yellow-600"
                  },
                  {
                    title: "Environmental Standards",
                    description: "Eco-friendly formulations that meet global standards",
                    color: "from-green-400 to-green-600"
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    className="bg-white/20 backdrop-blur-lg rounded-xl p-6 hover:bg-white/30 transition-all duration-300 shadow-lg"
                  >
                    <div className={`h-2 w-16 mb-4 rounded-full bg-gradient-to-r ${item.color}`}></div>
                    <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-blue-100">{item.description}</p>
                  </motion.div>
                ))}
              </div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-12 text-2xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300"
              >
                At AC Company Limited, quality is not a promise — it is our practice.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Colorful CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Rainbow gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600"></div>
        
        {/* Paint splatter decorations */}
        <div className="absolute inset-0 pointer-events-none">
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
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 text-center shadow-xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Ready to Transform Your Space with Premium Paints?
            </h2>
            <p className="text-lg mb-8 text-blue-100">
              Contact us today to discuss your requirements and get a personalized color consultation.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link 
                href="/contact"
                className="inline-block bg-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-blue-500"
              >
                Get a Free Color Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Animated Products Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {/* Animated floating paint blobs for extra movement */}
          <motion.div
            className="absolute rounded-full blur-2xl opacity-20"
            style={{ background: "#ff1744", width: 120, height: 120, top: 40, left: "10%" }}
            animate={{
              y: [0, 30, -30, 0],
              x: [0, 20, -20, 0],
              scale: [1, 1.08, 0.95, 1],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute rounded-full blur-2xl opacity-20"
            style={{ background: "#ffd600", width: 100, height: 100, bottom: 60, right: "12%" }}
            animate={{
              y: [0, -20, 20, 0],
              x: [0, -15, 15, 0],
              scale: [1, 1.1, 0.92, 1],
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500"
          >
            Our Products
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                name: "Undercoat Emulsion",
                desc: "High-performance primer for walls and ceilings. Ensures excellent adhesion, coverage, and a smooth finish.",
                color: "from-blue-400 to-blue-600",
                packaging: "4L, 20L"
              },
              {
                name: "Weather Guard Emulsion",
                desc: "Premium exterior paint for harsh weather. Superior protection against rain, humidity, and UV rays.",
                color: "from-yellow-400 to-yellow-600",
                packaging: "4L, 20L"
              },
              {
                name: "Vinyl Silk",
                desc: "Luxurious high-sheen emulsion for interior/exterior. Easy to clean, highly durable, elegant finish.",
                color: "from-pink-400 to-pink-600",
                packaging: "4L, 20L"
              },
              {
                name: "Gravieto/Texture Paste",
                desc: "Decorative textured paint for unique wall finishes. Durable and easy to maintain.",
                color: "from-purple-400 to-purple-600",
                packaging: "20L"
              },
              {
                name: "Oil Paint",
                desc: "Oil-based paint for metal and wood. Excellent coverage and long-lasting protection.",
                color: "from-green-400 to-green-600",
                packaging: "0.5L, 1L, 4L, 10L"
              },
              {
                name: "AC AquaClean Liquid Soap",
                desc: "Multipurpose antibacterial liquid soap. Gentle on hands, tough on germs.",
                color: "from-indigo-400 to-indigo-600",
                packaging: "500ml, 1L, 3L, 10L, 20L"
              },
            ].map((product, idx) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                whileHover={{ scale: 1.04, boxShadow: `0 8px 32px 0 #0002` }}
                className={`relative rounded-2xl bg-white/70 backdrop-blur-xl border-t-4 ${product.color} shadow-xl p-8 transition-all group`}
              >
                <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-r ${product.color} shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                  <svg className="w-8 h-8 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" strokeWidth={2} />
                    <path d="M8 12h8M12 8v8" strokeWidth={2} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 mt-8 text-gray-900">{product.name}</h3>
                <p className="text-gray-700 mb-4">{product.desc}</p>
                <div className="text-xs text-gray-500">Packaging: {product.packaging}</div>
                {/* Animated paint drip */}
                <div className={`relative h-1 w-full bg-gradient-to-r ${product.color} mt-6 overflow-visible`}>
                  <motion.div
                    className="absolute left-1/4 w-2 h-6 rounded-b-full"
                    style={{ background: "inherit" }}
                    animate={{ y: isMobile ? [0, 4, 0] : [0, 8, 0] }}
                    transition={{ duration: isMobile ? 1.5 : 2.5, repeat: Infinity, delay: idx * 0.3, ease: "easeInOut" }}
                  />
                  <motion.div
                    className="absolute left-1/2 w-1 h-4 rounded-b-full"
                    style={{ background: "inherit" }}
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 + idx * 0.2, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}