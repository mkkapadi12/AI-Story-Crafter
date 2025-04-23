const STORY = require("../models/story-model");
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, path.resolve("./public/uploads"));
//   },
//   filename: function (req, file, cb) {
//     const filename = `${Date.now()}-${file.originalname}`;
//     cb(null, filename);
//   },
// });

// const upload = multer({ storage });

//Get All the Story
const getAllStory = async (req, res) => {
  try {
    const stories = await STORY.find({}).populate("createdBy");
    return res.status(200).json(stories);
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch stories !" });
  }
};

// Add New Story...
const addStory = async (req, res) => {
  try {
    // console.log("REQ.BODY =>", req.body);
    // console.log("REQ.FILE =>", req.file);

    let { title, story, name, createdBy } = req.body;

    let new_story = await STORY.create({
      title,
      story,
      name,
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

//get single story

// const getSingleStory = async (req, res) => {
//   try {
//     const story = await STORY.findById(req.params.id);

//     // If story not found
//     if (!story) {
//       return res.status(404).json({ error: "Story not found" });
//     }

//     return res.status(200).json(story);
//   } catch (error) {
//     return res.status(500).json({ error: "Failed to fetch blog" });
//   }
// };

module.exports = {
  getAllStory,
  addStory,
  // getSingleStory,
};
