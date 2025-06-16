
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Video, Clock, Shield, Users, CheckCircle, Monitor, Headphones, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const OnlineConsultationsLearnMore = () => {
  const process = [
    {
      step: "1",
      title: "Choose Doctor",
      description: "Browse available doctors by specialty, rating, and availability. Read profiles and patient reviews."
    },
    {
      step: "2",
      title: "Schedule Session",
      description: "Select your preferred time slot and book your video consultation instantly."
    },
    {
      step: "3",
      title: "Join Video Call",
      description: "Connect through our secure platform using any device - computer, tablet, or smartphone."
    },
    {
      step: "4",
      title: "Follow-up Care",
      description: "Receive digital prescriptions, care plans, and schedule follow-up appointments as needed."
    }
  ];

  const benefits = [
    "Consult from the comfort of your home",
    "No travel time or parking hassles",
    "Access to specialists nationwide",
    "Secure, HIPAA-compliant video calls",
    "Digital prescriptions and care plans",
    "24/7 availability for urgent consultations",
    "Recorded sessions for future reference",
    "Multi-language support available"
  ];

  const consultationTypes = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "General Consultation",
      description: "Routine check-ups, health concerns, and preventive care",
      duration: "15-30 minutes"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Mental Health",
      description: "Therapy sessions, counseling, and psychiatric consultations",
      duration: "30-60 minutes"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Follow-up Care",
      description: "Post-treatment monitoring and medication adjustments",
      duration: "10-20 minutes"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Family Medicine",
      description: "Pediatric care, family planning, and elderly care",
      duration: "20-40 minutes"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-healthcare-teal/10 to-healthcare-blue/10 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-display font-bold text-gray-900 mb-6 animate-fade-in">
                Online Consultations - Learn More
              </h1>
              <p className="text-xl text-gray-600 mb-8 animate-fade-in delay-300">
                Connect with healthcare professionals from anywhere through secure video consultations. Quality healthcare delivered to your doorstep.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
                <Button size="lg" className="bg-gradient-to-r from-healthcare-teal to-healthcare-blue hover:from-healthcare-teal/90 hover:to-healthcare-blue/90">
                  Start Consultation
                </Button>
                <Link to="/services/online-consultations">
                  <Button size="lg" variant="outline" className="border-healthcare-teal text-healthcare-teal hover:bg-healthcare-teal hover:text-white">
                    View Service Page
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">How Online Consultations Work</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Simple, secure, and convenient - get expert medical advice without leaving your home
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-healthcare-teal to-healthcare-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                      {item.step}
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Benefits of Online Consultations
                </h2>
                <p className="text-gray-600 mb-8">
                  Experience healthcare that adapts to your lifestyle with our comprehensive online consultation services.
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                      <CheckCircle className="w-6 h-6 text-healthcare-teal flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-healthcare-teal/20 to-healthcare-blue/20 rounded-3xl p-8 text-center">
                  <Video className="w-24 h-24 text-healthcare-teal mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure Video Platform</h3>
                  <p className="text-gray-600 mb-6">
                    HIPAA-compliant video consultations with crystal-clear audio and video quality
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-white rounded-lg p-3">
                      <div className="font-semibold text-healthcare-teal">HD Video</div>
                      <div className="text-gray-600">1080p Quality</div>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <div className="font-semibold text-healthcare-blue">Secure</div>
                      <div className="text-gray-600">End-to-End Encrypted</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Types of Consultations</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From routine check-ups to specialized care, we offer various consultation types to meet your needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consultationTypes.map((type, index) => (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-healthcare-teal to-healthcare-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                      {type.icon}
                    </div>
                    <CardTitle className="text-xl">{type.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4">
                      {type.description}
                    </CardDescription>
                    <div className="text-sm font-medium text-healthcare-teal">
                      Duration: {type.duration}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technology & Security */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Technology & Security</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Advanced technology ensuring secure, reliable, and high-quality video consultations
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-8 border-0 shadow-lg">
                <Shield className="w-16 h-16 text-healthcare-teal mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">HIPAA Compliant</h3>
                <p className="text-gray-600">Your privacy and medical information are protected with the highest security standards.</p>
              </Card>
              
              <Card className="text-center p-8 border-0 shadow-lg">
                <Monitor className="w-16 h-16 text-healthcare-blue mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">Multi-Device Support</h3>
                <p className="text-gray-600">Access consultations from any device - desktop, tablet, or smartphone with our web app.</p>
              </Card>
              
              <Card className="text-center p-8 border-0 shadow-lg">
                <Clock className="w-16 h-16 text-healthcare-teal mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-4">24/7 Availability</h3>
                <p className="text-gray-600">Emergency consultations available round the clock with our on-call specialists.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-healthcare-teal to-healthcare-blue">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Ready to Connect with a Doctor?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Experience the convenience of online healthcare. Book your consultation today and get expert medical advice from the comfort of your home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-healthcare-teal hover:bg-gray-100">
                  Start Consultation Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-healthcare-teal">
                  View Available Doctors
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OnlineConsultationsLearnMore;
