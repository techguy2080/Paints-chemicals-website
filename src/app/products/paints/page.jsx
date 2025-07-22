"use client";

import { useState } from "react";
import { usePaintProducts } from "@/hooks/usePaintProducts";
import Image from "next/image";
import { motion } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";
import useIsMobile from "@/hooks/useIsMobile"; // Add this import

export default function PaintProductsPage() {
  const products = usePaintProducts();
  const [activeProduct, setActiveProduct] = useState(null);
  const router = useRouter();
  const isMobile = useIsMobile(); // Add this line

  return (
    <div className="container mx-auto px-4 py-12 relative">
      {/* Animated background blobs */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-full h-full z-0"
        initial={false}
        animate={{}}
      >
        {/* Blue blob */}
        <motion.div
          className="absolute rounded-full"
          style={{
            background: "#60a5fa",
            width: isMobile ? 100 : 220,
            height: isMobile ? 100 : 220,
            top: isMobile ? 30 : 80,
            left: isMobile ? 10 : 60,
            filter: isMobile ? "blur(8px)" : "blur(32px)",
            opacity: isMobile ? 0.1 : 0.22,
            willChange: "transform, opacity",
          }}
          animate={{
            y: isMobile ? [0, 10, -8, 0] : [0, 30, -20, 0],
            x: isMobile ? [0, 8, -6, 0] : [0, 20, -15, 0],
            scale: [1, isMobile ? 1.04 : 1.12, isMobile ? 0.98 : 0.95, 1],
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
            background: "#fde047",
            width: isMobile ? 80 : 180,
            height: isMobile ? 80 : 180,
            bottom: isMobile ? 40 : 120,
            right: isMobile ? 20 : 80,
            filter: isMobile ? "blur(8px)" : "blur(32px)",
            opacity: isMobile ? 0.08 : 0.18,
            willChange: "transform, opacity",
          }}
          animate={{
            y: isMobile ? [0, -8, 8, 0] : [0, -20, 20, 0],
            x: isMobile ? [0, -6, 6, 0] : [0, -15, 15, 0],
            scale: [1, isMobile ? 1.03 : 1.08, isMobile ? 0.97 : 0.92, 1],
          }}
          transition={{
            duration: isMobile ? 12 : 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Extra blobs for desktop only */}
        {!isMobile && (
          <>
            {/* Subtle purple blob */}
            <motion.div
              className="absolute rounded-full"
              style={{
                background: "#a78bfa",
                width: 140,
                height: 140,
                top: 220,
                left: 180,
                filter: "blur(32px)",
                opacity: 0.10,
                willChange: "transform, opacity",
              }}
              animate={{
                y: [0, 12, -12, 0],
                x: [0, 8, -8, 0],
                scale: [1, 1.06, 0.94, 1],
              }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Subtle green blob */}
            <motion.div
              className="absolute rounded-full"
              style={{
                background: "#bbf7d0",
                width: 110,
                height: 110,
                bottom: 180,
                right: 160,
                filter: "blur(32px)",
                opacity: 0.09,
                willChange: "transform, opacity",
              }}
              animate={{
                y: [0, -10, 10, 0],
                x: [0, -6, 6, 0],
                scale: [1, 1.04, 0.96, 1],
              }}
              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </>
        )}
      </motion.div>
      {/* Back button above the grid */}
      <button
        className="mb-6 text-blue-600 underline text-base"
        onClick={() => router.back()}
      >
        &larr; Back
      </button>
      <h1 className="text-4xl font-bold mb-10 text-center">Paint Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <Dialog.Root
            key={product.id}
            open={activeProduct?.id === product.id}
            onOpenChange={(open) => setActiveProduct(open ? product : null)}
          >
            <Dialog.Trigger asChild>
              <motion.div
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all border border-gray-100 cursor-pointer"
                whileHover={{ scale: 1.03 }}
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col h-full">
                  <h2 className="text-xl font-bold mb-2 text-blue-700">
                    {product.name}
                  </h2>
                </div>
              </motion.div>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/40 z-50 data-[state=open]:animate-fadeIn" />
              <Dialog.Content className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8">
                <div className="flex justify-between items-center mb-2">
                  <Dialog.Close asChild>
                    <button
                      className="text-gray-400 hover:text-gray-700 text-2xl"
                      aria-label="Close"
                    >
                      &times;
                    </button>
                  </Dialog.Close>
                  <button
                    className="text-blue-600 underline text-base"
                    onClick={() => router.back()}
                  >
                    Back
                  </button>
                </div>
                <div className="relative w-full h-80 mb-8 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h1 className="text-3xl font-bold mb-2 text-blue-700">
                  {product.name}
                </h1>
                <p className="text-lg text-gray-700 mb-6">
                  {product.description}
                </p>
                <div className="mb-4">
                  <h3 className="font-semibold text-blue-900">Packaging:</h3>
                  <p className="text-blue-800">{product.packaging}</p>
                </div>
                {product.technicalData && (
                  <>
                    <div className="mb-4">
                      <h3 className="font-semibold text-blue-900">Finish:</h3>
                      <p className="text-blue-800">
                        {product.technicalData.finish}
                      </p>
                    </div>
                    <div className="mb-4">
                      <h3 className="font-semibold text-blue-900">Coverage:</h3>
                      <p className="text-blue-800">
                        {product.technicalData.coverage}
                      </p>
                    </div>
                    <div className="mb-4">
                      <h3 className="font-semibold text-blue-900">Drying Time:</h3>
                      <p className="text-blue-800">
                        {product.technicalData.dryingTime}
                      </p>
                    </div>
                    <div className="mb-4">
                      <h3 className="font-semibold text-blue-900">Application:</h3>
                      <p className="text-blue-800">
                        {product.technicalData.application}
                      </p>
                    </div>
                    <div className="mb-6">
                      <h3 className="font-semibold text-blue-900 mb-2">
                        Key Features:
                      </h3>
                      <ul className="list-disc pl-5 space-y-1 text-blue-800">
                        {product.technicalData.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        ))}
      </div>
    </div>
  );
}