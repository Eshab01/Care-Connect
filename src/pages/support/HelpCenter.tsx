
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Book, MessageCircle, Phone, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      icon: <Book className="w-6 h-6" />,
      title: "Getting Started",
      description: "Learn how to use CareConnect for the first time",
      articles: 12
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Appointments & Consultations",
      description: "Booking, rescheduling, and managing your appointments",
      articles: 8
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Technical Support",
      description: "Troubleshooting technical issues and connectivity",
      articles: 15
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Account & Billing",
      description: "Manage your account settings and billing information",
      articles: 10
    }
  ];

  const popularArticles = [
    "How to book your first telemedicine appointment",
    "Uploading and managing your prescription",
    "Understanding your lab test results",
    "Setting up home sample collection",
    "Managing your payment methods",
    "Rescheduling or canceling appointments",
    "Technical requirements for video calls",
    "Privacy and security of your medical data"
  ];

  const contactOptions = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Live Chat",
      description: "Chat with our support team",
      availability: "24/7 Available",
      action: "Start Chat"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone Support",
      description: "Speak with a support specialist",
      availability: "Mon-Fri 8AM-8PM",
      action: "Call Now"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Support",
      description: "Send us a detailed message",
      availability: "Response within 24 hours",
      action: "Send Email"
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
              <h1 className="text-5xl font-display font-bold text-gray-900 mb-6">
                Help Center
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Find answers to common questions, browse our knowledge base, or get in touch with our support team.
              </p>
              
              {/* Search Bar */}
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for help articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-healthcare-teal focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Browse by Category</h2>
              <p className="text-gray-600">
                Find the help you need organized by topic
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {categories.map((category, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-healthcare-teal to-healthcare-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                      {category.icon}
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-gray-600 mb-4">
                      {category.description}
                    </CardDescription>
                    <span className="text-sm text-healthcare-teal font-medium">
                      {category.articles} articles
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Articles */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Popular Articles</h2>
                <p className="text-gray-600">
                  Most frequently accessed help articles
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {popularArticles.map((article, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-healthcare-teal rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700 hover:text-healthcare-teal transition-colors">{article}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Still Need Help?</h2>
              <p className="text-gray-600">
                Get in touch with our support team for personalized assistance
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {contactOptions.map((option, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-healthcare-teal to-healthcare-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                      {option.icon}
                    </div>
                    <CardTitle className="text-xl">{option.title}</CardTitle>
                    <CardDescription className="text-gray-600">
                      {option.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 mb-4">{option.availability}</p>
                    <Button className="w-full bg-gradient-to-r from-healthcare-teal to-healthcare-blue hover:from-healthcare-teal/90 hover:to-healthcare-blue/90">
                      {option.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
              <p className="text-gray-600 mb-8">
                Quick answers to the most common questions about our services
              </p>
              <Button size="lg" variant="outline" className="border-healthcare-teal text-healthcare-teal hover:bg-healthcare-teal hover:text-white">
                View All FAQs
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HelpCenter;
