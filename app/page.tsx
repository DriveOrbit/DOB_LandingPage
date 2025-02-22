"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import {
  Car,
  BarChart3,
  Gauge,
  Bell,
  Fuel,
  UserPlus,
  QrCode,
  Activity,
  ChevronRight,
  Github,
  Twitter,
  Linkedin,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

const features = [
  {
    icon: <Car className="h-12 w-12" />,
    title: "REAL-TIME TRACKING",
    description: "Keep your finger on the pulse of your fleet with our advanced GPS tracking system. Monitor vehicle locations, speed, and status updates in real-time, ensuring optimal route management and improved response times.",
    image: "https://t3.ftcdn.net/jpg/09/86/01/52/240_F_986015247_k85qqT9bRgLgJ356YJWpXXPPuLm4QB9o.jpg",
  },
  {
    icon: <BarChart3 className="h-12 w-12" />,
    title: "PERFORMANCE ANALYTICS",
    description: "Transform raw data into actionable insights with our comprehensive analytics platform. Track driver behavior, fuel efficiency, and maintenance patterns to optimize your fleet's performance and reduce operational costs.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  },
  {
    icon: <QrCode className="h-12 w-12" />,
    title: "SMART VEHICLE ACCESS",
    description: "Streamline vehicle assignments and access control with our innovative QR code system. Enable secure and contactless vehicle check-in/check-out, while maintaining a detailed digital record of vehicle usage.",
    image: "https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=800",
  },
  {
    icon: <Bell className="h-12 w-12" />,
    title: "PREDICTIVE MAINTENANCE",
    description: "Stay ahead of vehicle maintenance with our AI-powered predictive system. Receive timely alerts for scheduled services, potential issues, and required inspections to prevent costly breakdowns and extend vehicle life.",
    image: "https://t4.ftcdn.net/jpg/09/15/24/87/240_F_915248739_vBh9NzvgNZkcMPB4mGj6BjsLr2w12B9Z.jpg",
  },
  {
    icon: <Fuel className="h-12 w-12" />,
    title: "FUEL OPTIMIZATION",
    description: "Maximize fuel efficiency across your entire fleet with our intelligent monitoring system. Track consumption patterns, identify inefficiencies, and implement data-driven strategies to reduce fuel costs.",
    image: "https://images.unsplash.com/photo-1579621970590-9d624e59d834?w=800",
  },
  {
    icon: <Activity className="h-12 w-12" />,
    title: "SAFETY MANAGEMENT",
    description: "Enhance fleet safety with our comprehensive monitoring tools. Track driver behavior, manage risk factors, and ensure compliance with safety regulations to protect your assets and team members.",
    image: "https://images.unsplash.com/photo-1454117096348-e4abbeba002c?w=800",
  },
];

const steps = [
  {
    icon: <UserPlus className="h-6 w-6" />,
    title: "Register & Setup",
    description: "Add your drivers and vehicles to the system in minutes.",
  },
  {
    icon: <QrCode className="h-6 w-6" />,
    title: "Scan & Connect",
    description: "Drivers scan vehicle QR codes to start their shifts.",
  },
  {
    icon: <Gauge className="h-6 w-6" />,
    title: "Track & Monitor",
    description: "Get real-time updates on vehicle location and driver activity.",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Optimize & Improve",
    description: "Use insights to enhance fleet performance and efficiency.",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Fleet Manager",
    company: "LogiTech Solutions",
    image: "https://avatars.githubusercontent.com/u/188667694?v=4",
    quote: "DriveOrbit has transformed how we manage our fleet. The real-time tracking and analytics have improved our efficiency by 40%.",
  },
  {
    name: "Michael Rodriguez",
    role: "Operations Director",
    company: "FastTrack Delivery",
    image: "https://avatars.githubusercontent.com/u/160252042?v=4",
    quote: "The QR code system and maintenance alerts have significantly reduced our vehicle downtime. Excellent platform!",
  },
  {
    name: "Emily Thompson",
    role: "CEO",
    company: "GreenFleet Inc",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    quote: "Since implementing DriveOrbit, we've seen a 30% reduction in fuel costs and improved driver safety scores.",
  },
];

export default function Home() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      lastScrollY = window.scrollY;

      if (window.scrollY > 50) {
        setNavbarBackground(true);
      } else {
        setNavbarBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: showNavbar ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 ${navbarBackground ? "bg-white" : ""}`}
      >
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <img src="https://avatars.githubusercontent.com/u/188688275?s=400&u=856b48def80550c9fce1c213ecdcb801a41fe0c6&v=4" alt="DriveOrbit Logo" className="h-10" onError={(e) => { e.target.src = '/fallback-logo.png'; console.error('Image not found:', e) }} />
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#about" className="hover:text-[#df8f08]">About</a>
            <a href="#services" className="hover:text-[#df8f08]">Services</a>
            <a href="#join" className="hover:text-[#df8f08] bg-black text-white p-2 rounded-lg">Join Us</a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } md:hidden`}
        >
          <div className="flex justify-end p-4">
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <ul className="flex flex-col space-y-4 p-4">
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#join" className="hover:underline">Join Us</a></li>
          </ul>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920"
            alt="Fleet Dashboard"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        </div>

        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              DriveOrbit – Smarter Fleet Management for a Safer Future
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform your fleet operations with real-time tracking, intelligent monitoring, and data-driven insights.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              Request a Demo <ChevronRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Modern Fleet Management</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage your fleet efficiently and safely in one integrated platform.
            </p>
          </motion.div>

          <div className="space-y-24">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl" />
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-[400px] object-cover rounded-3xl"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="inline-block p-3 bg-primary/10 rounded-2xl text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {feature.description}
                  </p>
                  <Button variant="outline" className="group">
                    Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get started with DriveOrbit in four simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-4 text-primary flex justify-center">{step.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by fleet managers worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-12 w-12">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </Avatar>
                    <div className="ml-4">
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground">{testimonial.quote}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Managing Your Fleet Today!</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of fleet managers who trust DriveOrbit for their operations
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6"
            >
              Get Started Now <ChevronRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">DriveOrbit</h3>
              <p className="text-sm text-muted-foreground">
                Revolutionizing fleet management with smart technology and real-time insights.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Documentation</li>
                <li>Help Center</li>
                <li>API Reference</li>
                <li>Status</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <Twitter className="h-5 w-5" />
                <Linkedin className="h-5 w-5" />
                <Github className="h-5 w-5" />
              </div>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} DriveOrbit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}