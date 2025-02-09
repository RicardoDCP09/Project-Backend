import { Router } from "express";
import { createReport, deleteReport, getReport, getReports, updateReport } from "../controllers/report.controller.js";
import { verifyAdmin, verifyCoach, verifyToken } from "../middlewares/jwt.middleware.js"


const router = Router();
router.get("/reports", verifyToken, getReports);
router.get("/reports/:id", verifyToken, getReport)
router.post("/reports", verifyToken, createReport)
router.put("/reports/:id", verifyToken, updateReport)
router.delete("/reports/:id", verifyToken, deleteReport)
export default router