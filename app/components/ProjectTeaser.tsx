import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface ProjectTeaserProps {
  title: string;
  description: string;
  media: string;
  type: 'video' | 'image';
  bulletPoints?: string[];
  isUnavailable?: boolean;
}

export default function ProjectTeaser({ 
  title, 
  description, 
  media, 
  type,
  bulletPoints = [],
  isUnavailable = false
}: ProjectTeaserProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

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

  return (
    <div 
      className={`group relative flex flex-col md:flex-row bg-secondary overflow-hidden ${isUnavailable ? '' : 'cursor-pointer'}`}
    >
      {/* Content Section */}
      <div className="relative w-full h-auto md:w-[45%] p-6 z-10 mt-[250px] md:mt-0">
        <div className="flex flex-col gap-4 justify-between h-full">
          <div className="flex flex-col flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed">{description}</p>
            
            {bulletPoints.length > 0 && (
              <ul className="space-y-2 md:space-y-3">
                {bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg 
                      className="w-5 h-5 mt-1 text-accent flex-shrink-0" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-text-secondary text-sm md:text-base">{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex items-center space-x-2 mt-4 lg:mt-8 xl:mt-12">
            <span className={`font-medium text-l lg:text-xl xl:text-2xl ${isUnavailable ? 'text-text-secondary' : 'text-accent'}`}>
              {isUnavailable ? 'This project is unavailable to view' : 'View Project'}
            </span>
            {isUnavailable ? (
              <svg
                className="w-5 h-5 text-text-secondary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            ) : (
              <svg width="24" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow-icon w-[40px] lg:w-[50px] xl:w-[60px] h-auto">
                <path d="M15 4H4V1" stroke="#00ff9d" />
                <path d="M14.5 4H3.5H0" stroke="#00ff9d" />
                <path d="M15.8536 4.35355C16.0488 4.15829 16.0488 3.84171 15.8536 3.64645L12.6716 0.464466C12.4763 0.269204 12.1597 0.269204 11.9645 0.464466C11.7692 0.659728 11.7692 0.976311 11.9645 1.17157L14.7929 4L11.9645 6.82843C11.7692 7.02369 11.7692 7.34027 11.9645 7.53553C12.1597 7.7308 12.4763 7.7308 12.6716 7.53553L15.8536 4.35355ZM15 4.5L15.5 4.5L15.5 3.5L15 3.5L15 4.5Z" fill="#00ff9d"/>
              </svg>
            )}
          </div>
        </div>
      </div>

      {/* Diagonal Background - Only visible on md and up */}
      <div 
        className="hidden md:block absolute top-0 right-0 w-[60%] h-full bg-secondary transform origin-top-left"
        style={{
          clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)'
        }}
      />

      {/* Media Section */}
      <div 
        className="absolute top-0 right-0 w-full h-[250px] md:h-full md:w-[55%] overflow-hidden video-container"
      >
        {type === 'video' ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src={media}
            muted
            loop
            playsInline
            preload="auto"
            disablePictureInPicture
            disableRemotePlayback
          />
        ) : (
          <Image
            src={media}
            alt={title}
            fill
            className="object-cover"
          />
        )}
      </div>
    </div>
  );
} 