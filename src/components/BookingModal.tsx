
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { X, Calendar, Clock, User, Phone, Mail } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    alert('Appointment booked successfully!');
    onClose();
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: '',
      date: '',
      time: '',
      notes: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-healthcare-teal to-healthcare-blue rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-display font-bold text-gray-900">Book Appointment</h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transform hover:scale-110 transition-all"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName" className="flex items-center text-gray-700 font-medium mb-2">
                <User className="w-4 h-4 mr-2" />
                First Name
              </Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="h-12 border-gray-200 focus:border-healthcare-teal focus:ring-healthcare-teal"
                placeholder="Eshab"
                required
              />
            </div>
            <div>
              <Label htmlFor="lastName" className="flex items-center text-gray-700 font-medium mb-2">
                <User className="w-4 h-4 mr-2" />
                Last Name
              </Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="h-12 border-gray-200 focus:border-healthcare-teal focus:ring-healthcare-teal"
                placeholder="Sachan"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email" className="flex items-center text-gray-700 font-medium mb-2">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="h-12 border-gray-200 focus:border-healthcare-teal focus:ring-healthcare-teal"
                placeholder="eshabsa@gmail.com"
                required
              />
            </div>
            <div>
              <Label htmlFor="phone" className="flex items-center text-gray-700 font-medium mb-2">
                <Phone className="w-4 h-4 mr-2" />
                Phone
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                className="h-12 border-gray-200 focus:border-healthcare-teal focus:ring-healthcare-teal"
                placeholder="+91 63943 96847"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="service" className="text-gray-700 font-medium mb-2 block">Service</Label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="w-full h-12 px-3 py-2 border border-gray-200 rounded-md focus:border-healthcare-teal focus:ring-healthcare-teal focus:outline-none"
              required
            >
              <option value="">Select a service</option>
              <option value="general-consultation">General Consultation</option>
              <option value="lab-tests">Lab Tests</option>
              <option value="online-consultation">Online Consultation</option>
              <option value="specialist-referral">Specialist Referral</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="date" className="flex items-center text-gray-700 font-medium mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                Preferred Date
              </Label>
              <Input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleInputChange}
                className="h-12 border-gray-200 focus:border-healthcare-teal focus:ring-healthcare-teal"
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>
            <div>
              <Label htmlFor="time" className="flex items-center text-gray-700 font-medium mb-2">
                <Clock className="w-4 h-4 mr-2" />
                Preferred Time
              </Label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className="w-full h-12 px-3 py-2 border border-gray-200 rounded-md focus:border-healthcare-teal focus:ring-healthcare-teal focus:outline-none"
                required
              >
                <option value="">Select time</option>
                <option value="09:00">9:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="14:00">2:00 PM</option>
                <option value="15:00">3:00 PM</option>
                <option value="16:00">4:00 PM</option>
              </select>
            </div>
          </div>

          <div>
            <Label htmlFor="notes" className="text-gray-700 font-medium mb-2 block">Additional Notes</Label>
            <Textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              className="border-gray-200 focus:border-healthcare-teal focus:ring-healthcare-teal"
              placeholder="Any specific concerns or information you'd like to share..."
              rows={4}
            />
          </div>

          <div className="flex space-x-4 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 h-12 border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 h-12 bg-gradient-to-r from-healthcare-teal to-healthcare-blue hover:from-healthcare-teal/90 hover:to-healthcare-blue/90 transform hover:scale-105 transition-all"
            >
              Book Appointment
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
