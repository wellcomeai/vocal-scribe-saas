
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  highlighted?: boolean;
  ctaText?: string;
  className?: string;
}

export function PricingCard({
  title,
  price,
  description,
  features,
  highlighted = false,
  ctaText = "Choose Plan",
  className,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border p-6 shadow-sm transition-all duration-300",
        {
          "border-brand-purple/30 shadow-lg shadow-brand-purple/10": highlighted,
          "border-gray-200 hover:shadow-md": !highlighted,
        },
        className
      )}
    >
      <div className="mb-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="mt-4 flex items-baseline text-gray-900">
          <span className="text-3xl font-bold tracking-tight">{price}</span>
          {price !== "Free" && <span className="ml-1 text-sm text-gray-600">/month</span>}
        </div>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      </div>
      <ul className="my-6 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex gap-2">
            <Check
              className={cn("h-5 w-5 shrink-0", {
                "text-brand-purple": feature.included,
                "text-gray-300": !feature.included,
              })}
            />
            <span
              className={cn("text-sm", {
                "text-gray-600": feature.included,
                "text-gray-400 line-through": !feature.included,
              })}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      <Button
        className={cn("w-full", {
          "bg-brand-purple hover:bg-brand-purple/90": highlighted,
        })}
      >
        {ctaText}
      </Button>
    </div>
  );
}
