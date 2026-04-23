"use client";

import { motion } from "framer-motion";

export default function Countdown() {
  return (
    <div className="mt-8 space-y-6">

      <p className="text-gray-400 text-sm">
        Popular categories among our customers
      </p>

      <div className="space-y-4">

        {/* Women */}
        <div>
          <div className="flex justify-between text-sm text-white mb-1">
            <span>Women Footwear</span>
            <span>85%</span>
          </div>
          <div className="w-full h-2 bg-white/10 rounded-full">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "85%" }}
              transition={{ duration: 1.5 }}
              className="h-2 bg-[color:var(--brand-gold)] rounded-full"
            />
          </div>
        </div>

        {/* Kids */}
        <div>
          <div className="flex justify-between text-sm text-white mb-1">
            <span>Kids Footwear</span>
            <span>70%</span>
          </div>
          <div className="w-full h-2 bg-white/10 rounded-full">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "70%" }}
              transition={{ duration: 1.5 }}
              className="h-2 bg-[color:var(--brand-gold)] rounded-full"
            />
          </div>
        </div>

        {/* Bags */}
        <div>
          <div className="flex justify-between text-sm text-white mb-1">
            <span>Accessories & Bags</span>
            <span>20%</span>
          </div>
          <div className="w-full h-2 bg-white/10 rounded-full">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "20%" }}
              transition={{ duration: 1.5 }}
              className="h-2 bg-[color:var(--brand-gold)] rounded-full"
            />
          </div>
        </div>

      </div>

    </div>
  );
}