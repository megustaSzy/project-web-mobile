import { Router } from "express";
import { userController } from "../controllers/userController";
import { authMiddleware } from "../middleware/authMiddleware";
import { authorizeRoles } from "../middleware/roleMiddleware"; // fungsi middleware cek role
import { asyncHandler } from "../middleware/asyncHandler";

const router = Router();


// PROFILE (protected)
router.get("/profile", authMiddleware, asyncHandler(userController.getProfile));

// GET all users (Admin only)
router.get("/", authMiddleware, authorizeRoles("Admin"), asyncHandler(userController.getAllUsers)
);

// GET user by ID (Admin or self)
router.get("/:id", authMiddleware, asyncHandler(userController.getUserById) // controller harus cek self vs Admin
);

// UPDATE user by ID (Admin or self)
router.put("/:id", authMiddleware, asyncHandler(userController.updateUser)
);

// DELETE user by ID (Admin only)
router.delete("/:id",authMiddleware, authorizeRoles("Admin"), asyncHandler(userController.deleteUser)
);

export default router;
