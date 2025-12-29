import { Cloud, Star, Heart, Sparkles } from "lucide-react";

interface FloatingElementProps {
  className?: string;
}

export const FloatingCloud = ({ className }: FloatingElementProps) => (
  <div className={`absolute text-pastel-blue opacity-60 ${className}`}>
    <Cloud className="w-16 h-16 md:w-24 md:h-24 fill-current" />
  </div>
);

export const FloatingStar = ({ className }: FloatingElementProps) => (
  <div className={`absolute text-pastel-yellow opacity-70 animate-sparkle ${className}`}>
    <Star className="w-6 h-6 md:w-8 md:h-8 fill-current" />
  </div>
);

export const FloatingHeart = ({ className }: FloatingElementProps) => (
  <div className={`absolute text-pastel-pink opacity-60 ${className}`}>
    <Heart className="w-8 h-8 md:w-12 md:h-12 fill-current" />
  </div>
);

export const FloatingSparkle = ({ className }: FloatingElementProps) => (
  <div className={`absolute text-primary opacity-50 animate-pulse-soft ${className}`}>
    <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
  </div>
);

export const DecorativeElements = () => (
  <>
    <FloatingCloud className="top-20 left-[5%] animate-float" />
    <FloatingCloud className="top-40 right-[8%] animate-float-delayed" />
    <FloatingStar className="top-32 left-[15%]" />
    <FloatingStar className="top-24 right-[20%]" />
    <FloatingStar className="top-60 left-[25%]" />
    <FloatingHeart className="top-48 right-[12%] animate-float" />
    <FloatingSparkle className="top-36 left-[40%]" />
    <FloatingSparkle className="top-52 right-[35%]" />
  </>
);
