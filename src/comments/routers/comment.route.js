import express from 'express';
import {homepage, getComments, getComment, updateComment, addComment, deleteComment} from '../controllers/comment.controllers.js';
import signup from '../middlewares/comment.middlewares.js'

const router = express.Router();

router.get('/', homepage);

router.get('/comments', getComments);

router.post('/comments', addComment);

router.get('/comments/:id', getComment);

router.patch('/comments/:id', updateComment);

router.delete('/comments/:id', deleteComment);

export {router as default};