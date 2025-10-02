import { Card } from "@/components/ui/card";
import { Globe, Bot, Code, Wrench } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Custom Websites",
    description: "Responsive e-commerce sites built with React and Node.js, featuring SEO optimization and Telebirr integration to complement your social media presence.",
    features: ["E-commerce Ready", "Mobile Responsive", "SEO Optimized", "Payment Integration"]
  },
  {
    icon: Bot,
    title: "Telegram Bots",
    description: "Python-based intelligent bots for automated customer service, order management, and real-time alerts tailored to your business needs.",
    features: ["24/7 Automation", "Order Processing", "Customer Support", "Custom Workflows"]
  },
  {
    icon: Code,
    title: "Custom Software",
    description: "Tailored applications including inventory systems, CRM tools, and business management platforms using MongoDB and SQL databases.",
    features: ["Inventory Systems", "CRM Solutions", "Data Analytics", "Cloud Integration"]
  },
  {
    icon: Wrench,
    title: "IT Support",
    description: "Comprehensive IT audits, ongoing maintenance, cloud optimization, and database management to keep your systems running smoothly.",
    features: ["System Audits", "24/7 Maintenance", "Cloud Setup", "Performance Tuning"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete digital solutions to elevate your business in Ethiopia's growing digital economy
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
