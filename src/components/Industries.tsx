import { ShoppingBag, Utensils, GraduationCap, Heart, Hotel, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const Industries = () => {
  const { t } = useTranslation();
  
  const industries = [
    {
      icon: ShoppingBag,
      name: t('industries.retail.title'),
      description: t('industries.retail.description')
    },
    {
      icon: Utensils,
      name: t('industries.food.title'),
      description: t('industries.food.description')
    },
    {
      icon: GraduationCap,
      name: t('industries.education.title'),
      description: t('industries.education.description')
    },
    {
      icon: Heart,
      name: t('industries.health.title'),
      description: t('industries.health.description')
    },
    {
      icon: Hotel,
      name: t('industries.hospitality.title'),
      description: t('industries.hospitality.description')
    },
    {
      icon: TrendingUp,
      name: t('industries.finance.title'),
      description: t('industries.finance.description')
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {t('industries.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('industries.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div 
                key={index}
                className="text-center group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <Icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{industry.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{industry.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
