"use client"
import { TooltipProvider } from "@/components/ui/tooltip";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import ClientOnly from "./components/ClientOnly";

export default function Home() {
  return (
    <div className="flex ">
      <ClientOnly>
        <div className="sticky  top-0 left-0">
          <TooltipProvider>
            <Sidebar />

          </TooltipProvider>
        </div>
        <div className="w-full h-full px-2 md:px-10">
          <Navbar />
          <TooltipProvider>

            <Dashboard />
          </TooltipProvider>
        </div>
      </ClientOnly>
    </div>
  );
}
