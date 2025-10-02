import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="ArifTechSolution workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
            <span className="h-2 w-2 bg-secondary rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">{t('hero.badge')}</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {t('hero.title')}
            <span className="block gradient-text bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              {t('hero.titleHighlight')}
            </span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-strong group">
              {t('hero.getStarted')}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
              {t('hero.viewWork')}
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-secondary" />
              <span>{t('hero.certified')}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-secondary" />
              <span>{t('hero.projects')}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-secondary" />
              <span>{t('hero.expertise')}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
