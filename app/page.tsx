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
  Instagram,
  Menu,
  X,
  Facebook,
} from "lucide-react";

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
    name: "Senuka Fernando",
    role: "Full-Stack Developer",
    image: "https://avatars.githubusercontent.com/u/122157771?v=4",
    bio: "Leading our technical innovation with 15+ years of experience in fleet management systems.",
    social: {
      Instagram: "https://www.instagram.com/_senuka.f_/",
      linkedin: "https://www.linkedin.com/in/senuka-fernando/",
      github: "https://github.com/senukafer12",
    },
  },
  {
    name: "Sachitha Sithuruwan",
    role: "Full-Stack Developer",
    image: "https://avatars.githubusercontent.com/u/160252042?v=4",
    bio: "Leading our technical innovation with 15+ years of experience in fleet management systems.",
    social: {
      Instagram: "https://www.instagram.com/sachintha_vithanawasam/",
      linkedin:
        "https://www.linkedin.com/in/sachintha-vithanawasam-6bb9b4287/",
      github: "https://github.com/SachiVithX",
    },
  },
  {
    name: "Chamikara Kodithuwakku",
    role: "Full-Stack Developer | UI/UX Designer",
    image: "https://avatars.githubusercontent.com/u/151379703?v=4",
    bio: "Leading our technical innovation with 15+ years of experience in fleet management systems.",
    social: {
      Instagram: "https://www.instagram.com/cham.i_.xx/",
      linkedin: "https://www.linkedin.com/in/chamikara-kodithuwakku-5a1532292/",
      github: "https://github.com/chaxmikara",
    },
  },
  {
    name: "Chandeera Wickramasingha",
    role: "Presenter | Sasnaka Sansanda Gamapaha District Coordinator",
    image: "https://avatars.githubusercontent.com/u/188667694?v=4",
    bio: "Leading our technical innovation with 15+ years of experience in fleet management systems.",
    social: {
      Instagram: "https://www.instagram.com/prabathcw/",
      linkedin: "https://www.linkedin.com/in/prabathcw/",
      github: "https://github.com/PrabathCW",
    },
  },
  {
    name: "Nuhansa De Silva",
    role: "Frontend Developer",
    image: "https://avatars.githubusercontent.com/u/160605772?v=4",
    bio: "Leading our technical innovation with 15+ years of experience in fleet management systems.",
    social: {
      Instagram: "https://www.instagram.com/nu_desilva/",
      linkedin: "https://www.linkedin.com/in/nuhansa-de-silva-8516b3273/",
      github: "https://github.com/NuDeSilva",
    },
  },
  {
    name: "Duranga Harindi",
    role: "Frontend Developer",
    image: "https://avatars.githubusercontent.com/u/187119991?v=4",
    bio: "Leading our technical innovation with 15+ years of experience in fleet management systems.",
    social: {
      Instagram: "https://www.instagram.com/harindi_88/",
      linkedin: "https://www.linkedin.com/in/durangaharindi/",
      github: "https://github.com/Harindi02",
    },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${navbarBackground
          ? "bg-black text-white shadow-md"
          : "bg-white text-gray-800"
          }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="https://avatars.githubusercontent.com/u/188688275?s=400&u=856b48def80550c9fce1c213ecdcb801a41fe0c6&v=4"
              alt="DriveOrbit Logo"
              className="h-10"
            />
            <span
              className={`text-xl font-bold ${navbarBackground ? "text-white" : "text-gray-800"
                }`}
            >
              DriveOrbit
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium items-center">
            <a
              href="#about"
              className={`hover:text-primary transition-colors ${navbarBackground ? "text-white" : "text-gray-800"
                }`}
            >
              About
            </a>
            <a
              href="#features"
              className={`hover:text-primary transition-colors ${navbarBackground ? "text-white" : "text-gray-800"
                }`}
            >
              Features
            </a>
            <a
              href="#team"
              className={`hover:text-primary transition-colors ${navbarBackground ? "text-white" : "text-gray-800"
                }`}
            >
              Team
            </a>
            <a
              href="#join"
              className={`px-4 py-2 rounded-lg transition-colors ${navbarBackground
                ? "bg-white text-black hover:bg-gray-100"
                : "bg-black text-white hover:bg-gray-800"
                }`}
            >
              Join Us
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`hover:text-primary focus:outline-none ${navbarBackground ? "text-white" : "text-gray-800"
                }`}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
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
            <li>
              <a href="#about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#features" className="hover:underline">
                Features
              </a>
            </li>
            <li>
              <a href="#team" className="hover:underline">
                Team
              </a>
            </li>
            <li>
              <a href="#join" className="hover:underline">
                Join Us
              </a>
            </li>
          </ul>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://cdn.pixabay.com/video/2018/11/29/19627-304735769_tiny.mp4"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay to darken the video background */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        {/* Black Linear Overlay at the bottom */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10"></div>

        <div className="container mx-auto px-4 z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              DriveOrbit – Smarter Fleet Management for a Safer Future
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
              Transform your fleet operations with real-time tracking, smart monitoring, and data-driven insights.
            </p>
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white">
              Request a Demo <ChevronRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative h-screen flex items-center justify-center bg-black">
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
              </p>
              <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white">
                Learn More <ChevronRight className="ml-2" />
              </Button>
            </motion.div>

            {/* Slider for App Mockups */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="w-full max-w-sm mx-auto lg:max-w-none"
            >
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  bulletClass: "swiper-pagination-bullet", // Custom class for pagination dots
                  bulletActiveClass: "swiper-pagination-bullet-active", // Custom class for active dot
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <motion.img
                    src="https://github.com/DriveOrbit/DOB_LandingPage/blob/optimize/media/Screenshot_2025-02-23_195845-removebg-preview.png?raw=true"
                    alt="App Mockup 1"
                    className="w-60 h-auto object-contain rounded-lg shadow-xl mx-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <motion.img
                    src="https://github.com/DriveOrbit/DOB_LandingPage/blob/optimize/media/Screenshot_2025-02-23_195907-removebg-preview.png?raw=true"
                    alt="App Mockup 2"
                    className="w-60 h-auto object-contain rounded-lg shadow-xl mx-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <motion.img
                    src="https://github.com/DriveOrbit/DOB_LandingPage/blob/optimize/media/Screenshot_2025-02-23_195919-removebg-preview.png?raw=true"
                    alt="App Mockup 3"
                    className="w-60 h-auto object-contain rounded-lg shadow-xl mx-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <motion.img
                    src="https://github.com/DriveOrbit/DOB_LandingPage/blob/optimize/media/Screenshot_2025-02-23_195954-removebg-preview.png?raw=true"
                    alt="App Mockup 4"
                    className="w-60 h-auto object-contain rounded-lg shadow-xl mx-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <motion.img
                    src="https://github.com/DriveOrbit/DOB_LandingPage/blob/optimize/media/Screenshot_2025-02-23_200004-removebg-preview.png?raw=true"
                    alt="App Mockup 5"
                    className="w-60 h-auto object-contain rounded-lg shadow-xl mx-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <motion.img
                    src="https://github.com/DriveOrbit/DOB_LandingPage/blob/optimize/media/Screenshot_2025-02-23_200025-removebg-preview.png?raw=true"
                    alt="App Mockup 6"
                    className="w-60 h-auto object-contain rounded-lg shadow-xl mx-auto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </SwiperSlide>
              </Swiper>
              <style jsx global>{`
                .swiper-pagination-bullet {
                  background-color: #ccc !important; /* Inactive dot color */
                }
                .swiper-pagination-bullet-active {
                  background-color: #fff !important; /* Active dot color */
                }
              `}</style>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Features Section */}
      <section className="relative py-24 bg-gray-200">
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
              Everything you need to manage your fleet efficiently and safely in
              one integrated platform.
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
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet the team behind DriveOrbit
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are a group of passionate Undergraduates dedicated to
              revolutionizing the Future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 group">
                  <div className="relative mx-auto mb-6">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary mb-4">{member.role}</p>
                  <p className="text-muted-foreground mb-6">{member.bio}</p>
                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.social.Instagram}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.github}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Managing Your Fleet Today!
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of fleet managers who trust DriveOrbit for their
              operations
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
      <footer className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
            {/* Column 1: Logo and Contact Info */}
            <div>
              <h3 className="font-bold mb-4">DriveOrbit</h3>
              <p className="text-sm text-gray-600">
                Revolutionizing fleet management with smart technology and real-time
                insights.
              </p>
              <div className="mt-4">
                <p className="text-sm text-gray-600">Tel: 123-456-7890</p>
                <p className="text-sm text-gray-600">
                  Email: driveorbitsocial@gmail.com
                </p>
                <p className="text-sm text-gray-600">
                  Address: 123, Chandeera road, Divulapitiya.
                </p>
              </div>
            </div>

            {/* Column 2: Technology */}
            <div>
              <h4 className="font-semibold mb-4">Technology</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Real-Time Tracking</li>
                <li>Performance Analytics</li>
                <li>Smart Vehicle Access</li>
                <li>Predictive Maintenance</li>
                <li>Fuel Optimization</li>
                <li>Safety Management</li>
              </ul>
            </div>

            {/* Column 3: About */}
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Our Mission</li>
                <li>Our Team</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>

            {/* Column 4: Connect */}
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/driveorbit.lk/"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/driveorbit-lk/"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/DriveOrbit"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Column 5: Subscription */}
            <div>
              <h4 className="font-semibold mb-4">Subscribe</h4>
              <p className="text-sm text-gray-600 mb-4">
                Sign up to receive DriveOrbit news and updates
              </p>
              <form className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="text-sm text-gray-600">
                    Yes, subscribe me to your newsletter.
                  </span>
                </label>
                <button
                  type="submit"
                  className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-300 pt-8 text-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} DriveOrbit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}