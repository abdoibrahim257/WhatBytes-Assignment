import React from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex gap-4 lg:gap-10">
        <Navbar />
        <Skills />
      </div>
    </div>
  );
}
