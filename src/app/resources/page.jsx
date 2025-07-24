"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Color palette data
const colorPalette = [
  // Row 1
  { name: "Broken White", hex: "#F8F8F5" },
  { name: "Off White", hex: "#F3F1EA" },
  { name: "Butter", hex: "#FFF7C2" },
  { name: "Vanilla", hex: "#FFF3B0" },
  { name: "Ivory", hex: "#F6E2B3" },
  // Row 2
  { name: "Sunlight Yellow", hex: "#FFE066" },
  { name: "Mint Green", hex: "#D7FBE8" },
  { name: "Apple Green", hex: "#B7E778" },
  { name: "Milo Green", hex: "#4C7C4C" },
  { name: "Mermaid Green", hex: "#7DB59A" },
  // Row 3
  { name: "Soft Blue", hex: "#D6ECFF" },
  { name: "Blue", hex: "#3B82F6" },
  { name: "Deep Blue", hex: "#1E3A8A" },
  { name: "Light Purple", hex: "#E3D1F7" },
  { name: "Deep Purple", hex: "#6D28D9" },
  // Row 4
  { name: "Pink", hex: "#F472B6" },
  { name: "Terracotta", hex: "#D96C4A" },
  { name: "Magnolia", hex: "#FFE5D4" },
  { name: "Cream", hex: "#FFD9B3" },
  { name: "Student Cream", hex: "#E9CBA7" },
  // Row 5
  { name: "Peach", hex: "#FFB085" },
  { name: "Mango", hex: "#FFB300" },
  { name: "Beige", hex: "#D7B899" },
  { name: "Light Stone", hex: "#E4DED7" },
  { name: "Deep Stone", hex: "#7C6F65" },
  // Row 6
  { name: "Smoke Grey", hex: "#B0B8C1" },
  { name: "Grey", hex: "#7E7E7E" },
  { name: "Charcoal Black", hex: "#232323" },
];

function Swatch({ name, hex, selected, onClick }) {
  return (
    <div className="flex flex-col items-center">
      <button
        className={`w-16 h-16 md:w-20 md:h-20 rounded-lg shadow border border-gray-200 relative transition-all duration-200 focus:outline-none ${
          selected ? "ring-2 ring-blue-400" : ""
        }`}
        style={{ background: hex }}
        aria-label={name}
        onClick={onClick}
      >
        {/* Decorative brackets for selection */}
        {selected && (
          <>
            <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-gray-700 rounded-tl-sm" />
            <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-gray-700 rounded-tr-sm" />
            <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-gray-700 rounded-bl-sm" />
            <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-gray-700 rounded-br-sm" />
          </>
        )}
      </button>
      <span className="mt-2 text-xs md:text-sm font-medium text-gray-900 text-center">{name}</span>
    </div>
  );
}

