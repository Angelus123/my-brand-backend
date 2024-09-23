import express from 'express';
import userRoutes from './users.js';

const routes = express.Router();

routes.use('/users', userRoutes);

export default routes;
