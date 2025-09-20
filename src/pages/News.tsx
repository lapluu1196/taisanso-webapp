import { Layout } from "../components/Layout";
import { ArticleCard } from "../components/ArticleCard";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Extended mock data for news page
const mockNewsArticles = [
  {
    title: "Bitcoin Reaches New All-Time High Amid Institutional Adoption",
    summary: "Major corporations continue to add Bitcoin to their treasury reserves as the cryptocurrency breaks previous records.",
    publishedAt: "2024-01-15T10:00:00Z",
    category: "Market Analysis",
    slug: "bitcoin-all-time-high-institutional-adoption",
    imageUrl: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=400&fit=crop",
    readTime: 5
  },
  {
    title: "Ethereum 2.0 Staking Rewards Reach $2 Billion Milestone",
    summary: "The Ethereum network celebrates a significant milestone as staking rewards surpass $2 billion total value.",
    publishedAt: "2024-01-14T15:30:00Z",
    category: "Ethereum",
    slug: "ethereum-staking-rewards-2-billion",
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
    readTime: 4
  },
  {
    title: "DeFi Protocol Launches Revolutionary Cross-Chain Bridge",
    summary: "New technology promises to solve interoperability issues between major blockchain networks.",
    publishedAt: "2024-01-13T09:15:00Z",
    category: "DeFi",
    slug: "defi-cross-chain-bridge-launch",
    imageUrl: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=800&h=400&fit=crop",
    readTime: 6
  },
  {
    title: "Central Bank Digital Currencies Gain Momentum Worldwide",
    summary: "More than 50 countries are now exploring or piloting their own digital currencies as the CBDC race accelerates.",
    publishedAt: "2024-01-12T14:20:00Z",
    category: "Regulation",
    slug: "cbdc-momentum-worldwide",
    imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=400&fit=crop",
    readTime: 7
  },
  {
    title: "NFT Market Shows Signs of Recovery with New Gaming Integrations",
    summary: "The non-fungible token market rebounds as major gaming companies announce blockchain integration plans.",
    publishedAt: "2024-01-11T11:45:00Z",
    category: "NFTs",
    slug: "nft-market-recovery-gaming",
    imageUrl: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=800&h=400&fit=crop",
    readTime: 4
  },
  {
    title: "Layer 2 Solutions See Record Transaction Volume",
    summary: "Ethereum scaling solutions process over 10 million transactions daily as adoption soars.",
    publishedAt: "2024-01-10T16:30:00Z",
    category: "Technology",
    slug: "layer-2-record-volume",
    imageUrl: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?w=800&h=400&fit=crop",
    readTime: 5
  }
];

const ARTICLES_PER_PAGE = 9;

const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(mockNewsArticles.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const currentArticles = mockNewsArticles.slice(startIndex, startIndex + ARTICLES_PER_PAGE);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout>
      {/* Header */}
      <section className="py-16 lg:py-24 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Crypto <span className="bg-gradient-primary bg-clip-text text-transparent">News</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Stay informed with the latest breaking news, market analysis, and insights 
              from the cryptocurrency and blockchain world.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {currentArticles.map((article, index) => (
              <ArticleCard key={`${currentPage}-${index}`} {...article} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="h-10 w-10"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="icon"
                  onClick={() => goToPage(page)}
                  className="h-10 w-10"
                >
                  {page}
                </Button>
              ))}
              
              <Button
                variant="outline"
                size="icon"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="h-10 w-10"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default News;