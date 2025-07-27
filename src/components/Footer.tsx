
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-healthcare-teal to-healthcare-blue rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-2xl font-display font-bold">CareConnect</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Modern healthcare that adapts to your life. Experience the future of patient care.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-healthcare-teal transition-colors">
                <span className="sr-only">Facebook</span>
                F
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-healthcare-teal transition-colors">
                <span className="sr-only">Twitter</span>
                T
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-healthcare-teal transition-colors">
                <span className="sr-only">LinkedIn</span>
                L
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/services/clinic-appointments" className="hover:text-healthcare-teal transition-colors">Clinic Appointments</Link></li>
              <li><Link to="/services/online-consultations" className="hover:text-healthcare-teal transition-colors">Online Consultations</Link></li>
              <li><Link to="/services/lab-tests" className="hover:text-healthcare-teal transition-colors">Lab Tests</Link></li>
              <li><Link to="/services/prescription-delivery" className="hover:text-healthcare-teal transition-colors">Prescription Delivery</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6">Company</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/company/about-us" className="hover:text-healthcare-teal transition-colors">About Us</Link></li>
              <li><Link to="/company/careers" className="hover:text-healthcare-teal transition-colors">Careers</Link></li>
              <li><Link to="/company/press" className="hover:text-healthcare-teal transition-colors">Press</Link></li>
              <li><Link to="/contact" className="hover:text-healthcare-teal transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6">Support</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/support/help-center" className="hover:text-healthcare-teal transition-colors">Help Center</Link></li>
              <li><Link to="/support/privacy-policy" className="hover:text-healthcare-teal transition-colors">Privacy Policy</Link></li>
              <li><Link to="/support/terms-of-service" className="hover:text-healthcare-teal transition-colors">Terms of Service</Link></li>
              <li><Link to="/support/security" className="hover:text-healthcare-teal transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 CareConnect. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
