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
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);


export default router;
