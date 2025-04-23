import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export default function FeaturedStory({
  image,
  title,
  description,
  category,
  className,
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl shadow-lg",
        className
      )}
    >
      <div className="relative h-[400px] w-full">
        <img
          src={image || "https://placehold.co/300"}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <Badge className="mb-3 text-white bg-blue-600 hover:bg-blue-700">
          {category}
        </Badge>
        <h2 className="mb-2 text-2xl font-bold md:text-3xl">{title}</h2>
        <p className="max-w-2xl mb-4 text-sm text-gray-200 md:text-base">
          {description}
        </p>
        <Button className="text-white bg-pink-500 rounded-full cursor-pointer hover:bg-pink-600">
          View Story
        </Button>
      </div>
    </div>
  );
}
