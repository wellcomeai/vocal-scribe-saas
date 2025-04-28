
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "small" | "medium" | "large";
}

export function Logo({ className, size = "medium" }: LogoProps) {
  const sizeClasses = {
    small: "text-lg",
    medium: "text-2xl",
    large: "text-4xl",
  };

  return (
    <div className={cn("font-bold flex items-center gap-2", sizeClasses[size], className)}>
      <div className="relative">
        <div className="w-8 h-8 bg-gradient-to-tr from-brand-purple to-brand-cyan rounded-full flex items-center justify-center">
          <div className="audio-wave scale-75">
            <div className="wave-bar h-3"></div>
            <div className="wave-bar h-5"></div>
            <div className="wave-bar h-4"></div>
            <div className="wave-bar h-3"></div>
          </div>
        </div>
      </div>
      <span className="gradient-text">VoiceScribe</span>
    </div>
  );
}
