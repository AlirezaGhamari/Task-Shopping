import React from "react";
import Navbar from "@/components/Navbar/Navbar";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" w-full h-screen flex justify-between">
      <Navbar />
      <div className="w-full h-screen flex justify-center"> {children}</div>
    </div>
  );
}

export default layout;
