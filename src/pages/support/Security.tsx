
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Lock, Key, Eye, Server, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Security = () => {
  const securityFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "End-to-End Encryption",
      description: "All communications and data transfers are protected with military-grade encryption"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "HIPAA Compliance",
      description: "Full compliance with HIPAA regulations for healthcare data protection"
    },
    {
      icon: <Key className="w-8 h-8" />,
      title: "Multi-Factor Authentication",
      description: "Additional security layer requiring multiple forms of verification"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Access Controls",
      description: "Strict access controls ensure only authorized personnel can access data"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Secure Infrastructure",
      description: "Enterprise-grade cloud infrastructure with 99.9% uptime guarantee"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Regular Audits",
      description: "Continuous security monitoring and regular third-party security audits"
    }
  ];

  const certifications = [
    {
      name: "HIPAA Compliant",
      description: "Health Insurance Portability and Accountability Act compliance"
    },
    {
      name: "SOC 2 Type II",
      description: "Service Organization Control 2 certification for security controls"
    },
    {
      name: "ISO 27001",
      description: "International standard for information security management"
    },
    {
      name: "GDPR Compliant",
      description: "General Data Protection Regulation compliance for EU users"
    }
  ];

  const securityPractices = [
    "Data encryption at rest and in transit using AES-256 encryption",
    "Regular security vulnerability assessments and penetration testing",
    "24/7 security monitoring and incident response team",
    "Secure backup and disaster recovery procedures",
    "Employee security training and background checks",
    "Zero-trust security architecture implementation",
    "Regular software updates and security patches",
    "Secure coding practices and code review processes"
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
                Security & Privacy
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Your health data security is our top priority. Learn about the comprehensive measures we take to protect your personal and medical information.
              </p>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Our Security Features</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Multi-layered security approach to protect your sensitive health information
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityFeatures.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-healthcare-teal to-healthcare-blue rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Certifications & Compliance</h2>
              <p className="text-gray-600">
                Industry-recognized certifications ensuring the highest security standards
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {cert.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Security Practices */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Security Practices</h2>
                <p className="text-gray-600">
                  Comprehensive security measures implemented across our entire platform
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {securityPractices.map((practice, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm border">
                    <div className="w-2 h-2 bg-healthcare-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{practice}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Data Protection */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Data Protection</h2>
                <p className="text-gray-600">
                  How we protect your personal and medical information
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader className="text-center">
                    <Lock className="w-12 h-12 text-healthcare-teal mx-auto mb-4" />
                    <CardTitle>Data Encryption</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      All data is encrypted using AES-256 encryption both at rest and in transit. This military-grade encryption ensures your data remains secure even if intercepted.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader className="text-center">
                    <Server className="w-12 h-12 text-healthcare-teal mx-auto mb-4" />
                    <CardTitle>Secure Storage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      Data is stored in HIPAA-compliant data centers with physical security measures, environmental controls, and redundant systems for maximum protection.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardHeader className="text-center">
                    <Eye className="w-12 h-12 text-healthcare-teal mx-auto mb-4" />
                    <CardTitle>Access Control</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      Strict access controls ensure only authorized personnel can access your data, with all access logged and monitored for security purposes.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Incident Response */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">Security Incident Response</h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <p className="text-gray-700 mb-6">
                  In the unlikely event of a security incident, we have a comprehensive response plan that includes:
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-healthcare-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Immediate containment and assessment of the incident</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-healthcare-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Prompt notification of affected users and authorities</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-healthcare-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Thorough investigation and remediation measures</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-healthcare-teal rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Implementation of additional security measures</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Security Team */}
        <section className="py-20 bg-healthcare-teal">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-white mb-6">
                Security Concerns or Questions?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Our security team is here to address any concerns or questions you may have about data protection and privacy.
              </p>
              <div className="bg-white/10 p-6 rounded-lg">
                <p className="text-white mb-4">Contact our Security Team:</p>
                <div className="space-y-2">
                  <p className="text-white"><strong>Email:</strong> security@careconnect.com</p>
                  <p className="text-white"><strong>Phone:</strong> (555) 123-4567 ext. 911</p>
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

export default Security;
