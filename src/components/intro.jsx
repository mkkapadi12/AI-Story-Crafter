import React from "react";
import { Button } from "./ui/button";

const Intro = () => {
  return (
    <div className="h-screen flex-col flex items-center justify-center bg-gradient-to-r from-indigo-500 to-pink-500 text-white">
      <h1 className="text-4xl font-bold">
        Tailwind CSS v4.1 in Vite + React 🎉
      </h1>
      <div className="">
        <Button variant="outline">Button</Button>
      </div>
    </div>
  );
};

export default Intro;
