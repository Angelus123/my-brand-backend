import express from 'express';
import {homepage, getBlogs, getBlog, updateBlog, addBlog, deleteBlog, addComment} from '../controllers/blog.controllers.js';
import * as authControl from "../../users/controllers/AuthController.js"

import multer from "multer"

const upload = multer ({dest:'uploads/'});
 
const router = express.Router();

router.get('/', homepage);

router.get('/blogs', getBlogs);

router.post('/blogs', upload.single('blogImage'), authControl.protect, authControl.restrictTo('admin'),addBlog);

router.get('/blogs/:id', getBlog);
router.put('/blogs/:id/comment', addComment);

router.delete('/blogs/:id', authControl.protect, authControl.restrictTo('admin'), deleteBlog);

router.patch('/blogs/:id', updateBlog);

export {router as default};