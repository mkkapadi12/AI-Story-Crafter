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
    isPrivate: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    theme: {
      type: String,
    },
  },
  { timestamps: true }
);

let STORY = model("story", StorySchema);

module.exports = STORY;
