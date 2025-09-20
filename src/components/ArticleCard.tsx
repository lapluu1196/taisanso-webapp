import { Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ArticleCardProps {
  title: string;
  summary: string;
  publishedAt: string;
  category: string;
  slug: string;
  imageUrl?: string;
  readTime?: number;
}

export function ArticleCard({ 
  title, 
  summary, 
  publishedAt, 
  category, 
  slug, 
  imageUrl, 
  readTime = 3 
}: ArticleCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <Card className="group overflow-hidden transition-spring hover:shadow-elevation hover:shadow-glow/20 border-border/50">
      {imageUrl && (
        <div className="aspect-[16/9] overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover transition-smooth group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-xs font-medium">
            {category}
          </Badge>
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="w-3 h-3 mr-1" />
            {readTime} min read
          </div>
        </div>
        <h3 className="font-semibold leading-tight group-hover:text-primary transition-smooth line-clamp-2">
          {title}
        </h3>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {summary}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            {formatDate(publishedAt)}
          </span>
          <Button 
            variant="ghost" 
            size="sm" 
            asChild 
            className="group/btn h-8 px-3 hover:bg-primary/10 hover:text-primary"
          >
            <a href={`/news/${slug}`}>
              Read more
              <ArrowRight className="w-3 h-3 ml-1 transition-smooth group-hover/btn:translate-x-0.5" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}