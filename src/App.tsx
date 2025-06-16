
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

// Service Pages
import ClinicAppointments from "./pages/services/ClinicAppointments";
import OnlineConsultations from "./pages/services/OnlineConsultations";
import LabTests from "./pages/services/LabTests";
import PrescriptionDelivery from "./pages/services/PrescriptionDelivery";

// Service Learn More Pages
import ClinicAppointmentsLearnMore from "./pages/services/ClinicAppointmentsLearnMore";
import OnlineConsultationsLearnMore from "./pages/services/OnlineConsultationsLearnMore";
import LabTestsLearnMore from "./pages/services/LabTestsLearnMore";

// Company Pages
import AboutUs from "./pages/company/AboutUs";
import Careers from "./pages/company/Careers";
import Press from "./pages/company/Press";

// Support Pages
import HelpCenter from "./pages/support/HelpCenter";
import PrivacyPolicy from "./pages/support/PrivacyPolicy";
import TermsOfService from "./pages/support/TermsOfService";
import Security from "./pages/support/Security";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Service Routes */}
          <Route path="/services/clinic-appointments" element={<ClinicAppointments />} />
          <Route path="/services/online-consultations" element={<OnlineConsultations />} />
          <Route path="/services/lab-tests" element={<LabTests />} />
          <Route path="/services/prescription-delivery" element={<PrescriptionDelivery />} />
          
          {/* Service Learn More Routes */}
          <Route path="/services/clinic-appointments/learn-more" element={<ClinicAppointmentsLearnMore />} />
          <Route path="/services/online-consultations/learn-more" element={<OnlineConsultationsLearnMore />} />
          <Route path="/services/lab-tests/learn-more" element={<LabTestsLearnMore />} />
          
          {/* Company Routes */}
          <Route path="/company/about-us" element={<AboutUs />} />
          <Route path="/company/careers" element={<Careers />} />
          <Route path="/company/press" element={<Press />} />
          
          {/* Support Routes */}
          <Route path="/support/help-center" element={<HelpCenter />} />
          <Route path="/support/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/support/terms-of-service" element={<TermsOfService />} />
          <Route path="/support/security" element={<Security />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
