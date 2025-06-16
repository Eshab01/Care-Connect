
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Lock, Eye, Users } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      id: "information-we-collect",
      title: "Information We Collect",
      content: [
        "Personal Information: Name, email address, phone number, date of birth, address, and other contact details",
        "Medical Information: Health records, symptoms, medical history, prescription information, and lab results",
        "Payment Information: Credit card details, billing address, and payment history",
        "Device Information: IP address, browser type, device type, and usage patterns",
        "Communication Records: Chat logs, call recordings, and support interactions"
      ]
    },
    {
      id: "how-we-use-information",
      title: "How We Use Your Information",
      content: [
        "Provide medical services and consultations",
        "Process payments and manage billing",
        "Communicate with you about appointments and services",
        "Improve our platform and user experience",
        "Comply with legal and regulatory requirements",
        "Send important updates and notifications"
      ]
    },
    {
      id: "information-sharing",
      title: "Information Sharing and Disclosure",
      content: [
        "Healthcare Providers: With doctors and medical professionals for treatment purposes",
        "Service Providers: With trusted third parties who assist in providing our services",
        "Legal Requirements: When required by law or to protect rights and safety",
        "Business Transfers: In case of merger, acquisition, or sale of assets",
        "Consent: With your explicit consent for specific purposes"
      ]
    },
    {
      id: "data-security",
      title: "Data Security",
      content: [
        "End-to-end encryption for all sensitive communications",
        "HIPAA-compliant data storage and transmission",
        "Regular security audits and vulnerability assessments",
        "Multi-factor authentication for healthcare providers",
        "Secure cloud infrastructure with industry-leading providers",
        "Employee training on data protection and privacy practices"
      ]
    },
    {
      id: "your-rights",
      title: "Your Privacy Rights",
      content: [
        "Access: Request access to your personal information",
        "Correction: Update or correct inaccurate information",
        "Deletion: Request deletion of your personal data",
        "Portability: Request a copy of your data in a portable format",
        "Restriction: Limit how we process your information",
        "Objection: Object to certain types of data processing"
      ]
    }
  ];

  const principles = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "HIPAA Compliance",
      description: "We strictly adhere to HIPAA regulations to protect your health information"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Data Encryption",
      description: "All data is encrypted in transit and at rest using industry-standard methods"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Transparency",
      description: "We clearly communicate how your data is collected, used, and protected"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User Control",
      description: "You have full control over your data with comprehensive privacy settings"
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
                Privacy Policy
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Your privacy is our priority. Learn about how we collect, use, and protect your personal and medical information.
              </p>
              <p className="text-sm text-gray-500">
                Last updated: March 15, 2024
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Principles */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Our Privacy Principles</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                These core principles guide how we handle your personal and medical information
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {principles.map((principle, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-healthcare-teal to-healthcare-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {principle.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{principle.title}</h3>
                  <p className="text-gray-600">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8">
                {sections.map((section, index) => (
                  <div key={index} className={`${index !== 0 ? 'mt-12 pt-8 border-t border-gray-200' : ''}`}>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6" id={section.id}>
                      {section.title}
                    </h2>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-healthcare-teal rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {/* Contact Information */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us About Privacy</h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 mb-4">
                      If you have questions about this Privacy Policy or our privacy practices, please contact us:
                    </p>
                    <div className="space-y-2">
                      <p className="text-gray-700"><strong>Email:</strong> privacy@careconnect.com</p>
                      <p className="text-gray-700"><strong>Phone:</strong> (555) 123-4567</p>
                      <p className="text-gray-700"><strong>Mail:</strong> CareConnect Privacy Officer, 123 Healthcare St, Medical City, MC 12345</p>
                    </div>
                  </div>
                </div>

                {/* Updates Notice */}
                <div className="mt-8 p-4 bg-healthcare-teal/10 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Policy Updates:</strong> We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                  </p>
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

export default PrivacyPolicy;
