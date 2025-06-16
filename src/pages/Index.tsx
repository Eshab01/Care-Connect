
import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import ScrollProgress from '@/components/ScrollProgress';
import SectionWrapper from '@/components/SectionWrapper';

const Index = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-body">
      <ScrollProgress />
      <Header />
      
      <SectionWrapper id="hero">
        <Hero onBookingClick={() => setIsBookingModalOpen(true)} />
      </SectionWrapper>
      
      <SectionWrapper id="services">
        <Services />
      </SectionWrapper>
      
      <SectionWrapper id="testimonials">
        <Testimonials />
      </SectionWrapper>
      
      <SectionWrapper id="faq">
        <FAQ />
      </SectionWrapper>
      
      <SectionWrapper id="contact">
        <Contact />
      </SectionWrapper>
      
      <Footer />
      
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </div>
  );
};

export default Index;
