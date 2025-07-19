"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Hero({ title, subtitle, ctaText, ctaLink, imageSrc }) {
  const [isMounted, setIsMounted] = useState(false);
  
  // Vibrant rainbow paint colors - more saturated to match your screenshot
  const paintColors = [
    { hex: "#ff0000", class: "from-red-600 via-red-500 to-red-700" }, // Vibrant Red
    { hex: "#ff7700", class: "from-orange-500 via-orange-400 to-orange-600" }, // Bright Orange
    { hex: "#ffff00", class: "from-yellow-400 via-yellow-300 to-yellow-500" }, // Vibrant Yellow
    { hex: "#00ff00", class: "from-green-500 via-green-400 to-green-600" }, // Bright Green
    { hex: "#00ffff", class: "from-cyan-400 via-cyan-300 to-cyan-500" }, // Cyan
    { hex: "#0000ff", class: "from-blue-600 via-blue-500 to-blue-700" }, // Vibrant Blue
    { hex: "#8b00ff", class: "from-purple-600 via-purple-500 to-purple-700" }, // Vibrant Purple
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="relative h-[600px] flex items-center overflow-hidden">
      {/* Macro Ink Animated Background */}
      <motion.div
        className="pointer-events-none absolute inset-0 w-full h-full z-0"
        initial={false}
        animate={{}}
      >
        {/* Red blob */}
        <motion.div
          className="absolute rounded-full blur-2xl opacity-35"
          style={{ background: "#ff1744", width: 320, height: 320, top: 60, left: 20 }}
          animate={{
            y: [0, 40, -30, 0],
            x: [0, 30, -20, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Yellow blob */}
        <motion.div
          className="absolute rounded-full blur-2xl opacity-22"
          style={{ background: "#ffd600", width: 220, height: 220, top: 180, right: 60 }}
          animate={{
            y: [0, -30, 30, 0],
            x: [0, -20, 20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Blue blob */}
        <motion.div
          className="absolute rounded-full blur-2xl opacity-23"
          style={{ background: "#2979ff", width: 260, height: 260, bottom: 60, left: 100 }}
          animate={{
            y: [0, 30, -30, 0],
            x: [0, 20, -20, 0],
            scale: [1, 1.12, 0.98, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Green blob */}
        <motion.div
          className="absolute rounded-full blur-2xl opacity-20"
          style={{ background: "#00e676", width: 160, height: 160, bottom: 80, right: 100 }}
          animate={{
            y: [0, -20, 20, 0],
            x: [0, 15, -15, 0],
            scale: [1, 1.08, 0.92, 1],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Magenta blob */}
        <motion.div
          className="absolute rounded-full blur-2xl opacity-20"
          style={{ background: "#d500f9", width: 120, height: 120, top: 320, left: "50%" }}
          animate={{
            y: [0, 15, -15, 0],
            x: [0, -10, 10, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Extra subtle blob for depth */}
        <motion.div
          className="absolute rounded-full blur-2xl opacity-10"
          style={{ background: "#ffd600", width: 80, height: 80, top: 400, left: "70%" }}
          animate={{
            y: [0, 10, -10, 0],
            x: [0, 8, -8, 0],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{ duration: 33, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Soft white overlay for luminosity */}
        <div className="absolute inset-0 bg-white/60 pointer-events-none" />
      </motion.div>
      
      {/* Background with rainbow overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt="Hero background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        
        {/* Rainbow gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/90 to-transparent"></div>
        
        {/* Liquid rainbow bands - FIXED: handle server vs client rendering mismatch */}
        <div className="absolute inset-0 overflow-hidden opacity-40">
          {isMounted ? (
            <>
              {paintColors.map((color, i) => (
                <motion.div
                  key={i}
                  className="absolute h-full"
                  style={{
                    backgroundColor: color.hex,
                    left: `${(100/7) * i}%`,
                    width: `${100/7}%`,
                    filter: "blur(20px)"
                  }}
                  animate={{
                    y: [10, -10, 10],
                    x: [5, -5, 5],
                    height: ["100%", "95%", "100%"]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 5 + i,
                    ease: "easeInOut",
                    delay: i * 0.2
                  }}
                />
              ))}
            </>
          ) : (
            <>
              {paintColors.map((color, i) => (
                <div
                  key={i}
                  className="absolute h-full"
                  style={{
                    backgroundColor: color.hex,
                    left: `${(100/7) * i}%`,
                    width: `${100/7}%`,
                    filter: "blur(20px)",
                    opacity: 0.5
                  }}
                />
              ))}
            </>
          )}
        </div>
      </div>
      
      {/* Flowing paint drips at top */}
      <div className="absolute top-0 inset-x-0 flex justify-around">
        {paintColors.map((color, i) => (
          <div
            key={i}
            className={`w-4 md:w-6 z-10 ${isMounted ? "" : "h-0"}`}
            style={{
              background: color.hex,
              borderBottomLeftRadius: "999px",
              borderBottomRightRadius: "999px",
              filter: "drop-shadow(0 0 8px rgba(0,0,0,0.3))"
            }}
          >
            {isMounted && (
              <motion.div
                className="w-full h-full"
                initial={{ height: 0 }}
                animate={{ 
                  height: 50 + (i % 3 * 25),
                  width: [
                    i % 2 === 0 ? "100%" : "66%", 
                    i % 2 === 0 ? "66%" : "100%", 
                    i % 2 === 0 ? "100%" : "66%"
                  ]
                }}
                transition={{ 
                  height: { duration: 1.2, delay: 0.2 * i, ease: "easeOut" },
                  width: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                }}
              />
            )}
          </div>
        ))}
      </div>
      
      {/* Vibrant paint splatters */}
      <div className="absolute inset-0 pointer-events-none">
        {isMounted && (
          <>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.4, scale: 1 }}
              transition={{ duration: 1 }}
              className="absolute top-1/4 -left-10 w-60 h-60 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 blur-2xl"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.4, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute bottom-1/4 -right-10 w-60 h-60 rounded-full bg-gradient-to-r from-red-500 to-pink-500 blur-2xl"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.4, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute -bottom-10 left-1/3 w-60 h-60 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl"
            />
            
            <motion.div
              className="absolute top-1/2 left-1/4 w-40 h-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="splatterGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff0000" />
                    <stop offset="100%" stopColor="#ff7700" />
                  </linearGradient>
                </defs>
                <path d="M54.2,21.3c5.2,0,9.5,4.3,9.5,9.5s-4.3,9.5-9.5,9.5s-9.5-4.3-9.5-9.5S49,21.3,54.2,21.3z M21.5,49.4 c4.4,0,8,3.6,8,8s-3.6,8-8,8s-8-3.6-8-8S17.1,49.4,21.5,49.4z M66.4,58.8c3.6,0,6.5,2.9,6.5,6.5s-2.9,6.5-6.5,6.5 s-6.5-2.9-6.5-6.5S62.8,58.8,66.4,58.8z" 
              fill="url(#splatterGradient1)" opacity="0.6" />
              </svg>
            </motion.div>
            
            <motion.div
              className="absolute bottom-1/3 right-1/4 w-32 h-32"
              initial={{ opacity: 0, rotate: -20 }}
              animate={{ opacity: 0.7, rotate: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="splatterGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00ff00" />
                    <stop offset="100%" stopColor="#00ffff" />
                  </linearGradient>
                </defs>
                <path d="M30.5,84.9c2.7,0,4.9,2.2,4.9,4.9s-2.2,4.9-4.9,4.9s-4.9-2.2-4.9-4.9 S27.8,84.9,30.5,84.9z M83.7,28.4c4.4,0,8,3.6,8,8s-3.6,8-8,8s-8-3.6-8-8S79.3,28.4,83.7,28.4z M86.9,6.8 c2.7,0,4.9,2.2,4.9,4.9s-2.2,4.9-4.9,4.9S82,14.4,82,11.7S84.2,6.8,86.9,6.8z" 
              fill="url(#splatterGradient2)" opacity="0.6" />
              </svg>
            </motion.div>
          </>
        )}
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-2xl backdrop-blur-sm bg-black/20 p-8 rounded-xl">
          <div>
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 relative ${!isMounted ? "opacity-0" : ""}`}>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500">
                {title}
              </span>
              
              {isMounted && (
                <motion.div className="absolute left-0 -bottom-3 w-full overflow-hidden">
                  <motion.svg
                    width="100%"
                    height="30"
                    viewBox="0 0 300 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <defs>
                      <linearGradient id="hero-paint-wave" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ff0000" />
                        <stop offset="17%" stopColor="#ff7700" />
                        <stop offset="33%" stopColor="#ffff00" />
                        <stop offset="50%" stopColor="#00ff00" />
                        <stop offset="67%" stopColor="#00ffff" />
                        <stop offset="83%" stopColor="#0000ff" />
                        <stop offset="100%" stopColor="#8b00ff" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d="M0,0 C20,15 40,25 60,18 C80,10 100,15 120,22 C140,30 160,25 180,18 C200,10 220,15 240,22 C260,30 280,25 300,18"
                      stroke="url(#hero-paint-wave)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      fill="none"
                      animate={{ 
                        d: [
                          "M0,0 C20,15 40,25 60,18 C80,10 100,15 120,22 C140,30 160,25 180,18 C200,10 220,15 240,22 C260,30 280,25 300,18",
                          "M0,0 C20,10 40,18 60,22 C80,30 100,25 120,18 C140,10 160,15 180,22 C200,30 220,25 240,18 C260,10 280,15 300,22"
                        ]
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Fixed drips to prevent hydration mismatch */}
                    {[60, 120, 180, 240].map((xPos, i) => (
                      <motion.path
                        key={i}
                        d={`M${xPos},20 L${xPos},20`}
                        stroke={paintColors[i+1].hex}
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1, d: `M${xPos},20 L${xPos},${30 + (i * 5)}` }}
                        transition={{ delay: 1.2 + (i * 0.2), duration: 1 }}
                      />
                    ))}
                  </motion.svg>
                </motion.div>
              )}
            </h1>
            
            <p className={`text-xl mb-10 text-white ${!isMounted ? "opacity-0" : ""}`}>
              {subtitle}
            </p>
            
            <div className={!isMounted ? "opacity-0" : ""}>
              {isMounted && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={ctaLink} 
                    className="inline-block bg-gradient-to-r from-red-600 via-yellow-400 to-blue-600 text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 w-full h-full">
                      {paintColors.map((color, i) => (
                        <motion.span
                          key={i}
                          className="absolute rounded-full"
                          style={{
                            top: `${15 + (i * 10)}%`,
                            left: `${10 + (i * 12)}%`,
                            width: `${4 + (i % 3) * 3}px`,
                            height: `${4 + (i % 3) * 3}px`,
                            backgroundColor: color.hex,
                            opacity: 0,
                            boxShadow: `0 0 8px ${color.hex}`
                          }}
                          whileHover={{
                            opacity: 0.8,
                            y: -10,
                            scale: 1.5,
                            transition: { delay: i * 0.05 }
                          }}
                        />
                      ))}
                    </span>
                    <span className="relative z-10 text-lg tracking-wide">{ctaText}</span>
                  </Link>
                </motion.div>
              )}
              {!isMounted && (
                <Link href={ctaLink} className="inline-block py-3 px-8 rounded-lg text-lg">
                  {ctaText}
                </Link>
              )}
            </div>
            
            {/* Paint color preview dots - FIXED structure to prevent hydration issues */}
            <div className="flex mt-12 space-x-3 justify-center">
              {paintColors.map((color, index) => (
                <div key={index} className="relative">
                  {isMounted ? (
                    <motion.div
                      className="w-8 h-8"
                      whileHover={{ 
                        y: -12,
                        scale: 1.2,
                        transition: { duration: 0.2, type: "spring" }
                      }}
                      initial={{ scale: 0, rotate: -15 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.7 + (index * 0.05), type: "spring" }}
                    >
                      <div 
                        className="w-full h-full rounded-full shadow-lg"
                        style={{ 
                          background: `linear-gradient(135deg, ${color.hex}, ${paintColors[(index+1) % paintColors.length].hex})`,
                          boxShadow: `0 0 10px ${color.hex}`
                        }}
                      />
                      <motion.div
                        className="absolute -bottom-8 left-1/2 w-1 rounded-b-full"
                        style={{ 
                          height: 0, 
                          background: `linear-gradient(to bottom, ${color.hex}, transparent)`,
                          x: "-50%" 
                        }}
                        initial={{ height: 0 }}
                        animate={{ height: 8 }}
                        transition={{ delay: 1 + (index * 0.05), duration: 0.3 }}
                        whileHover={{ height: 24, width: 2 }}
                      />
                    </motion.div>
                  ) : (
                    <div className="w-8 h-8 rounded-full opacity-0"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Rainbow paint wave at bottom - FIXED to prevent hydration issues */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        {isMounted ? (
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="absolute bottom-0 w-full h-16">
              <defs>
                <linearGradient id="rainbow-wave" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ff0000" />
                  <stop offset="17%" stopColor="#ff7700" />
                  <stop offset="33%" stopColor="#ffff00" />
                  <stop offset="50%" stopColor="#00ff00" />
                  <stop offset="67%" stopColor="#00ffff" />
                  <stop offset="83%" stopColor="#0000ff" />
                  <stop offset="100%" stopColor="#8b00ff" />
                </linearGradient>
              </defs>
              <motion.path 
                d="M0,0 C50,20 100,35 150,30 C200,25 250,5 300,10 C350,15 400,30 450,35 C500,40 550,30 600,25 C650,20 700,30 750,35 C800,40 850,30 900,20 C950,10 1000,25 1050,35 C1100,40 1150,20 1200,15 L1200,60 L0,60 Z" 
                fill="url(#rainbow-wave)"
                opacity="0.7"
                animate={{
                  d: [
                    "M0,0 C50,20 100,35 150,30 C200,25 250,5 300,10 C350,15 400,30 450,35 C500,40 550,30 600,25 C650,20 700,30 750,35 C800,40 850,30 900,20 C950,10 1000,25 1050,35 C1100,40 1150,20 1200,15 L1200,60 L0,60 Z",
                    "M0,0 C50,15 100,25 150,35 C200,40 250,20 300,25 C350,30 400,20 450,15 C500,10 550,25 600,30 C650,35 700,15 750,10 C800,5 850,20 900,30 C950,35 1000,15 1050,10 C1100,5 1150,15 1200,25 L1200,60 L0,60 Z"
                  ]
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 10,
                  ease: "easeInOut"
                }}
              />
              
              <path 
                d="M0,30 C50,40 100,50 150,45 C200,40 250,30 300,35 C350,40 400,45 450,50 C500,55 550,45 600,40 C650,35 700,45 750,50 C800,55 850,45 900,35 C950,25 1000,40 1050,50 C1100,55 1150,35 1200,30 L1200,60 L0,60 Z" 
                fill="white"
              />
            </svg>
          </motion.div>
        ) : (
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="absolute bottom-0 w-full h-16">
            <path 
              d="M0,30 C50,40 100,50 150,45 C200,40 250,30 300,35 C350,40 400,45 450,50 C500,55 550,45 600,40 C650,35 700,45 750,50 C800,55 850,45 900,35 C950,25 1000,40 1050,50 C1100,55 1150,35 1200,30 L1200,60 L0,60 Z" 
              fill="white"
            />
          </svg>
        )}
        
        {/* Additional paint drips - Only show when mounted */}
        <div className="absolute inset-0">
          {isMounted && (
            <>
              {[100, 300, 500, 700, 900, 1100].map((pos, i) => (
                <motion.div
                  key={i}
                  className="absolute bottom-0 w-1 rounded-t-full z-20"
                  style={{ 
                    left: `${pos}px`,
                    backgroundColor: paintColors[i % paintColors.length].hex,
                    bottom: "40px"
                  }}
                  initial={{ height: 0 }}
                  animate={{ height: 10 + (i * 3) }}
                  transition={{ duration: 0.5, delay: 1.5 + (i * 0.1) }}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}