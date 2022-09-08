import PostMessage from "../models/postMessage.js"
const getPosts = async (req, res)=>{
    try {
        const postMessages = await PostMessage.find() 
        res.status(200).json(postMessages)
        console.log(postMessages);
        
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}
const createPost = async (req, res)=>{
    const post = req.body;
    // const post = {
    //     title: 'hello',
    //     message: 'hello',
    //     creator: 'olha',
    //     tags:['String','lala'],
    //     selectedFile:'file',
    //   }
    const newPost = new PostMessage(post)
    console.log(post, newPost);
    try {
        await newPost.save();
        res.status(201).json(newPost)

    } catch (error) {
        res.status(409).json({message:error.message})

    }

}

export { getPosts, createPost}