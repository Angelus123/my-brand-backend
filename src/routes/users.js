import { Router } from "express";

const router = new Router();
router.get("/users", access.isAdmin, auth.getSubscribersInRange);
export default router;
