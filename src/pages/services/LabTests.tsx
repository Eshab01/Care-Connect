
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Home, Clock, Shield, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import BookingModal from '@/components/BookingModal';

const LabTests = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const features = [
    {
      icon: <Home className="w-6 h-6" />,
      title: "Home Sample Collection",
      description: "Trained professionals collect samples from your home at your convenience"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Digital Reports",
      description: "Get your test results digitally with detailed analysis and insights"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Quick Results",
      description: "Fast turnaround time with most results available within 24-48 hours"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Certified Labs",
      description: "All tests conducted in NABL accredited laboratories for accuracy"
    }
  ];

  const testCategories = [
    "Complete Blood Count (CBC)",
    "Lipid Profile",
    "Liver Function Test",
    "Kidney Function Test",
    "Thyroid Profile",
    "Diabetes Panel",
    "Vitamin D Test",
    "Iron Studies",
    "Cardiac Markers",
    "Hormone Tests",
    "Allergy Tests",
    "Cancer Markers"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-display font-bold text-gray-900 mb-6">
                Lab Tests & Diagnostics
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Comprehensive diagnostic services with home sample collection and digital reports. 
                Accurate, fast, and convenient testing solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                  Book Lab Test
                </Button>
                <Button size="lg" variant="outline" className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
                  View Test Packages
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
                Why Choose Our Lab Services?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Advanced diagnostic solutions with the convenience of home service
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
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

        {/* Test Categories */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                  Available Test Categories
                </h2>
                <p className="text-gray-600">
                  Comprehensive range of diagnostic tests for all your healthcare needs
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {testCategories.map((test, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{test}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                How Our Lab Service Works
              </h2>
              <p className="text-gray-600">
                Simple steps to get your lab tests done from home
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Book Test</h3>
                <p className="text-gray-600">Select your required tests and schedule appointment</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Sample Collection</h3>
                <p className="text-gray-600">Our professional collects samples from your home</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Lab Processing</h3>
                <p className="text-gray-600">Samples processed in certified laboratories</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-2">Digital Reports</h3>
                <p className="text-gray-600">Receive detailed reports on your phone</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-500 to-blue-500">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Ready to Book Your Lab Test?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Take control of your health with our comprehensive diagnostic services. Book now for convenient home collection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-green-500 hover:bg-gray-100"
                onClick={() => setIsModalOpen(true)}>
                  Book Test Now
                </Button>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="bg-white text-healthcare-blue hover:bg-gray-100">
                    Get Help
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

export default LabTests;
