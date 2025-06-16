
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Shield, Clock, Phone, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const PrescriptionDelivery = () => {
  const features = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "Same-day delivery available for urgent medications within city limits"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Verified Medicines",
      description: "All medications sourced from licensed pharmacies with quality assurance"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Service",
      description: "Round-the-clock availability for emergency medication needs"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Pharmacist Support",
      description: "Expert consultation available for medication queries and interactions"
    }
  ];

  const deliveryOptions = [
    "Same-day delivery (within 4 hours)",
    "Next-day delivery",
    "Scheduled delivery",
    "Emergency delivery (within 2 hours)",
    "Subscription refills",
    "Cold chain delivery for special medications"
  ];

  const serviceAreas = [
    "Chronic disease management",
    "Post-surgery medications",
    "Pediatric medications",
    "Elderly care prescriptions",
    "Mental health medications",
    "Specialty medications"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-display font-bold text-gray-900 mb-6">
                Prescription Delivery
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Get your medications delivered to your doorstep safely and quickly. 
                Verified medicines with expert pharmacist support available 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  Order Medicines
                </Button>
                <Button size="lg" variant="outline" className="border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white">
                  Upload Prescription
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
                Why Choose Our Delivery Service?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Reliable, safe, and convenient medication delivery with professional care
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
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

        {/* Delivery Options */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                  Delivery Options
                </h2>
                <p className="text-gray-600">
                  Flexible delivery options to meet your specific needs
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Delivery Speed</h3>
                  <div className="space-y-4">
                    {deliveryOptions.map((option, index) => (
                      <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                        <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                        <span className="text-gray-700">{option}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Service Areas</h3>
                  <div className="space-y-4">
                    {serviceAreas.map((area, index) => (
                      <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                        <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0" />
                        <span className="text-gray-700">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                How Prescription Delivery Works
              </h2>
              <p className="text-gray-600">
                Simple steps to get your medications delivered safely
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Upload Prescription</h3>
                <p className="text-gray-600">Take a photo or upload your prescription digitally</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Verify & Confirm</h3>
                <p className="text-gray-600">Our pharmacist verifies and confirms your order</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Prepare & Pack</h3>
                <p className="text-gray-600">Medicines prepared and packed securely</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-2">Delivered</h3>
                <p className="text-gray-600">Safe delivery to your doorstep with tracking</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-500 to-pink-500">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Need Your Medications Delivered?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Skip the pharmacy trip. Get your prescriptions delivered safely and quickly to your home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-purple-500 hover:bg-gray-100">
                  Order Now
                </Button>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-500">
                    Need Help?
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrescriptionDelivery;
