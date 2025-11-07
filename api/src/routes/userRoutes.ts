import { Router } from "express";
import { userController } from "../controller/userController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.get("/", userController.getAllUsers);

router.post("/register", userController.register);

router.post("/login", userController.login);

router.get("/profile", authMiddleware, userController.getProfile);

router.get("/:id", userController.getUserById);

router.put("/:id", userController.updateUser);

router.delete("/:id", userController.deleteUser);

export default router;
