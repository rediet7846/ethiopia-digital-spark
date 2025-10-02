import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "Basic",
    price: "20,000",
    description: "Perfect for getting started",
    features: [
      "Professional Website or Telegram Bot",
      "Mobile Responsive Design",
      "Basic SEO Setup",
      "1 Month Support",
      "Source Code Included"
    ],
    popular: false
  },
  {
    name: "Standard",
    price: "50,000",
    description: "Most popular choice",
    features: [
      "Professional Website + Telegram Bot",
      "Advanced SEO & Analytics",
      "Payment Integration (Telebirr)",
      "3 Months Support",
      "Free Training Session",
      "Priority Support"
    ],
    popular: true
  },
  {
    name: "Premium",
    price: "100,000",
    description: "Complete solution",
    features: [
      "Full Custom Application",
      "Advanced Features & Integration",
      "Database Setup & Management",
      "6 Months Support",
      "Dedicated Account Manager",
      "Regular Updates & Maintenance",
      "Staff Training Program"
    ],
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Flexible packages designed for Ethiopian SMEs. All prices in ETB (15% VAT applies)
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <Card 
              key={index}
              className={`p-8 relative overflow-hidden transition-all duration-300 animate-slide-up ${
                tier.popular 
                  ? 'border-primary border-2 shadow-strong scale-105' 
                  : 'border-border shadow-medium hover:shadow-strong'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-secondary text-white px-4 py-1 text-sm font-semibold">
                  Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{tier.name}</h3>
                <p className="text-muted-foreground text-sm">{tier.description}</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-primary">{tier.price}</span>
                  <span className="text-muted-foreground">ETB</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${
                  tier.popular 
                    ? 'gradient-primary text-white shadow-medium' 
                    : 'bg-primary text-primary-foreground'
                }`}
                size="lg"
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 text-muted-foreground">
          <p className="mb-2">Payment Terms: 50% upfront, 50% on completion</p>
          <p>All extras and additional features are billed separately</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
