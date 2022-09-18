import express from 'express';
import {getPosts, createPost, updatePost, deletePost} from '../controllers/posts.js';
import multer from 'multer'
const router = express.Router();
const upload = multer({dest:"uploads"});

router.get('/', getPosts);
router.post('/', upload.single("selectedFile"),createPost)
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
export default router;