import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, MessageCircle } from 'lucide-react';

const NeedHelp = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 pt-20 pb-10 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-2xl shadow-xl p-8 mt-10">
            <div className="flex items-center mb-6">
              <MessageCircle className="w-8 h-8 text-purple-500 mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">Need Help?</h1>
            </div>
            <p className="text-gray-600 mb-8">
              Our support team is here to assist you with any questions or issues regarding your prescription delivery. Fill out the form below or use the contact details provided.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <Textarea
                name="message"
                placeholder="How can we help you?"
                value={form.message}
                onChange={handleChange}
                rows={4}
                required
              />
              <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                Send Message
              </Button>
              {submitted && (
                <div className="text-green-600 text-center mt-2">
                  Thank you! Your message has been sent.
                </div>
              )}
            </form>
            <div className="mt-10 border-t pt-6">
              <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
              <div className="flex items-center mb-2">
                <Mail className="w-5 h-5 text-purple-500 mr-2" />
                <span>support@careconnect.com</span>
              </div>
              <div className="flex items-center mb-2">
                <Phone className="w-5 h-5 text-purple-500 mr-2" />
                <span>+1 (800) 123-4567</span>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-2">Frequently Asked Questions</h2>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong>How do I track my delivery?</strong><br />
                  You will receive a tracking link via SMS and email once your order is dispatched.
                </li>
                <li>
                  <strong>Can I change my delivery address?</strong><br />
                  Yes, contact our support team as soon as possible to update your address.
                </li>
                <li>
                  <strong>What if I have an urgent medication need?</strong><br />
                  Please call our 24/7 helpline for emergency delivery options.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NeedHelp;