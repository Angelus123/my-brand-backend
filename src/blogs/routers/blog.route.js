import express from 'express';
import {homepage, getBlogs, getBlog, updateBlog, addBlog, deleteBlog} from '../controllers/blog.controllers.js';
import * as authControl from "../../users/controllers/AuthController.js"

import multer from "multer"
// const storage = multer.diskStorage({
//     destination: function(req, file, cb) {
//       cb(null, './uploads/');
//     },
//     filename: function(req, file, cb) {
//       cb(null, new Date().toISOString() + file.originalname);
//     }
//   });
  
//   const fileFilter = (req, file, cb) => {
//     // reject a file
//     if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//       cb(null, true);
//     } else {
//       cb(null, false);
//     }
//   };
  
//   const upload = multer({
//     storage: storage,
//     limits: {
//       fileSize: 1024 * 1024 * 5
//     },
//     fileFilter: fileFilter
//   });

const upload = multer ({dest:'uploads/'});
 
const router = express.Router();

router.get('/', homepage);

router.get('/blogs', getBlogs);

router.post('/blogs', upload.single('blogImage'), authControl.protect, authControl.restrictTo('admin'),addBlog);

router.get('/blogs/:id', getBlog);

router.delete('/blogs/:id', authControl.protect, authControl.restrictTo('admin'), deleteBlog);

router.patch('/blogs/:id', updateBlog);

export {router as default};