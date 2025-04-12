'use client';

import ProjectTeaser from './components/ProjectTeaser';
import MiniProjectTeaser from './components/MiniProjectTeaser';

const projects = [
  {
    title: "Data Marketplace Platform",
    description: "A sophisticated platform for secure data transactions and analytics, built with React and Node.js.",
    media: "/data-marketplace.mp4",
    type: "video" as const,
    bulletPoints: [
      "Built with React, Node.js, and TypeScript",
      "Secure data transaction system",
      "Real-time analytics dashboard"
    ],
    isUnavailable: true,
    href: "/data-marketplace"
  },
  {
    title: "E-commerce Solution",
    description: "Modern e-commerce platform with advanced features and seamless user experience.",
    media: "/p1.mp4",
    type: "video" as const,
    bulletPoints: [
      "Next.js and Tailwind CSS frontend",
      "Stripe payment integration",
      "Real-time inventory management"
    ],
    href: "/e-commerce"
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website showcasing projects and skills.",
    media: "/p2.mp4",
    type: "video" as const,
    bulletPoints: [
      "Built with Next.js and TypeScript",
      "Responsive design with Tailwind CSS",
      "Smooth animations and transitions"
    ],
    href: "/portfolio"
  }
];

const miniProjects = [
  {
    title: "CLI Tool",
    href: "/cli-tool",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Weather App",
    href: "/weather-app",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    )
  },
  {
    title: "Note Taking",
    href: "/notes",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    )
  },
  {
    title: "Task Manager",
    href: "/tasks",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-background pb-4 sm:pb-6 lg:pb-12  pt-28 md:pt-34 lg:pt-38">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-8 sm:mb-12 lg:mb-18">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Projects</h1>
          <p className="text-text-secondary text-lg">
            A collection of my recent work and personal projects.
          </p>
        </div>
        
        <div className="space-y-6 md:space-y-8 lg:space-y-12">
          {/* First two projects */}
          {projects.map((project, index) => (
            <ProjectTeaser
              key={index}
              {...project}
            />
          ))}

          {/* Other projects */}
          <div className="space-y-4 mb-8 sm:mb-12 lg:mb-18 mt-8 sm:mt-12 lg:mt-18">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">More Projects</h1>
            <p className="text-text-secondary text-lg">
              A collection of my other or smaller projects.
            </p>
          </div>

          {/* Mini Projects Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {miniProjects.map((project, index) => (
              <MiniProjectTeaser
                key={index}
                {...project}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
