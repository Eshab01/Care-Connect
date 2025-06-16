
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Search, User, ChevronRight } from 'lucide-react';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Calendar,
      title: 'Clinic Appointments',
      description: 'Book in-person consultations with our network of trusted healthcare providers.',
      gradient: 'from-healthcare-teal to-healthcare-blue',
      features: ['Same-day bookings', 'Specialist referrals', 'Insurance accepted'],
      stats: '2,500+ appointments monthly'
    },
    {
      icon: Search,
      title: 'Lab Tests & Results',
      description: 'Order lab tests online and receive results securely through our platform.',
      gradient: 'from-healthcare-orange to-healthcare-orange-light',
      features: ['At-home collection', 'Fast results', 'Doctor consultation'],
      stats: '1,200+ tests processed'
    },
    {
      icon: User,
      title: 'Online Consultations',
      description: 'Connect with healthcare professionals from the comfort of your home.',
      gradient: 'from-healthcare-purple to-healthcare-purple-light',
      features: ['Video consultations', 'Prescription delivery', 'Follow-up care'],
      stats: '800+ virtual visits'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6 animate-fade-in">
            Healthcare Services <span className="text-healthcare-teal">Reimagined</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            From routine check-ups to specialized care, we're here to support your health journey 
            with convenient, modern solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 overflow-hidden cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="p-0 relative">
                <div className={`h-2 bg-gradient-to-r ${service.gradient} transition-all duration-300 ${
                  hoveredCard === index ? 'h-4' : ''
                }`}></div>
                <div className="p-8 relative">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 relative`}>
                    <service.icon className="w-8 h-8 text-white" />
                    {hoveredCard === index && (
                      <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl animate-pulse"></div>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-healthcare-teal transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex} 
                        className="flex items-center text-sm text-gray-700 transform transition-all duration-300"
                        style={{ 
                          transform: hoveredCard === index ? 'translateX(10px)' : 'translateX(0)',
                          transitionDelay: `${featureIndex * 50}ms`
                        }}
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 animate-pulse`}></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 font-medium">{service.stats}</span>
                    <button className="flex items-center text-healthcare-teal font-semibold hover:text-healthcare-teal/80 transition-colors group-hover:translate-x-2 transform transition-transform">
                      Learn More 
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 text-healthcare-teal animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-center group cursor-pointer">
              <div className="text-4xl font-bold group-hover:scale-110 transition-transform">99%</div>
              <div className="text-sm">Patient Satisfaction</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center group cursor-pointer">
              <div className="text-4xl font-bold group-hover:scale-110 transition-transform">4.9★</div>
              <div className="text-sm">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center group cursor-pointer">
              <div className="text-4xl font-bold group-hover:scale-110 transition-transform">50+</div>
              <div className="text-sm">Locations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
