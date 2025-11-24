import express from "express";
import {
    createResume,
    getMyResumes,
    getResumeById,
    updateResume,
    deleteResume
} from "../controllers/resumeController.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, createResume);
router.get("/", authMiddleware, getMyResumes);
router.get("/:id", authMiddleware, getResumeById);
router.put("/:id", authMiddleware, updateResume);
router.delete("/:id", authMiddleware, deleteResume);

export default router;
