import { Card } from "@/components/ui/card";
import { GraduationCap, Users, Target, Shield } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Expert Team",
    description: "CS degree certified professionals with proven track record in Python, React, Node.js, MongoDB, and SQL."
  },
  {
    icon: Target,
    title: "Local Expertise",
    description: "Deep understanding of Ethiopian market needs, from social media integration to Telebirr payment solutions."
  },
  {
    icon: Users,
    title: "Customer-First",
    description: "Background in customer support ensures reliable service, clear communication, and long-term partnership."
  },
  {
    icon: Shield,
    title: "Proven Results",
    description: "Successfully delivered solutions for retail, tourism, fintech, and NGO sectors across Ethiopia."
  }
];

const WhyUs = () => {
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
            Why Choose Tech Solutions?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Combining technical excellence with deep understanding of Ethiopian business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
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
