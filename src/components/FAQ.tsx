
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'How do I book my first appointment?',
      answer: 'Simply click on "Book Appointment" in the top menu, select your preferred service, choose a healthcare provider, pick a convenient time slot, and confirm your booking. You\'ll receive instant confirmation via email and SMS.'
    },
    {
      question: 'Are online consultations as effective as in-person visits?',
      answer: 'Yes! Our online consultations are perfect for routine check-ups, prescription renewals, follow-ups, and many health concerns. Our qualified doctors can provide comprehensive care through secure video calls.'
    },
    {
      question: 'How quickly can I get my lab results?',
      answer: 'Most lab results are available within 24-48 hours and will be securely delivered to your CareConnect account. You\'ll receive a notification when they\'re ready, and can schedule a consultation to discuss them.'
    },
    {
      question: 'Is my health information secure?',
      answer: 'Absolutely. We use bank-level encryption and are fully HIPAA compliant. Your health information is protected with the highest security standards and is never shared without your explicit consent.'
    },
    {
      question: 'Do you accept insurance?',
      answer: 'Yes, we accept most major insurance plans. During booking, you can verify your coverage and see your expected out-of-pocket costs upfront. We also offer affordable self-pay options.'
    },
    {
      question: 'Can I cancel or reschedule appointments?',
      answer: 'Yes, you can cancel or reschedule appointments up to 2 hours before the scheduled time through your CareConnect account or mobile app at no additional charge.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-healthcare-teal">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Got questions? We've got answers. Here are the most common questions about CareConnect.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-xl border-0 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="px-8 py-6 text-left text-lg font-semibold text-gray-900 hover:text-healthcare-teal">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="text-healthcare-teal font-semibold hover:text-healthcare-teal/80 transition-colors">
            Contact our support team →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
