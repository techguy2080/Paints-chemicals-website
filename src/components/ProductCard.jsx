"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }) {
  const { id, name, description, image, category } = product;
  const [isHovered, setIsHovered] = useState(false);

  // Macro ink colors for swirling blobs
  const macroInkColors = [
    "#ff1744", // Red
    "#ffd600", // Yellow
    "#2979ff", // Blue
    "#00e676", // Green
    "#d500f9", // Magenta
  ];

  // Rainbow colors for paint drips and gradients
  const paintColors = [
    "#ff0000", // Vibrant Red
    "#ff7700", // Bright Orange
    "#ffff00", // Vibrant Yellow
    "#00ff00", // Bright Green
    "#00ffff", // Cyan
    "#0000ff", // Vibrant Blue
    "#8b00ff", // Vibrant Purple
  ];

  // Get color based on product name for consistency
  const getColorIndex = () => {
    let sum = 0;
    for (let i = 0; i < name.length; i++) {
      sum += name.charCodeAt(i);
    }
    return sum % paintColors.length;
  };

  const colorIndex = getColorIndex();
  const mainColor = paintColors[colorIndex];
  const secondColor = paintColors[(colorIndex + 2) % paintColors.length];
  
  return (
    <motion.div
      className="rounded-xl overflow-hidden relative group"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{
        y: -10,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
      }}
    >
      {/* Macro Ink Animated Background */}
      <motion.div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        {/* Animated ink blobs */}
        {macroInkColors.map((color, i) => (
          <motion.div
            key={color}
            className="absolute rounded-full blur-2xl"
            style={{
              background: color,
              width: 60 + i * 18,
              height: 60 + i * 18,
              top: `${10 + i * 12}%`,
              left: `${i % 2 === 0 ? 10 + i * 8 : 60 - i * 7}%`,
              opacity: 0.18 + (i * 0.07),
              zIndex: 0,
            }}
            animate={{
              y: [0, 10 + i * 2, -10 - i * 2, 0],
              x: [0, 8 - i * 2, -8 + i * 2, 0],
              scale: [1, 1.08 + i * 0.02, 0.95 - i * 0.01, 1],
              rotate: [0, 8, -8, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
        {/* Animated stirring tool */}
        <motion.div
          className="absolute w-1.5 h-20 rounded-full bg-white shadow-lg opacity-70"
          style={{ left: "48%", top: "18%", zIndex: 1 }}
          initial={{ y: -40, opacity: 0 }}
          animate={{
            y: [ -40, 30, 50, 30, -40 ],
            opacity: [0, 1, 1, 1, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Border top with paint drips */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500">
        {isHovered && (
          <>
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="absolute rounded-b-full z-10"
                style={{
                  left: `${15 + (i * 25)}%`,
                  width: "2px",
                  background: paintColors[(colorIndex + i) % paintColors.length]
                }}
                initial={{ height: 0 }}
                animate={{ height: 5 + (i * 3) }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
              />
            ))}
          </>
        )}
      </div>

      {/* Product image with premium overlay */}
      <div className="relative h-64 overflow-hidden z-10">
        <motion.div
          className="absolute inset-0 z-10"
          style={{
            background: `linear-gradient(to bottom right, ${mainColor}33, transparent 60%)`,
            opacity: 0
          }}
          animate={{ opacity: isHovered ? 0.7 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        <Image
          src={image || '/images/product-placeholder.jpg'}
          alt={name}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-500 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Paint splash effect on hover */}
        {isHovered && (
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 0.5 }}
            className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full"
            style={{ background: `radial-gradient(circle, ${mainColor}55, transparent 70%)` }}
          />
        )}
      </div>

      {/* Content section with gradient background */}
      <div className="relative p-6 bg-gradient-to-br from-white to-gray-50">
        {/* Category badge with rainbow style */}
        <div className="mb-3">
          <span 
            className="inline-block px-3 py-1 text-xs font-semibold text-white rounded-full relative overflow-hidden"
            style={{
              background: category === 'paint' 
                ? `linear-gradient(to right, ${mainColor}, ${secondColor})` 
                : `linear-gradient(to right, #4299e1, #9f7aea)`
            }}
          >
            {/* Animated sparkle effect */}
            {isHovered && (
              <motion.span 
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%", opacity: 0.3 }}
                animate={{ x: "100%" }}
                transition={{ duration: 1 }}
                style={{ filter: "blur(10px)" }}
              />
            )}
            {category === 'paint' ? 'Paint' : 'Soap'}
          </span>
        </div>
        
        {/* Product name with gradient on hover */}
        <motion.h3 
          className="text-xl font-bold mb-2"
          animate={{
            background: isHovered ? [
              "linear-gradient(to right, #000, #000)",
              `linear-gradient(to right, ${mainColor}, ${secondColor})`,
              "linear-gradient(to right, #000, #000)"
            ] : "linear-gradient(to right, #000, #000)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: isHovered ? "transparent" : "initial",
          }}
          transition={{ duration: 0.5, times: [0, 0.5, 1] }}
        >
          {name}
        </motion.h3>
        
        <p className="text-gray-600 mb-5 line-clamp-2">{description}</p>
        
        {/* Rainbow gradient button that matches site theme */}
        <Link href={`/products/${category}/${id}`}>
          <motion.span 
            className="inline-block text-white font-semibold py-2 px-5 rounded-full relative overflow-hidden shadow-md"
            style={{ 
              background: `linear-gradient(to right, ${mainColor}, ${secondColor})`,
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: `0 0 20px ${mainColor}66`,
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Paint drop effect on hover */}
            {isHovered && (
              <>
                {[1, 2, 3].map((i) => (
                  <motion.span
                    key={i}
                    className="absolute rounded-full bg-white"
                    style={{
                      top: `${30 + (i * 20)}%`,
                      left: `${10 + (i * 25)}%`,
                      width: `${2 + i}px`,
                      height: `${2 + i}px`,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: [0, 0.8, 0],
                      scale: [0, 1, 0],
                      y: [0, -10, -5]
                    }}
                    transition={{ 
                      duration: 1.5,
                      delay: i * 0.2,
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  />
                ))}
              </>
            )}
            View Details
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );
}