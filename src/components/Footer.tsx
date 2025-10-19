import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img src={logo} alt="ArifTech Digital Solutions" className="h-14 w-auto brightness-0 invert object-contain" />
            </div>
            <p className="text-white/70 leading-relaxed">
              {t('footer.description')}
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">{t('nav.services')}</a></li>
              <li><a href="#pricing" className="text-white/70 hover:text-white transition-colors">{t('nav.pricing')}</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">{t('nav.contact')}</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2 text-white/70">
              <li>{t('cta.location')}</li>
              <li>contact@techsolutions.et</li>
              <li>+251 9XX XXX XXX</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>&copy; {currentYear} ArifTechSolution. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
