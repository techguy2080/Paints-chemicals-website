"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import useIsMobile from "@/hooks/useIsMobile"; // Add this import

// Dummy product data for demonstration (replace with real data/fetch in production)
const demoProducts = [
	{
		id: "1",
		name: "Weather Guard Emulsion",
		description:
			"Premium exterior emulsion paint designed to withstand harsh weather conditions.",
		image: "/images/products/top.jpg",
		category: "paint",
		color: "#ff0000",
	},
	{
		id: "2",
		name: "AC AquaClean",
		description: "Multipurpose liquid soap for hand washing and general cleaning.",
		image: "/images/products/aqa.jpg",
		category: "soap",
		color: "#00ff00",
	},
	{
		id: "3",
		name: "Vinyl Silk",
		description:
			"Luxurious, high-sheen finish emulsion paint for interior and exterior surfaces.",
		image: "/images/products/app.jpg",
		category: "paint",
		color: "#0000ff",
	},
];

export default function ProductDetailPage() {
	const params = useParams();
	const { id } = params;
	const isMobile = useIsMobile(); // Add this line

	// In a real app, fetch product data by id here
	const product = demoProducts.find((p) => p.id === id);

	if (!product) {
		return (
			<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-100">
				<h1 className="text-4xl font-bold mb-4 text-red-600">
					Product Not Found
				</h1>
				<Link href="/products" className="text-blue-600 underline">
					Back to Products
				</Link>
			</div>
		);
	}

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
					className="absolute rounded-full"
					style={{
						background: "#ff1744",
						width: isMobile ? 120 : 320,
						height: isMobile ? 120 : 320,
						top: isMobile ? 30 : 80,
						left: isMobile ? 10 : 40,
						filter: isMobile ? "blur(8px)" : "blur(32px)",
						opacity: isMobile ? 0.13 : 0.35,
						willChange: "transform, opacity",
					}}
					animate={{
						y: isMobile ? [0, 14, -10, 0] : [0, 50, -35, 0],
						x: isMobile ? [0, 10, -8, 0] : [0, 35, -25, 0],
						scale: [1, isMobile ? 1.07 : 1.18, isMobile ? 0.97 : 0.93, 1],
					}}
					transition={{
						duration: isMobile ? 12 : 21,
						repeat: Infinity,
						ease: "easeInOut",
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
						willChange: "transform, opacity",
					}}
					animate={{
						y: isMobile ? [0, -10, 10, 0] : [0, -38, 38, 0],
						x: isMobile ? [0, -8, 8, 0] : [0, -28, 28, 0],
						scale: [1, isMobile ? 1.05 : 1.13, isMobile ? 0.96 : 0.87, 1],
					}}
					transition={{
						duration: isMobile ? 14 : 25,
						repeat: Infinity,
						ease: "easeInOut",
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
								willChange: "transform, opacity",
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
								opacity: 0.2,
								willChange: "transform, opacity",
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
								opacity: 0.2,
								willChange: "transform, opacity",
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
								opacity: 0.1,
								willChange: "transform, opacity",
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

			<div className="max-w-4xl mx-auto bg-white/80 rounded-2xl shadow-2xl p-8 flex flex-col md:flex-row gap-10 items-center mt-24 md:mt-0 z-10 relative">
				<div className="relative w-full md:w-1/2 h-80 rounded-xl overflow-hidden shadow-lg">
					<Image
						src={product.image}
						alt={product.name}
						fill
						className="object-cover"
						priority
					/>
				</div>
				<div className="w-full md:w-1/2">
					<h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500">
						{product.name}
					</h1>
					<span
						className="inline-block mb-4 px-4 py-1 rounded-full text-white font-semibold text-sm"
						style={{ background: product.color }}
					>
						{product.category === "paint" ? "Paint" : "Soap"}
					</span>
					<p className="text-lg text-gray-700 mb-8">{product.description}</p>
					<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
						<Link
							href="/contact"
							className="inline-block bg-gradient-to-r from-red-500 via-yellow-400 to-blue-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
						>
							Inquire About This Product
						</Link>
					</motion.div>
					<div className="mt-8">
						<Link
							href="/products"
							className="text-blue-700 underline font-medium"
						>
							&larr; Back to Products
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}