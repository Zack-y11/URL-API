import urlModel from "../models/urlModel.js";
import { randomBytes } from "crypto";

const baseUrl = "http://localhost:3000/"; // Base URL for the shortened links

export const createShortUrl = async(req, res)=>{
    try {
        const { url } = req.body;
        console.log(url)
        if(!url) {
            res.status(400).json({ error: "URL is required" });
            return;
        }
    } catch (error) {
        console.error("Internal server error", error)
        res.status(500).json({error: "internal server error"})
    }
}