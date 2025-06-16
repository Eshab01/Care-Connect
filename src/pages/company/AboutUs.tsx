
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, Award, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutUs = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Patient-Centered Care",
      description: "We put our patients at the heart of everything we do, ensuring personalized and compassionate healthcare."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Our team of certified healthcare professionals brings years of experience and dedication to patient care."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Excellence",
      description: "We maintain the highest standards of medical care with continuous improvement and innovation."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Accessible Healthcare",
      description: "Making quality healthcare accessible to everyone, anywhere, through technology and innovation."
    }
  ];

  const stats = [
    { number: "50,000+", label: "Happy Patients" },
    { number: "200+", label: "Expert Doctors" },
    { number: "24/7", label: "Available Support" },
    { number: "15+", label: "Years Experience" }
  ];

  const team = [
    {
      name: "Dr. Eshab Sachan",
      role: "Chief Medical Officer",
      description: "Board-certified physician with 20+ years experience in internal medicine and digital health."
    },
    {
      name: "Anmol Pyaari",
      role: "Chief Technology Officer",
      description: "Former Google engineer passionate about using technology to improve healthcare accessibility."
    },
    {
      name: "Dr. Arun Bakra",
      role: "Head of Telemedicine",
      description: "Pioneering telemedicine specialist focused on remote patient care and digital therapeutics."
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
                About CareConnect
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We're on a mission to make quality healthcare accessible, convenient, and affordable for everyone. 
                Through innovative technology and compassionate care, we're transforming the healthcare experience.
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

        {/* Mission Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-8">
                To democratize healthcare by leveraging technology to provide accessible, affordable, and high-quality 
                medical services to patients regardless of their location or circumstances. We believe that everyone 
                deserves access to excellent healthcare, and we're committed to making that a reality.
              </p>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading digital healthcare platform that connects patients with the best medical care, 
                  wherever they are, whenever they need it. We envision a world where quality healthcare is just 
                  a click away.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These values guide everything we do and shape the way we serve our patients and community
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-healthcare-teal to-healthcare-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                      {value.icon}
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Leadership Team</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Meet the passionate leaders driving innovation in healthcare
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="w-24 h-24 bg-gradient-to-r from-healthcare-teal to-healthcare-blue rounded-full mx-auto mb-4"></div>
                    <CardTitle className="text-xl text-center">{member.name}</CardTitle>
                    <CardDescription className="text-center text-healthcare-teal font-medium">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-8 text-center">Our Story</h2>
              <div className="prose prose-lg mx-auto text-gray-600">
                <p className="mb-6">
                  CareConnect was founded in 2024 with a simple yet powerful vision: to make healthcare more accessible 
                  and convenient for everyone. Our founders, a team of healthcare professionals and technology experts, 
                  recognized the growing need for digital health solutions that could bridge the gap between patients 
                  and quality medical care.
                </p>
                <p className="mb-6">
                  Starting with a small team of passionate individuals, we began by developing our telemedicine platform 
                  to connect patients with doctors virtually. As we grew, we expanded our services to include lab tests, 
                  prescription delivery, and comprehensive health management tools.
                </p>
                <p>
                  Today, CareConnect serves thousands of patients across the country, partnering with hundreds of 
                  healthcare providers to deliver exceptional medical care. We continue to innovate and expand our 
                  services while staying true to our core mission of making healthcare accessible to all.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
