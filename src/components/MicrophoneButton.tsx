
import { useState } from "react";
import { Mic, MicOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface MicrophoneButtonProps {
  className?: string;
  onMicToggle?: (isActive: boolean) => void;
}

export function MicrophoneButton({ className, onMicToggle }: MicrophoneButtonProps) {
  const [isActive, setIsActive] = useState(false);

  const toggleMicrophone = () => {
    const newState = !isActive;
    setIsActive(newState);
    
    if (onMicToggle) {
      onMicToggle(newState);
    }
  };

  return (
    <button
      onClick={toggleMicrophone}
      className={cn(
        "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300",
        isActive 
          ? "bg-brand-purple text-white shadow-lg shadow-brand-purple/30" 
          : "bg-gray-100 text-gray-500 hover:bg-gray-200",
        className
      )}
    >
      {isActive ? (
        <>
          <Mic className="w-5 h-5" />
          <span className="sr-only">Mute Microphone</span>
        </>
      ) : (
        <>
          <MicOff className="w-5 h-5" />
          <span className="sr-only">Activate Microphone</span>
        </>
      )}
    </button>
  );
}
