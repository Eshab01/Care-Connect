
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Video, Shield, Clock, Globe, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import BookingModal from '@/components/BookingModal';

const OnlineConsultations = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const features = [
    {
      icon: <Video className="w-6 h-6" />,
      title: "HD Video Calls",
      description: "Crystal clear video consultations with secure, encrypted connections"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "HIPAA Compliant",
      description: "Your privacy and medical data are protected with industry-standard security"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Availability",
      description: "Access healthcare professionals anytime, anywhere, at your convenience"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Access",
      description: "Connect with specialists worldwide from the comfort of your home"
    }
  ];

  const consultationTypes = [
    "General Medicine",
    "Dermatology",
    "Mental Health",
    "Pediatrics",
    "Cardiology",
    "Endocrinology",
    "Gynecology",
    "Psychiatry"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-healthcare-blue/10 to-healthcare-teal/10 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-display font-bold text-gray-900 mb-6">
                Online Consultations
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Get expert medical advice from certified doctors through secure video calls. 
                Healthcare that fits your lifestyle, available 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-healthcare-blue to-healthcare-teal hover:from-healthcare-blue/90 hover:to-healthcare-teal/90">
                  Start Consultation
                </Button>
                <Button size="lg" variant="outline" className="border-healthcare-blue text-healthcare-blue hover:bg-healthcare-blue hover:text-white">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                Why Choose Online Consultations?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience the future of healthcare with our advanced telemedicine platform
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-healthcare-blue to-healthcare-teal rounded-full flex items-center justify-center mx-auto mb-4 text-white">
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

        {/* Consultation Types */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                  Available Specialties
                </h2>
                <p className="text-gray-600">
                  Connect with specialists across various medical fields
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {consultationTypes.map((type, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <CheckCircle className="w-5 h-5 text-healthcare-blue flex-shrink-0" />
                    <span className="text-gray-700">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-gray-600">
                Get started with online consultations in three simple steps
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-healthcare-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Book Appointment</h3>
                <p className="text-gray-600">Choose your preferred doctor and time slot</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-healthcare-teal rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Join Video Call</h3>
                <p className="text-gray-600">Connect securely at your scheduled time</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-healthcare-blue to-healthcare-teal rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Treatment</h3>
                <p className="text-gray-600">Receive diagnosis and prescription digitally</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-healthcare-blue to-healthcare-teal">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Ready for Your Online Consultation?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Experience healthcare redefined. Connect with our doctors from anywhere, anytime.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-healthcare-blue hover:bg-gray-100"
                  onClick={() => setIsModalOpen(true)}>
                  Start Now
                </Button>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="bg-white text-healthcare-blue hover:bg-gray-100">
                    Have Questions?
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </div>
  );
};

export default OnlineConsultations;
