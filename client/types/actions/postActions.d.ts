import { Post } from "../models/models";
declare const addNewPost: (post: Post) => void;
declare const updtateCurrentPost: (id: string, post: Post) => void;
declare const deletePost: (id: string) => void;
declare const getAllPosts: () => void;
export { addNewPost, updtateCurrentPost, deletePost, getAllPosts };
