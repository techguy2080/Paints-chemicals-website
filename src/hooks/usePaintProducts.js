import { useMemo } from "react";
import Link from "next/link";

export function usePaintProducts() {
  return useMemo(() => [
    {
      id: "1",
      name: "Weather Guard Emulsion",
      description: "Premium exterior emulsion paint designed to withstand harsh weather conditions.",
      image: "/images/products/top.jpg",
      packaging: "1L, 4L, 20L",
      applications: ["Exterior Walls", "Concrete", "Plaster"],
    },
    {
      id: "2",
      name: "Vinyl Silk",
      description: "Luxurious, high-sheen finish emulsion paint for interior and exterior surfaces.",
      image: "/images/products/app.jpg",
      packaging: "1L, 4L, 20L",
      applications: ["Interior Walls", "Ceilings", "Plaster"],
    },
    {
      id: "3",
      name: "AC AquaClean",
      description: "Multipurpose liquid soap for hand washing and general cleaning.",
      image: "/images/products/aqa.jpg",
      packaging: "500ml, 1L, 5L",
      applications: ["Hand Washing", "General Cleaning"],
    },
    {
      id: "4",
      name: "Bar Soap",
      description: "Gentle and effective bar soap for everyday use.",
      image: "/images/products/bar.jpg",
      packaging: "100g, 200g",
      applications: ["Personal Hygiene", "Hand Washing"],
    },
    {
      id: "5",
      name: "Boob Paint",
      description: "High-coverage paint for creative and decorative projects.",
      image: "/images/products/boob.jpg",
      packaging: "250ml, 500ml, 1L",
      applications: ["Crafts", "Decorative Projects"],
    },
    {
      id: "6",
      name: "Found Paint",
      description: "Durable paint for foundations and exterior surfaces.",
      image: "/images/products/found.jpg",
      packaging: "4L, 20L",
      applications: ["Foundations", "Exterior Walls"],
    },
  ], []);
}

export default function ProductList() {
  const products = usePaintProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.id} className="border rounded-lg overflow-hidden shadow-md">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-gray-900 font-bold mb-2">Packaging: {product.packaging}</p>
            <p className="text-gray-900 font-bold mb-4">
              Applications:{" "}
              {product.applications.join(", ")}
            </p>
            <Link 
              href={`/products/paints/${product.id}`}
              className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/30 text-white font-semibold py-2 px-8 rounded-full transition-all"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}