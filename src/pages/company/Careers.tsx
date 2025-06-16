
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, Heart, Users, Zap } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Careers = () => {
  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Healthcare Benefits",
      description: "Comprehensive health, dental, and vision insurance for you and your family"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Work-Life Balance",
      description: "Flexible working hours, remote work options, and unlimited PTO"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Growth Opportunities",
      description: "Continuous learning budget, mentorship programs, and career advancement"
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Competitive Package",
      description: "Market-competitive salary, equity options, and performance bonuses"
    }
  ];

  const openings = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      description: "Join our engineering team to build scalable healthcare solutions that impact millions of lives."
    },
    {
      title: "Product Manager - Telemedicine",
      department: "Product",
      location: "Remote / New York",
      type: "Full-time",
      description: "Lead product strategy for our telemedicine platform and drive innovation in digital health."
    },
    {
      title: "Clinical Operations Specialist",
      department: "Clinical",
      location: "Chicago, IL",
      type: "Full-time",
      description: "Oversee clinical workflows and ensure quality patient care across our platform."
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Design intuitive and accessible user experiences for our healthcare platform."
    },
    {
      title: "Data Scientist",
      department: "Data",
      location: "Remote / Boston",
      type: "Full-time",
      description: "Analyze healthcare data to improve patient outcomes and platform performance."
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      description: "Help our healthcare providers succeed and grow on our platform."
    }
  ];

  const values = [
    "Patient-first mindset in everything we do",
    "Embrace innovation and continuous learning",
    "Foster diversity, equity, and inclusion",
    "Collaborate with transparency and trust",
    "Take ownership and drive results",
    "Maintain work-life balance and wellbeing"
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
                Join Our Mission
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Help us transform healthcare by building innovative solutions that improve lives. 
                Join a team of passionate professionals making a real difference in the world.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-healthcare-teal to-healthcare-blue hover:from-healthcare-teal/90 hover:to-healthcare-blue/90">
                View Open Positions
              </Button>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                Why Work at CareConnect?
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join a company that values your growth, well-being, and contribution to meaningful work
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-healthcare-teal to-healthcare-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Our Culture & Values</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  We believe in creating an inclusive environment where everyone can thrive and make an impact
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                    <div className="w-2 h-2 bg-healthcare-teal rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Open Positions</h2>
              <p className="text-gray-600">
                Explore our current openings and find the perfect role for your skills and passion
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6">
              {openings.map((job, index) => (
                <Card key={index} className="border shadow-sm hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl text-gray-900">{job.title}</CardTitle>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                          <span className="bg-healthcare-teal/10 text-healthcare-teal px-2 py-1 rounded">
                            {job.department}
                          </span>
                          <span>{job.location}</span>
                          <span>{job.type}</span>
                        </div>
                      </div>
                      <Button variant="outline" className="border-healthcare-teal text-healthcare-teal hover:bg-healthcare-teal hover:text-white">
                        Apply Now
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{job.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Our Hiring Process</h2>
              <p className="text-gray-600">
                We've designed a fair and efficient process to find the best talent
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-healthcare-teal rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Apply Online</h3>
                <p className="text-gray-600">Submit your application and resume through our portal</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-healthcare-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Initial Screening</h3>
                <p className="text-gray-600">Brief phone call to discuss your background and interests</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Interview Rounds</h3>
                <p className="text-gray-600">Technical and cultural fit interviews with team members</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-healthcare-teal to-healthcare-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-2">Welcome Aboard</h3>
                <p className="text-gray-600">Comprehensive onboarding and integration into the team</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-healthcare-teal to-healthcare-blue">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Ready to Make a Difference?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Join our team and help us build the future of healthcare. Together, we can make quality healthcare accessible to everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-healthcare-teal hover:bg-gray-100">
                  Browse Jobs
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-healthcare-teal">
                  Learn More About Us
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

export default Careers;
