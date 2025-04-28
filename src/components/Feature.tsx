
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface FeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function Feature({ icon, title, description, className }: FeatureProps) {
  return (
    <div className={cn("p-6 rounded-xl bg-white shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-brand-purple/20", className)}>
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center text-white mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
