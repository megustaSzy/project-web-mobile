import { Router } from "express";
import { userController } from "../controller/userController";
import { authMiddleware } from "../middleware/authMiddleware";
import { authorizeRoles } from "../middleware/roleMiddleware";
import { asyncHandler } from "../middleware/asyncHandler";

const router = Router();


//hanya admin yg bisa lihat user
router.get("/", authMiddleware, authorizeRoles("Admin"), asyncHandler(userController.getAllUsers));


// register & login (tidak butuh auth)
router.post("/register", userController.register);
router.post("/login", userController.login);

//user bisa lihat profile
router.get("/profile", authMiddleware, userController.getProfile);

// GET, UPDATE, and DELETE by ID
router.get("/:id", authMiddleware, authorizeRoles("Admin"), asyncHandler(userController.getUserById));

router.put("/:id", authMiddleware, asyncHandler(userController.updateUser));
router.delete("/:id", authMiddleware, authorizeRoles("Admin"), asyncHandler(userController.deleteUser));


export default router;
