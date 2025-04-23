const { Schema, model } = require("mongoose");

const StorySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    story: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
    },
    name: {
      type: String,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

let STORY = model("story", StorySchema);

module.exports = STORY;
