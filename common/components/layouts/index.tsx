"use client";

import React, { ReactNode, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Sidebar from "./sidebar";

interface LayoutsProps {
  children: ReactNode;
}

export default function Layouts({ children }: LayoutsProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
    });
  }, []);
  return (
    <div className="max-w-6xl mx-auto lg:px-8 lg:py-4 xl:py-8">
      <div className="flex flex-col lg:flex-row lg:gap-5">
        <header className="lg:w-1/5">
          <Sidebar />
        </header>
        <main className="lg:w-4/5 max-w-[854px] transition-all duration-300">
          {children}
        </main>
      </div>
    </div>
  );
}
