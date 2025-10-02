import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground">
              Get a free consultation and project estimate. Let's discuss how we can help you succeed.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 shadow-medium animate-slide-up">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input placeholder="John Doe" className="w-full" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input type="email" placeholder="john@example.com" className="w-full" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input placeholder="+251 9XX XXX XXX" className="w-full" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Tell Us About Your Project
                  </label>
                  <Textarea 
                    placeholder="I need a website for my retail business..."
                    className="w-full min-h-32"
                  />
                </div>
                
                <Button className="w-full gradient-primary text-white shadow-medium" size="lg">
                  Get Free Consultation
                </Button>
              </form>
            </Card>
            
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We're here to answer your questions and discuss how we can help bring your digital vision to life. 
                  Reach out through any of these channels.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">contact@techsolutions.et</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <p className="text-muted-foreground">+251 9XX XXX XXX</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Location</h4>
                    <p className="text-muted-foreground">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>
              
              <Card className="p-6 bg-primary/5 border-primary/20">
                <h4 className="font-semibold text-foreground mb-2">Quick Facts</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Free initial consultation</li>
                  <li>✓ Project delivery starts in 10 days</li>
                  <li>✓ Flexible payment: 50% upfront, 50% on completion</li>
                  <li>✓ All source code included</li>
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
