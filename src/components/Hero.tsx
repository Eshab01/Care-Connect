
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Heart, Shield, Clock, Star, Users, Award } from 'lucide-react';

interface HeroProps {
  onBookingClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookingClick }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  
  const rotatingTexts = [
    "Modern Healthcare",
    "Digital Wellness",
    "Smart Medicine",
    "Connected Care"
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, number: "50,000+", label: "Happy Patients" },
    { icon: <Award className="w-6 h-6" />, number: "500+", label: "Expert Doctors" },
    { icon: <Star className="w-6 h-6" />, number: "4.9/5", label: "Rating" }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setStatsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-healthcare-teal/5 to-healthcare-blue/10">
      {/* Enhanced animated background */}
      <div 
        className="absolute inset-0 opacity-30 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(20, 184, 166, 0.15), rgba(59, 130, 246, 0.1) 50%, transparent 70%)`
        }}
      />
      
      {/* More floating elements with varied animations */}
      <div className="absolute top-20 left-20 w-16 h-16 bg-healthcare-teal/20 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-32 w-8 h-8 bg-healthcare-blue/30 rounded-full animate-bounce delay-300"></div>
      <div className="absolute bottom-40 left-16 w-12 h-12 bg-healthcare-teal/15 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-60 left-1/3 w-6 h-6 bg-healthcare-blue/20 rounded-full animate-ping delay-500"></div>
      <div className="absolute bottom-60 right-1/4 w-10 h-10 bg-healthcare-teal/10 rounded-full animate-bounce delay-700"></div>
      
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-healthcare-teal/10 rounded-full text-healthcare-teal text-sm font-medium animate-slide-in-right">
                <Heart className="w-4 h-4 mr-2 animate-pulse-heartbeat" />
                Trusted by 50,000+ patients
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 leading-tight">
                Your Health,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-healthcare-teal to-healthcare-blue animate-gradient">
                  <span key={currentTextIndex} className="animate-fade-in">
                    {rotatingTexts[currentTextIndex]}
                  </span>
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed animate-fade-in delay-300">
                Experience the future of healthcare with CareConnect. Book appointments, 
                access lab results, and connect with healthcare professionals seamlessly.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in delay-500">
              <Button 
                onClick={onBookingClick}
                className="h-14 px-8 text-lg bg-gradient-to-r from-healthcare-teal to-healthcare-blue hover:from-healthcare-teal/90 hover:to-healthcare-blue/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                Book Appointment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                className="h-14 px-8 text-lg border-2 border-healthcare-teal text-healthcare-teal hover:bg-healthcare-teal hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>

            {/* Animated statistics */}
            <div className={`grid grid-cols-3 gap-6 pt-8 transition-all duration-1000 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left animate-fade-in" style={{ animationDelay: `${600 + index * 200}ms` }}>
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <div className="text-healthcare-teal">{stat.icon}</div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-8 pt-4">
              <div className="flex items-center space-x-2 text-gray-600">
                <Shield className="w-5 h-5 text-healthcare-teal" />
                <span className="text-sm">HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="w-5 h-5 text-healthcare-blue" />
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in delay-300">
            <div className="relative z-10">
              <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-healthcare-teal/20 to-healthcare-blue/20 rounded-3xl flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-2xl animate-float">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-healthcare-teal to-healthcare-blue rounded-2xl flex items-center justify-center mx-auto animate-pulse-heartbeat">
                    <Heart className="w-12 h-12 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-gray-800">Healthcare Reimagined</h3>
                    <p className="text-gray-600 max-w-xs">
                      Advanced technology meets compassionate care for better health outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-healthcare-teal rounded-full animate-ping"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-healthcare-blue rounded-full animate-bounce delay-500"></div>
            <div className="absolute top-1/2 -left-8 w-4 h-4 bg-healthcare-teal/50 rounded-full animate-pulse delay-1000"></div>
            <div className="absolute top-1/4 -right-6 w-5 h-5 bg-healthcare-blue/50 rounded-full animate-ping delay-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
