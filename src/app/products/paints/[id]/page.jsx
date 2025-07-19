"use client";

import { useParams } from "next/navigation";
import { usePaintProducts } from "@/hooks/usePaintProducts";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PaintProductDetail() {
  const { id } = useParams();
  const products = usePaintProducts();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Product Not Found</h1>
        <Link href="/products/paints" className="text-blue-600 underline">Back to Paint Products</Link>
      </div>
    );
  }

  // Example extra info (replace or extend as needed)
  const technicalData = product.technicalData || {
    finish: "Matte",
    coverage: "10-12 m²/L",
    dryingTime: "2 hours",
    cleanUp: "Water",
    application: "Brush, Roller, or Spray",
    features: [
      "Weather resistant",
      "Low VOC",
      "Excellent adhesion",
      "Fade resistant",
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 py-20 px-4 flex items-start md:items-center relative overflow-hidden">
      {/* Macro Ink Animated Background */}
      <motion.div
        className="pointer-events-none fixed inset-0 w-full h-full z-0"
        initial={false}
        animate={{}}
      >
        {/* Red blob */}
        <motion.div
          className="absolute rounded-full blur-2xl opacity-35"
          style={{ background: "#ff1744", width: 320, height: 320, top: 80, left: 40 }}
          animate={{
            y: [0, 50, -35, 0],
            x: [0, 35, -25, 0],
            scale: [1, 1.18, 0.93, 1],
          }}
          transition={{ duration: 21, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Yellow blob */}
        <motion.div
          className="absolute rounded-full blur-2xl opacity-22"
          style={{ background: "#ffd600", width: 250, height: 250, top: 220, right: 80 }}
          animate={{
            y: [0, -38, 38, 0],
            x: [0, -28, 28, 0],
            scale: [1, 1.13, 0.87, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Blue blob */}
        <motion.div
          className="absolute rounded-full blur-2xl opacity-23"
          style={{ background: "#2979ff", width: 310, height: 310, bottom: 90, left: 140 }}
          animate={{
            y: [0, 38, -38, 0],
            x: [0, 28, -28, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{ duration: 23, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Green blob */}
        <motion.div
          className="absolute rounded-full blur-2xl opacity-20"
          style={{ background: "#00e676", width: 200, height: 200, bottom: 120, right: 120 }}
          animate={{
            y: [0, -28, 28, 0],
            x: [0, 18, -18, 0],
            scale: [1, 1.12, 0.92, 1],
          }}
          transition={{ duration: 27, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Magenta blob */}
        <motion.div
          className="absolute rounded-full blur-2xl opacity-20"
          style={{ background: "#d500f9", width: 160, height: 160, top: 420, left: "54%" }}
          animate={{
            y: [0, 18, -18, 0],
            x: [0, -12, 12, 0],
            scale: [1, 1.09, 0.91, 1],
          }}
          transition={{ duration: 29, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Extra subtle blob for depth */}
        <motion.div
          className="absolute rounded-full blur-2xl opacity-10"
          style={{ background: "#ffd600", width: 100, height: 100, top: 500, left: "70%" }}
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

      <div className="max-w-3xl mx-auto bg-white/90 rounded-2xl shadow-2xl p-8 flex flex-col items-center mt-32 md:mt-40 z-10 relative">
        <div className="relative w-full h-80 mb-8 rounded-xl overflow-hidden shadow-lg">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 text-center">
          {product.name}
        </h1>
        <p className="text-lg text-gray-700 mb-6 text-center">{product.description}</p>
        <div className="mb-4 w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="font-semibold text-blue-900">Packaging:</h3>
            <p className="text-blue-800">{product.packaging}</p>
          </div>
          <div>
            <h3 className="font-semibold text-blue-900">Finish:</h3>
            <p className="text-blue-800">{technicalData.finish}</p>
          </div>
        </div>
        <div className="mb-4 w-full flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="font-semibold text-blue-900">Coverage:</h3>
            <p className="text-blue-800">{technicalData.coverage}</p>
          </div>
          <div>
            <h3 className="font-semibold text-blue-900">Drying Time:</h3>
            <p className="text-blue-800">{technicalData.dryingTime}</p>
          </div>
        </div>
        <div className="mb-4 w-full">
          <h3 className="font-semibold text-blue-900">Application:</h3>
          <p className="text-blue-800">{technicalData.application}</p>
        </div>
        <div className="mb-6 w-full">
          <h3 className="font-semibold text-blue-900">Ideal For:</h3>
          <div className="flex flex-wrap gap-2 mt-1">
            {product.applications.map((app, idx) => (
              <span
                key={idx}
                className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
              >
                {app}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-8 w-full">
          <h3 className="font-semibold text-blue-900 mb-2">Key Features:</h3>
          <ul className="list-disc pl-5 space-y-1 text-blue-800">
            {technicalData.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
          <Link
            href="/products/paints"
            className="inline-block text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-pink-600 hover:to-blue-600 hover:shadow-lg hover:shadow-purple-500/30 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
          >
            &larr; Back to Paint Products
          </Link>
          <Link
            href="/contact"
            className="inline-block text-center bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 hover:from-blue-600 hover:to-pink-600 hover:shadow-lg hover:shadow-blue-500/30 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300"
          >
            Inquire About This Product
          </Link>
        </div>
      </div>
    </div>
  );
}