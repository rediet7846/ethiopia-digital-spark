import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const { t } = useTranslation();
  
  const pricingTiers = [
    {
      name: t('pricing.basic.name'),
      price: "20,000",
      description: t('pricing.basic.description'),
      features: [
        t('pricing.basic.features.item1'),
        t('pricing.basic.features.item2'),
        t('pricing.basic.features.item3'),
        t('pricing.basic.features.item4'),
        t('pricing.basic.features.item5')
      ],
      popular: false
    },
    {
      name: t('pricing.standard.name'),
      price: "50,000",
      description: t('pricing.standard.description'),
      features: [
        t('pricing.standard.features.item1'),
        t('pricing.standard.features.item2'),
        t('pricing.standard.features.item3'),
        t('pricing.standard.features.item4'),
        t('pricing.standard.features.item5'),
        t('pricing.standard.features.item6')
      ],
      popular: true
    },
    {
      name: t('pricing.premium.name'),
      price: "100,000",
      description: t('pricing.premium.description'),
      features: [
        t('pricing.premium.features.item1'),
        t('pricing.premium.features.item2'),
        t('pricing.premium.features.item3'),
        t('pricing.premium.features.item4'),
        t('pricing.premium.features.item5'),
        t('pricing.premium.features.item6'),
        t('pricing.premium.features.item7')
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('pricing.subtitle')}
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
                  {t('pricing.popular')}
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
                {t('pricing.getStarted')}
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 text-muted-foreground">
          <p className="mb-2">{t('pricing.terms')}</p>
          <p>{t('pricing.extras')}</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
