import { Router } from "express";
import { createShortUrl } from "../controllers/urlControllers.js";

const router = Router();
// Create a short URL
router.post("/shorten", createShortUrl);

export default router;