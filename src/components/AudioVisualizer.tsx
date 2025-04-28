
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AudioVisualizerProps {
  isActive: boolean;
  className?: string;
}

export function AudioVisualizer({ isActive, className }: AudioVisualizerProps) {
  const [bars] = useState(Array(5).fill(0));
  
  return (
    <div className={cn("audio-wave", className, { "opacity-0": !isActive })}>
      {bars.map((_, index) => (
        <div 
          key={index} 
          className={cn(
            "wave-bar",
            isActive ? `h-${Math.floor(Math.random() * 4) + 2}` : "h-1"
          )} 
          style={{ 
            animationPlayState: isActive ? "running" : "paused",
          }}
        />
      ))}
    </div>
  );
}
