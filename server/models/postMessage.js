import mongoose from "mongoose";
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags:[String],
    selectedFile:String,
    createAt:{
        type:Date,
        defaultValue: new Date()
    }
})

const PostMessage = mongoose.model('PostMessage', postSchema);
export default PostMessage;