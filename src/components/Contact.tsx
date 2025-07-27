
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Calendar } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Get in <span className="text-healthcare-teal">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to experience healthcare the modern way? Contact us today and let's discuss 
            how CareConnect can improve your health journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="mt-2"
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="mt-2 min-h-[120px]"
                  placeholder="Tell us how we can help you..."
                  required
                />
              </div>
              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-gradient-to-r from-healthcare-teal to-healthcare-blue hover:from-healthcare-teal/90 hover:to-healthcare-blue/90"
              >
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-healthcare-teal/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-healthcare-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Visit Our Clinics</h3>
                    <p className="text-gray-600">
                      Chandigarh University,<br />
                      Unnao, India - 123456<br />
                      <a href="https://goo.gl/maps/xyz" className="text-healthcare-teal hover:underline">
                        View on Google Maps
                      </a>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-healthcare-teal/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-healthcare-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Operating Hours</h3>
                    <p className="text-gray-600">
                      Mon - Fri: 8:00 AM - 8:00 PM<br />
                      Saturday: 9:00 AM - 5:00 PM<br />
                      Sunday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-healthcare-teal/10 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-healthcare-teal" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Emergency Care</h3>
                    <p className="text-gray-600">
                      24/7 emergency support available<br />
                      Call: (12) 123-CARE<br />
                      Text: Emergency to 50555
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
