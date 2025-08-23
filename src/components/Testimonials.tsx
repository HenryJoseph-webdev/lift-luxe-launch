import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Executive",
      content: "Lift Luxe Launch transformed my fitness journey. The trainers are incredible and the community is so supportive. I've never felt stronger!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Mike Chen",
      role: "Software Engineer",
      content: "The 24/7 access is perfect for my schedule. The equipment is top-notch and the facilities are always clean. Highly recommend!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Teacher",
      content: "I love the group fitness classes! The energy is amazing and I've made so many friends. It's more than just a gym - it's a community.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      role: "Business Owner",
      content: "The personal training sessions have been game-changing. My trainer really understands my goals and pushes me to achieve them.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lisa Park",
      role: "Nurse",
      content: "After years of trying different gyms, I finally found my home at Lift Luxe Launch. The results speak for themselves!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "James Wilson",
      role: "Financial Analyst",
      content: "The strength training program here is phenomenal. I've seen incredible gains in both strength and confidence.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary text-secondary-foreground">
      <div className="container px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our <span className="text-gradient">Members Say</span>
          </h2>
          <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto">
            Real stories from real people who've transformed their lives with us
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="card-hover bg-white/10 border-white/20 text-white backdrop-blur-sm animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-primary mb-4" />
                
                <p className="text-white/90 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-white/70">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto text-center">
          <div className="animate-slide-in-left">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-white/80">Member Satisfaction</div>
          </div>
          <div className="animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-white/80">Success Stories</div>
          </div>
          <div className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl font-bold text-primary mb-2">4.9★</div>
            <div className="text-white/80">Average Rating</div>
          </div>
          <div className="animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
            <div className="text-4xl font-bold text-primary mb-2">2019</div>
            <div className="text-white/80">Established</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;