import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export default function StoryCard({ image, title, description, theme, id }) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative w-full h-64 overflow-hidden">
        <img
          src={image || "https://placehold.co/600x400/png"}
          alt={title}
          className="object-cover w-full h-full transition-transform hover:scale-105"
        />
      </div>

      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" className="text-blue-600 bg-blue-50">
            {theme}
          </Badge>
        </div>
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <div
          className="my-4 output"
          dangerouslySetInnerHTML={{ __html: description.slice(0, 100) }}
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
