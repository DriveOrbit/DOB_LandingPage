// app/form/page.tsx
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import "../../styles/form.css";
import LoadingAnimation from "@/components/ui/loading-animation";

export default function JoinFormPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    fleetSize: "",
    role: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Simulate page loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    }

    if (!formData.fleetSize) {
      errors.fleetSize = "Please select your fleet size";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when field is edited
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // We're using Formsubmit's direct form submission, so we don't need this handler anymore
  // The form will be submitted directly to Formsubmit via the action attribute

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

      {/* Form Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl w-full form-container p-8 rounded-lg relative z-20 mx-4">
        {submitted ? (
          // Thank You Message with animation
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
        ) : (
          // Form with animations
          <motion.div>
            <motion.h2
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#6D6BF8] to-[#54C1D5]"
            >
              Get Started with DriveOrbit
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-300 mb-8 text-center"
            >
              Fill out the form below, and our team will get in touch with you!
            </motion.p>

            <form action="https://formsubmit.co/info@driveorbit.pro" method="POST" className="space-y-5">
              {/* FormSubmit Configuration */}
              <input type="hidden" name="_subject" value="New DriveOrbit Form Submission" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value={typeof window !== 'undefined' ? `${window.location.origin}/form/thank-you` : ''} />
              <input type="hidden" name="_captcha" value="false" />

              {/* Full Name */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-200 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="name"
                  className="form-input mt-1 block w-full p-3 rounded-lg focus:outline-none"
                  placeholder="Enter your full name"
                  required
                />
                {formErrors.fullName && (
                  <p className="mt-1 text-sm text-red-400">{formErrors.fullName}</p>
                )}
              </motion.div>

              {/* Email Address */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input mt-1 block w-full p-3 rounded-lg focus:outline-none"
                  placeholder="Enter your email address"
                  required
                />
                {formErrors.email && (
                  <p className="mt-1 text-sm text-red-400">{formErrors.email}</p>
                )}
              </motion.div>

              {/* Phone Number */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input mt-1 block w-full p-3 rounded-lg focus:outline-none"
                  placeholder="Enter your phone number"
                  required
                />
                {formErrors.phone && (
                  <p className="mt-1 text-sm text-red-400">{formErrors.phone}</p>
                )}
              </motion.div>

              {/* Two columns for smaller fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Company Name */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="company" className="block text-sm font-medium text-gray-200 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="form-input mt-1 block w-full p-3 rounded-lg focus:outline-none"
                    placeholder="Your company name"
                  />
                </motion.div>

                {/* Number of Vehicles in Fleet */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label htmlFor="fleetSize" className="block text-sm font-medium text-gray-200 mb-1">
                    Fleet Size <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="fleetSize"
                    name="Fleet Size"
                    className="form-input form-select mt-1 block w-full p-3 rounded-lg focus:outline-none"
                    required
                  >
                    <option value="" disabled selected>Select fleet size</option>
                    <option value="1-10 vehicles">1-10 vehicles</option>
                    <option value="11-50 vehicles">11-50 vehicles</option>
                    <option value="51-100 vehicles">51-100 vehicles</option>
                    <option value="100+ vehicles">100+ vehicles</option>
                  </select>
                  {formErrors.fleetSize && (
                    <p className="mt-1 text-sm text-red-400">{formErrors.fleetSize}</p>
                  )}
                </motion.div>
              </div>

              {/* Role/Position */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <label htmlFor="role" className="block text-sm font-medium text-gray-200 mb-1">
                  Your Role
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  className="form-input mt-1 block w-full p-3 rounded-lg focus:outline-none"
                  placeholder="e.g., Fleet Manager, Business Owner"
                />
              </motion.div>

              {/* Message/Inquiry */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input mt-1 block w-full p-3 rounded-lg focus:outline-none"
                  rows={4}
                  placeholder="Tell us more about your fleet management needs"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex justify-center mt-8"
              >
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="gradient-button text-white px-8 py-3 rounded-lg font-medium w-full md:w-auto flex items-center justify-center"
                >
                  Get Started Now
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}