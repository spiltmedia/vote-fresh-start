import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="hero-section min-h-[85vh] flex flex-col items-center justify-center text-primary-foreground px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 50px,
            rgba(255,255,255,0.03) 50px,
            rgba(255,255,255,0.03) 51px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 50px,
            rgba(255,255,255,0.03) 50px,
            rgba(255,255,255,0.03) 51px
          )`
        }} />
      </div>

      <div className="container max-w-4xl text-center relative z-10 animate-fade-in">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full animate-pulse-subtle bg-primary" />
          <span className="text-sm font-medium tracking-wide uppercase">Democracy in Action</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none mb-6 tracking-tight">
          VOTE THEM
          <span className="block text-gradient bg-gradient-to-r from-primary to-red-400 bg-clip-text text-transparent">
            OUT
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Find every incumbent on your ballot. 
          <span className="text-primary-foreground font-semibold"> Time for a fresh start.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="xl" 
            onClick={onGetStarted}
            className="min-w-[200px]"
          >
            Find Your Incumbents
          </Button>
          <Button 
            variant="heroOutline" 
            size="xl"
            onClick={onGetStarted}
          >
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto">
          <div className="text-center">
            <div className="font-display text-3xl md:text-4xl">535</div>
            <div className="text-sm text-primary-foreground/60 uppercase tracking-wide">Congress Members</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl md:text-4xl">50</div>
            <div className="text-sm text-primary-foreground/60 uppercase tracking-wide">Governors</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl md:text-4xl">1000s</div>
            <div className="text-sm text-primary-foreground/60 uppercase tracking-wide">Local Officials</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={onGetStarted}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
        aria-label="Scroll to search"
      >
        <ArrowDown className="w-6 h-6 animate-bounce" />
      </button>
    </section>
  );
};
