"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";
import useIsMobile from "../../hooks/useIsMobile";

export default function ServicesPage() {
  const isMobile = useIsMobile();

  const services = [
    {
      id: 1,
      title: "Professional Painting Services",
      description: "Our team of experienced painters provides high-quality painting services for residential and commercial properties. We handle everything from surface preparation to the final coat, ensuring a flawless finish that lasts.",
      image: "/images/services/painting-service.jpg",
      features: [
        "Interior and exterior painting",
        "Surface preparation and repairs",
        "Color consultation and matching",
        "Special finishes and textures",
        "Commercial and residential projects"
      ]
    },
    {
      id: 2,
      title: "Chemical Supply",
      description: "We supply a wide range of chemicals for various industrial and commercial applications. Our chemical products meet international standards and are sourced from reputable manufacturers.",
      image: "/images/services/chemical-supply.jpg",
      features: [
        "Industrial-grade chemicals",
        "Laboratory reagents",
        "Paint and coating additives",
        "Cleaning and sanitizing agents",
        "Custom chemical solutions"
      ]
    },
    {
      id: 3,
      title: "Paint Manufacturing Training",
      description: "Learn the art and science of paint manufacturing with our comprehensive training programs. Our courses cover everything from basic concepts to advanced formulations, equipment operation, and quality control.",
      image: "/images/services/paint-training.jpg",
      features: [
        "Hands-on practical sessions",
        "Formulation techniques",
        "Quality control methods",
        "Equipment operation and maintenance",
        "Business setup guidance"
      ]
    },
    {
      id: 4,
      title: "Soap Manufacturing Training",
      description: "Our soap manufacturing training programs equip participants with the knowledge and skills needed to produce high-quality soaps. From basic techniques to advanced formulations, we cover all aspects of soap production.",
      image: "/images/services/soap-training.jpg",
      features: [
        "Soap formulation basics",
        "Production techniques",
        "Packaging and presentation",
        "Quality assurance",
        "Business development strategies"
      ]
    }
  ];

  // Helper for macro ink background blobs and stirring tool
  function MacroInkBackground({ blobs = [], tool = false, toolProps = {}, z = 0 }) {
    return (
      <motion.div
        className={`pointer-events-none absolute inset-0 w-full h-full z-${z}`}
        initial={false}
        animate={{}}
      >
        {blobs.map((b, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              background: b.color,
              width: b.w,
              height: b.h,
              top: b.top,
              left: b.left,
              right: b.right,
              bottom: b.bottom,
              opacity: isMobile ? b.opacity * 0.7 : b.opacity,
              willChange: "transform, opacity",
              filter: isMobile ? "blur(8px)" : "blur(32px)",
            }}
            animate={b.animate}
            transition={b.transition}
          />
        ))}
        {tool && (
          <motion.div
            className="absolute rounded-full bg-white shadow-lg"
            style={{
              width: toolProps.width || "2rem",
              height: toolProps.height || "8rem",
              left: toolProps.left || "48%",
              top: toolProps.top || "20%",
              opacity: toolProps.opacity || 0.8,
              zIndex: 1,
            }}
            initial={toolProps.initial || { y: -60, opacity: 0 }}
            animate={toolProps.animate || {
              y: [ -60, 40, 60, 40, -60 ],
              opacity: [0, 1, 1, 1, 0]
            }}
            transition={toolProps.transition || { duration: 8, repeat: Infinity, repeatDelay: 6, ease: "easeInOut" }}
          />
        )}
      </motion.div>
    );
  }

  const rainbowGradient = "from-red-500 via-yellow-400 to-blue-500";

  return (
    <div className="overflow-hidden bg-gradient-to-b from-white to-gray-50 relative">
      {/* Global Macro Ink Animated Background */}
      <MacroInkBackground
        z={0}
        blobs={
          isMobile
            ? [
                {
                  color: "#ff1744", w: 120, h: 120, top: 40, left: 40, opacity: 0.18,
                  animate: { y: [0, 18, -12, 0], x: [0, 12, -8, 0], scale: [1, 1.08, 0.97, 1] },
                  transition: { duration: 14, repeat: Infinity, ease: "easeInOut" }
                },
                {
                  color: "#ffd600", w: 90, h: 90, top: 120, right: 60, opacity: 0.12,
                  animate: { y: [0, -10, 10, 0], x: [0, -8, 8, 0], scale: [1, 1.06, 0.94, 1] },
                  transition: { duration: 16, repeat: Infinity, ease: "easeInOut" }
                }
              ]
            : [
                {
                  color: "#ff1744", w: 340, h: 340, top: 80, left: 40, opacity: 0.28,
                  animate: { y: [0, 50, -35, 0], x: [0, 35, -25, 0], scale: [1, 1.18, 0.93, 1] },
                  transition: { duration: 24, repeat: Infinity, ease: "easeInOut" }
                },
                {
                  color: "#ffd600", w: 260, h: 260, top: 200, right: 60, opacity: 0.18,
                  animate: { y: [0, -35, 35, 0], x: [0, -25, 25, 0], scale: [1, 1.13, 0.87, 1] },
                  transition: { duration: 28, repeat: Infinity, ease: "easeInOut" }
                },
                {
                  color: "#2979ff", w: 320, h: 320, bottom: 80, left: 120, opacity: 0.18,
                  animate: { y: [0, 35, -35, 0], x: [0, 25, -25, 0], scale: [1, 1.15, 0.95, 1] },
                  transition: { duration: 26, repeat: Infinity, ease: "easeInOut" }
                },
                {
                  color: "#00e676", w: 200, h: 200, bottom: 120, right: 120, opacity: 0.16,
                  animate: { y: [0, -25, 25, 0], x: [0, 18, -18, 0], scale: [1, 1.12, 0.92, 1] },
                  transition: { duration: 32, repeat: Infinity, ease: "easeInOut" }
                },
                {
                  color: "#d500f9", w: 180, h: 180, top: 400, left: "55%", opacity: 0.16,
                  animate: { y: [0, 18, -18, 0], x: [0, -12, 12, 0], scale: [1, 1.09, 0.91, 1] },
                  transition: { duration: 34, repeat: Infinity, ease: "easeInOut" }
                },
                {
                  color: "#ffd600", w: 120, h: 120, top: 500, left: "70%", opacity: 0.08,
                  animate: { y: [0, 10, -10, 0], x: [0, 8, -8, 0], scale: [1, 1.05, 0.95, 1] },
                  transition: { duration: 38, repeat: Infinity, ease: "easeInOut" }
                }
              ]
        }
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-purple-800 to-pink-800 text-white pt-40 pb-28 overflow-hidden z-10">
        <MacroInkBackground
          z={0}
          tool={true}
          toolProps={{
            left: "52%",
            top: "18%",
            width: "2.5rem",
            height: "9rem",
            opacity: 0.85,
            transition: { duration: 7, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" },
            animate: { y: [ -70, 30, 65, 30, -70 ], opacity: [0, 1, 1, 1, 0] }
          }}
          blobs={
            isMobile
              ? [
                  {
                    color: "#ff1744", w: 180, h: 180, top: 40, left: 80, opacity: 0.42,
                    animate: { y: [0, 25, -18, 0], x: [0, 18, -12, 0], scale: [1, 1.12, 0.96, 1] },
                    transition: { duration: 13, repeat: Infinity, ease: "easeInOut" }
                  },
                  {
                    color: "#ffd600", w: 120, h: 120, top: 120, right: 120, opacity: 0.32,
                    animate: { y: [0, -12, 12, 0], x: [0, -10, 10, 0], scale: [1, 1.09, 0.91, 1] },
                    transition: { duration: 15, repeat: Infinity, ease: "easeInOut" }
                  }
                ]
              : [
                  {
                    color: "#ff1744", w: 180, h: 180, top: 40, left: 80, opacity: 0.42,
                    animate: { y: [0, 25, -18, 0], x: [0, 18, -12, 0], scale: [1, 1.12, 0.96, 1] },
                    transition: { duration: 13, repeat: Infinity, ease: "easeInOut" }
                  },
                  {
                    color: "#ffd600", w: 120, h: 120, top: 120, right: 120, opacity: 0.32,
                    animate: { y: [0, -12, 12, 0], x: [0, -10, 10, 0], scale: [1, 1.09, 0.91, 1] },
                    transition: { duration: 15, repeat: Infinity, ease: "easeInOut" }
                  },
                  {
                    color: "#2979ff", w: 140, h: 140, bottom: 60, left: 180, opacity: 0.32,
                    animate: { y: [0, 14, -14, 0], x: [0, 10, -10, 0], scale: [1, 1.11, 0.97, 1] },
                    transition: { duration: 14, repeat: Infinity, ease: "easeInOut" }
                  },
                  {
                    color: "#00e676", w: 100, h: 100, bottom: 80, right: 180, opacity: 0.27,
                    animate: { y: [0, -10, 10, 0], x: [0, 8, -8, 0], scale: [1, 1.07, 0.93, 1] },
                    transition: { duration: 16, repeat: Infinity, ease: "easeInOut" }
                  },
                  {
                    color: "#d500f9", w: 90, h: 90, top: 180, left: "55%", opacity: 0.27,
                    animate: { y: [0, 8, -8, 0], x: [0, -7, 7, 0], scale: [1, 1.08, 0.92, 1] },
                    transition: { duration: 17, repeat: Infinity, ease: "easeInOut" }
                  }
                ]
          }
        />
        {/* Rainbow paint drips */}
        <div className="absolute top-0 inset-x-0 flex justify-around pointer-events-none z-10">
          {["#ff0000", "#ff7700", "#ffff00", "#00ff00", "#00ffff", "#0000ff", "#8b00ff"].map((color, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: 70 + (i % 4) * 30 }}
              transition={{
                duration: 1.5,
                delay: 0.3 + i * 0.1,
                ease: "easeOut",
              }}
              className="w-1 md:w-2"
              style={{
                background: color,
                borderBottomLeftRadius: "999px",
                borderBottomRightRadius: "999px",
                filter: "drop-shadow(0 0 8px rgba(255,255,255,0.5))",
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-4 relative z-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg text-center"
          >
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-blue-300">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-50 text-center"
          >
            Beyond manufacturing quality products, AC Company Limited offers a range of professional services to meet your needs, from painting services to specialized training.
          </motion.p>
        </div>
        {/* Rainbow wave at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-16">
            <defs>
              <linearGradient id="services-rainbow-wave" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff0000" />
                <stop offset="20%" stopColor="#ff7700" />
                <stop offset="40%" stopColor="#ffff00" />
                <stop offset="60%" stopColor="#00ff00" />
                <stop offset="80%" stopColor="#0000ff" />
                <stop offset="100%" stopColor="#8b00ff" />
              </linearGradient>
            </defs>
            <path
              d="M0,0 C150,40 350,50 500,30 C650,10 800,40 1000,30 C1100,25 1150,10 1200,20 L1200,120 L0,120 Z"
              fill="url(#services-rainbow-wave)"
              opacity="0.7"
            />
            <path
              d="M0,30 C150,10 350,60 500,40 C650,20 800,50 1000,40 C1100,35 1150,20 1200,30 L1200,120 L0,120 Z"
              fill="white"
            />
          </svg>
        </div>
        {/* Subtle background image */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <Image
            src="/images/services-bg.jpg"
            alt="Our Services"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 relative overflow-hidden">
        <MacroInkBackground
          z={0}
          tool={true}
          toolProps={{
            left: "46%",
            top: "30%",
            width: "1.7rem",
            height: "7rem",
            opacity: 0.7,
            transition: { duration: 9, repeat: Infinity, repeatDelay: 7, ease: "easeInOut" },
            animate: { y: [ -50, 20, 40, 20, -50 ], opacity: [0, 1, 1, 1, 0] }
          }}
          blobs={
            isMobile
              ? [
                  {
                    color: "#ff1744", w: 120, h: 120, top: 60, left: 40, opacity: 0.20,
                    animate: { y: [0, 22, -15, 0], x: [0, 15, -10, 0], scale: [1, 1.11, 0.97, 1] },
                    transition: { duration: 15, repeat: Infinity, ease: "easeInOut" }
                  },
                  {
                    color: "#ffd600", w: 90, h: 90, top: 180, right: 80, opacity: 0.16,
                    animate: { y: [0, -12, 12, 0], x: [0, -9, 9, 0], scale: [1, 1.08, 0.92, 1] },
                    transition: { duration: 17, repeat: Infinity, ease: "easeInOut" }
                  }
                ]
              : [
                  {
                    color: "#ff1744", w: 120, h: 120, top: 60, left: 40, opacity: 0.20,
                    animate: { y: [0, 22, -15, 0], x: [0, 15, -10, 0], scale: [1, 1.11, 0.97, 1] },
                    transition: { duration: 15, repeat: Infinity, ease: "easeInOut" }
                  },
                  {
                    color: "#ffd600", w: 90, h: 90, top: 180, right: 80, opacity: 0.16,
                    animate: { y: [0, -12, 12, 0], x: [0, -9, 9, 0], scale: [1, 1.08, 0.92, 1] },
                    transition: { duration: 17, repeat: Infinity, ease: "easeInOut" }
                  },
                  {
                    color: "#2979ff", w: 110, h: 110, bottom: 60, left: 120, opacity: 0.16,
                    animate: { y: [0, 12, -12, 0], x: [0, 7, -7, 0], scale: [1, 1.09, 0.95, 1] },
                    transition: { duration: 16, repeat: Infinity, ease: "easeInOut" }
                  },
                  {
                    color: "#00e676", w: 80, h: 80, bottom: 80, right: 120, opacity: 0.14,
                    animate: { y: [0, -10, 10, 0], x: [0, 6, -6, 0], scale: [1, 1.06, 0.94, 1] },
                    transition: { duration: 18, repeat: Infinity, ease: "easeInOut" }
                  },
                  {
                    color: "#d500f9", w: 70, h: 70, top: 220, left: "60%", opacity: 0.14,
                    animate: { y: [0, 8, -8, 0], x: [0, -5, 5, 0], scale: [1, 1.07, 0.93, 1] },
                    transition: { duration: 19, repeat: Infinity, ease: "easeInOut" }
                  },
                  // Extra subtle blob
                  {
                    color: "#2979ff", w: 60, h: 60, top: 300, left: "70%", opacity: 0.07,
                    animate: { y: [0, 5, -5, 0], x: [0, 4, -4, 0], scale: [1, 1.03, 0.97, 1] },
                    transition: { duration: 21, repeat: Infinity, ease: "easeInOut" }
                  }
                ]
          }
        />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-5xl md:text-6xl font-extrabold mb-6 relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 drop-shadow-lg"
              style={{
                WebkitTextStroke: "1px #fff",
                letterSpacing: "0.02em",
                lineHeight: 1.1,
              }}
            >
              What We Offer
              <motion.div
                className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-2 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 opacity-80`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                style={{ transformOrigin: "left" }}
              />
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
              Comprehensive solutions for your property, business, and personal growth.
            </p>
          </motion.div>
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.7 }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
              >
                <div className="md:w-1/2">
                  <div className="rounded-2xl overflow-hidden shadow-xl relative h-80 bg-gradient-to-br from-white/60 to-blue-50/60 backdrop-blur-lg border border-white/40">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    {/* Rainbow border accent */}
                    <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${rainbowGradient}`} />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700">{service.title}</h2>
                  <p className="text-gray-700 mb-6 text-lg">{service.description}</p>
                  {/* Enhanced Key Features */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-lg mb-3 text-blue-700">Key Features:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.08, duration: 0.4 }}
                          className="flex items-center bg-gradient-to-r from-blue-50 via-white to-purple-50 rounded-lg px-4 py-2 shadow-sm border border-blue-100"
                        >
                          <span className="flex-shrink-0 w-6 h-6 mr-3 flex items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-blue-500 text-white shadow">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-base font-medium text-gray-800">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/contact"
                      className="inline-block bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Inquire About This Service
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-24 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        <MacroInkBackground
          z={0}
          tool={true}
          toolProps={{
            left: "50%",
            top: "25%",
            width: "2rem",
            height: "8rem",
            opacity: 0.75,
            transition: { duration: 10, repeat: Infinity, repeatDelay: 8, ease: "easeInOut" },
            animate: { y: [ -60, 25, 50, 25, -60 ], opacity: [0, 1, 1, 1, 0] }
          }}
          blobs={
            isMobile
              ? [
                  {
                    color: "#ff1744", w: 100, h: 100, top: 40, left: 60, opacity: 0.15,
                    animate: { y: [0, 15, -10, 0], x: [0, 10, -8, 0], scale: [1, 1.08, 0.96, 1] },
                    transition: { duration: 14, repeat: Infinity, ease: "easeInOut" }
                  },
                  {
                    color: "#ffd600", w: 80, h: 80, top: 120, right: 100, opacity: 0.13,
                    animate: { y: [0, -8, 8, 0], x: [0, -6, 6, 0], scale: [1, 1.06, 0.94, 1] },
                    transition: { duration: 15, repeat: Infinity, ease: "easeInOut" }
                  }
                ]
              : [
                  {
                    color: "#ff1744", w: 100, h: 100, top: 40, left: 60, opacity: 0.15,
                    animate: { y: [0, 15, -10, 0], x: [0, 10, -8, 0], scale: [1, 1.08, 0.96, 1] },
                    transition: { duration: 14, repeat: Infinity, ease: "easeInOut" }
                  },
                  {
                    color: "#ffd600", w: 80, h: 80, top: 120, right: 100, opacity: 0.13,
                    animate: { y: [0, -8, 8, 0], x: [0, -6, 6, 0], scale: [1, 1.06, 0.94, 1] },
                    transition: { duration: 15, repeat: Infinity, ease: "easeInOut" }
                  },
                  {
                    color: "#2979ff", w: 90, h: 90, bottom: 60, left: 140, opacity: 0.13,
                    animate: { y: [0, 8, -8, 0], x: [0, 5, -5, 0], scale: [1, 1.07, 0.93, 1] },
                    transition: { duration: 16, repeat: Infinity, ease: "easeInOut" }
                  },
                  {
                    color: "#00e676", w: 60, h: 60, bottom: 80, right: 140, opacity: 0.11,
                    animate: { y: [0, -6, 6, 0], x: [0, 4, -4, 0], scale: [1, 1.05, 0.95, 1] },
                    transition: { duration: 17, repeat: Infinity, ease: "easeInOut" }
                  },
                  {
                    color: "#d500f9", w: 50, h: 50, top: 180, left: "65%", opacity: 0.11,
                    animate: { y: [0, 5, -5, 0], x: [0, -3, 3, 0], scale: [1, 1.04, 0.96, 1] },
                    transition: { duration: 18, repeat: Infinity, ease: "easeInOut" }
                  }
                ]
          }
        />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Why Choose Our Services
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Experience, quality, and a customer-first approach in everything we do.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎨",
                title: "Expertise & Experience",
                description: "Our team brings years of industry experience and specialized knowledge to every service we provide.",
                color: "#ff0000"
              },
              {
                icon: "✅",
                title: "Quality Assurance",
                description: "We maintain the highest standards in all our services, ensuring exceptional results every time.",
                color: "#ffff00"
              },
              {
                icon: "🤝",
                title: "Customer-Centric Approach",
                description: "We prioritize your needs and satisfaction, delivering personalized solutions that exceed expectations.",
                color: "#00ff00"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  boxShadow: `0 20px 25px -5px ${feature.color}40, 0 10px 10px -5px ${feature.color}30`,
                  transition: { duration: 0.2 },
                }}
                className="bg-blue-700/50 backdrop-blur-sm rounded-xl p-8 border border-blue-600/30 relative overflow-hidden"
              >
                {/* Rainbow border top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500"></div>
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
                {/* Paint drip on hover */}
                <motion.div
                  className="absolute bottom-0 left-1/2 w-0.5 bg-white"
                  style={{
                    height: 0,
                    x: "-50%",
                  }}
                  whileHover={{
                    height: 20,
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 relative overflow-hidden">
        <MacroInkBackground
          z={0}
          tool={true}
          toolProps={{
            left: "53%",
            top: "22%",
            width: "1.5rem",
            height: "6rem",
            opacity: 0.7,
            transition: { duration: 11, repeat: Infinity, repeatDelay: 9, ease: "easeInOut" },
            animate: { y: [ -40, 15, 30, 15, -40 ], opacity: [0, 1, 1, 1, 0] }
          }}
          blobs={
            isMobile
              ? [
                  {
                    color: "#ffd600", w: 120, h: 120, top: 30, left: 80, opacity: 0.12,
                    animate: { y: [0, 12, -10, 0], x: [0, 10, -8, 0], scale: [1, 1.08, 0.96, 1] },
                    transition: { duration: 12, repeat: Infinity, ease: "easeInOut" }
                  },
                  {
                    color: "#00e676", w: 100, h: 100, bottom: 30, right: 80, opacity: 0.12,
                    animate: { y: [0, -10, 10, 0], x: [0, -8, 8, 0], scale: [1, 1.06, 0.94, 1] },
                    transition: { duration: 13, repeat: Infinity, ease: "easeInOut" }
                  }
                ]
              : [
                  {
                    color: "#ffd600", w: 120, h: 120, top: 30, left: 80, opacity: 0.12,
                    animate: { y: [0, 12, -10, 0], x: [0, 10, -8, 0], scale: [1, 1.08, 0.96, 1] },
                    transition: { duration: 12, repeat: Infinity, ease: "easeInOut" }
                  },
                  {
                    color: "#00e676", w: 100, h: 100, bottom: 30, right: 80, opacity: 0.12,
                    animate: { y: [0, -10, 10, 0], x: [0, -8, 8, 0], scale: [1, 1.06, 0.94, 1] },
                    transition: { duration: 13, repeat: Infinity, ease: "easeInOut" }
                  },
                  {
                    color: "#ff1744", w: 80, h: 80, top: 120, left: "60%", opacity: 0.10,
                    animate: { y: [0, 8, -8, 0], x: [0, 6, -6, 0], scale: [1, 1.05, 0.95, 1] },
                    transition: { duration: 14, repeat: Infinity, ease: "easeInOut" }
                  }
                ]
          }
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 text-center shadow-xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Ready to Work With Us?
            </h2>
            <p className="text-lg mb-8 text-blue-100">
              Whether you need professional painting services, chemical supplies, or want to learn how to manufacture paints and soaps, we're here to help you succeed.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className="inline-block bg-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-blue-500"
              >
                Contact Us Today
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}