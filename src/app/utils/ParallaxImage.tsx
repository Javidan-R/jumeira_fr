"use client";
import React, { useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";

interface ParallaxImageProps {
  src: StaticImageData | string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  quality?: number;
  objectPosition?: string;
  layout?: "fixed" | "intrinsic" | "responsive" | "fill";
  loading?: "lazy" | "eager";
  parallaxSpeed?: number;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  width = "100%",
  height = "400px",
  className = "",
  objectFit = "cover",
  quality = 75,
  objectPosition = "center",
  layout = "responsive",
  loading = "lazy",
  parallaxSpeed = 0.1,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const { top, bottom, height } =
              containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Dynamic speed based on visibility
            const visiblePercentage = Math.min(
              1,
              Math.max(0, (windowHeight - top) / height)
            );
            const dynamicSpeed = parallaxSpeed * visiblePercentage;

            if (top < windowHeight && bottom > 0) {
              const offset = (top - windowHeight) * dynamicSpeed;
              containerRef.current.style.transform = `translateY(${offset}px)`;

              // Dynamic zoom effect based on scroll position
              const zoomFactor = 1 + visiblePercentage * 0.05; // Adjust for zoom intensity
              imageRef.current?.style.setProperty(
                "transform",
                `scale(${zoomFactor})`
              );
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.addEventListener("scroll", handleScroll);
          handleScroll(); // Immediate update when entering viewport
        } else {
          window.removeEventListener("scroll", handleScroll);
        }
      },
      { threshold: [0, 0.1, 0.5, 1] } // More granular control over when to trigger effects
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [parallaxSpeed]);

  return (
    <div
      ref={containerRef}
      className={`parallax-image ${className}`}
      style={{
        position: "relative",
        overflow: "hidden",
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        willChange: "transform",
      }}
    >
      <Image
        ref={imageRef}
        src={src}
        alt={alt}
        layout={layout}
        objectFit={objectFit}
        quality={quality}
        objectPosition={objectPosition}
        loading={loading}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          transition: "transform 0.3s ease-out", // Smooth transition for zoom
        }}
      />
    </div>
  );
};

export default ParallaxImage;
