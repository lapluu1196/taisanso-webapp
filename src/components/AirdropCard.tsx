import { Calendar, Gift, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface AirdropCardProps {
  name: string;
  description: string;
  endDate: string;
  status: "upcoming" | "active" | "ended";
  reward: string;
  requirements: string[];
  participateUrl?: string;
}

export function AirdropCard({
  name,
  description,
  endDate,
  status,
  reward,
  requirements,
  participateUrl
}: AirdropCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-success text-success-foreground";
      case "upcoming":
        return "bg-warning text-warning-foreground";
      case "ended":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <Card className="group overflow-hidden transition-spring hover:shadow-elevation hover:shadow-glow/20 border-border/50">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center space-x-2">
            <Gift className="w-5 h-5 text-crypto-gold" />
            <h3 className="font-semibold group-hover:text-primary transition-smooth">
              {name}
            </h3>
          </div>
          <Badge className={getStatusColor(status)}>
            {status}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div>
            <span className="text-muted-foreground">Reward:</span>
            <div className="font-medium text-crypto-gold">{reward}</div>
          </div>
          <div className="flex items-center text-muted-foreground">
            <Calendar className="w-3 h-3 mr-1" />
            <span>Ends {formatDate(endDate)}</span>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-medium text-muted-foreground mb-2">Requirements:</h4>
          <ul className="text-xs space-y-1">
            {requirements.slice(0, 2).map((req, index) => (
              <li key={index} className="flex items-start space-x-1">
                <span className="text-primary">•</span>
                <span className="text-muted-foreground">{req}</span>
              </li>
            ))}
            {requirements.length > 2 && (
              <li className="text-xs text-muted-foreground italic">
                +{requirements.length - 2} more requirements
              </li>
            )}
          </ul>
        </div>

        {participateUrl && status === "active" && (
          <Button 
            asChild 
            className="w-full bg-gradient-gold hover:opacity-90 transition-smooth text-black font-medium"
          >
            <a 
              href={participateUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2"
            >
              <span>Participate Now</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}