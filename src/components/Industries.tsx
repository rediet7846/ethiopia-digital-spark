import { ShoppingBag, Plane, Building2, Heart } from "lucide-react";

const industries = [
  {
    icon: ShoppingBag,
    name: "Retail & E-commerce",
    description: "Enhance your social media sales with professional websites and automated order processing"
  },
  {
    icon: Plane,
    name: "Tourism & Hospitality",
    description: "Modern booking systems and customer engagement tools for tour operators and hotels"
  },
  {
    icon: Building2,
    name: "Fintech & Finance",
    description: "Secure applications and real-time alerts for digital payment solutions and financial services"
  },
  {
    icon: Heart,
    name: "NGOs & Social Impact",
    description: "Affordable digital tools to amplify your mission and streamline operations"
  }
];

const Industries = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Specialized solutions for Ethiopia's most dynamic sectors
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
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
