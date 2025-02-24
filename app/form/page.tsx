// app/join/page.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your form submission logic here (e.g., API call)
    setSubmitted(true); // Show confirmation message
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
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
      <div className="fixed inset-0 bg-black/50 z-10"></div>

      {/* Form Content */}
      <div className="max-w-2xl w-full bg-white/20 backdrop-blur-md p-8 rounded-lg shadow-[0_20px_50px_rgba(0,0,0,1)] border border-white/10 relative z-20">
        {submitted ? (
          // Thank You Message
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-gray-100">
              Thank you for your interest in DriveOrbit!
            </h3>
            <p className="text-lg text-gray-300">
              Our team will contact you soon to discuss how we can help optimize your fleet.
            </p>
            <div className="mt-6 text-center">
                <Link href="/">
                    <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90">
                        Back to Home
                    </button>
                </Link>
            </div>
          </div>
        ) : (
          // Form
          <>
            <h2 className="text-3xl font-bold mb-6 text-center text-white">
              Get Started with Smarter Fleet Management
            </h2>
            <p className="text-lg text-gray-200 mb-8 text-center">
              Interested in DriveOrbit? Fill out the form below, and our team will get in touch with you!
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-200">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 bg-white/20 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 bg-white/20 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-200">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 bg-white/20 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-200">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 bg-white/20 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Number of Vehicles in Fleet */}
              <div>
                <label htmlFor="fleetSize" className="block text-sm font-medium text-gray-200">
                  Number of Vehicles in Fleet <span className="text-red-500">*</span>
                </label>
                <select
                  id="fleetSize"
                  name="fleetSize"
                  value={formData.fleetSize}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 bg-white/20 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="" disabled className="text-gray-800">Select number of vehicles</option>
                  <option value="1-10" className="text-gray-800">1-10</option>
                  <option value="11-50" className="text-gray-800">11-50</option>
                  <option value="51-100" className="text-gray-800">51-100</option>
                  <option value="100+" className="text-gray-800">100+</option>
                </select>
              </div>

              {/* Role/Position */}
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-200">
                  Role/Position
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 bg-white/20 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="e.g., Admin, Fleet Manager, Business Owner"
                />
              </div>

              {/* Message/Inquiry */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-200">
                  Message/Inquiry
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 bg-white/20 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={4}
                  placeholder="Tell us more about your fleet management needs"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <Button type="submit" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90">
                  Get on Board
                </Button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}