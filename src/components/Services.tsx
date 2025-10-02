import { Card } from "@/components/ui/card";
import { Globe, Bot, Code, Wrench } from "lucide-react";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: Globe,
      title: t('services.website.title'),
      description: t('services.website.description'),
      features: [
        t('services.website.features.ecommerce'),
        t('services.website.features.responsive'),
        t('services.website.features.seo'),
        t('services.website.features.payment')
      ]
    },
    {
      icon: Bot,
      title: t('services.bot.title'),
      description: t('services.bot.description'),
      features: [
        t('services.bot.features.automation'),
        t('services.bot.features.orders'),
        t('services.bot.features.support'),
        t('services.bot.features.workflows')
      ]
    },
    {
      icon: Code,
      title: t('services.software.title'),
      description: t('services.software.description'),
      features: [
        t('services.software.features.inventory'),
        t('services.software.features.crm'),
        t('services.software.features.analytics'),
        t('services.software.features.cloud')
      ]
    },
    {
      icon: Wrench,
      title: t('services.support.title'),
      description: t('services.support.description'),
      features: [
        t('services.support.features.audits'),
        t('services.support.features.maintenance'),
        t('services.support.features.cloudSetup'),
        t('services.support.features.performance')
      ]
    }
  ];
  
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="p-8 gradient-card shadow-medium hover:shadow-strong transition-all duration-300 border-border/50 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
