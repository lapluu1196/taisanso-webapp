import { TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20 opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary shadow-glow">
              <TrendingUp className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Your Gateway to{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Crypto Success
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Stay ahead of the market with breaking news, expert analysis, and comprehensive guides. 
              From DeFi to trading, we've got you covered.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-smooth px-8 py-3 text-lg shadow-elevation"
              asChild
            >
              <a href="/news" className="flex items-center space-x-2">
                <span>Latest News</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border/50 hover:bg-muted/50 px-8 py-3 text-lg transition-smooth"
              asChild
            >
              <a href="/exchanges">Compare Exchanges</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto">
            <div className="text-center space-y-2">
              <div className="text-2xl md:text-3xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground">Articles Published</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl md:text-3xl font-bold text-crypto-gold">50+</div>
              <div className="text-sm text-muted-foreground">Exchanges Reviewed</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl md:text-3xl font-bold text-accent">24/7</div>
              <div className="text-sm text-muted-foreground">Market Coverage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}