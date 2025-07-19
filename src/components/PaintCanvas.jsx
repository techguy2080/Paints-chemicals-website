import { motion } from "framer-motion";

export default function PaintCanvas() {
  return (
    <div className="w-full h-64 bg-white relative overflow-hidden rounded-lg flex items-center justify-center">
      {/* Animated macro ink blobs */}
      <motion.div
        className="absolute inset-0 w-full h-full pointer-events-none"
        initial={false}
        animate={{}}
      >
        {/* Red blob */}
        <motion.div
          className="absolute rounded-full blur-2xl opacity-60"
          style={{ background: "#ff1744", width: 120, height: 120, top: 30, left: 40 }}
          animate={{
            y: [0, 20, -15, 0],
            x: [0, 15, -10, 0],
            scale: [1, 1.12, 0.95, 1],
            rotate: [0, 10, -10, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Yellow blob */}
        <motion.div
          className="absolute rounded-full blur-2xl opacity-40"
          style={{ background: "#ffd600", width: 90, height: 90, top: 80, right: 50 }}
          animate={{
            y: [0, -15, 15, 0],
            x: [0, -10, 10, 0],
            scale: [1, 1.08, 0.92, 1],
            rotate: [0, -8, 8, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Blue blob */}
        <motion.div
          className="absolute rounded-full blur-2xl opacity-40"
          style={{ background: "#2979ff", width: 110, height: 110, bottom: 30, left: 80 }}
          animate={{
            y: [0, 12, -12, 0],
            x: [0, 8, -8, 0],
            scale: [1, 1.1, 0.98, 1],
            rotate: [0, 6, -6, 0],
          }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Green blob */}
        <motion.div
          className="absolute rounded-full blur-2xl opacity-35"
          style={{ background: "#00e676", width: 80, height: 80, bottom: 40, right: 80 }}
          animate={{
            y: [0, -10, 10, 0],
            x: [0, 6, -6, 0],
            scale: [1, 1.06, 0.94, 1],
            rotate: [0, -5, 5, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Magenta blob */}
        <motion.div
          className="absolute rounded-full blur-2xl opacity-35"
          style={{ background: "#d500f9", width: 70, height: 70, top: 100, left: "55%" }}
          animate={{
            y: [0, 8, -8, 0],
            x: [0, -6, 6, 0],
            scale: [1, 1.08, 0.92, 1],
            rotate: [0, 4, -4, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Stirring tool (subtle, animated in and out) */}
        <motion.div
          className="absolute w-2 h-32 rounded-full bg-white shadow-lg opacity-80"
          style={{ left: "48%", top: "20%" }}
          initial={{ y: -60, opacity: 0 }}
          animate={{
            y: [ -60, 40, 60, 40, -60 ],
            opacity: [0, 1, 1, 1, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, repeatDelay: 6, ease: "easeInOut" }}
        />
      </motion.div>
      {/* Overlay for luminosity */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "rgba(255,255,255,0.15)" }} />
      {/* Optional: Canvas label */}
      <span className="relative z-10 text-gray-500 font-medium">Macro Ink Diffusion Simulation</span>
    </div>
  );
}