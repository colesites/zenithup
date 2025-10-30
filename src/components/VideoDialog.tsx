"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Play, X } from "lucide-react";

interface VideoDialogProps {
  videoSrc: string;
  thumbnailSrc: string;
  thumbnailAlt?: string;
  className?: string;
}

export function VideoDialog({
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",
  className = "",
}: VideoDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const modal = isOpen ? (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in py-16 px-4 md:py-20 md:px-8"
      onClick={() => setIsOpen(false)}
    >
      {/* Modal Content */}
      <div
        className="relative w-full max-w-4xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-orange-600 hover:bg-orange-700 text-white flex items-center justify-center transition-all hover:scale-110 shadow-lg z-10"
          aria-label="Close video"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Container */}
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-500/20">
          <iframe
            src={`${videoSrc}${videoSrc.includes("?") ? "&" : "?"}autoplay=1`}
            title="Video player"
            className="w-full h-full"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      {/* Thumbnail Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`group relative overflow-hidden rounded-2xl shadow-xl transition-all hover:shadow-2xl ${className}`}
      >
        {/* Thumbnail Image */}
        <div className="relative aspect-video w-full">
          <img
            src={thumbnailSrc}
            alt={thumbnailAlt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Outer Glow */}
          <div className="absolute w-32 h-32 rounded-full bg-orange-500/30 blur-2xl animate-pulse" />
          
          {/* Play Button Container */}
          <div className="relative">
            {/* Ripple Effect */}
            <div className="absolute inset-0 rounded-full bg-orange-500/20 animate-ping" />
            
            {/* Main Button */}
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:from-orange-600 group-hover:to-orange-700">
              <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse" />
              <Play className="w-8 h-8 text-white fill-white ml-1 relative z-10" />
            </div>
          </div>
        </div>

        {/* Corner Badge (Optional) */}
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-orange-600/90 backdrop-blur-sm text-white text-sm font-semibold shadow-lg">
          Watch Demo
        </div>
      </button>

      {/* Portal Modal */}
      {mounted && modal && createPortal(modal, document.body)}
    </>
  );
}

