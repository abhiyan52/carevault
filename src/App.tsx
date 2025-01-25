import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { TryNow } from "./pages/TryNow";
import { Upload } from "./pages/Upload";
import { UploadSuccess } from "./pages/UploadSuccess";
import { UploadError } from "./pages/UploadError";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/try-now" element={<TryNow />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/upload/success" element={<UploadSuccess />} />
          <Route path="/upload/error" element={<UploadError />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
