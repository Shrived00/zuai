"use client"
import Image from "next/image";
import { TooltipProvider } from "@/components/ui/tooltip";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

export default function Home() {
  return (
    <div className="flex ">
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

    </div>
  );
}
// https://youtu.be/THInIdodWQQ?list=RDGMEMHDXYb1_DDSgDsobPsOFxpAVMsA9a25wnxUA