import { ExternalLink, Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ExchangeCardProps {
  name: string;
  logo: string;
  tradingFee: string;
  kycRequired: boolean;
  futures: boolean;
  margin: boolean;
  fiatOnRamp: boolean;
  affiliateUrl: string;
  score: number;
}

export function ExchangeCard({
  name,
  logo,
  tradingFee,
  kycRequired,
  futures,
  margin,
  fiatOnRamp,
  affiliateUrl,
  score
}: ExchangeCardProps) {
  return (
    <Card className="group overflow-hidden transition-spring hover:shadow-elevation hover:shadow-glow/20 border-border/50">
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-3">
          <img 
            src={logo} 
            alt={`${name} logo`}
            className="w-10 h-10 rounded-lg"
          />
          <div className="flex-1">
            <h3 className="font-semibold group-hover:text-primary transition-smooth">
              {name}
            </h3>
            <div className="flex items-center space-x-1 mt-1">
              <Star className="w-3 h-3 fill-crypto-gold text-crypto-gold" />
              <span className="text-sm text-muted-foreground">
                {score.toFixed(1)}
              </span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>
            <span className="text-muted-foreground">Trading Fee:</span>
            <div className="font-medium">{tradingFee}</div>
          </div>
          <div>
            <span className="text-muted-foreground">KYC:</span>
            <div className={kycRequired ? "text-warning" : "text-success"}>
              {kycRequired ? "Required" : "Optional"}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {futures && <Badge variant="outline" className="text-xs">Futures</Badge>}
          {margin && <Badge variant="outline" className="text-xs">Margin</Badge>}
          {fiatOnRamp && <Badge variant="outline" className="text-xs">Fiat</Badge>}
        </div>

        <Button 
          asChild 
          className="w-full bg-gradient-primary hover:opacity-90 transition-smooth"
        >
          <a 
            href={affiliateUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2"
          >
            <span>Trade Now</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}