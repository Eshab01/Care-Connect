
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, MapPin, Users, CheckCircle, Heart, Star, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const ClinicAppointmentsLearnMore = () => {
  const process = [
    {
      step: "1",
      title: "Choose Your Doctor",
      description: "Browse our network of certified healthcare professionals and select the right specialist for your needs."
    },
    {
      step: "2",
      title: "Select Time & Date",
      description: "Pick from available time slots that fit your schedule. We offer flexible timing including evenings and weekends."
    },
    {
      step: "3",
      title: "Confirm Booking",
      description: "Review your appointment details and confirm. You'll receive instant confirmation and reminders."
    },
    {
      step: "4",
      title: "Visit Clinic",
      description: "Arrive at your scheduled time. No waiting in long queues - we respect your time."
    }
  ];

  const benefits = [
    "Access to 500+ certified doctors",
    "Same-day appointments available",
    "Multiple clinic locations across the city",
    "Digital health records management",
    "Insurance claim assistance",
    "Follow-up care coordination"
  ];

  const specialties = [
    "General Medicine", "Cardiology", "Dermatology", "Orthopedics",
    "Pediatrics", "Gynecology", "Neurology", "Psychiatry"
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
                Clinic Appointments - Learn More
              </h1>
              <p className="text-xl text-gray-600 mb-8 animate-fade-in delay-300">
                Discover how our clinic appointment system revolutionizes your healthcare experience with seamless booking, expert doctors, and personalized care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
                <Button size="lg" className="bg-gradient-to-r from-healthcare-teal to-healthcare-blue hover:from-healthcare-teal/90 hover:to-healthcare-blue/90">
                  Book Your Appointment
                </Button>
                <Link to="/services/clinic-appointments">
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
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our streamlined process makes booking and attending appointments effortless
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

        {/* Benefits & Features */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Why Choose Our Clinic Services?
                </h2>
                <p className="text-gray-600 mb-8">
                  Experience healthcare that prioritizes your convenience, comfort, and well-being with our comprehensive clinic services.
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

              <div className="grid grid-cols-2 gap-6">
                <Card className="text-center p-6 border-0 shadow-lg">
                  <Heart className="w-12 h-12 text-healthcare-teal mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Expert Care</h3>
                  <p className="text-sm text-gray-600">Board-certified doctors with years of experience</p>
                </Card>
                <Card className="text-center p-6 border-0 shadow-lg">
                  <Clock className="w-12 h-12 text-healthcare-blue mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Time Efficient</h3>
                  <p className="text-sm text-gray-600">Minimal waiting times, maximum care</p>
                </Card>
                <Card className="text-center p-6 border-0 shadow-lg">
                  <Star className="w-12 h-12 text-healthcare-teal mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Top Rated</h3>
                  <p className="text-sm text-gray-600">4.9/5 stars from thousands of patients</p>
                </Card>
                <Card className="text-center p-6 border-0 shadow-lg">
                  <Award className="w-12 h-12 text-healthcare-blue mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Accredited</h3>
                  <p className="text-sm text-gray-600">Internationally recognized healthcare standards</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Specialties */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Medical Specialties</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Access a wide range of medical specialties under one roof
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {specialties.map((specialty, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:border-healthcare-teal hover:shadow-lg transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 50}ms`}}>
                  <span className="font-medium text-gray-800">{specialty}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-healthcare-teal to-healthcare-blue">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Ready to Experience Better Healthcare?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Join thousands of satisfied patients who have transformed their healthcare experience with CareConnect.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-healthcare-teal hover:bg-gray-100">
                  Book Appointment Now
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-healthcare-teal">
                  Call Us: +1 (555) 123-4567
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

export default ClinicAppointmentsLearnMore;
