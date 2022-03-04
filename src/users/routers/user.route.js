import express from 'express';
import {homepage, getUsers, getUser, updateUser, addUser, deleteUser} from '../controllers/user.controllers.js';
import signup from '../middlewares/user.middlewares.js'

const router = express.Router();

router.get('/', homepage);

router.get('/users', getUsers);

router.post('/users', signup, addUser);

router.get('/users/:id', getUser);

router.patch('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);

export {router as default};