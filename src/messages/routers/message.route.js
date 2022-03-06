import express from 'express';
import {homepage, getMessages, getMessage, updateMessage, addMessage, deleteMessage} from '../controllers/message.controllers.js';
import signup from '../middlewares/message.middlewares.js'

const router = express.Router();

router.get('/', homepage);

router.get('/messages', getMessages);

router.post('/messages', addMessage);

router.get('/messages/:id', getMessage);

router.patch('/messages/:id', updateMessage);

router.delete('/messages/:id', deleteMessage);

export {router as default};