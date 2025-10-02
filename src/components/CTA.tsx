import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const CTA = () => {
  const { t } = useTranslation();
  
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('cta.subtitle')}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 shadow-medium animate-slide-up">
              <h3 className="text-2xl font-bold text-foreground mb-6">{t('cta.formTitle')}</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('cta.name')}
                  </label>
                  <Input placeholder={t('cta.namePlaceholder')} className="w-full" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('cta.email')}
                  </label>
                  <Input type="email" placeholder={t('cta.emailPlaceholder')} className="w-full" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('cta.phone')}
                  </label>
                  <Input placeholder={t('cta.phonePlaceholder')} className="w-full" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t('cta.message')}
                  </label>
                  <Textarea 
                    placeholder={t('cta.messagePlaceholder')}
                    className="w-full min-h-32"
                  />
                </div>
                
                <Button className="w-full gradient-primary text-white shadow-medium" size="lg">
                  {t('cta.submit')}
                </Button>
              </form>
            </Card>
            
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">{t('cta.contactTitle')}</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {t('cta.contactDescription')}
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{t('cta.emailLabel')}</h4>
                    <p className="text-muted-foreground">contact@techsolutions.et</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{t('cta.phoneLabel')}</h4>
                    <p className="text-muted-foreground">+251 9XX XXX XXX</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{t('cta.locationLabel')}</h4>
                    <p className="text-muted-foreground">{t('cta.location')}</p>
                  </div>
                </div>
              </div>
              
              <Card className="p-6 bg-primary/5 border-primary/20">
                <h4 className="font-semibold text-foreground mb-2">{t('cta.quickFacts')}</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>{t('cta.fact1')}</li>
                  <li>{t('cta.fact2')}</li>
                  <li>{t('cta.fact3')}</li>
                  <li>{t('cta.fact4')}</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
