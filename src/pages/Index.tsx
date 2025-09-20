import { Layout } from "../components/Layout";
import { HeroSection } from "../components/HeroSection";
import { ArticleCard } from "../components/ArticleCard";
import { ExchangeCard } from "../components/ExchangeCard";
import { AirdropCard } from "../components/AirdropCard";
import { useEffect, useState } from "react";

// Mock data - In real app, this would come from API
const mockArticles = [
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
  }
];

const mockExchanges = [
  {
    name: "Binance",
    logo: "https://logo.clearbit.com/binance.com",
    tradingFee: "0.1%",
    kycRequired: true,
    futures: true,
    margin: true,
    fiatOnRamp: true,
    affiliateUrl: "https://binance.com",
    score: 4.8
  },
  {
    name: "Coinbase",
    logo: "https://logo.clearbit.com/coinbase.com",
    tradingFee: "0.5%",
    kycRequired: true,
    futures: false,
    margin: false,
    fiatOnRamp: true,
    affiliateUrl: "https://coinbase.com",
    score: 4.5
  },
  {
    name: "Kraken",
    logo: "https://logo.clearbit.com/kraken.com",
    tradingFee: "0.26%",
    kycRequired: true,
    futures: true,
    margin: true,
    fiatOnRamp: true,
    affiliateUrl: "https://kraken.com",
    score: 4.6
  }
];

const mockAirdrops = [
  {
    name: "LayerZero Protocol",
    description: "Cross-chain interoperability protocol offering tokens to early users and developers.",
    endDate: "2024-03-15T23:59:59Z",
    status: "active" as const,
    reward: "Up to 1,000 ZRO",
    requirements: [
      "Bridge assets between supported chains",
      "Complete at least 5 transactions",
      "Hold minimum $100 in bridged assets"
    ],
    participateUrl: "https://layerzero.network"
  },
  {
    name: "Arbitrum Odyssey",
    description: "Explore the Arbitrum ecosystem and earn exclusive NFTs and potential token rewards.",
    endDate: "2024-02-28T23:59:59Z",
    status: "upcoming" as const,
    reward: "NFT + Tokens",
    requirements: [
      "Use Arbitrum-based DApps",
      "Complete weekly quests",
      "Maintain active wallet"
    ]
  }
];

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Latest News */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest News</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Stay updated with the most recent developments in the cryptocurrency world
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {mockArticles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>

          <div className="text-center">
            <a 
              href="/news"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-smooth font-medium"
            >
              View all news articles →
            </a>
          </div>
        </div>
      </section>

      {/* Top Exchanges */}
      <section className="py-16 lg:py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Exchanges</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Compare the best cryptocurrency exchanges and find the perfect platform for your trading needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {mockExchanges.map((exchange, index) => (
              <ExchangeCard key={index} {...exchange} />
            ))}
          </div>

          <div className="text-center">
            <a 
              href="/exchanges"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-smooth font-medium"
            >
              Compare all exchanges →
            </a>
          </div>
        </div>
      </section>

      {/* Upcoming Airdrops */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Airdrops</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Don't miss out on free tokens and exclusive opportunities in the crypto space
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            {mockAirdrops.map((airdrop, index) => (
              <AirdropCard key={index} {...airdrop} />
            ))}
          </div>

          <div className="text-center">
            <a 
              href="/airdrops"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-smooth font-medium"
            >
              View all airdrops →
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
