
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, Scale, Shield, AlertTriangle } from 'lucide-react';

const TermsOfService = () => {
  const highlights = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Service Agreement",
      description: "Terms governing your use of CareConnect platform and services"
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "User Responsibilities",
      description: "Your obligations and responsibilities when using our platform"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy & Security",
      description: "How we protect your information and maintain service security"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Limitation of Liability",
      description: "Important information about service limitations and liability"
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
                Terms of Service
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Please read these terms carefully before using CareConnect services. By using our platform, you agree to these terms and conditions.
              </p>
              <p className="text-sm text-gray-500">
                Last updated: March 15, 2024
              </p>
            </div>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Key Points</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Important highlights from our Terms of Service
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-healthcare-teal to-healthcare-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                
                {/* Acceptance of Terms */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-700 mb-4">
                    By accessing or using CareConnect's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                  </p>
                </div>

                {/* Medical Disclaimer */}
                <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">⚠️ Important Medical Disclaimer</h3>
                  <p className="text-yellow-700">
                    CareConnect provides a platform to connect patients with healthcare providers. We do not provide medical advice, diagnosis, or treatment. Always consult with qualified healthcare professionals for medical concerns.
                  </p>
                </div>

                {/* Service Description */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Description</h2>
                  <p className="text-gray-700 mb-4">
                    CareConnect provides the following services:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-healthcare-teal rounded-full mt-2 flex-shrink-0"></span>
                      <span>Telemedicine platform for online consultations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-healthcare-teal rounded-full mt-2 flex-shrink-0"></span>
                      <span>Appointment scheduling and management</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-healthcare-teal rounded-full mt-2 flex-shrink-0"></span>
                      <span>Lab test coordination and result delivery</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-healthcare-teal rounded-full mt-2 flex-shrink-0"></span>
                      <span>Prescription management and delivery services</span>
                    </li>
                  </ul>
                </div>

                {/* User Responsibilities */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
                  <p className="text-gray-700 mb-4">As a user of CareConnect, you agree to:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-healthcare-teal rounded-full mt-2 flex-shrink-0"></span>
                      <span>Provide accurate and complete information</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-healthcare-teal rounded-full mt-2 flex-shrink-0"></span>
                      <span>Maintain the confidentiality of your account credentials</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-healthcare-teal rounded-full mt-2 flex-shrink-0"></span>
                      <span>Use the service only for lawful purposes</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-healthcare-teal rounded-full mt-2 flex-shrink-0"></span>
                      <span>Respect the privacy and rights of other users</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-healthcare-teal rounded-full mt-2 flex-shrink-0"></span>
                      <span>Comply with all applicable laws and regulations</span>
                    </li>
                  </ul>
                </div>

                {/* Privacy and Data Protection */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Privacy and Data Protection</h2>
                  <p className="text-gray-700 mb-4">
                    Your privacy is important to us. Our collection and use of personal information in connection with your use of the service is governed by our Privacy Policy. By using our service, you consent to the collection and use of your information as outlined in our Privacy Policy.
                  </p>
                </div>

                {/* Payment Terms */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment Terms</h2>
                  <p className="text-gray-700 mb-4">
                    Payment for services is due at the time of booking unless otherwise specified. We accept major credit cards and other payment methods as indicated on our platform. All fees are non-refundable unless otherwise stated or required by law.
                  </p>
                </div>

                {/* Limitation of Liability */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
                  <p className="text-gray-700 mb-4">
                    CareConnect shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the service. Our total liability shall not exceed the amount paid by you for the specific service giving rise to the claim.
                  </p>
                </div>

                {/* Modifications */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Modifications to Terms</h2>
                  <p className="text-gray-700 mb-4">
                    We reserve the right to modify these terms at any time. We will provide notice of material changes by posting the updated terms on our website and updating the "Last updated" date. Your continued use of the service after such modifications constitutes acceptance of the updated terms.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 mb-4">
                      If you have questions about these Terms of Service, please contact us:
                    </p>
                    <div className="space-y-2">
                      <p className="text-gray-700"><strong>Email:</strong> legal@careconnect.com</p>
                      <p className="text-gray-700"><strong>Phone:</strong> (555) 123-4567</p>
                      <p className="text-gray-700"><strong>Mail:</strong> CareConnect Legal Department, 123 Healthcare St, Medical City, MC 12345</p>
                    </div>
                  </div>
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

export default TermsOfService;
