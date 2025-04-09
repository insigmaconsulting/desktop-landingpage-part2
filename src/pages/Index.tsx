import React from "react";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { ProcessFramework } from "@/components/sections/ProcessFramework";

const Index = () => {
  return (
    <div className="bg-white flex flex-col items-stretch">
      <Header />
      <main className="flex flex-col items-center">
        <Hero />
        <ProcessFramework />
      </main>
    </div>
  );
};

export default Index;
