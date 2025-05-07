import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";
import { useStoryContext } from "@/Context/StoryContext";

export function StoryCircles() {
  const { stories } = useStoryContext();
  // Sample data - replace with your actual data
  const [storiesData, setStoriesData] = useState([
    {
      id: "1",
      title: "Mountain Adventure",
      author: "Alex Chen",
      authorImage: "/placeholder.svg?height=80&width=80",
      viewed: false,
      category: "Nature",
    },
    {
      id: "2",
      title: "City Lights",
      author: "Jamie Smith",
      authorImage: "/placeholder.svg?height=80&width=80",
      viewed: false,
      category: "Urban",
    },
    {
      id: "3",
      title: "Ocean Depths",
      author: "Morgan Lee",
      authorImage: "/placeholder.svg?height=80&width=80",
      viewed: false,
      category: "Adventure",
    },
    {
      id: "4",
      title: "Desert Sunset",
      author: "Taylor Wong",
      authorImage: "/placeholder.svg?height=80&width=80",
      viewed: true,
      category: "Nature",
    },
    {
      id: "5",
      title: "Forest Tales",
      author: "Jordan Rivera",
      authorImage: "/placeholder.svg?height=80&width=80",
      viewed: false,
      category: "Fantasy",
    },
    {
      id: "6",
      title: "Space Odyssey",
      author: "Casey Johnson",
      authorImage: "/placeholder.svg?height=80&width=80",
      viewed: false,
      category: "Sci-Fi",
    },
    {
      id: "7",
      title: "Ancient Ruins",
      author: "Riley Garcia",
      authorImage: "/placeholder.svg?height=80&width=80",
      viewed: false,
      category: "History",
    },
    {
      id: "8",
      title: "Winter Wonderland",
      author: "Avery Martin",
      authorImage: "/placeholder.svg?height=80&width=80",
      viewed: true,
      category: "Seasonal",
    },
    {
      id: "9",
      title: "Tropical Paradise",
      author: "Quinn Wilson",
      authorImage: "/placeholder.svg?height=80&width=80",
      viewed: false,
      category: "Travel",
    },
    {
      id: "10",
      title: "Mystical Creatures",
      author: "Dakota Brown",
      authorImage: "/placeholder.svg?height=80&width=80",
      viewed: false,
      category: "Fantasy",
    },
  ]);

  const viewStory = (id) => {
    setStoriesData(
      storiesData.map((story) =>
        story.id === id ? { ...story, viewed: true } : story
      )
    );
  };

  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex items-baseline py-4 space-x-6 justify-evenly">
        {stories.map((story) => (
          <Link
            to={`/story/${story._id}`}
            key={story._id}
            className="flex flex-col items-center w-20 space-y-2"
            onClick={() => viewStory(story.id)}
          >
            <div
              className={cn(
                "relative rounded-full p-1",
                story.viewed
                  ? "bg-gray-200"
                  : "bg-gradient-to-tr from-blue-500 to-blue-300"
              )}
            >
              <div className="bg-white p-0.5 rounded-full">
                <div className="relative w-16 h-16 overflow-hidden rounded-full">
                  <img
                    src={story.coverImage || "/placeholder.svg"}
                    alt={story.title}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <span className="w-full text-xs font-medium text-center text-gray-700 truncate">
              {story.title}
            </span>
            <span className="w-full text-xs text-center text-gray-500 truncate">
              {story.theme}
            </span>
          </Link>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
