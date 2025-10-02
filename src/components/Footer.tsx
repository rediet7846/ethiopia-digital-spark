const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">TS</span>
              </div>
              <span className="text-xl font-bold">Tech Solutions</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Empowering Ethiopian SMEs with custom digital solutions. From websites to bots, we build technology that drives growth.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-white/70 hover:text-white transition-colors">Services</a></li>
              <li><a href="#pricing" className="text-white/70 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-white/70">
              <li>Addis Ababa, Ethiopia</li>
              <li>contact@techsolutions.et</li>
              <li>+251 9XX XXX XXX</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>&copy; {currentYear} Tech Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
