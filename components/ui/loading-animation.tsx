"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingAnimationProps {
  isLoading: boolean;
}

export default function LoadingAnimation({ isLoading }: LoadingAnimationProps) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      // Add a small delay before hiding the loader for a smoother transition
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 600);
      return () => clearTimeout(timer);
    } else {
      setShowLoader(true);
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center loading-container"
        >
          <div className="relative flex flex-col items-center">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <img
                src="https://avatars.githubusercontent.com/u/188688275?s=400&u=856b48def80550c9fce1c213ecdcb801a41fe0c6&v=4"
                alt="DriveOrbit Logo"
                className="h-24 w-auto rounded-full shadow-lg loading-logo"
              />
            </motion.div>

            {/* Orbital rings animation */}
            <div className="relative">
              {/* Inner orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-1/2 left-1/2 w-16 h-16 -ml-8 -mt-8 rounded-full border-2 border-dashed border-[#6D6BF8]/30"
              />

              {/* Middle orbit */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-1/2 left-1/2 w-28 h-28 -ml-14 -mt-14 rounded-full border-2 border-dashed border-[#54C1D5]/40"
              />

              {/* Outer orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-1/2 left-1/2 w-40 h-40 -ml-20 -mt-20 rounded-full border-2 border-dashed border-white/20"
              />

              {/* Orbiting dots */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-1/2 left-1/2 w-16 h-16 -ml-8 -mt-8"
              >
                <motion.div className="absolute top-0 left-1/2 -ml-1 w-2 h-2 rounded-full bg-[#6D6BF8] orbit-dot" />
              </motion.div>

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-1/2 left-1/2 w-28 h-28 -ml-14 -mt-14"
              >
                <motion.div className="absolute top-0 left-1/2 -ml-1 w-2 h-2 rounded-full bg-[#54C1D5] orbit-dot" />
              </motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-1/2 left-1/2 w-40 h-40 -ml-20 -mt-20"
              >
                <motion.div className="absolute top-0 left-1/2 -ml-1 w-2 h-2 rounded-full bg-white orbit-dot" />
              </motion.div>
            </div>

            {/* Loading text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-12 text-center"
            >
              <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6D6BF8] to-[#54C1D5]">
                DriveOrbit
              </h2>
              <p className="text-white/70 text-sm mt-2">
                Smarter Fleet Management
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
