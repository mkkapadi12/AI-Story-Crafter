import React from "react";
import ShapeDecorator from "./shape-decorator";
import { Button } from "./ui/button";

const WinterWonder = () => {
  return (
    <>
      <section className="px-4 py-16">
        <div className="container relative mx-auto max-w-7xl">
          <div className="absolute top-0 right-0 z-[-999]">
            <ShapeDecorator
              type="triangle"
              color="#702dff"
              className="w-15 h-15"
            />
          </div>

          <div className="mb-12 text-center">
            <h2 className="text-[#2B2B2B] text-xl mb-2">Winter Wonders</h2>
            <p className="mx-auto max-w-4xl text-lg text-[#404040] mb-8">
              Embrace the enchantment of the winter season with our "Winter
              Wonders" themed prompt. Capture the essence of snowy landscapes,
              cozy moments by the fireplace, or the magic of holiday
              festivities. Write a poem, paint a wintry scene, or create any
              form of art that celebrates the beauty and emotions of winter. Let
              the chill in the air inspire your creativity and transport you to
              a world of winter wonders.{" "}
            </p>
          </div>

          <div className="flex items-center justify-center mx-auto max-w-7xl">
            <Button className="bg-[#FF5599] text-white cursor-pointer">Explore</Button>
          </div>

          <div className="absolute bottom-0 left-0 z-[-999]">
            <ShapeDecorator
              type="square"
              color="#ecd71d"
              className="w-10 h-10"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default WinterWonder;
