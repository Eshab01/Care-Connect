import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, MapPin, Users, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import BookingModal from '@/components/BookingModal';

const ClinicAppointments = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const features = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Easy Scheduling",
      description: "Book appointments with your preferred doctors in just a few clicks"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Timing",
      description: "Choose from available slots that fit your busy schedule"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Multiple Locations",
      description: "Access our network of clinics across the city"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Doctors",
      description: "Consult with certified and experienced healthcare professionals"
    }
  ];

  const benefits = [
    "No waiting in long queues",
    "Instant appointment confirmation",
    "Reminder notifications",
    "Easy rescheduling options",
    "Medical history access",
    "Insurance verification"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
<main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-healthcare-teal/10 to-healthcare-blue/10 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-display font-bold text-gray-900 mb-6">
                Clinic Appointments
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Schedule in-person consultations with our experienced doctors at your convenience. 
                Quality healthcare delivered with personalized attention.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-healthcare-teal to-healthcare-blue hover:from-healthcare-teal/90 hover:to-healthcare-blue/90"
                  onClick={() => setIsModalOpen(true)}
                >
                  Book Appointment Now
                </Button>
                <Link to="/services/clinic-appointments/learn-more">
                  <Button size="lg" variant="outline" className="border-healthcare-teal text-healthcare-teal hover:bg-healthcare-teal hover:text-white">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                Why Choose Our Clinic Appointments?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience hassle-free healthcare with our streamlined appointment system
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-healthcare-teal to-healthcare-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                  Benefits of Our Service
                </h2>
                <p className="text-gray-600">
                  Enjoy a seamless healthcare experience with these exclusive benefits
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                    <CheckCircle className="w-6 h-6 text-healthcare-teal flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-healthcare-teal to-healthcare-blue">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Ready to Book Your Appointment?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Take the first step towards better health. Our doctors are ready to provide you with the care you deserve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-healthcare-teal hover:bg-gray-100">
                  Schedule Now
                </Button>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="bg-white text-healthcare-blue hover:bg-gray-100  ">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ClinicAppointments;
