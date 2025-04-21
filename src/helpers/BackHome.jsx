import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const BackHome = () => {
  return (
    <div className="relative top-0 right-0">
      <Link to="/">
        <Button className="bg-[#FF5599] text-white">Back Home</Button>
      </Link>
    </div>
  );
};

export default BackHome;
