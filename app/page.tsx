"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/navbar.css"; // Import custom navbar styles
import Link from "next/link";
import { TbBrandTiktok } from "react-icons/tb"; // TikTok icon from react-icons
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { BackgroundBeams } from "@/components/ui/background-beams"; // Import the BackgroundBeams component
import LoadingAnimation from "@/components/ui/loading-animation"; // Import the loading animation
import { AppDetailsModal } from "@/components/ui/app-details-modal"; // Import the app details modal


import {
  Car,
  BarChart3,
  Bell,
  Fuel,
  QrCode,
  Activity,
  ChevronRight,
  Linkedin,
  Menu,
  X,
} from "lucide-react";
import { FaInstagram, FaGithub } from "react-icons/fa";

const features = [
  {
    icon: <Car className="h-12 w-12" />,
    title: "REAL TIME VEHICLE TRACKING",
    description:
      "Real-time route tracking provides enhanced oversight and control over vehicle operations. Administrators can monitor each vehicle's exact location on a map interface, ensuring vehicles stay on their intended route and reducing unauthorized deviations. The system also logs route history, capturing details like stops, travel time, and any deviations, which can be used for audits and route optimization.",
    image:
      "https://t3.ftcdn.net/jpg/09/86/01/52/240_F_986015247_k85qqT9bRgLgJ356YJWpXXPPuLm4QB9o.jpg",
  },
  {
    icon: <BarChart3 className="h-12 w-12" />,
    title: "DRIVER PERFORMANCE",
    description:
      "Driver performance tracking involves monitoring and analyzing various aspects of a driver's behavior to ensure safety, efficiency, and adherence to company standards. Key metrics such as speeding, harsh braking, rapid acceleration, and idle time are closely tracked to evaluate driving habits. This comprehensive approach helps companies improve safety, recognize top drivers, and optimize fleet performance.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  },
  {
    icon: <QrCode className="h-12 w-12" />,
    title: "SMART VEHICLE ACCESS",
    description:
      "Streamline vehicle assignments and access control with our innovative QR code system. Enable secure and contactless vehicle check-in/check-out, while maintaining a detailed digital record of vehicle usage.",
    image:
      "https://t3.ftcdn.net/jpg/04/41/09/04/240_F_441090449_LGnk86BswcQwVeuNMafN1HEqAV7A36Kl.jpg",
  },
  {
    icon: <Bell className="h-12 w-12" />,
    title: "MAINTENANCE ALERTS",
    description:
      "Maintenance alerts help manage vehicle upkeep by sending automatic reminders for service schedules, maintenance checks, or when a vehicle’s performance drops. These alerts are triggered based on factors like engine performance, and the time since the last service, helping ensure that routine maintenance is not overlooked. By receiving these reminders, fleet managers can schedule repairs or maintenance when they are needed.",
    image:
      "https://t4.ftcdn.net/jpg/09/15/24/87/240_F_915248739_vBh9NzvgNZkcMPB4mGj6BjsLr2w12B9Z.jpg",
  },
  {
    icon: <Fuel className="h-12 w-12" />,
    title: "FUEL OPTIMIZATION",
    description:
      "Maximize fuel efficiency across your entire fleet with our intelligent monitoring system. Track consumption patterns, identify inefficiencies, and implement data-driven strategies to reduce fuel costs.",
    image:
      "https://t4.ftcdn.net/jpg/11/74/64/43/240_F_1174644354_pByY99JZRngTUe0OOaLeg7XBJuPpWj8O.jpg",
  },
  {
    icon: <Activity className="h-12 w-12" />,
    title: "PERFORMANCE ANALYTICS",
    description:
      "Performance analytics provide detailed reports on key metrics like fuel use, vehicle performance, and driver behavior. These insights help fleet managers identify inefficiencies, optimize operations, and reduce costs for improved productivity.",
    image:
      "https://t4.ftcdn.net/jpg/05/82/71/17/240_F_582711786_QIZaSfrv2nKTzej348R8HxbX3GB2vJjl.jpg",
  },
];

const teamMembers = [
  {
    quote:
      "Led the Project, ensuring seamless coordination and technical execution. Contributed to both frontend and backend. Managed project workflows, audited team contributions, and guided the team toward creating an innovative vehicle management solution.",
    name: "Senuka Fernando",
    designation: "Team Lead | Full-Stack Developer",
    src: "https://avatars.githubusercontent.com/u/122157771?v=4",
    social: {
      Instagram: "https://www.instagram.com/senuka.f/",
      linkedin: "https://www.linkedin.com/in/senuka-fernando/",
      github: "https://github.com/senukafer12",
    },
  },
  {
    quote:
      "Led the Flutter project, gathering and motivating the team to deliver high-quality results. Designed and implemented the mobile app’s driver dashboard and driving history features, ensuring a seamless user experience. Developed the app’s splash screen.",
    name: "Sachintha Sithuruwan",
    designation: "Full-Stack Developer | UI/UX Designer",
    src: "https://avatars.githubusercontent.com/u/160252042?v=4",
    social: {
      Instagram: "https://www.instagram.com/sachintha_vithanawasam/",
      linkedin:
        "https://www.linkedin.com/in/sachintha-vithanawasam-6bb9b4287/",
      github: "https://github.com/SachiVithX",
    },
  },
  {
    quote:
      "Manage the project, ensuring seamless collaboration and high-quality execution. Designed the UI/UX, developed the backend, and implemented the mobile application. Managed project workflows, and optimized system performance for efficiency and reliability.",
    name: "Chamikara Kodithuwakku",
    designation: "Full-Stack Developer | UI/UX Expert",
    src: "https://avatars.githubusercontent.com/u/151379703?v=4",
    social: {
      Instagram: "https://www.instagram.com/cham.i_.xx/",
      linkedin: "https://www.linkedin.com/in/chamikara-kodithuwakku-5a1532292/",
      github: "https://github.com/chaxmikara",
    },
  },
  {
    quote:
      "Led the presenting and pitching of the project. Managed the marketing and social media strategies to enhance project visibility and engagement. Additionally, contributed to the Flutter application, ensuring a smooth and visually appealing user experience.",
    name: "Chandeera Wickramasingha",
    designation: "Frontend Developer | Presenter",
    src: "https://avatars.githubusercontent.com/u/188667694?v=4",
    social: {
      Instagram: "https://www.instagram.com/prabathcw/",
      linkedin: "https://www.linkedin.com/in/prabathcw/",
      github: "https://github.com/PrabathCW",
    },
  },
  {
    quote:
      "Developed and implemented the UI using Flutter to build a responsive and visually engaging web and mobile application. Optimized performance and ensured a seamless user experience with Flutter’s cross-platform compatibility.",
    name: "Nuhansa De Silva",
    designation: "Frontend Developer | UI/UX Designer",
    src: "https://avatars.githubusercontent.com/u/160605772?v=4",
    social: {
      Instagram: "https://www.instagram.com/nu_desilva/",
      linkedin: "https://www.linkedin.com/in/nuhansa-de-silva-8516b3273/",
      github: "https://github.com/NuDeSilva",
    },
  },
  {
    quote:
      "Led documentation and conducted research to enhance system transparency and efficiency. Contributed to the frontend of the mobile app using Flutter, ensuring a seamless user experience. Assisted in backend development to optimize system performance.",
    name: "Duranga Harindi",
    designation: "Full-Stack Developer | Documentation",
    src: "https://avatars.githubusercontent.com/u/187119991?v=4",
    social: {
      Instagram: "https://www.instagram.com/harindi_88/",
      linkedin: "https://www.linkedin.com/in/durangaharindi/",
      github: "https://github.com/Harindi02",
    },
  },
];

const teamMembersWords = `Meet the team behind DriveOrbit.`;

const words = [
  {
    text: "Start",
  },
  {
    text: "Managing",
  },
  {
    text: "Your",
  },
  {
    text: "Fleet",
  },
  {
    text: "Today!",
    className: "text-blue-500 dark:text-blue-500",
  },
];

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showAppDetails, setShowAppDetails] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Set navbar background based on scroll position
      if (window.scrollY > 50) {
        setNavbarBackground(true);
      } else {
        setNavbarBackground(false);
      }

      // Calculate scroll progress
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalScroll = docHeight - windowHeight;
      const progress = (scrollTop / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Loading Animation */}
      <LoadingAnimation isLoading={isLoading} />

      {/* Scroll Indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 z-40 bg-gray-700">
        <motion.div
          className="h-full bg-primary"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Top Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`navbar-container fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarBackground
          ? "bg-black/40 backdrop-blur-md text-white shadow-lg"
          : "bg-transparent text-white"
          }`}
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo with animation */}
          <div className={`flex items-center space-x-2 ${isMobileMenuOpen ? "md:flex hidden" : "flex"}`}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2"
            >
              <img
                src="https://avatars.githubusercontent.com/u/188688275?s=400&u=856b48def80550c9fce1c213ecdcb801a41fe0c6&v=4"
                alt="DriveOrbit Logo"
                className="h-10 w-auto rounded-full shadow-md"
              />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6D6BF8] to-[#54C1D5]">DriveOrbit</span>
            </motion.div>
          </div>

          {/* Desktop Menu with enhanced hover effects */}
          <div className="hidden md:flex items-center space-x-8">
            {['about', 'features', 'team'].map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className="relative group px-3 py-2 transition-all duration-300"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <span className="capitalize font-medium">{item}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6D6BF8] to-[#54C1D5] transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
            <motion.a
              href="#join"
              className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#6D6BF8] to-[#54C1D5] text-white hover:from-[#6D6BF8]/90 hover:to-[#54C1D5]/90 transition-all shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Us
            </motion.a>
          </div>

          {/* Mobile Menu Toggle with animation */}
          <motion.div
            className="md:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu Overlay with improved backdrop */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Menu Content with improved animations */}
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: isMobileMenuOpen ? 0 : '-100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed top-0 left-0 h-full w-72 bg-gradient-to-b from-black/70 to-black/50 backdrop-blur-lg shadow-xl z-50 md:hidden"
        >
          {/* Mobile menu header with logo */}
          <div className="p-4 border-b border-white/10 flex justify-between items-center">
            <div className="navbar-logo flex items-center space-x-2">
              <img
                src="https://avatars.githubusercontent.com/u/188688275?s=400&u=856b48def80550c9fce1c213ecdcb801a41fe0c6&v=4"
                alt="DriveOrbit Logo"
                className="h-10 w-auto rounded-full"
              />
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6D6BF8] to-[#54C1D5]">DriveOrbit</span>
            </div>
            <motion.button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              whileHover={{ rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="h-6 w-6 text-white" />
            </motion.button>
          </div>

          {/* Mobile menu items with staggered animation */}
          <div className="p-4 flex flex-col h-[calc(100vh-80px)]">
            <div className="space-y-2 flex-1">
              {['about', 'features', 'team'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  className="block px-4 py-3 rounded-lg text-white/90 hover:text-white hover:bg-white/10 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <span className="capitalize font-medium">{item}</span>
                </motion.a>
              ))}
            </div>

            {/* Join Us button with animation */}
            <motion.div
              className="border-t border-white/10 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.a
                href="#join"
                className="block w-full px-4 py-3 rounded-lg bg-gradient-to-r from-[#6D6BF8] to-[#54C1D5] text-white hover:from-[#6D6BF8]/90 hover:to-[#54C1D5]/90 transition-all text-center font-medium"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Join Us
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Content margin is adjusted via CSS classes instead of styled-jsx */}


      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-neutral-950">
        {/* Background Beams */}
        <BackgroundBeams />

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
              DriveOrbit – Smarter Fleet Management for a Safer Future
            </h1>
            {/* <p className="text-xl md:text-2xl text-neutral-300 mb-8 max-w-3xl mx-auto relative z-10"> */}
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
              Transform your fleet operations with real-time tracking, smart monitoring, and data-driven insights.
            </p>
            <Link href="https://youtu.be/gnYwnRNFqQ0?si=2u6aF79zeGVv-xwy">
              <button className="group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-neutral-700 py-1 pl-6 pr-14 font-medium text-white">
                <span className="z-10 pr-2">Request a Demo</span>
                <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-gradient-to-r from-[#6D6BF8] to-[#54C1D5] transition-[width] group-hover:w-[calc(100%-8px)]">
                  <div className="mr-3.5 flex items-center justify-center">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-neutral-50"
                    >
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative h-screen flex items-center justify-center bg-black">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                About DriveOrbit
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                DriveOrbit is a smart fleet management solution designed to optimize vehicle usage, enhance security, and improve operational efficiency. Our platform empowers businesses with real-time tracking, driver monitoring, and automated insights to reduce misuse and maximize productivity. By leveraging cutting-edge technology, DriveOrbit ensures seamless fleet operations, helping organizations manage their vehicles smarter and safer.
              </p>              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white"
                onClick={() => setShowAppDetails(true)}
              >
                Learn More <ChevronRight className="ml-2" />
              </Button>
            </motion.div>

            {/* Slider for App Mockups */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="w-full max-w-2xl mx-auto lg:max-w-4xl bg-black/30 backdrop-blur-sm rounded-xl p-6 shadow-2xl"
            >
              <h3 className="text-xl text-center text-white mb-4 font-medium">DriveOrbit App Screenshots</h3>
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  bulletClass: "swiper-pagination-bullet",
                  bulletActiveClass: "swiper-pagination-bullet-active",
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                {/* Original Screenshots */}
                <SwiperSlide>
                  <div className="flex flex-col items-center justify-center">
                    <motion.img
                      src="/media/ss/account_page.jpg"
                      alt="Account Page"
                      className="w-auto h-[450px] object-contain rounded-lg shadow-xl mx-auto"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-white text-sm mt-2">Account Page</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col items-center justify-center">
                    <motion.img
                      src="/media/ss/driver_interface.jpg"
                      alt="Driver Interface"
                      className="w-auto h-[450px] object-contain rounded-lg shadow-xl mx-auto"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-white text-sm mt-2">Driver Interface</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col items-center justify-center">
                    <motion.img
                      src="/media/ss/emergency_page.jpg"
                      alt="Emergency Page"
                      className="w-auto h-[450px] object-contain rounded-lg shadow-xl mx-auto"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-white text-sm mt-2">Emergency Page</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col items-center justify-center">
                    <motion.img
                      src="/media/ss/emergeny_buttons.jpg"
                      alt="Emergency Buttons"
                      className="w-auto h-[450px] object-contain rounded-lg shadow-xl mx-auto"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-white text-sm mt-2">Emergency Buttons</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col items-center justify-center">
                    <motion.img
                      src="/media/ss/fuel filling form.jpg"
                      alt="Fuel Filling Form"
                      className="w-auto h-[450px] object-contain rounded-lg shadow-xl mx-auto"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-white text-sm mt-2">Fuel Filling Form</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col items-center justify-center">
                    <motion.img
                      src="/media/ss/job_done.jpg"
                      alt="Job Done Screen"
                      className="w-auto h-[450px] object-contain rounded-lg shadow-xl mx-auto"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-white text-sm mt-2">Job Done Screen</p>
                  </div>
                </SwiperSlide>

                {/* New Screenshots */}

                <SwiperSlide>
                  <div className="flex flex-col items-center justify-center">
                    <motion.img
                      src="/media/ss/Screenshot 2025-05-16 214351.png"
                      alt="Screenshot 2"
                      className="w-auto h-[450px] object-contain rounded-lg shadow-xl mx-auto"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-white text-sm mt-2">QR Scan</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col items-center justify-center">
                    <motion.img
                      src="/media/ss/Screenshot 2025-05-16 214555.png"
                      alt="Screenshot 3"
                      className="w-auto h-[450px] object-contain rounded-lg shadow-xl mx-auto"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-white text-sm mt-2">Job start</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col items-center justify-center">
                    <motion.img
                      src="/media/ss/Screenshot 2025-05-16 214617.png"
                      alt="Screenshot 4"
                      className="w-auto h-[450px] object-contain rounded-lg shadow-xl mx-auto"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-white text-sm mt-2">Four side photo capture</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col items-center justify-center">
                    <motion.img
                      src="/media/ss/Screenshot 2025-05-16 214651.png"
                      alt="Screenshot 5"
                      className="w-auto h-[450px] object-contain rounded-lg shadow-xl mx-auto"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-white text-sm mt-2">AI Based damage identifer</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col items-center justify-center">
                    <motion.img
                      src="/media/ss/Screenshot 2025-05-16 214700.png"
                      alt="Screenshot 6"
                      className="w-auto h-[450px] object-contain rounded-lg shadow-xl mx-auto"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-white text-sm mt-2">Screenshot 6</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col items-center justify-center">
                    <motion.img
                      src="/media/ss/Screenshot 2025-05-16 214744.png"
                      alt="Screenshot 7"
                      className="w-auto h-[450px] object-contain rounded-lg shadow-xl mx-auto"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-white text-sm mt-2">Screenshot 7</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col items-center justify-center">
                    <motion.img
                      src="/media/ss/Screenshot 2025-05-16 214759.png"
                      alt="Screenshot 8"
                      className="w-auto h-[450px] object-contain rounded-lg shadow-xl mx-auto"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-white text-sm mt-2">Driving Dashboard</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="flex flex-col items-center justify-center">
                    <motion.img
                      src="/media/ss/Screenshot 2025-05-16 214810.png"
                      alt="Screenshot 9"
                      className="w-auto h-[450px] object-contain rounded-lg shadow-xl mx-auto"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />{/*  */}
                    <p className="text-white text-sm mt-2">Map View</p>
                  </div>
                </SwiperSlide>
              </Swiper>
              <style jsx global>{`
                .swiper-pagination-bullet {
                  background-color: #ccc !important;
                }
                .swiper-pagination-bullet-active {
                  background-color: #fff !important;
                }
                .swiper-slide {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  padding: 30px;
                }
                .swiper-button-next, .swiper-button-prev {
                  color: #fff !important;
                  background: rgba(0,0,0,0.3);
                  width: 40px !important;
                  height: 40px !important;
                  border-radius: 50%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
                .swiper-button-next:after, .swiper-button-prev:after {
                  font-size: 18px !important;
                }
              `}</style>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-24 bg-gray-200">
        {/* White Overlay at the Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features for Modern Fleet Management
            </h2>
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
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-center gap-12`}
              >
                {/* Feature Image */}
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
                {/* Feature Text */}
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section id="team" className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <TextGenerateEffect words={teamMembersWords} className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600" />
          </div>
          {/* Use the AnimatedTestimonials Component */}
          <AnimatedTestimonials testimonials={teamMembers} autoplay={true} />
        </div>
      </section>

      {/* CTA / Join Section */}
      <section id="join" className="bg-primary text-primary-foreground">
        <div className="flex flex-col items-center justify-center h-[20rem] md:h-[25rem] lg:h-[30rem]">
          <p className="text-lg font-normal mt-4 text-white-600 dark:text-white-400">
            Join thousands of fleet managers who trust DriveOrbit for their operations
          </p>
          <TypewriterEffectSmooth words={words} />
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
            <Link href="/form">
              <button className="group relative inline-flex h-[calc(48px+8px)] items-center justify-center rounded-full bg-neutral-700 py-1 pl-6 pr-14 font-medium text-white">
                <span className="z-10 pr-2">Get Started Now</span>
                <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-gradient-to-r from-[#6D6BF8] to-[#54C1D5] transition-[width] group-hover:w-[calc(100%-8px)]">
                  <div className="mr-3.5 flex items-center justify-center">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-neutral-50"
                    >
                      <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
            {/* Column 1: Logo and Contact Info */}
            <div>
              <h3 className="font-bold mb-4">DriveOrbit</h3>
              <p className="text-sm text-gray-600">
                Revolutionizing fleet management with smart technology and real-time insights.
              </p>
            </div>
            {/* Column 2: About */}
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <div className="mt-4">
                <p className="text-sm text-gray-600"><b>Tel:</b> +94 70 194 2405</p>
                <p className="text-sm text-gray-600"><b>Email:</b> info@driveorbit.pro</p>
                <p className="text-sm text-gray-600"><b>Address:</b> 32/7, Sri Sobitha Mawatha, Wadduwa.</p>
              </div>
            </div>
            {/* Column 3: Connect */}
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">

                <a
                  href="https://www.instagram.com/driveorbit.lk/"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <FaInstagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/driveorbit-lk/"
                  className="text-gray-600 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/DriveOrbit"
                  className="text-gray-600 hover:text-blue-400 transition-colors"
                >
                  <FaGithub className="h-5 w-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@driveorbit"
                  className="text-gray-600 hover:text-blue-400 transition-colors"
                >
                  <TbBrandTiktok className="h-5 w-5" />
                </a>
              </div>
            </div>
            {/* Column 4: Subscription */}
            <div>
              <h4 className="font-semibold mb-4">Subscribe</h4>
              <p className="text-sm text-gray-600 mb-4">
                Sign up to receive DriveOrbit news and updates
              </p>
              <form
                action="https://formsubmit.co/info@driveorbit.pro"
                method="POST"
                className="flex flex-col space-y-2"
              >
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="New DriveOrbit Newsletter Subscription" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={typeof window !== 'undefined' ? `${window.location.origin}/newsletter-thank-you` : ''} />

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mb-2"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <label className="flex items-center space-x-2">
                  <input type="checkbox" name="subscribe_newsletter" value="yes" className="form-checkbox" />
                  <span className="text-sm text-gray-600">
                    Yes, subscribe me to your newsletter.
                  </span>
                </label>
                <motion.button
                  type="submit"
                  className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </div>
          {/* Bottom Footer */}
          <div className="border-t border-gray-300 pt-8 text-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} DriveOrbit. All rights reserved.</p>
          </div>        </div>
      </footer>

      {/* App Details Modal */}
      {typeof window !== 'undefined' && (
        <AppDetailsModal
          isOpen={showAppDetails}
          onClose={() => setShowAppDetails(false)}
        />
      )}
    </div>
  );
}