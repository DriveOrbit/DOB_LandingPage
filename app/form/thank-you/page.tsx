"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import "../../../styles/form.css";
import LoadingAnimation from "@/components/ui/loading-animation";

export default function ThankYouPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Loading Animation */}
      <LoadingAnimation isLoading={isLoading} />
      
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://cdn.pixabay.com/video/2018/11/29/19627-304735769_tiny.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken the video background */}
      <div className="fixed inset-0 bg-black/70 z-10"></div>

      {/* Thank You Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl w-full form-container p-8 rounded-lg relative z-20 mx-4"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center py-8"
        >
          <div className="success-checkmark">
            <div className="check-icon">
              <span className="icon-line line-tip"></span>
              <span className="icon-line line-long"></span>
            </div>
          </div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-2xl font-bold mb-4 text-white"
          >
            Thank you for your interest in DriveOrbit!
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-lg text-gray-300 mb-8"
          >
            Our team will contact you soon to discuss how we can help optimize your fleet.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-8"
          >
            <Link href="/">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="gradient-button text-white px-8 py-3 rounded-lg font-medium"
              >
                Back to Home
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
