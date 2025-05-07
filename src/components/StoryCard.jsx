import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { formatDistanceToNow } from "date-fns";

export default function StoryCard({
  image,
  title,
  description,
  theme,
  id,
  createdBy,
  date,
}) {
  return (
    <Card className="justify-between overflow-hidden transition-all hover:shadow-md">
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src={image || "https://placehold.co/600x400/png"}
          alt={title}
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
      </div>

      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center justify-center gap-2">
            <Avatar className="!w-9 !h-9 duration-300 cursor-pointer tsmransition-all ring-1 ring-white hover:ring-2 md:w-12 md:h-12">
              <AvatarImage
                src={createdBy?.profileImage}
                alt="profile"
                className="object-cover w-full h-full rounded-full"
              />
              <AvatarFallback className="text-xl text-blue-500 bg-blue-200">
                {createdBy?.name?.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="">
              <h1> {createdBy?.name}</h1>
              {date ? (
                <p className="text-sm text-gray-500">
                  {formatDistanceToNow(new Date(date), {
                    addSuffix: true,
                  })}
                </p>
              ) : (
                <p className="text-sm text-white">Loading time...</p> // Optional fallback
              )}
            </div>
          </div>
          <Badge variant="outline" className="text-blue-600 bg-blue-50">
            {theme}
          </Badge>
        </div>
        <h3 className="mb-2 text-xl font-semibold ">
          Title : <span className="text-blue-500">{title}</span>
        </h3>
        <div
          className="my-4 output"
          dangerouslySetInnerHTML={{
            __html: description.slice(0, 70) + "...",
          }}
        />
        {/* <p className="text-sm text-gray-600">{description.slice(0, 20)}</p> */}
      </CardContent>

      <CardFooter className="p-4 border-t">
        <Link to={`/story/${id}`} className="w-full">
          <Button className="w-full text-white bg-pink-500 rounded-full cursor-pointer hover:bg-pink-600">
            View Story
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
