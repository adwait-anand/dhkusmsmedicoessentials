import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HandwrittenNotes from "./pages/HandwrittenNotes";
import FastrackBooks from "./pages/FastrackBooks";
import SecondHandBooks from "./pages/SecondHandBooks";
import CoachingNotes from "./pages/CoachingNotes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/handwritten-notes" element={<HandwrittenNotes />} />
          <Route path="/fastrack-books" element={<FastrackBooks />} />
          <Route path="/second-hand-books" element={<SecondHandBooks />} />
          <Route path="/coaching/:coachingId" element={<CoachingNotes />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
