import { Router } from "express";
import { userController } from "../controllers/userController";
import { authMiddleware } from "../middlewares/authMiddleware";
import { authorizeRoles } from "../middlewares/roleMiddleware"; // fungsi middleware cek role
import { asyncHandler } from "../middlewares/asyncHandler";

const router = Router();

// PROFILE (protected)
router.get("/profile", authMiddleware, asyncHandler(userController.getProfile));

// GET all users (Admin only)
router.get("/", authMiddleware, authorizeRoles("Admin"), asyncHandler(userController.getAllUsers));

router.get("/:id", authMiddleware, asyncHandler(userController.getUserById) 
);

router.put("/:id", authMiddleware, asyncHandler(userController.updateUser));

// DELETE user by ID (Admin only)
router.delete("/:id", authMiddleware, authorizeRoles("Admin"), asyncHandler(userController.deleteUser)
);

export default router;
