"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';

export default function SoapsPage() {
  const [activeProduct, setActiveProduct] = useState(null);

  // Use real product names, keep image filenames as they are
  const soapProducts = [
    {
      id: 1,
      name: "Gentle Wheat Soap",
      description: "A fun soap shaped like bread. Gentle and effective for daily use.",
      image: "/images/products/soaps/bread.jpg",
      features: ["Gentle cleansing", "Fun design", "Mild fragrance"],
      packaging: "Single bar",
      idealFor: "All skin types",
    },
    {
      id: 2,
      name: "Confetti Bliss",
      description: "Soap with a unique confused expression. Adds character to your bath routine.",
      image: "/images/products/soaps/confused.jpg",
      features: ["Unique look", "Gentle formula", "Great for gifts"],
      packaging: "Single bar",
      idealFor: "All skin types",
    },
    {
      id: 3,
      name: "Red Devil Cleanser",
      description: "Devil-shaped soap for a playful and bold bath experience.",
      image: "/images/products/soaps/devil.jpg",
      features: ["Bold design", "Cleanses well", "Fun for kids"],
      packaging: "Single bar",
      idealFor: "All skin types",
    },
    {
      id: 4,
      name: "Eggshell Moisture Bar",
      description: "Egg-shaped soap for a unique bath experience.",
      image: "/images/products/soaps/eggs.jpg",
      features: ["Unique shape", "Moisturizing", "Mild scent"],
      packaging: "Pack of 2",
      idealFor: "Sensitive skin",
    },
    {
      id: 5,
      name: "Floral Fresh",
      description: "Beautiful flower-shaped soap with a fresh floral scent.",
      image: "/images/products/soaps/flowers.jpg",
      features: ["Floral fragrance", "Pretty design", "Gentle on skin"],
      packaging: "Single bar",
      idealFor: "All skin types",
    },
    {
      id: 6,
      name: "Legends Bar",
      description: "Soap shaped like a leg for a quirky addition to your bath.",
      image: "/images/products/soaps/leg.jpg",
      features: ["Quirky design", "Cleanses thoroughly", "Fun for all ages"],
      packaging: "Single bar",
      idealFor: "All skin types",
    },
    {
      id: 7,
      name: "Noisy Citrus",
      description: "Soap with a noise motif. Adds fun and excitement to your bath.",
      image: "/images/products/soaps/noise.jpg",
      features: ["Fun motif", "Gentle formula", "Great for kids"],
      packaging: "Single bar",
      idealFor: "All skin types",
    },
    {
      id: 8,
      name: "Shoe Shine Soap",
      description: "Shoe-shaped soap for a playful and creative bath time.",
      image: "/images/products/soaps/shoes.jpg",
      features: ["Creative design", "Cleans well", "Mild fragrance"],
      packaging: "Single bar",
      idealFor: "All skin types",
    },
    {
      id: 9,
      name: "Sporty Shoot",
      description: "Soap with a shoot design. Adds a sporty touch to your bath.",
      image: "/images/products/soaps/shoot.jpg",
      features: ["Sporty look", "Gentle cleansing", "Fun for kids"],
      packaging: "Single bar",
      idealFor: "All skin types",
    },
    {
      id: 10,
      name: "Sunlight Radiance",
      description: "Sunlight-inspired soap for a refreshing and bright bath experience.",
      image: "/images/products/soaps/sunlight.jpg",
      features: ["Bright design", "Fresh scent", "Gentle on skin"],
      packaging: "Single bar",
      idealFor: "All skin types",
    },
  ];

  return (
    <div className="relative bg-white min-h-screen">
      <div className="h-[56px]" /> {/* Spacer for header */}
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 via-purple-700 to-pink-500 text-white py-16 mb-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop Soaps</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Premium soaps for every need—gentle, effective, and beautifully packaged.
          </p>
        </div>
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/soap-products-bg.jpg"
            alt="Soap Products"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Product Grid */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {soapProducts.map(product => (
            <Dialog.Root key={product.id} open={activeProduct?.id === product.id} onOpenChange={open => setActiveProduct(open ? product : null)}>
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
                    <h2 className="text-xl font-bold mb-2 text-purple-700">{product.name}</h2>
                  </div>
                </motion.div>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/40 z-50 data-[state=open]:animate-fadeIn" />
                <Dialog.Content className="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl max-w-lg w-full p-8">
                  <Dialog.Close asChild>
                    <button
                      className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl"
                      aria-label="Close"
                    >
                      &times;
                    </button>
                  </Dialog.Close>
                  <div className="relative h-48 w-full mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h2 className="text-2xl font-bold mb-2 text-purple-700">{product.name}</h2>
                  <p className="text-gray-600 mb-3">{product.description}</p>
                  <ul className="text-sm text-gray-500 mb-3 list-disc pl-5">
                    {product.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <div className="mb-2 text-xs text-gray-400">{product.packaging}</div>
                  <div className="mb-2 text-xs text-gray-400">{product.idealFor}</div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          ))}
        </div>
      </section>

      {/* Quality Promise Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-purple-700">Our Quality Promise</h2>
          <p className="text-lg max-w-3xl mx-auto mb-12 text-gray-700">
            All AC Company soap products are manufactured with premium ingredients, 
            ensuring effective cleaning while being gentle on skin and surfaces.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Premium Ingredients</h3>
              <p>Sourced from trusted suppliers for consistent quality</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Dermatologically Tested</h3>
              <p>Safe for all skin types, including sensitive skin</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Eco-Friendly</h3>
              <p>Biodegradable formulations that minimize environmental impact</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-800" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Quality Tested</h3>
              <p>Rigorous quality control ensures consistent performance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}