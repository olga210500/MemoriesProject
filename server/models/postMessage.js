import mongoose from "mongoose";
const postSchema = new mongoose.Schema(
  {
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  { versionKey: false }
);

const PostMessage = mongoose.model("PostMessage", postSchema);
export default PostMessage;
