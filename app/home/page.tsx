'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import LandingButtonArrow from '../components/LandingButtonArrow';
import LandingProjectTeaser from '../components/LandingProjectTeaser';
import Link from 'next/link';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check for touch capability
    const hasTouchScreen = (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0
    );
    setIsTouchDevice(hasTouchScreen);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.loop = true;
      videoRef.current.playbackRate = 2;
      videoRef.current.play().catch(error => {
        console.log('Autoplay failed:', error);
      });
    }
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setShowBackToTop(container.scrollTop > 100);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const projects = [
    {
      title: "Data Marketplace Project",
      description: "A sophisticated platform enabling secure data transactions between providers and consumers.",
    },
    {
      title: "Annals of British Medical Sciences",
      description: "A comprehensive medical journal website featuring peer-reviewed research articles, clinical studies, and scientific advancements in British medical sciences.",
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <div className="fixed inset-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="/landing3.mp4"
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
        />
        <div className="absolute inset-0 bg-background/50 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div 
        ref={scrollContainerRef}
        className="relative z-10 min-h-screen flex py-6 sm:py-0 sm:items-center overflow-y-auto"
      >
        <div className="w-full max-w-7xl mx-auto p-6 sm:pb-8 md:pb-10 lg:pb-12 pt-28">
          <div className="flex flex-col lg:flex-col xl:flex-row justify-center gap-6 sm:gap-8 md:gap-12 lg:gap-12 -mt-4">

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-12">
              {/* Left Column - Image */}
                <Link href="/" className="relative h-full w-full aspect-square sm:h-auto overflow-hidden group">
                  <video
                    src="/unistorage3.mkv"
                    width={0}
                    height={0}
                    className="relative object-cover w-full h-full opacity-80 sm:opacity-90 cursor-pointer"
                    autoPlay
                    muted
                    loop
                  />
                  {/* Content Overlay - Desktop */}
                  <div className="hidden sm:block absolute inset-0 bg-secondary/80 backdrop-blur-sm translate-y-full transition-transform duration-500 group-hover:translate-y-[0] cursor-pointer">
                    <div className="p-6 space-y-3 w-full">
                        <div className="flex flex-col gap-3 items-start justify-between">
                          <h3 className="text-lg lg:text-xl font-medium text-foreground w-[90%] max-w-[90%]">UniStorage</h3>
                          <p className="text-sm text-text-secondary">A cloud storage solution built for universities and educational institutions, featuring secure file sharing, automated backups, and seamless collaboration tools.</p>
                          <Image src="logo_full_white.svg" width={0} height={0} className="w-28 h-28 m-auto" alt="UniStorage Logo" />
                        </div>
                        <svg
                          className="absolute top-4 right-4 w-5 h-5 lg:w-6 lg:h-6 text-accent flex flex-grow"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                    </div>
                  </div>
                </Link>

                {/* Content - Mobile */}
                <Link href="/" className="sm:hidden bg-secondary/80 backdrop-blur-sm p-6 space-y-3 -mt-6 cursor-pointer">
                  <div className="flex flex-col gap-3 items-start justify-between">
                    <h3 className="text-lg font-medium text-foreground">UniStorage</h3>
                    <p className="text-sm text-text-secondary">A cloud storage solution built for universities and educational institutions, featuring secure file sharing, automated backups, and seamless collaboration tools.</p>
                    <svg
                          className="absolute top-4 right-4 w-5 h-5 lg:w-6 lg:h-6 text-accent flex flex-grow"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                  </div>
                </Link>

              {/* Middle Column - Project Teasers */}
              <div className="flex flex-col gap-6 sm:gap-8 md:gap-12 lg:gap-12 h-auto">
                {projects.map((project, index) => (
                  <LandingProjectTeaser
                    key={index}
                    title={project.title}
                    description={project.description}
                    isTouchDevice={isTouchDevice}
                  />
                ))}
              </div>
            </div>

            {/* Right Column - Navigation Buttons */}
            <div className="flex flex-col sm:flex-row xl:flex-col sm:justify-center gap-6 sm:gap-20 md:gap-24 lg:gap-48 xl:gap-12 pb-16 sm:pb-0">
              <LandingButtonArrow
                href="/"
                text="Go to Projects"
                smallText="Projects"
              />
              <LandingButtonArrow
                href="/about"
                text="Go to About Me"
                smallText="About Me"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-4 bottom-4 z-20 p-3 bg-secondary/80 backdrop-blur-sm rounded-full text-accent transition-all duration-300 sm:hidden ${
          showBackToTop ? 'opacity-80 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
} 