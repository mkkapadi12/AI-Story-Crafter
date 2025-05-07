import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useStoryContext } from "@/Context/StoryContext";
import { themes } from "@/constant/StoryTheme";

export function TrendingTopics() {
  const { stories } = useStoryContext();

  // Sample base topics
  const baseTopics = [
    "Love",
    "Sad",
    "Melancholy",
    "Happy",
    "Tragic",
    "Sci-Fi",
    "Thriller",
    "Adventure",
    "Comedy",
    "Horror",
    "Crime",
    "Mystery",
    "Drama",
    "Romance",
    "Animation",
  ];

  // Generate a unified array of topics with meta
  const topicsWithMeta = baseTopics.map((name, index) => {
    const count = stories.filter(
      (story) => story.theme === name.toLowerCase()
    ).length;
    const theme = themes.find((t) => t.name === name) || {};
    const color = theme.color || "bg-gray-100 text-gray-800 hover:bg-gray-200";

    return {
      id: index + 1,
      name,
      count,
      color,
    };
  });

  console.log(topicsWithMeta);

  return (
    <Card className="bg-white border-none shadow-sm">
      <CardContent className="p-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {topicsWithMeta.map((topic) => (
            <Link key={topic.id} to={`/topics/${topic.id}`} className="group">
              <div className="flex flex-col items-center p-4 transition-colors duration-200 rounded-lg bg-gray-50 hover:bg-gray-100">
                <Badge className={`mb-2 ${topic.color}`}>
                  {topic.count} stories
                </Badge>
                <h3 className="text-lg font-semibold text-gray-800 transition-colors group-hover:text-blue-600">
                  {topic.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
