const STORY = require("../models/story-model");

//GET ALL PUBLIC STORY
const getAllStory = async (req, res) => {
  try {
    const stories = await STORY.find({}).populate("createdBy");
    const story = stories.filter((story) => story?.isPrivate == false);
    return res.status(200).json(story);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch stories !" });
  }
};

//get user private story
const getPrivate = async (req, res) => {
  try {
    const user = req.user;

    // Make sure user._id exists
    if (!user || !user._id) {
      return res.status(400).json({ error: "Invalid user information" });
    }

    // Find stories created by this user
    const privateStories = await STORY.find({ createdBy: user._id }).populate(
      "createdBy"
    );

    return res.status(200).json(privateStories);
  } catch (error) {
    console.error("Error fetching private stories:", error);
    return res.status(500).json({ error: "Failed to fetch stories!" });
  }
};

// Add New Story...
const addStory = async (req, res) => {
  try {
    // console.log("REQ.BODY =>", req.body);
    // console.log("REQ.FILE =>", req.file);

    let { title, story, name, createdBy, theme } = req.body;

    let new_story = await STORY.create({
      title,
      story,
      name,
      theme,
      createdBy,
      coverImage: req.file.path,
    });

    return res.status(201).json({ msg: "Story Created !", Story: new_story });
  } catch (error) {
    console.error("Server Error:", error);
    return res
      .status(400)
      .json({ msg: "Internal Server Error !", error: error.message });
  }
};

//post private story
const postPrivateStory = async (req, res) => {
  try {
    // console.log("REQ.BODY =>", req.body);
    // console.log("REQ.FILE =>", req.file);

    let { title, story, name, createdBy, theme } = req.body;

    let private_story = await STORY.create({
      title,
      story,
      name,
      theme,
      createdBy,
      coverImage: req.file.path,
      isPrivate: true,
    });

    // Save the story
    return res
      .status(201)
      .json({ msg: "Story Created !", Story: private_story });
  } catch (error) {
    console.error("Error saving private story:", error);
    return res.status(500).json({ error: "Failed to save private story" });
  }
};

//get single story
const getSingleStory = async (req, res) => {
  try {
    // console.log("ID", req.params.id);
    const story = await STORY.findById(req.params.id).populate("createdBy");

    // If story not found
    if (!story) {
      return res.status(404).json({ error: "Story not found" });
    }

    return res.status(200).json(story);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch story" });
  }
};

module.exports = {
  getAllStory,
  addStory,
  postPrivateStory,
  getSingleStory,
  getPrivate,
};
