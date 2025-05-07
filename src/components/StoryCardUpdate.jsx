import React from "react";
import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const featuredStories = [
  {
    id: "1",
    title: "The Lost City of Atlantis",
    excerpt:
      "Discover the mysteries of the legendary underwater civilization through stunning visuals and captivating narrative.",
    author: "Alex Chen",
    authorImage: "/placeholder.svg?height=40&width=40",
    coverImage: "https://placehold.co/600x400",
    category: "Adventure",
    likes: 342,
    comments: 28,
    date: "3 days ago",
  },
  {
    id: "2",
    title: "Journey Through the Amazon",
    excerpt:
      "Explore the world's largest rainforest and its incredible biodiversity in this visual storytelling experience.",
    author: "Jamie Smith",
    authorImage: "/placeholder.svg?height=40&width=40",
    coverImage: "https://placehold.co/600x400",
    category: "Nature",
    likes: 287,
    comments: 42,
    date: "5 days ago",
  },
  {
    id: "3",
    title: "Futuristic Metropolis",
    excerpt:
      "A glimpse into the cities of tomorrow, where technology and nature coexist in perfect harmony.",
    author: "Morgan Lee",
    authorImage: "/placeholder.svg?height=40&width=40",
    coverImage: "https://placehold.co/600x400",
    category: "Sci-Fi",
    likes: 198,
    comments: 17,
    date: "1 week ago",
  },
  {
    id: "4",
    title: "Ancient Egyptian Wonders",
    excerpt:
      "Travel back in time to witness the magnificent structures and rich culture of Ancient Egypt.",
    author: "Taylor Wong",
    authorImage: "/placeholder.svg?height=40&width=40",
    coverImage: "https://placehold.co/600x400",
    category: "History",
    likes: 412,
    comments: 53,
    date: "2 weeks ago",
  },
  {
    id: "5",
    title: "Northern Lights Magic",
    excerpt:
      "Experience the ethereal beauty of the Aurora Borealis through stunning photography and personal stories.",
    author: "Jordan Rivera",
    authorImage: "/placeholder.svg?height=40&width=40",
    coverImage: "https://placehold.co/600x400",
    category: "Nature",
    likes: 367,
    comments: 31,
    date: "3 weeks ago",
  },
  {
    id: "6",
    title: "Mythical Creatures",
    excerpt:
      "Dive into the world of legends and folklore with beautifully illustrated mythical beings from around the world.",
    author: "Casey Johnson",
    authorImage: "/placeholder.svg?height=40&width=40",
    coverImage: "https://placehold.co/600x400",
    category: "Fantasy",
    likes: 289,
    comments: 24,
    date: "1 month ago",
  },
];

const StoryCardUpdate = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {featuredStories.map((story) => (
        <Card
          key={story.id}
          className="overflow-hidden transition-shadow duration-300 hover:shadow-lg"
        >
          <div className="relative w-full h-64">
            <img
              src={story.coverImage || "https://placehold.co/600x400"}
              alt={story.title}
              className="object-cover w-full h-full"
            />
            <div className="absolute px-3 py-1 text-xs font-medium text-blue-600 rounded-full top-3 right-3 bg-white/80 backdrop-blur-sm">
              {story.category}
            </div>
          </div>
          <CardContent className="p-4">
            <div className="flex items-center mb-3 space-x-2">
              <Avatar className="w-8 h-8">
                <AvatarImage
                  src={story.authorImage || "/placeholder.svg"}
                  alt={story.author}
                />
                <AvatarFallback>{story.author.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{story.author}</p>
                <p className="text-xs text-gray-500">{story.date}</p>
              </div>
            </div>
            <Link to={`/stories/${story.id}`}>
              <h3 className="mb-2 text-xl font-bold transition-colors hover:text-blue-600">
                {story.title}
              </h3>
            </Link>
            <p className="text-sm text-gray-600 line-clamp-2">
              {story.excerpt}
            </p>
          </CardContent>
          <CardFooter className="flex items-center justify-between p-4 pt-0">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
              >
                <Heart className="w-4 h-4" />
                <span>{story.likes}</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center space-x-1 text-gray-600 hover:text-blue-600"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{story.comments}</span>
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 text-gray-600 hover:text-blue-600"
              >
                <Share2 className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 text-gray-600 hover:text-blue-600"
              >
                <Bookmark className="w-4 h-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default StoryCardUpdate;
