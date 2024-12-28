'use client'

import { useEffect, useRef, useState } from 'react'
import { Loader2 } from 'lucide-react'
import { cn } from "@/lib/utils"

const features = [
  {
    id: "Command+L",
    title: "Command+L",
    description: "Select text in Xcode and instantly chat with it. Just like Cursor.",
    videoUrl: "step1.mp4"
  },
  {
    id: "Image Chat",
    title: "Image Chat",
    description: "Drag any image into the sidebar, and let Alex generate code for it.",
    videoUrl: "step2.mp4"
  },
  {
    id: "Codebase Search",
    title: "Codebase Search",
    description: "Search your entire codebase for anything, semantically.",
    videoUrl: "step3.mp4"
  },
  {
    id: "Command+K",
    title: "Command+K",
    description: "Quickly spin up an in-file suggestions into code.",
    videoUrl: "step4.mp4"
  } , 
  {
    id: "Fast Apply Code",
    title: "Fast Apply Code",
    description: "Quickly apply code to your file.",
    videoUrl: "step5.mp4"
  },
  {
    id: "Autofix Errors",
    title: "Autofix Errors",
    description: "Click the button and fix the error.",
    videoUrl: "step6.mp4"
  },
  {
    id: "Advanced Semantic File Search",
    title: "Advanced Semantic File Search",
    description: "Ask what you're looking for, then hit tab.",
    videoUrl: "step7.mp4"
  },
  {
    id: "Automatic file creation",
    title: "Automatic file creation",
    description: "Refactor your files without lifting a finger.",
    videoUrl: "step8.mp4"
  },
]

export default function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [progressValues, setProgressValues] = useState<number[]>(features.map(() => 0));
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const progress = (video.currentTime / video.duration) * 100;
      setProgressValues((prev) => {
        const newValues = [...prev];
        newValues[activeFeature] = progress;
        return newValues;
      });
    };

    const handleEnded = () => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    };

    const handleLoadStart = () => {
      setIsLoading(true);
      setError(null);
    };

    const handleCanPlay = () => {
      setIsLoading(false);
      video.play().catch((error) => {
        setError('Failed to play video. Please try again.');
        console.error('Video playback error:', error);
      });
    };

    const handleError = () => {
      setIsLoading(false);
      setError('Failed to load video. Please try again.');
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, [activeFeature]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.src = features[activeFeature].videoUrl;
    video.load();
  }, [activeFeature]);

  const handleFeatureClick = (index: number) => {
    if (index === activeFeature) return;
    setActiveFeature(index);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 md:py-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 md:mb-16">Build fast. Stay flexible.</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Features List */}
          <div className="space-y-8 lg:col-span-1">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={cn(
                  "relative pl-8 cursor-pointer transition-all duration-300",
                  index === activeFeature ? "opacity-100" : "opacity-40 hover:opacity-60"
                )}
                onClick={() => handleFeatureClick(index)}
              >
                <div className="absolute left-0 top-0 w-1 rounded-lg h-full bg-gray-800 overflow-hidden">
                  <div
                    className="absolute top-0 left-0 w-full bg-blue-500"
                    style={{
                      height: `${progressValues[index]}%`,
                      opacity: index === activeFeature ? 1 : 0,
                    }}
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Video Player */}
          <div className="lg:col-span-2 flex items-center justify-center">
            <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden w-full">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                muted
                playsInline
                crossOrigin="anonymous"
              />
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50">
                  <Loader2 className="w-8 h-8 animate-spin" />
                </div>
              )}
              {error && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50">
                  <p className="text-red-400">{error}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}