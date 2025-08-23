import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 section-gradient">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-gradient">Get Started?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Visit us today for a free consultation and tour. Your fitness journey starts here.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <Card className="card-hover border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Location</h3>
                    <p className="text-muted-foreground">
                      123 Fitness Boulevard<br />
                      Downtown District<br />
                      City, State 12345
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Phone</h3>
                    <p className="text-muted-foreground">
                      Main: (555) 123-4567<br />
                      Text: (555) 123-4568
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      info@liftluxelaunch.com<br />
                      support@liftluxelaunch.com
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold mb-2">Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 5:00 AM - 11:00 PM</p>
                      <p>Saturday - Sunday: 6:00 AM - 10:00 PM</p>
                      <p className="text-primary font-semibold">24/7 Access for Members</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* CTA Section */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="card-hover border-0 shadow-xl bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-6 text-center">
                  Start Your <span className="text-gradient">Free Trial</span>
                </h3>
                
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-2">$0</div>
                    <div className="text-lg text-muted-foreground">First 7 Days</div>
                  </div>
                  
                  <ul className="space-y-3 text-center">
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Free gym access
                    </li>
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      One personal training session
                    </li>
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Group fitness classes
                    </li>
                    <li className="flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      Nutrition consultation
                    </li>
                  </ul>
                  
                  <Button className="btn-hero w-full">
                    Claim Your Free Trial
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    No credit card required. Cancel anytime.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            {/* Social Media */}
            <div className="mt-8 text-center">
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex justify-center space-x-4">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Twitter className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;