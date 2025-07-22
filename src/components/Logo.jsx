"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Logo() {
  // Only render the logo on the client to avoid hydration issues
  const [mounted, setMounted] = useState(false)
  const [imgError, setImgError] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Animated macro ink gradient ring
  const gradientRing = (
    <motion.div
      className="absolute inset-0 rounded-full z-0"
      style={{
        background: "conic-gradient(from 0deg, #ff1744, #ffd600, #2979ff, #00e676, #d500f9, #ff1744)",
        opacity: 0.7,
        filter: "blur(4px)",
      }}
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        repeat: Infinity,
        duration: 10,
        ease: "linear",
      }}
    />
  );

  if (!mounted) {
    return (
      <div className="w-[48px] h-[48px] mr-2 bg-gray-100 rounded-full shadow border relative overflow-hidden">
        {gradientRing}
      </div>
    );
  }
  if (imgError) {
    return (
      <div className="w-[48px] h-[48px] mr-2 flex items-center justify-center rounded-full shadow border relative overflow-hidden bg-gray-900">
        {gradientRing}
        <span
          className="font-bold text-lg z-10"
          style={{
            background: "linear-gradient(90deg,#ff1744,#ffd600,#2979ff,#00e676,#d500f9)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          AC
        </span>
      </div>
    );
  }
  return (
    <div className="w-[48px] h-[48px] mr-2 relative shadow border overflow-hidden">
      {gradientRing}
      <img 
        src="/images/logo (2).png"
        alt="AC Company Logo"
        className="w-full h-full object-contain rounded-full relative z-10"
        onError={() => setImgError(true)}
      />
    </div>
  )
}