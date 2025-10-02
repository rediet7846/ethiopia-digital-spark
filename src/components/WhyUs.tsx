import { Card } from "@/components/ui/card";
import { GraduationCap, Briefcase, MapPin, Headphones, FileCode, CreditCard } from "lucide-react";
import { useTranslation } from "react-i18next";

const WhyUs = () => {
  const { t } = useTranslation();
  
  const highlights = [
    {
      icon: GraduationCap,
      title: t('whyUs.education.title'),
      description: t('whyUs.education.description')
    },
    {
      icon: Briefcase,
      title: t('whyUs.experience.title'),
      description: t('whyUs.experience.description')
    },
    {
      icon: MapPin,
      title: t('whyUs.local.title'),
      description: t('whyUs.local.description')
    },
    {
      icon: Headphones,
      title: t('whyUs.support.title'),
      description: t('whyUs.support.description')
    },
    {
      icon: FileCode,
      title: t('whyUs.quality.title'),
      description: t('whyUs.quality.description')
    },
    {
      icon: CreditCard,
      title: t('whyUs.flexible.title'),
      description: t('whyUs.flexible.description')
    }
  ];

  return (
    <section className="py-24 gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t('whyUs.title')}
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            {t('whyUs.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/80 leading-relaxed">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
