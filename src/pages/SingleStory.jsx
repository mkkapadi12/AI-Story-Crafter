import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useParams } from "react-router-dom";
import { useStoryContext } from "@/Context/StoryContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Loading from "@/helpers/Loading";
import StoryCard from "@/components/StoryCard";
import { ICONS } from "@/icons/icons";
import { formatDistanceToNow } from "date-fns";
import {
  FacebookShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const SingleStory = () => {
  const { fetchSingleStory, story, loading, related } = useStoryContext();
  const { id } = useParams();

  // console.log(story);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (id) fetchSingleStory(id);
  }, [id]);

  return (
    <section className="bg-gray-50">
      <Navbar />
      {loading || !story ? (
        <>
          <Loading loadingText="Loading Story..." />;
        </>
      ) : (
        <>
          <main>
            {/* Hero Section */}
            <div className="relative max-w-4xl mx-auto h-[70vh] mt-4 rounded-lg overflow-hidden shadow-md p-5 sm:p-0">
              <img
                src={story?.coverImage}
                alt={story?.title}
                className="relative object-cover w-full h-full rounded-lg sm:inset-0 brightness-75"
              />
              <div className="absolute bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 w-full px-6 py-8 text-white left-2 md:px-12">
                <Badge className="mb-3 bg-blue-600 hover:bg-blue-700">
                  {story?.theme}
                </Badge>
                <h1 className="mb-4 text-3xl font-bold leading-tight md:text-5xl">
                  {story?.title}
                </h1>
                <div className="flex items-center justify-start gap-4">
                  <Avatar className="!w-10 !h-10 duration-300 cursor-pointer tsmransition-all ring-1 ring-blue-500 hover:ring-2 md:w-12 md:h-12">
                    <AvatarImage
                      src={story?.createdBy?.profileImage}
                      alt="profile"
                      className="object-cover w-full h-full rounded-full"
                    />
                    <AvatarFallback className="text-xl text-blue-500 bg-blue-200">
                      {story?.createdBy?.name?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{story?.name}</p>
                    {story?.createdAt ? (
                      <p className="text-sm text-white">
                        {formatDistanceToNow(new Date(story.createdAt), {
                          addSuffix: true,
                        })}
                      </p>
                    ) : (
                      <p className="text-sm text-white">Loading time...</p> // Optional fallback
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div className="max-w-4xl px-4 py-12 mx-auto md:px-6">
              <article
                className="prose prose-lg md:prose-xl max-w-none"
                dangerouslySetInnerHTML={{
                  __html: story?.story.replace("&lt;br&gt;", "<br />"),
                }}
              />

              {/* Story Actions */}
              <div className="flex gap-4 py-6 mt-12 text-white border-t border-b border-blue-500 sm:flex-row">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <ICONS.LIKE />
                  Like
                </Button>
                {/* <Button className="bg-blue-600 hover:bg-blue-700"> */}
                <WhatsappShareButton
                  url={"https://ai-story-crafter.vercel.app/story/" + id}
                  title={story?.title}
                  separator=" " // Separates title from the URL in the shared message
                >
                  <WhatsappIcon size={40} round={true} />
                </WhatsappShareButton>

                {/* </Button> */}
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <ICONS.SAVE />
                  Save
                </Button>
              </div>

              {/* Related Stories - Uncomment when data is available */}

              <div className="mt-10">
                {!related.length == 0 ? (
                  <h2 className="mb-6 text-2xl font-bold">
                    More Stories You Might Like
                  </h2>
                ) : null}

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                  {related.map((story) => (
                    <StoryCard
                      key={story._id}
                      image={story.coverImage}
                      title={story.title}
                      description={story.story}
                      theme={story.theme}
                      id={story._id}
                      createdBy={story.createdBy}
                      date={story.createdAt}
                    />
                  ))}
                </div>
              </div>
            </div>
          </main>
        </>
      )}

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default SingleStory;
