
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TestTube, Clock, Shield, Download, CheckCircle, Microscope, FileText, Smartphone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import BookingModal from '@/components/BookingModal';

const LabTestsLearnMore = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const process = [
    {
      step: "1",
      title: "Order Tests",
      description: "Browse our comprehensive test catalog and order the tests you need online or through your doctor's recommendation."
    },
    {
      step: "2",
      title: "Sample Collection",
      description: "Choose between home collection or visit our labs. Our certified technicians ensure comfortable sample collection."
    },
    {
      step: "3",
      title: "Processing",
      description: "Your samples are processed in our state-of-the-art laboratories with strict quality control measures."
    },
    {
      step: "4",
      title: "Digital Results",
      description: "Access your results securely online within 24-48 hours. Get detailed reports with doctor's interpretations."
    }
  ];

  const features = [
    {
      icon: <TestTube className="w-8 h-8" />,
      title: "500+ Test Types",
      description: "Comprehensive range from basic health checks to specialized diagnostics"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Fast Results",
      description: "Most results available within 24-48 hours with priority options"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Accurate & Reliable",
      description: "99.9% accuracy with internationally accredited laboratory standards"
    },
    {
      icon: <Download className="w-8 h-8" />,
      title: "Digital Reports",
      description: "Secure online access to all your reports with detailed explanations"
    }
  ];

  const testCategories = [
    "Complete Blood Count (CBC)",
    "Lipid Profile",
    "Diabetes Panel",
    "Thyroid Function Tests",
    "Liver Function Tests",
    "Kidney Function Tests",
    "Vitamin D & B12",
    "Cancer Markers",
    "Hormonal Tests",
    "Cardiac Markers",
    "Infectious Disease Tests",
    "Allergy Tests"
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
                Lab Tests & Results - Learn More
              </h1>
              <p className="text-xl text-gray-600 mb-8 animate-fade-in delay-300">
                Comprehensive diagnostic testing with fast, accurate results delivered digitally. Take control of your health with our advanced laboratory services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
                <Button size="lg" className="bg-gradient-to-r from-healthcare-teal to-healthcare-blue hover:from-healthcare-teal/90 hover:to-healthcare-blue/90">
                  Order Tests Now
                </Button>
                <Link to="/services/lab-tests">
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
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">How Our Lab Testing Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From ordering to results, we've streamlined the entire lab testing process for your convenience
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

        {/* Features */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Why Choose Our Lab Services?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                State-of-the-art technology meets compassionate care for reliable diagnostic solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-healthcare-teal to-healthcare-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Test Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Popular Test Categories</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From routine health checks to specialized diagnostics, we offer a comprehensive range of tests
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testCategories.map((category, index) => (
                <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-healthcare-teal to-healthcare-blue rounded-lg flex items-center justify-center">
                      <TestTube className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{category}</h3>
                      <p className="text-sm text-gray-600">Starting from $25</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Technology & Quality */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Advanced Technology & Quality Assurance
                </h2>
                <p className="text-gray-600 mb-8">
                  Our laboratories are equipped with cutting-edge technology and follow strict quality control measures to ensure accurate and reliable results.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Microscope className="w-8 h-8 text-healthcare-teal flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">State-of-the-Art Equipment</h3>
                      <p className="text-gray-600">Latest diagnostic instruments from leading manufacturers ensure precision and reliability.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <FileText className="w-8 h-8 text-healthcare-blue flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Detailed Reports</h3>
                      <p className="text-gray-600">Comprehensive reports with reference ranges, interpretations, and recommendations.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Smartphone className="w-8 h-8 text-healthcare-teal flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Digital Access</h3>
                      <p className="text-gray-600">Secure online portal and mobile app for easy access to your results anytime, anywhere.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card className="text-center p-6 border-0 shadow-lg">
                  <div className="text-3xl font-bold text-healthcare-teal mb-2">99.9%</div>
                  <p className="text-sm text-gray-600">Accuracy Rate</p>
                </Card>
                <Card className="text-center p-6 border-0 shadow-lg">
                  <div className="text-3xl font-bold text-healthcare-blue mb-2">24h</div>
                  <p className="text-sm text-gray-600">Average Turnaround</p>
                </Card>
                <Card className="text-center p-6 border-0 shadow-lg">
                  <div className="text-3xl font-bold text-healthcare-teal mb-2">500+</div>
                  <p className="text-sm text-gray-600">Test Types</p>
                </Card>
                <Card className="text-center p-6 border-0 shadow-lg">
                  <div className="text-3xl font-bold text-healthcare-blue mb-2">50+</div>
                  <p className="text-sm text-gray-600">Lab Locations</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-healthcare-teal to-healthcare-blue">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Ready to Take Control of Your Health?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Order your lab tests today and get fast, accurate results with detailed insights from our medical experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-healthcare-teal hover:bg-gray-100"
                onClick={() => setIsModalOpen(true)}>
                  Order Tests Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-healthcare-teal">
                  View Test Catalog
                </Button>
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

export default LabTestsLearnMore;
