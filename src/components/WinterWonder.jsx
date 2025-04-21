import React from "react";
import ShapeDecorator from "./shape-decorator";

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
            <h2 className="text-[#007BFF] text-xl mb-2">Winter Wonders</h2>
            <p className="mx-auto max-w-2xl text-lg text-[#404040] mb-8">
              Embrace the magic of winter with our specially curated collection
              of snowy scenes and cozy moments.
            </p>
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
