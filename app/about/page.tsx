'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  const skills = [
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Material-UI"]
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Express", "Python", "Django", "PostgreSQL"]
    },
    {
      category: "Tools & Others",
      technologies: ["Git", "Docker", "AWS", "CI/CD", "Agile Methodologies"]
    }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">
              Hi, I&apos;m Awab
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed">
              A passionate Full Stack Developer with a strong focus on creating scalable and efficient web applications. 
              I specialize in modern JavaScript frameworks and have a deep interest in building user-centric solutions.
            </p>
            <div className="flex space-x-6">
              <Link 
                href="https://www.linkedin.com/in/your-linkedin" 
                target="_blank"
                className="text-accent hover:text-accent/80 transition-colors"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </Link>
              <Link 
                href="https://github.com/your-github" 
                target="_blank"
                className="text-accent hover:text-accent/80 transition-colors"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </Link>
            </div>
          </div>
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-accent">
            <Image
              src="/Profile (1).pdf"
              alt="Awab Alshami"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Skills Section */}
        <div className="space-y-12 mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">Skills & Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div 
                key={index}
                className="bg-secondary rounded-xl p-6 space-y-4"
              >
                <h3 className="text-xl font-semibold text-accent">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-background rounded-full text-sm text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">About Me</h2>
          <div className="space-y-6 text-text-secondary text-lg leading-relaxed">
            <p>
              With over 3 years of experience in software development, I&apos;ve had the opportunity to work on diverse projects 
              ranging from small business websites to large-scale enterprise applications. My approach to development 
              combines technical expertise with a strong focus on user experience and business objectives.
            </p>
            <p>
              I&apos;m particularly passionate about creating clean, maintainable code and implementing best practices in software 
              development. When I&apos;m not coding, I enjoy staying up-to-date with the latest technology trends and contributing 
              to open-source projects.
            </p>
            <p>
              Currently, I&apos;m focused on full-stack development using React, Node.js, and TypeScript, while exploring new 
              technologies and methodologies to enhance my skill set.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 