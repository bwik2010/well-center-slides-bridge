
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FinancialProjections from "./pages/FinancialProjections";
import BridgeTeam from "./pages/BridgeTeam";
import OurAsk from "./pages/OurAsk";
import BusinessImpact from "./pages/BusinessImpact";
import NotFound from "./pages/NotFound";
import PrintView from "./components/PrintView";
import PDFView from "./pages/PDFView";
import LogoExtractor from "./components/LogoExtractor";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/financial-projections" element={<FinancialProjections />} />
          <Route path="/bridge-team" element={<BridgeTeam />} />
          <Route path="/our-ask" element={<OurAsk />} />
          <Route path="/business-impact" element={<BusinessImpact />} />
          <Route path="/print-view" element={<PrintView />} />
          <Route path="/pdf-view" element={<PDFView />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <LogoExtractor />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