export default function ResourcesPage() {
  const [open, setOpen] = useState({
    coverage: true,
    application: false,
    safety: false,
  });
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
        >
          Paints & Chemicals Resource Center
        </motion.h1>
        <p className="text-lg text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Your go-to hub for technical guides, safety, and best practices for paints, coatings, and cleaning products. Explore our expert resources below!
        </p>

        {/* --- Color Palette Guide --- */}
        <section className="mb-20">
          <div className="max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl font-bold text-center mb-4 text-blue-800">Color Palette Guide</h2>
            <p className="text-center text-gray-700 mb-6">
              Browse our curated palette of popular wall and decor colors. Click any swatch to preview and get inspiration for your next project!
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl shadow-lg p-6 md:p-10 border border-blue-100">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8">
              {colorPalette.map((color, i) => (
                <Swatch
                  key={color.name}
                  name={color.name}
                  hex={color.hex}
                  selected={selected === i}
                  onClick={() => setSelected(i)}
                />
              ))}
            </div>
            {selected !== null && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mt-8 flex flex-col items-center"
              >
                <div
                  className="w-32 h-32 md:w-40 md:h-40 rounded-xl shadow-lg border-2 border-blue-400 mb-4"
                  style={{ background: colorPalette[selected].hex }}
                />
                <div className="text-lg md:text-xl font-semibold text-blue-800 mb-1">
                  {colorPalette[selected].name}
                </div>
                <div className="text-sm text-gray-600">Hex: {colorPalette[selected].hex}</div>
                <div className="mt-2 text-center text-gray-700 max-w-md">
                  {getColorDescription(colorPalette[selected].name)}
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* Coverage & Calculation */}
        <section className="mb-12">
          <button
            onClick={() => setOpen((prev) => ({ ...prev, coverage: !prev.coverage }))}
            className="w-full flex items-center justify-between bg-blue-50 hover:bg-blue-100 px-6 py-4 rounded-xl shadow transition mb-2"
            aria-expanded={open.coverage}
          >
            <span className="text-2xl font-bold text-blue-800 flex items-center gap-2">
              <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="7" width="18" height="13" rx="2" strokeWidth={2} />
                <path d="M16 3v4M8 3v4" strokeWidth={2} />
              </svg>
              Coverage &amp; Paint Calculation
            </span>
            <span className="text-blue-600 text-xl">{open.coverage ? "−" : "+"}</span>
          </button>
          <AnimatePresence>
            {open.coverage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="bg-white border border-blue-100 rounded-xl shadow-lg p-8"
              >
                <h2 className="text-xl font-semibold mb-4 text-blue-700">How Much Paint Do You Need?</h2>
                <p className="mb-4 text-blue-900">
                  The coverage of 20 litres of emulsion paint depends on several factors:
                </p>
                <ul className="list-disc pl-6 mb-4 text-blue-900">
                  <li>Surface texture (smooth vs. rough)</li>
                  <li>Type of emulsion (standard, premium, or textured)</li>
                  <li>Number of coats</li>
                  <li>Application method (brush, roller, spray)</li>
                </ul>
                <h3 className="font-semibold text-blue-700 mb-2">General Coverage Estimate</h3>
                <table className="w-full text-sm mb-4 border">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="p-2 border">Surface Type</th>
                      <th className="p-2 border">Coverage (per coat)</th>
                      <th className="p-2 border">Coverage with 20L (1 coat)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border">Smooth surface</td>
                      <td className="p-2 border">10–12 m² per litre</td>
                      <td className="p-2 border">200–240 m²</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Semi-rough surface</td>
                      <td className="p-2 border">7–9 m² per litre</td>
                      <td className="p-2 border">140–180 m²</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Rough surface</td>
                      <td className="p-2 border">5–7 m² per litre</td>
                      <td className="p-2 border">100–140 m²</td>
                    </tr>
                  </tbody>
                </table>
                <p className="mb-4 text-blue-900 text-sm">
                  <strong>Note:</strong> These are estimates for one coat. Most emulsion paint jobs require two coats, so divide the total area by 2 for full coverage.
                </p>
                <h4 className="font-semibold text-blue-700 mb-2">Example Calculation</h4>
                <ul className="list-disc pl-6 mb-4 text-blue-900">
                  <li>You have a smooth wall and plan to apply 2 coats.</li>
                  <li>Area to paint: 120 m²</li>
                  <li>Coverage: ~10 m² per litre</li>
                  <li>
                    <strong>Total paint required:</strong> (120 m² × 2 coats) ÷ 10 m²/L = 24 litres
                  </li>
                  <li>
                    So, 20L will cover about 100–120 m² with two coats on a smooth wall.
                  </li>
                </ul>
                <h4 className="font-semibold text-blue-700 mb-2">Tips for Maximizing Coverage</h4>
                <ul className="list-disc pl-6 text-blue-900">
                  <li>Proper surface preparation (smooth, clean walls)</li>
                  <li>Use of primer to reduce paint absorption</li>
                  <li>Apply with a roller for even spreading</li>
                  <li>Avoid painting in high humidity (can affect drying and coverage)</li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Application Guide */}
        <section className="mb-12">
          <button
            onClick={() => setOpen((prev) => ({ ...prev, application: !prev.application }))}
            className="w-full flex items-center justify-between bg-green-50 hover:bg-green-100 px-6 py-4 rounded-xl shadow transition mb-2"
            aria-expanded={open.application}
          >
            <span className="text-2xl font-bold text-green-800 flex items-center gap-2">
              <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth={2} />
                <path d="M8 8h8v8H8z" strokeWidth={2} />
              </svg>
              Application of Emulsion Paints
            </span>
            <span className="text-green-600 text-xl">{open.application ? "−" : "+"}</span>
          </button>
          <AnimatePresence>
            {open.application && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="bg-white border border-green-100 rounded-xl shadow-lg p-8"
              >
                <h2 className="text-xl font-semibold mb-4 text-green-700">Step-by-Step Painting Guide</h2>
                <h3 className="font-semibold text-green-700 mb-2">A. Tools &amp; Materials Needed</h3>
                <ul className="list-disc pl-6 mb-4 text-green-900">
                  <li>Emulsion paint</li>
                  <li>Paint roller &amp; tray</li>
                  <li>Paintbrush (for edges and corners)</li>
                  <li>Sandpaper</li>
                  <li>Putty knife or filler</li>
                  <li>Painter's tape</li>
                  <li>Drop cloths or plastic sheets</li>
                  <li>Primer (optional, depending on the surface)</li>
                  <li>Clean cloth or sponge</li>
                  <li>Ladder (if needed)</li>
                </ul>
                <h3 className="font-semibold text-green-700 mb-2">B. Step-by-Step Guide</h3>
                <ol className="list-decimal pl-6 mb-4 text-green-900 space-y-2">
                  <li>
                    <strong>Surface Preparation:</strong>
                    <ul className="list-disc pl-6">
                      <li>Clean the surface: Remove dust, dirt, grease, or flaking paint using a damp cloth or sponge.</li>
                      <li>Repair: Fill cracks or holes with wall filler or putty. Let it dry, then sand smooth.</li>
                      <li>Sand: Lightly sand the surface to remove gloss from old paint and create a smooth base.</li>
                      <li>Remove dust: Wipe off any sanding dust with a clean, dry cloth.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Masking:</strong>
                    <ul className="list-disc pl-6">
                      <li>Use painter’s tape to cover edges, trims, light switches, and sockets.</li>
                      <li>Cover furniture and floors with drop cloths.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Priming (if needed):</strong>
                    <ul className="list-disc pl-6">
                      <li>Apply a primer if:
                        <ul className="list-disc pl-6">
                          <li>The wall is newly plastered</li>
                          <li>You’re painting over a dark or uneven surface</li>
                          <li>The old paint is glossy</li>
                        </ul>
                      </li>
                      <li>Allow the primer to dry completely before applying emulsion.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Mixing the Paint:</strong>
                    <ul className="list-disc pl-6">
                      <li>Stir the emulsion paint thoroughly to ensure even color and consistency.</li>
                      <li>You can slightly dilute it with water (about 5-10%) for the first coat, especially on new walls.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Cutting In:</strong>
                    <ul className="list-disc pl-6">
                      <li>Use a paintbrush to cut in along the edges of walls, corners, and around fittings.</li>
                      <li>This helps you cover the areas the roller can’t reach.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Rolling the Paint:</strong>
                    <ul className="list-disc pl-6">
                      <li>Dip a paint roller into the tray and roll off excess.</li>
                      <li>Start from the top of the wall and roll in a "W" or "M" pattern for even coverage.</li>
                      <li>Work in sections and blend edges while the paint is still wet.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Apply Second Coat:</strong>
                    <ul className="list-disc pl-6">
                      <li>Allow the first coat to dry completely (typically 2–4 hours, but check the paint can).</li>
                      <li>Apply a second coat for a richer finish and better coverage.</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Clean Up:</strong>
                    <ul className="list-disc pl-6">
                      <li>Remove painter’s tape before the paint fully dries to avoid peeling.</li>
                      <li>Wash brushes and rollers with water (since emulsion is water-based).</li>
                      <li>Store leftover paint in a sealed container.</li>
                    </ul>
                  </li>
                </ol>
                <h3 className="font-semibold text-green-700 mb-2">C. Tips for Best Results</h3>
                <ul className="list-disc pl-6 text-green-900">
                  <li>Work in daylight or good lighting.</li>
                  <li>Don’t overload the roller to avoid drips.</li>
                  <li>Maintain a wet edge to avoid lap marks.</li>
                  <li>Use high-quality paint and tools for a better finish.</li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Health & Safety */}
        <section className="mb-12">
          <button
            onClick={() => setOpen((prev) => ({ ...prev, safety: !prev.safety }))}
            className="w-full flex items-center justify-between bg-red-50 hover:bg-red-100 px-6 py-4 rounded-xl shadow transition mb-2"
            aria-expanded={open.safety}
          >
            <span className="text-2xl font-bold text-red-800 flex items-center gap-2">
              <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth={2} />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01" />
              </svg>
              Health &amp; Safety Information
            </span>
            <span className="text-red-600 text-xl">{open.safety ? "−" : "+"}</span>
          </button>
          <AnimatePresence>
            {open.safety && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="bg-white border border-red-100 rounded-xl shadow-lg p-8"
              >
                <h2 className="text-xl font-semibold mb-4 text-red-700">Paint Safety &amp; Environmental Care</h2>
                <h3 className="text-lg font-bold mb-2 text-red-800">Low Risk (Compared to Oil-Based Paints)</h3>
                <ul className="list-disc pl-6 mb-4 text-red-900">
                  <li>Emulsion paints generally contain fewer harmful chemicals (low or zero VOCs).</li>
                  <li>They are non-flammable and produce less odor, making them safer for indoor use.</li>
                </ul>
                <h4 className="font-semibold mb-2 text-red-700">Potential Hazards &amp; First Aid</h4>
                <table className="w-full text-sm mb-4 border">
                  <thead>
                    <tr className="bg-red-100">
                      <th className="p-2 border">Exposure</th>
                      <th className="p-2 border">Risk / Reaction</th>
                      <th className="p-2 border">Advice</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border">Inhalation</td>
                      <td className="p-2 border">Mild headache, nausea, dizziness</td>
                      <td className="p-2 border">Use in well-ventilated rooms. Use fans or open windows.</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Skin Contact</td>
                      <td className="p-2 border">Dryness, irritation, rash</td>
                      <td className="p-2 border">Use gloves; wash hands after use.</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Eye Contact</td>
                      <td className="p-2 border">Irritation, redness</td>
                      <td className="p-2 border">Rinse immediately with clean water for several minutes.</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Ingestion</td>
                      <td className="p-2 border">Harmful if swallowed</td>
                      <td className="p-2 border">Do not eat/drink near painting area. Seek medical help if swallowed.</td>
                    </tr>
                  </tbody>
                </table>
                <h4 className="font-semibold mb-2 text-red-700">Environmental Safety</h4>
                <ul className="list-disc pl-6 mb-2 text-red-900">
                  <li>Water-based, so less harmful to the environment than oil-based alternatives.</li>
                  <li>Many modern emulsions are low in VOCs, reducing air pollution.</li>
                </ul>
                <h4 className="font-semibold mb-2 text-red-700">Environmental Concerns &amp; Disposal</h4>
                <table className="w-full text-sm mb-4 border">
                  <thead>
                    <tr className="bg-red-100">
                      <th className="p-2 border">Concern</th>
                      <th className="p-2 border">Advice</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-2 border">Waste Disposal</td>
                      <td className="p-2 border">Don’t pour leftover paint down the drain or soil.</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Cleaning</td>
                      <td className="p-2 border">Wash tools in a sink that connects to the sewage system, not outdoors.</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Storage</td>
                      <td className="p-2 border">Keep unused paint in sealed containers away from direct sunlight and frost.</td>
                    </tr>
                    <tr>
                      <td className="p-2 border">Packaging</td>
                      <td className="p-2 border">Dispose of empty containers through designated waste programs or recycling centers.</td>
                    </tr>
                  </tbody>
                </table>
                <h4 className="font-semibold mb-2 text-red-700">Protective Measures</h4>
                <ul className="list-disc pl-6 text-red-900">
                  <li>Wear gloves, mask, and eye protection if splashing is likely.</li>
                  <li>Keep children and pets away while painting and during drying time.</li>
                  <li>Always read the label and safety data sheet (SDS) from the manufacturer for specific ingredients and risks.</li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </div>
    </div>
  );
}

