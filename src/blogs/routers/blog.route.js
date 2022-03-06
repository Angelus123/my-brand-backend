import express from 'express';
import {homepage, getBlogs, getBlog, updateBlog, addBlog, deleteBlog} from '../controllers/blog.controllers.js';
import signup from '../middlewares/blog.middlewares.js'

const router = express.Router();

router.get('/', homepage);

router.get('/blogs', getBlogs);

router.post('/blogs', addBlog);

router.get('/blog/:id', getBlog);

router.delete('/blog/:id', deleteBlog);

router.patch('/blog/:id', updateBlog);

export {router as default};