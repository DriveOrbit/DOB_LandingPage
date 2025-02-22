"use client";

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
  Instagram,
} from "lucide-react";

const features = [
  {
    icon: <Car className="h-6 w-6" />,
    title: "Real-time Vehicle Tracking",
    description: "Monitor your entire fleet's location and status in real-time with precision GPS tracking.",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Driver Performance",
    description: "Track and analyze driver behavior, safety scores, and route efficiency.",
  },
  {
    icon: <QrCode className="h-6 w-6" />,
    title: "QR Code Vehicle Scanning",
    description: "Seamlessly assign vehicles to drivers with our quick QR code system.",
  },
  {
    icon: <Bell className="h-6 w-6" />,
    title: "Maintenance Alerts",
    description: "Receive automated alerts for vehicle maintenance and service schedules.",
  },
  {
    icon: <Fuel className="h-6 w-6" />,
    title: "Fuel Efficiency",
    description: "Optimize fuel consumption with advanced analytics and insights.",
  },
  {
    icon: <Activity className="h-6 w-6" />,
    title: "Performance Analytics",
    description: "Comprehensive reports and analytics for data-driven fleet management.",
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
    name: "Sacchitha Sithuruwan",
    role: "Full-Stack Developer",
    image: "https://avatars.githubusercontent.com/u/160252042?v=4",
    bio: "Leading our technical innovation with 15+ years of experience in fleet management systems.",
    social: {
      Instagram: "https://www.instagram.com/sachintha_vithanawasam/",
      linkedin: "https://www.linkedin.com/in/sachintha-vithanawasam-6bb9b4287/",
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
  return (
    <div className="min-h-screen bg-background">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="mb-4 text-primary">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet the team behind DriveOrbit</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are a group of passionate Undergraduates dedicated to revolutionizing the Future
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
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-sm text-primary mb-4">{member.role}</p>
                  <p className="text-muted-foreground mb-6">{member.bio}</p>
                  <div className="flex justify-center space-x-4">
                  <a href={member.social.Instagram} className="text-muted-foreground hover:text-primary transition-colors">
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a href={member.social.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href={member.social.github} className="text-muted-foreground hover:text-primary transition-colors">
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