import { Router } from "express";
import { getAllUsers } from "../controllers/users.js";
const router = new Router();
router.get("/users", getAllUsers);
export default router;
