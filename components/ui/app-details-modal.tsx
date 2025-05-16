"use client";

import React, { useState, useCallback, memo, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { X } from "lucide-react";

interface AppDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

// Memoize the AppDetailsModal component for better performance
export const AppDetailsModal = memo(({ isOpen, onClose }: AppDetailsModalProps) => {
    const [activeTab, setActiveTab] = useState("driver");
    const [isMobile, setIsMobile] = useState(false);

    // Use callback for event handlers to prevent unnecessary re-renders
    const handleTabChange = useCallback((value: string) => {
        setActiveTab(value);
    }, []);

    // Check for mobile devices to apply specific optimizations
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Memoize swiper configurations to prevent re-renders
    const swiperConfig = useCallback(() => ({
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            clickable: true,
            bulletClass: "swiper-pagination-bullet bg-gray-400",
            bulletActiveClass: "swiper-pagination-bullet-active bg-white",
        },
        navigation: true,
        modules: [Autoplay, Pagination, Navigation],
        className: "h-full rounded-lg will-change-transform"
    }), []);

    // Optimize images for mobile or desktop
    const getImageDimensions = useCallback((className: string) => {
        return `${className} ${isMobile ? 'max-w-[90%]' : 'max-w-full'} max-h-full object-contain rounded-lg`;
    }, [isMobile]); return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent
                className={`max-w-5xl w-[95vw] md:w-full bg-black/95 text-white border border-gray-800 p-0 
                shadow-xl rounded-xl overflow-hidden ${isMobile ? 'max-h-[95vh]' : 'max-h-[85vh]'} 
                overflow-y-auto`}
                style={{
                    willChange: 'transform',
                    overscrollBehavior: 'contain'
                }}>
                <DialogHeader className="sticky top-0 z-10 bg-black/95 p-4 sm:p-6 border-b border-gray-800">
                    <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#6D6BF8] to-[#54C1D5] pr-8">
                        DriveOrbit - Advanced Fleet Management Solution
                    </DialogTitle>
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 p-2 rounded-full bg-gray-800/50 hover:bg-gray-700 transition-colors"
                        aria-label="Close dialog"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </DialogHeader>

                <Tabs defaultValue="driver" className="w-full" onValueChange={handleTabChange}>
                    <div className="border-b border-gray-800 sticky top-[72px] sm:top-[84px] z-10 bg-black/95">
                        <TabsList className="w-full h-12 md:h-14 bg-black overflow-x-auto flex-nowrap">
                            <TabsTrigger className="data-[state=active]:bg-gray-900 flex-1 h-full text-xs sm:text-sm md:text-base whitespace-nowrap px-2 sm:px-4" value="driver">
                                Driver Dashboard
                            </TabsTrigger>
                            <TabsTrigger className="data-[state=active]:bg-gray-900 flex-1 h-full text-xs sm:text-sm md:text-base whitespace-nowrap px-2 sm:px-4" value="qrscan">
                                QR Scanning
                            </TabsTrigger>
                            <TabsTrigger className="data-[state=active]:bg-gray-900 flex-1 h-full text-xs sm:text-sm md:text-base whitespace-nowrap px-2 sm:px-4" value="jobs">
                                Job Assignment
                            </TabsTrigger>
                            <TabsTrigger className="data-[state=active]:bg-gray-900 flex-1 h-full text-xs sm:text-sm md:text-base whitespace-nowrap px-2 sm:px-4" value="tracking">
                                Vehicle Tracking
                            </TabsTrigger>
                        </TabsList>
                    </div>                    <div className="p-3 sm:p-4 md:p-6 pb-16">
                        <TabsContent value="driver" className="mt-0 focus:outline-none">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4">Driver Dashboard</h3>
                                    <p className="mb-3 md:mb-4 text-sm sm:text-base">
                                        The initial page of the DriveOrbit application is designed to provide users with an extensive and easy-to-use interface after logging in successfully.
                                    </p>
                                    <ul className="space-y-1 sm:space-y-2 text-gray-300 list-disc pl-5 text-sm sm:text-base">
                                        <li>
                                            <span className="font-medium text-white">Personalized Welcome:</span> Drivers receive a personalized greeting, creating a warm environment.
                                        </li>
                                        <li>
                                            <span className="font-medium text-white">Search Functionality:</span> The primary interface has a search bar that enables users to identify particular vehicles by inputting relevant keywords.
                                        </li>
                                        <li>
                                            <span className="font-medium text-white">Vehicle Information:</span> Operators are presented with a compilation of vehicles showcasing specific information including the vehicle model, registration number, and status of availability.
                                        </li>
                                        <li>
                                            <span className="font-medium text-white">Status Updates:</span> The driver status filter allows drivers to update their current status: Active, Break, or Unavailable.
                                        </li>
                                        <li>
                                            <span className="font-medium text-white">Driving History:</span> Drivers can view their comprehensive driving history by selecting the "View Your Driving History" option - including dates, vehicle information, mileage, and routes of travel.
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-gray-900 p-3 md:p-4 rounded-xl h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] mt-4 lg:mt-0">
                                    <Swiper
                                        {...swiperConfig()}
                                    >
                                        <SwiperSlide>
                                            <div className="w-full h-full flex items-center justify-center">
                                                <motion.img
                                                    loading="lazy"
                                                    src="/media/ss/driver_interface.jpg"
                                                    alt="Driver Interface"
                                                    className={getImageDimensions("max-w-full max-h-full")}
                                                    whileHover={{ scale: 1.02 }}
                                                    transition={{ duration: 0.2 }}
                                                />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="w-full h-full flex items-center justify-center">
                                                <motion.img
                                                    loading="lazy"
                                                    src="/media/ss/Screenshot 2025-05-16 214759.png"
                                                    alt="Driver Dashboard"
                                                    className={getImageDimensions("max-w-full max-h-full")}
                                                    whileHover={{ scale: 1.02 }}
                                                    transition={{ duration: 0.2 }}
                                                />
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </TabsContent>                        <TabsContent value="qrscan" className="mt-0 focus:outline-none">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4">QR Code Scanning & Vehicle Inspection</h3>
                                    <p className="mb-3 md:mb-4 text-sm sm:text-base">
                                        The DriveOrbit app includes a sophisticated QR code scanning feature that streamlines vehicle check-in and inspection processes, ensuring proper documentation of vehicle condition at each use.
                                    </p>
                                    <ul className="space-y-1 sm:space-y-2 text-gray-300 list-disc pl-5 text-sm sm:text-base">
                                        <li>
                                            <span className="font-medium text-white">Seamless Vehicle Identification:</span> Drivers simply scan the QR code of a vehicle to start the check-in process.
                                        </li>
                                        <li>
                                            <span className="font-medium text-white">Complete Vehicle Inspection:</span> The system guides drivers to capture four photos of the vehicle—front, back, left, and right sides—with a progress indicator to ensure completion.
                                        </li>
                                        <li>
                                            <span className="font-medium text-white">Dashboard Documentation:</span> Drivers must enter the current mileage of the vehicle and capture a clear photo of the dashboard.
                                        </li>
                                        <li>
                                            <span className="font-medium text-white">Fuel Status Reporting:</span> The app requires drivers to indicate the current fuel status, such as full tank or refuel needed.
                                        </li>
                                        <li>
                                            <span className="font-medium text-white">AI-Based Damage Detection:</span> Our advanced AI system identifies potential damage during inspection, creating an objective record of vehicle condition.
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-gray-900 p-3 md:p-4 rounded-xl h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] mt-4 lg:mt-0">
                                    <Swiper
                                        {...swiperConfig()}
                                    >                                        <SwiperSlide>
                                            <div className="w-full h-full flex items-center justify-center">
                                                <motion.img
                                                    loading="lazy"
                                                    src="/media/ss/Screenshot 2025-05-16 214351.png"
                                                    alt="QR Scan"
                                                    className={getImageDimensions("max-w-full max-h-full")}
                                                    whileHover={{ scale: 1.02 }}
                                                    transition={{ duration: 0.2 }}
                                                />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="w-full h-full flex items-center justify-center">
                                                <motion.img
                                                    loading="lazy"
                                                    src="/media/ss/Screenshot 2025-05-16 214617.png"
                                                    alt="Four side photo capture"
                                                    className={getImageDimensions("max-w-full max-h-full")}
                                                    whileHover={{ scale: 1.02 }}
                                                    transition={{ duration: 0.2 }}
                                                />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="w-full h-full flex items-center justify-center">
                                                <motion.img
                                                    loading="lazy"
                                                    src="/media/ss/Screenshot 2025-05-16 214651.png"
                                                    alt="AI Based damage identifier"
                                                    className={getImageDimensions("max-w-full max-h-full")}
                                                    whileHover={{ scale: 1.02 }}
                                                    transition={{ duration: 0.2 }}
                                                />
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </TabsContent>                        <TabsContent value="jobs" className="mt-0 focus:outline-none">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4">Job Assignment Management</h3>
                                    <p className="mb-3 md:mb-4 text-sm sm:text-base">
                                        The DriveOrbit job assignment page is designed to give drivers a complete and accurate picture of their work tasks, enabling efficient task management and prioritization.
                                    </p>
                                    <ul className="space-y-1 sm:space-y-2 text-gray-300 list-disc pl-5 text-sm sm:text-base">
                                        <li>
                                            <span className="font-medium text-white">Comprehensive Job Summary:</span> Drivers can view all pending, confirmed, and completed jobs in an organized interface.
                                        </li>
                                        <li>
                                            <span className="font-medium text-white">Route Integration:</span> The Google Maps integration provides a clear view of the assigned route while accurately calculating the mileage based on destinations.
                                        </li>
                                        <li>
                                            <span className="font-medium text-white">Job Prioritization:</span> Urgent jobs are prominently highlighted to ensure immediate attention from drivers.
                                        </li>
                                        <li>
                                            <span className="font-medium text-white">Detailed Job Information:</span> Each job displays its status, a unique Job ID, date, starting point, destination, and distance.
                                        </li>
                                        <li>
                                            <span className="font-medium text-white">Intuitive Action Buttons:</span> Options to mark jobs as complete, get navigation assistance, and view additional details are readily available.
                                        </li>
                                        <li>
                                            <span className="font-medium text-white">Time Tracking:</span> The system automatically tracks the total time spent on each job for accurate reporting.
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-gray-900 p-3 md:p-4 rounded-xl h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] mt-4 lg:mt-0">
                                    <Swiper
                                        {...swiperConfig()}
                                    >                                        <SwiperSlide>
                                            <div className="w-full h-full flex items-center justify-center">
                                                <motion.img
                                                    loading="lazy"
                                                    src="/media/ss/Screenshot 2025-05-16 214555.png"
                                                    alt="Job start"
                                                    className={getImageDimensions("max-w-full max-h-full")}
                                                    whileHover={{ scale: 1.02 }}
                                                    transition={{ duration: 0.2 }}
                                                />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="w-full h-full flex items-center justify-center">
                                                <motion.img
                                                    loading="lazy"
                                                    src="/media/ss/job_done.jpg"
                                                    alt="Job Done Screen"
                                                    className={getImageDimensions("max-w-full max-h-full")}
                                                    whileHover={{ scale: 1.02 }}
                                                    transition={{ duration: 0.2 }}
                                                />
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </TabsContent>                        <TabsContent value="tracking" className="mt-0 focus:outline-none">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold mb-3 md:mb-4">Real-Time Vehicle Tracking</h3>
                                    <p className="mb-3 md:mb-4 text-sm sm:text-base">
                                        DriveOrbit's advanced tracking system provides comprehensive real-time oversight of your entire fleet, enabling better operational control and decision-making.
                                    </p>
                                    <ul className="space-y-1 sm:space-y-2 text-gray-300 list-disc pl-5 text-sm sm:text-base">
                                        <li>
                                            <span className="font-medium text-white">Live GPS Tracking:</span> Monitor each vehicle's exact location on an interactive map interface in real time.
                                        </li>
                                        <li>
                                            <span className="font-medium text-white">Route Monitoring:</span> Ensure vehicles stay on their intended routes and quickly identify unauthorized deviations.
                                        </li>
                                        <li>
                                            <span className="font-medium text-white">Historical Data:</span> Access comprehensive route history, capturing details like stops, travel time, and any deviations.
                                        </li>
                                        <li>
                                            <span className="font-medium text-white">Geofencing:</span> Create virtual boundaries and receive alerts when vehicles enter or leave designated areas.
                                        </li>
                                        <li>
                                            <span className="font-medium text-white">Performance Metrics:</span> Track speed, idle time, and other key metrics to optimize fleet performance.
                                        </li>
                                        <li>
                                            <span className="font-medium text-white">Dispatch Optimization:</span> Use real-time location data to assign the nearest available vehicle to new jobs.
                                        </li>
                                    </ul>
                                </div>
                                <div className="bg-gray-900 p-3 md:p-4 rounded-xl h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] mt-4 lg:mt-0">
                                    <Swiper
                                        {...swiperConfig()}
                                    >                                        <SwiperSlide>
                                            <div className="w-full h-full flex items-center justify-center">
                                                <motion.img
                                                    loading="lazy"
                                                    src="/media/ss/Screenshot 2025-05-16 214810.png"
                                                    alt="Map View"
                                                    className={getImageDimensions("max-w-full max-h-full")}
                                                    whileHover={{ scale: 1.02 }}
                                                    transition={{ duration: 0.2 }}
                                                />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="w-full h-full flex items-center justify-center">
                                                <motion.img
                                                    loading="lazy"
                                                    src="/media/ss/emergency_page.jpg"
                                                    alt="Emergency Page"
                                                    className={getImageDimensions("max-w-full max-h-full")}
                                                    whileHover={{ scale: 1.02 }}
                                                    transition={{ duration: 0.2 }}
                                                />
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="w-full h-full flex items-center justify-center">
                                                <motion.img
                                                    loading="lazy"
                                                    src="/media/ss/emergeny_buttons.jpg"
                                                    alt="Emergency Buttons"
                                                    className={getImageDimensions("max-w-full max-h-full")}
                                                    whileHover={{ scale: 1.02 }}
                                                    transition={{ duration: 0.2 }}
                                                />
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>                <div className="p-3 sm:p-4 md:p-6 border-t border-gray-800 flex flex-col sm:flex-row items-center sm:justify-between gap-3 sm:gap-0 sticky bottom-0 bg-black/95">
                    <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
                        © 2025 DriveOrbit - Leading the way in smart fleet management
                    </div>
                    <button
                        onClick={onClose}
                        className="w-full sm:w-auto bg-gradient-to-r from-[#6D6BF8] to-[#54C1D5] hover:from-[#6D6BF8]/90 hover:to-[#54C1D5]/90 text-white px-4 py-2 rounded-md transition-colors"
                    >
                        Close
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
});
