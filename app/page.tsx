'use client';

import ProjectTeaser from './components/ProjectTeaser';

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
    isUnavailable: true
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
    ]
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
    ]
  }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-background py-4 sm:py-6 lg:py-12">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="space-y-4 mb-8 sm:mb-12 lg:mb-18">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">Projects</h1>
          <p className="text-text-secondary text-lg">
            A collection of my recent work and personal projects.
          </p>
        </div>
        
        <div className="space-y-6 md:space-y-8 lg:space-y-12">
          {projects.map((project, index) => (
            <ProjectTeaser
              key={index}
              {...project}
              imageOnRight={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
