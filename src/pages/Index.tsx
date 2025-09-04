import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import { Button } from "@/components/ui/button";
import { Dumbbell, Instagram, Facebook, Twitter, Mail, Phone } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <div id="home">
          <Hero />
        </div>
        <Services />
        <Testimonials />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center">
                  <Dumbbell className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Elevate</span>
              </div>
              <p className="text-secondary-foreground/80 mb-6 max-w-md">
                Transform your fitness journey with premium equipment, expert trainers, 
                and a supportive community. Your goals are our mission.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="rounded-full border-white/20 text-white hover:bg-white/10">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-white/20 text-white hover:bg-white/10">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full border-white/20 text-white hover:bg-white/10">
                  <Twitter className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
                <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Membership</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-white mb-4">Contact</h3>
              <div className="space-y-3 text-secondary-foreground/80">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@elevate.com</span>
                </div>
                <div className="text-sm">
                  123 Fitness Boulevard<br />
                  Downtown District<br />
                  City, State 12345
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-secondary-foreground/60">
            <p>&copy; 2024 Elevate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;