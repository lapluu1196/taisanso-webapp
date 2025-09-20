import { Layout } from "../components/Layout";
import { ExchangeCard } from "../components/ExchangeCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Zap, DollarSign } from "lucide-react";

// Extended mock data for exchanges
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
  },
  {
    name: "Bybit",
    logo: "https://logo.clearbit.com/bybit.com",
    tradingFee: "0.1%",
    kycRequired: false,
    futures: true,
    margin: true,
    fiatOnRamp: true,
    affiliateUrl: "https://bybit.com",
    score: 4.4
  },
  {
    name: "KuCoin",
    logo: "https://logo.clearbit.com/kucoin.com",
    tradingFee: "0.1%",
    kycRequired: false,
    futures: true,
    margin: true,
    fiatOnRamp: true,
    affiliateUrl: "https://kucoin.com",
    score: 4.2
  },
  {
    name: "Gate.io",
    logo: "https://logo.clearbit.com/gate.io",
    tradingFee: "0.2%",
    kycRequired: true,
    futures: true,
    margin: true,
    fiatOnRamp: true,
    affiliateUrl: "https://gate.io",
    score: 4.1
  }
];

const mockWallets = [
  {
    name: "Ledger Nano X",
    type: "Hardware",
    hardware: true,
    mobile: true,
    desktop: true,
    multisig: false,
    affiliateUrl: "https://ledger.com"
  },
  {
    name: "MetaMask",
    type: "Software",
    hardware: false,
    mobile: true,
    desktop: true,
    multisig: false,
    affiliateUrl: "https://metamask.io"
  },
  {
    name: "Trezor Model T",
    type: "Hardware",
    hardware: true,
    mobile: false,
    desktop: true,
    multisig: true,
    affiliateUrl: "https://trezor.io"
  },
  {
    name: "Trust Wallet",
    type: "Software",
    hardware: false,
    mobile: true,
    desktop: false,
    multisig: false,
    affiliateUrl: "https://trustwallet.com"
  }
];

const Exchanges = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 lg:py-24 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Exchange <span className="bg-gradient-primary bg-clip-text text-transparent">Comparison</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Compare cryptocurrency exchanges and wallets to find the perfect platform for your trading and storage needs.
            </p>
            
            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold">Low Fees</h3>
                <p className="text-sm text-muted-foreground">Compare trading fees across platforms</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto rounded-xl bg-success/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-success" />
                </div>
                <h3 className="font-semibold">Security</h3>
                <p className="text-sm text-muted-foreground">Bank-grade security measures</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto rounded-xl bg-warning/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-warning" />
                </div>
                <h3 className="font-semibold">Fast Trading</h3>
                <p className="text-sm text-muted-foreground">Lightning-fast order execution</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 mx-auto rounded-xl bg-accent/10 flex items-center justify-center">
                  <Star className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold">Top Rated</h3>
                <p className="text-sm text-muted-foreground">Highly rated by users</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Tables */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="exchanges" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-2">
                <TabsTrigger value="exchanges">Exchanges</TabsTrigger>
                <TabsTrigger value="wallets">Wallets</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="exchanges" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Crypto Exchanges</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Compare features, fees, and security measures of leading cryptocurrency exchanges
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockExchanges.map((exchange, index) => (
                  <ExchangeCard key={index} {...exchange} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="wallets" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Crypto Wallets</h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Secure storage solutions for your cryptocurrency assets
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mockWallets.map((wallet, index) => (
                  <Card key={index} className="group overflow-hidden transition-spring hover:shadow-elevation hover:shadow-glow/20 border-border/50">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="group-hover:text-primary transition-smooth">
                          {wallet.name}
                        </CardTitle>
                        <Badge variant="secondary">{wallet.type}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {wallet.hardware && <Badge variant="outline" className="text-xs">Hardware</Badge>}
                        {wallet.mobile && <Badge variant="outline" className="text-xs">Mobile</Badge>}
                        {wallet.desktop && <Badge variant="outline" className="text-xs">Desktop</Badge>}
                        {wallet.multisig && <Badge variant="outline" className="text-xs">Multi-sig</Badge>}
                      </div>
                      
                      <a 
                        href={wallet.affiliateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-2 px-4 bg-gradient-primary text-primary-foreground rounded-lg text-center font-medium hover:opacity-90 transition-smooth"
                      >
                        Learn More
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Exchanges;