// Helper: Color descriptions for user inspiration
function getColorDescription(name) {
  switch (name) {
    case "Broken White":
      return "A timeless, versatile off-white that brightens any space and pairs well with both modern and classic decor.";
    case "Off White":
      return "A warm, welcoming neutral perfect for living rooms, bedrooms, and ceilings.";
    case "Butter":
      return "Soft and cheerful, this yellow brings a gentle glow to kitchens and nurseries.";
    case "Vanilla":
      return "A creamy, inviting yellow ideal for cozy, sunlit rooms.";
    case "Ivory":
      return "Elegant and understated, ivory works beautifully in hallways and open spaces.";
    case "Sunlight Yellow":
      return "Vivid and energizing, this yellow is great for accent walls or creative spaces.";
    case "Mint Green":
      return "Fresh and calming, mint green is perfect for bathrooms or restful bedrooms.";
    case "Apple Green":
      return "Bright and lively, apple green enlivens kitchens and playrooms.";
    case "Milo Green":
      return "A deep, natural green for a sophisticated, earthy vibe.";
    case "Mermaid Green":
      return "A unique, muted green that adds character to any feature wall.";
    case "Soft Blue":
      return "Light and airy, soft blue is ideal for tranquil bedrooms or offices.";
    case "Blue":
      return "Classic and bold, this blue suits both modern and traditional interiors.";
    case "Deep Blue":
      return "Rich and dramatic, deep blue is perfect for statement walls or cozy dens.";
    case "Light Purple":
      return "Gentle and dreamy, light purple is wonderful for children's rooms.";
    case "Deep Purple":
      return "Luxurious and regal, deep purple adds depth to living or dining rooms.";
    case "Pink":
      return "Fun and playful, pink is great for accent walls or creative spaces.";
    case "Terracotta":
      return "Warm and rustic, terracotta brings a Mediterranean feel to any room.";
    case "Magnolia":
      return "Soft and subtle, magnolia is a classic for timeless elegance.";
    case "Cream":
      return "Warm and inviting, cream is a favorite for family spaces.";
    case "Student Cream":
      return "A practical, earthy tone ideal for study areas or home offices.";
    case "Peach":
      return "Soft and friendly, peach is perfect for bedrooms or social spaces.";
    case "Mango":
      return "Vibrant and bold, mango makes a striking accent color.";
    case "Beige":
      return "A neutral staple, beige complements any color scheme.";
    case "Light Stone":
      return "Modern and clean, light stone is great for minimalist designs.";
    case "Deep Stone":
      return "Strong and grounding, deep stone is ideal for feature walls.";
    case "Smoke Grey":
      return "Cool and contemporary, smoke grey fits urban and industrial looks.";
    case "Grey":
      return "A classic mid-tone grey for versatile, balanced interiors.";
    case "Charcoal Black":
      return "Sophisticated and bold, charcoal black makes a dramatic statement.";
    default:
      return "A beautiful color for your next project!";
  }
}