
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, FileText, Award, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Press = () => {
  const newsItems = [
    {
      date: "March 15, 2025",
      title: "CareConnect Raises $50M Series B to Expand Telemedicine Services",
      publication: "TechCrunch",
      summary: "Healthcare technology company CareConnect announced a $50 million Series B funding round to accelerate expansion of its telemedicine platform nationwide."
    },
    {
      date: "February 8, 2025",
      title: "Revolutionary Home Lab Testing Service Launches Nationwide",
      publication: "Healthcare IT News",
      summary: "CareConnect's new home lab testing service brings clinical-grade diagnostics directly to patients' homes, eliminating the need for clinic visits."
    },
    {
      date: "January 20, 2025",
      title: "CareConnect Named 'Healthcare Innovation Company of the Year'",
      publication: "Digital Health Awards",
      summary: "Recognition for outstanding innovation in digital health technology and patient care delivery."
    },
    {
      date: "December 5, 2024",
      title: "Study Shows 40% Reduction in Hospital Readmissions",
      publication: "Journal of Medical Internet Research",
      summary: "New research demonstrates significant improvements in patient outcomes through CareConnect's remote monitoring platform."
    }
  ];

  const awards = [
    {
      year: "2024",
      award: "Healthcare Innovation Company of the Year",
      organization: "Digital Health Awards"
    },
    {
      year: "2023",
      award: "Best Telemedicine Platform",
      organization: "MedTech Breakthrough Awards"
    },
    {
      year: "2023",
      award: "Top 50 Healthcare Startups",
      organization: "StartUp Health"
    },
    {
      year: "2022",
      award: "Patient Choice Award",
      organization: "Healthcare Consumer Awards"
    }
  ];

  const stats = [
    { number: "500K+", label: "Patients Served" },
    { number: "98%", label: "Patient Satisfaction" },
    { number: "50+", label: "Media Mentions" },
    { number: "15+", label: "Industry Awards" }
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
                Press & Media
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Stay updated with the latest news, announcements, and media coverage about CareConnect. 
                Download our press kit and media resources.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-healthcare-teal mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Latest News</h2>
              <p className="text-gray-600">
                Recent media coverage and company announcements
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {newsItems.map((item, index) => (
                <Card key={index} className="border shadow-sm hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                          <Calendar className="w-4 h-4" />
                          <span>{item.date}</span>
                          <span>•</span>
                          <span className="text-healthcare-teal font-medium">{item.publication}</span>
                        </div>
                        <CardTitle className="text-xl text-gray-900 mb-2">{item.title}</CardTitle>
                        <CardDescription className="text-gray-600">
                          {item.summary}
                        </CardDescription>
                      </div>
                      <FileText className="w-8 h-8 text-gray-400 ml-4 flex-shrink-0" />
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Awards & Recognition</h2>
              <p className="text-gray-600">
                Industry recognition for our innovation and excellence in healthcare
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="text-center">
                    <Award className="w-16 h-16 text-healthcare-teal mx-auto mb-4" />
                    <CardTitle className="text-lg">{award.award}</CardTitle>
                    <CardDescription className="text-healthcare-blue font-medium">
                      {award.organization} • {award.year}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Media Resources */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Media Resources</h2>
                <p className="text-gray-600">
                  Download our media kit, logos, and other press resources
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <CardHeader>
                    <FileText className="w-16 h-16 text-healthcare-teal mx-auto mb-4" />
                    <CardTitle>Press Kit</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      Complete press kit with company overview, leadership bios, and key statistics
                    </CardDescription>
                    <button className="text-healthcare-teal hover:text-healthcare-teal/80 font-medium">
                      Download PDF
                    </button>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-healthcare-teal to-healthcare-blue rounded-lg mx-auto mb-4 flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-sm"></div>
                    </div>
                    <CardTitle>Brand Assets</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      High-resolution logos, brand guidelines, and visual identity resources
                    </CardDescription>
                    <button className="text-healthcare-teal hover:text-healthcare-teal/80 font-medium">
                      Download ZIP
                    </button>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <CardHeader>
                    <Users className="w-16 h-16 text-healthcare-teal mx-auto mb-4" />
                    <CardTitle>Executive Photos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">
                      Professional headshots and team photos for media use
                    </CardDescription>
                    <button className="text-healthcare-teal hover:text-healthcare-teal/80 font-medium">
                      View Gallery
                    </button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">Media Inquiries</h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <p className="text-gray-600 mb-6">
                  For press inquiries, interview requests, or additional information, please contact our media relations team:
                </p>
                <div className="space-y-2">
                  <p className="font-medium">Eshab Sachan</p>
                  <p className="text-gray-600">Director of Communications</p>
                  <p className="text-healthcare-teal">press@careconnect.com</p>
                  <p className="text-gray-600">(123) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Press;
