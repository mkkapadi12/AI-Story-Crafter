import { useAuthContext } from "@/Context/AuthContext";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { storeTokenInLS } = useAuthContext();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log("Login Data Submitted:", data);
    //For Deployment:
    // "https://ai-story-crafter-server.vercel.app/api/auth/login",
    try {
      const response = await fetch(
        //For Development:
        "http://localhost:5002/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      // console.log("Response Status:", response.status);
      if (response.ok) {
        const res_data = await response.json();
        console.log("Server response", res_data);
        storeTokenInLS(res_data.token);
        reset();
        toast.success("Login Successfully !");
        navigate("/");
      } else {
        toast.error("Invalid email and password !!");
        // navigate("/signup");
      }

      // Add logic to store token or redirect user
    } catch (error) {
      console.error("Sign-in error:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gradient-to-br from-blue-100 to-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-xl rounded-2xl">
        <h2 className="text-3xl font-bold text-center text-[#007bffea]">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500">
          Sign in to continue your creative journey ✨
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007bffea]"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-600">Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
              })}
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007bffea]"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white transition bg-[#007bffea] rounded-md hover:bg-[#0080ffb4] cursor-pointer"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#007bffea] hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
