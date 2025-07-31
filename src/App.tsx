import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WeatherLayout } from "@/components/WeatherLayout";
import Index from "./pages/Index";
import CityWeather from "./pages/CityWeather";
import Forecast from "./pages/Forecast";
import Radar from "./pages/Radar";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <WeatherLayout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/forecast" element={<Forecast />} />
            <Route path="/radar" element={<Radar />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/city/:cityId" element={<CityWeather />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </WeatherLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
