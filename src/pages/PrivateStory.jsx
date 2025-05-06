import React from "react";
import { useStoryContext } from "@/Context/StoryContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuthContext } from "@/Context/AuthContext";
import StoryCard from "@/components/StoryCard";
import Loading from "@/helpers/Loading";

const PrivateStory = () => {
  const { privateStories, loading } = useStoryContext();
  const { user } = useAuthContext();

  const privateStory = privateStories?.filter(
    (story) => story.isPrivate === true && user?._id === story.createdBy?._id
  );

  return (
    <section>
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <div className="relative px-6 py-20 overflow-hidden text-white bg-gradient-to-br from-blue-700 via-blue-500 to-blue-400 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            Your Private Stories
          </h1>
          <p className="mt-4 text-lg text-blue-100">
            These are stories only visible to you. Enjoy and manage your private
            creations.
          </p>
        </div>
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 rounded-full w-52 h-52 bg-white/10 blur-3xl"></div>
      </div>

      {/* Private Stories Section */}
      {loading ? (
        <>
          <Loading loadingText="Loading..." />
        </>
      ) : (
        <>
          <main className="px-2 py-12 mx-auto max-w-7xl">
            {privateStory.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {privateStory.map((story) => (
                  <StoryCard
                    key={story._id}
                    image={story.coverImage}
                    title={story.title}
                    description={story.story}
                    theme={story.theme}
                    id={story._id}
                    createdBy={story.createdBy}
                  />
                ))}
              </div>
            ) : (
              <div className="max-w-xl mx-auto mt-12 text-center">
                <p className="text-xl font-semibold text-gray-700">
                  You haven’t created any private stories yet.
                </p>
                <p className="mt-2 text-gray-500">
                  Create a story and mark it as private to see it here.
                </p>
              </div>
            )}
          </main>
        </>
      )}

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default PrivateStory;
