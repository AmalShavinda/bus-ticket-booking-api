import express from "express";
import {
  createBus,
  deleteBus,
  getAllBuses,
  getSeatsForTrip,
  searchAvailableBuses,
  updateBus,
} from "../controllers/busesController.js";
import { verifyAdmin, verifyToken } from "../utils/verifyAdmin.js";

const router = express.Router();

router.post("/", verifyAdmin, createBus);
router.put("/:id", verifyAdmin, updateBus);
router.delete("/:id", verifyAdmin, deleteBus);
router.get("/", verifyToken, getAllBuses);
router.get("/search", verifyToken, searchAvailableBuses);
router.get("/seats", verifyToken, getSeatsForTrip);

export default router;
