import personalTraining from "@/assets/personal-training.jpg";
import groupFitness from "@/assets/group-fitness.jpg";
import strengthTraining from "@/assets/strength-training.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Dumbbell, Heart, Clock } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Personal Training",
      description: "One-on-one sessions with certified trainers to help you reach your goals faster.",
      image: personalTraining,
      icon: <Dumbbell className="w-8 h-8 text-primary" />,
      features: ["Customized workout plans", "Nutrition guidance", "Progress tracking", "Flexible scheduling"]
    },
    {
      title: "Group Fitness Classes",
      description: "High-energy classes that build community while you burn calories and build strength.",
      image: groupFitness,
      icon: <Users className="w-8 h-8 text-primary" />,
      features: ["HIIT workouts", "Yoga & Pilates", "Dance fitness", "Strength circuits"]
    },
    {
      title: "Strength Training",
      description: "Access to premium equipment and expert guidance for serious strength building.",
      image: strengthTraining,
      icon: <Heart className="w-8 h-8 text-primary" />,
      features: ["Olympic lifting", "Powerlifting", "Functional training", "Competition prep"]
    }
  ];

  return (
    <section id="services" className="py-20 section-gradient">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive fitness solutions designed to meet you wherever you are in your journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border-0 shadow-lg overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  {service.icon}
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional Services */}
        <div className="grid md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
          <div className="text-center p-6 animate-slide-in-left">
            <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold mb-2">24/7 Access</h3>
            <p className="text-sm text-muted-foreground">Work out whenever it fits your schedule</p>
          </div>
          
          <div className="text-center p-6 animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
            <Users className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold mb-2">Community</h3>
            <p className="text-sm text-muted-foreground">Join a supportive fitness community</p>
          </div>
          
          <div className="text-center p-6 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold mb-2">Wellness Focus</h3>
            <p className="text-sm text-muted-foreground">Holistic approach to health and fitness</p>
          </div>
          
          <div className="text-center p-6 animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
            <Dumbbell className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-bold mb-2">Premium Equipment</h3>
            <p className="text-sm text-muted-foreground">Latest fitness technology and gear</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;