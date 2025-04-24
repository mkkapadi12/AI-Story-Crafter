import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useParams } from "react-router-dom";
import { useStoryContext } from "@/Context/StoryContext";
import Navbar from "@/components/Navbar";

const SingleStory = () => {
  const { fetchSingleStory, story } = useStoryContext();
  const { id } = useParams();

  // Fetch the blog using the ID
  useEffect(() => {
    window.scrollTo(0, 0);
    if (id) {
      fetchSingleStory(id);
    }
  }, [id]);

  return (
    <section>
      {/* header */}
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="relative h-[60vh] w-full">
          <img
            src={story?.coverImage}
            alt={story?.title}
            className="absolute inset-0 object-cover w-full h-full brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full p-8 text-white md:p-16">
            <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">
              {story?.theme}
            </Badge>
            <h1 className="mb-4 text-3xl font-bold md:text-5xl">
              {story?.title}
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <Avatar>
                <AvatarImage src={""} alt={"story"} />
                <AvatarFallback>{story?.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                {/* <p className="font-medium">{story.author.name}</p> */}
                {/* <p className="text-sm text-gray-300">
                {story.publishedAt} · {story.readTime}
              </p> */}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl px-4 py-12 mx-auto">
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: story?.story }}
          />

          <div className="flex flex-col gap-4 py-6 mt-12 border-t border-b border-gray-200 sm:flex-row">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              Like Story
            </Button>
            <Button variant="outline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              Share
            </Button>
            <Button variant="outline">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
              Save
            </Button>
          </div>

          <div className="mt-16">
            <h2 className="mb-6 text-2xl font-bold">
              More Stories You Might Like
            </h2>
            {/* <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {story.relatedStories.map((relatedStory) => (
              <a
                href={`/stories/${relatedStory.slug}`}
                key={relatedStory.slug}
                className="group"
              >
                <div className="overflow-hidden transition-all duration-300 rounded-lg shadow-md group-hover:shadow-xl">
                  <div className="relative w-full h-48">
                    <img
                      src={relatedStory.coverImage}
                      alt={relatedStory.title}
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <Badge className="mb-2">{relatedStory.category}</Badge>
                    <h3 className="text-lg font-semibold transition-colors group-hover:text-blue-600">
                      {relatedStory.title}
                    </h3>
                  </div>
                </div>
              </a>
            ))}
          </div> */}
          </div>
        </div>
      </main>
    </section>
  );
};

export default SingleStory;
