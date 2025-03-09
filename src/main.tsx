// start the app always with '/' route-dom
import Banner from "@/components/layout/Banner";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import { TooltipProvider } from "./components/ui/tooltip";

import { ThemeProvider } from "./components/layout/theme-provider";
import { SidebarProvider } from "./components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import "./index.css";

// Import components
import BlockCanvas from "@/components/coding-blocks/BlockCanvas";
import TutorialCard from "@/components/tutorials/TutorialCard";
import CharacterSelector from "@/components/character/CharacterSelector";
import ParentDashboard from "@/components/dashboard/ParentDashboard";
import Header from "@/components/layout/Header";
import Banner from "@/components/layout/Banner";

const queryClient = new QueryClient();

const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Routes>
        <Route path="/" element={<div>Welcome to KidsCode!</div>} />
        <Route path="/workspace"
          element={<BlockCanvas blocks={[]} onBlocksChange={() => {}} />}
         path="/tutorials"
          element={
          </Routes>
    </div>
  );
};

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <SidebarProvider>
      <TooltipProvider>
        <ThemeProvider>
          <TutorialCard
              title="Getting Started"
              description="Learn the basics of coding"
              progress={0}
              onStart={() => {}}
            />
          }
        />
        <Route
          path="/characters" element={<CharacterSelector characters={[]} onSelect={() => {}} />} />
              <Route path="/dashboard" element={<ParentDashboard />} />
            </Routes>
          </BrowserRouter>
            <App />
            <Sonner />
            <Toaster />
            <Banner />
          </BrowserRouter>
        </ThemeProvider>
      </TooltipProvider>
    </SidebarProvider>
  </QueryClientProvider>
);