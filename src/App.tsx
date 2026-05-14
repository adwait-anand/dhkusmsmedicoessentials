import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { CartProvider } from "@/contexts/CartContext";
import CartSheet from "@/components/CartSheet";
import Index from "./pages/Index";
import HandwrittenNotes from "./pages/HandwrittenNotes";
import FastrackBooks from "./pages/FastrackBooks";
import SecondHandBooks from "./pages/SecondHandBooks";
import MedicalInstruments from "./pages/MedicalInstruments";
import KnyaScrubs from "./pages/KnyaScrubs";
import CoachingNotes from "./pages/CoachingNotes";
import RapidRevisionPrep from "./pages/RapidRevisionPrep";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/handwritten-notes" element={<HandwrittenNotes />} />
              <Route path="/fastrack-books" element={<FastrackBooks />} />
              <Route path="/second-hand-books" element={<SecondHandBooks />} />
              <Route path="/medical-instruments" element={<MedicalInstruments />} />
              <Route path="/coaching/:coachingId" element={<CoachingNotes />} />
              <Route path="/rapid-revision" element={<RapidRevisionPrep />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={<AdminDashboard />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          <CartSheet />
          <FloatingWhatsApp />
        </TooltipProvider>
      </CartProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
