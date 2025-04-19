import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
      // style={{
      //   backgroundImage: "url('/assets/error-bg.jpg')", // Replace with your image path
      // }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-8xl font-extrabold text-red-600 drop-shadow-md">
          404
        </h1>
        <p className="text-2xl text-gray-800 mt-4 font-semibold">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-lg text-gray-600 mt-2">
          It seems you've hit a dead end. Let's get you back on track.
        </p>
        <div className="mt-8 flex space-x-4">
          <Button
            onClick={() => navigate(-1)}
            className="!px-6 !py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300"
          >
            Go Back
          </Button>
          <Button
            onClick={() => navigate("/")}
            className="!px-6 !py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300"
          >
            Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Error;
