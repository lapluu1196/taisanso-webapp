import { TrendingUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-primary">
                <TrendingUp className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                CryptoHub
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your trusted source for crypto news, guides, and market insights.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/news" className="text-muted-foreground hover:text-foreground transition-smooth">Latest News</a></li>
              <li><a href="/learn" className="text-muted-foreground hover:text-foreground transition-smooth">Learning Center</a></li>
              <li><a href="/exchanges" className="text-muted-foreground hover:text-foreground transition-smooth">Exchange Comparison</a></li>
              <li><a href="/airdrops" className="text-muted-foreground hover:text-foreground transition-smooth">Airdrops</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/learn/beginners" className="text-muted-foreground hover:text-foreground transition-smooth">Beginner's Guide</a></li>
              <li><a href="/learn/trading" className="text-muted-foreground hover:text-foreground transition-smooth">Trading Basics</a></li>
              <li><a href="/learn/defi" className="text-muted-foreground hover:text-foreground transition-smooth">DeFi Explained</a></li>
              <li><a href="/events" className="text-muted-foreground hover:text-foreground transition-smooth">Market Events</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/disclaimer" className="text-muted-foreground hover:text-foreground transition-smooth">Disclaimer</a></li>
              <li><a href="/privacy" className="text-muted-foreground hover:text-foreground transition-smooth">Privacy Policy</a></li>
              <li><a href="/terms" className="text-muted-foreground hover:text-foreground transition-smooth">Terms of Service</a></li>
              <li><a href="/affiliate-disclosure" className="text-muted-foreground hover:text-foreground transition-smooth">Affiliate Disclosure</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} CryptoHub. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Cryptocurrency investments carry significant risk. Always do your own research.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}