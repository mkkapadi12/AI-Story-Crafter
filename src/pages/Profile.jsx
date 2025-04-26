import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuthContext } from "@/Context/AuthContext";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Loading from "@/helpers/Loading";
import { Skeleton } from "@/components/ui/skeleton";

const Profile = () => {
  const { user } = useAuthContext();
  console.log(user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Add update logic here
    try {
      //   profileUpdate(data);
    } catch (error) {
      console.log("Form not Submitted !!");
    }
  };

  return (
    <section>
      {/* header */}
      <Navbar />
      <main className="grid grid-cols-12 p-0 mx-auto sm:p-0 max-w-7xl">
        <div className="col-span-12 p-6 bg-white rounded-lg">
          <div className="flex items-center justify-between pb-4 mb-6 border-b">
            <h1 className="text-2xl font-bold">Profile Information</h1>
            <Link to="/logout">
              <button className="text-red-500 hover:underline">Sign Out</button>
            </Link>
          </div>
          {true ? (
            <>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="flex flex-col items-start">
                  <label htmlFor="profile" className="w-24 h-24 cursor-pointer">
                    <Avatar className="w-24 h-24 cursor-pointer">
                      <AvatarImage
                        src={user?.profileImage}
                        alt={"story"}
                        className="object-cover !w-full h-full rounded-full"
                      />
                      <AvatarFallback className="!text-5xl">
                        {user?.name?.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </label>
                  <input
                    type="file"
                    id="profile"
                    accept="image/*"
                    // {...register("profile")}
                    name="profile"
                    // onChange={(e) => handleFileChange(e)}
                    className="hidden"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      defaultValue={user.name}
                      className={`w-full  p-2 mt-2 text-black border-none rounded ring-1 ring-btn ring-offset-2 placeholder:text-text focus:outline-none focus:ring ${
                        errors.name ? "border-red-500" : ""
                      }`}
                      {...register("firstName", {
                        required: "First name is required",
                      })}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      defaultValue={user.lastName}
                      className={`w-full p-2 mt-2 text-black border-none rounded ring-1 ring-btn ring-offset-2 placeholder:text-text focus:outline-none focus:ring ${
                        errors.name ? "border-red-500" : ""
                      }`}
                      {...register("lastName", {
                        required: "Last name is required",
                      })}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="number"
                      defaultValue={user.phone}
                      className={`w-full p-2 mt-2 text-black border-none rounded ring-1 ring-btn ring-offset-2 placeholder:text-text focus:outline-none focus:ring ${
                        errors.name ? "border-red-500" : ""
                      }`}
                      {...register("phone", {
                        required: "Phone number is required",
                      })}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      defaultValue={user?.email}
                      className={`w-full p-2 mt-2 text-black border-none rounded ring-1 ring-btn ring-offset-2 placeholder:text-text focus:outline-none focus:ring ${
                        errors.name ? "border-red-500" : ""
                      }`}
                      {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-[200px] px-2 py-3 text-white bg-pink-500 rounded-md shadow hover:bg-pink-600"
                >
                  Update Profile
                </button>
              </form>
            </>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
                {[1, 2, 3, 4].map((i) => {
                  return (
                    <div
                      key={i}
                      className="flex items-center justify-center w-full space-x-4"
                    >
                      <Skeleton className="w-12 h-12 rounded-full" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-[250px]" />
                        <Skeleton className="h-4 w-[200px]" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}

          <div className="pt-4 mt-8 border-t">
            <h2 className="text-lg font-semibold">Account Information</h2>
            <div className="flex flex-col items-start justify-between gap-4 mt-4 sm:items-center sm:flex-row">
              {/* change path according route */}
              {/* <Link
                to={"/"}
                className="flex items-center justify-center flex-1 w-full px-4 py-2 text-green-600 bg-green-100 rounded-md shadow hover:bg-green-200"
              >
                <button>My Orders</button>
              </Link> */}

              <Link
                to={"/private/stories"}
                className="flex items-center justify-center flex-1 w-full px-4 py-2 text-green-600 bg-green-100 rounded-md shadow hover:bg-green-200"
              >
                <button>Your Private Stories</button>
              </Link>

              {/* change path according route */}
              <Link
                to="/wishlist"
                className="flex items-center justify-center flex-1 w-full px-4 py-2 text-green-600 bg-green-100 rounded-md shadow hover:bg-green-200"
              >
                <button>My Wishlists</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Profile;
