"use client";

import React, {
  useEffect,
  useRef,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils"; // utility for merging classNames
import { createNoise3D } from "simplex-noise";

interface WavyBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
}

export const WavyBackground: React.FC<WavyBackgroundProps> = ({
  children,
  className,
  containerClassName,
  colors = [
    "#0A5CBAFF",
    "#FFFFFFFF",
    "#A5B5FFFF",
    "#CF31CFFF",
    "#559EFDFF",
  ],
  waveWidth = 50,
  backgroundFill = "#ffffff",
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isSafari, setIsSafari] = useState(false);
  const noise = createNoise3D();
  const speedValue = speed === "fast" ? 0.002 : 0.001;

  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (ctx.canvas.width = window.innerWidth);
    let h = (ctx.canvas.height = window.innerHeight);
    ctx.filter = `blur(${blur}px)`;
    let nt = 0;

    const handleResize = () => {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };

    window.addEventListener("resize", handleResize);

    const drawWave = (n: number) => {
      nt += speedValue;
      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth;
        ctx.strokeStyle = colors[i % colors.length];
        for (let x = 0; x < w; x += 5) {
          const y = noise(x / 800, 0.3 * i, nt) * 100;
          ctx.lineTo(x, y + h * 0.5);
        }
        ctx.stroke();
        ctx.closePath();
      }
    };

    const render = () => {
      ctx.fillStyle = backgroundFill;
      ctx.globalAlpha = waveOpacity;
      ctx.fillRect(0, 0, w, h);
      drawWave(5);
      animationId = requestAnimationFrame(render);
    };

    let animationId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, [blur, speed, colors, waveWidth, backgroundFill, waveOpacity]);

  return (
    <div
    className={cn(
      "fixed top-0 left-0 w-full h-full -z-10 pointer-events-none", // 👈 fixed background
      containerClassName
    )}
  >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 w-full h-full"
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      />
      <div
        className={cn(
          "relative z-10 w-full max-w-screen-xl px-4 md:px-8",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};