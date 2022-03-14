import express from 'express';
import {homepage, getMessages, getMessage, updateMessage, addMessage, deleteMessage} from '../controllers/message.controllers.js';
import * as authControl from "../../users/controllers/AuthController.js"

const router = express.Router();

router.get('/', homepage);

router.get('/messages', getMessages);

router.post('/messages',authControl.protect, authControl.restrictTo('user','admin'), addMessage);

router.get('/messages/:id',authControl.protect, authControl.restrictTo('admin'), getMessage);

router.patch('/messages/:id',authControl.protect, authControl.restrictTo('user'), updateMessage);

router.delete('/messages/:id',authControl.protect, authControl.restrictTo('admin'), deleteMessage);

export {router as default};