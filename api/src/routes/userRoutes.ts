import { Router } from "express";
import { userController } from "../controller/userController";

const router = Router();

router.get("/", userController.getAllUsers);

router.get("/:id", userController.getUserById)

router.post("/register", userController.register)

router.post("/login", userController.login)

router.put("/:id", userController.updateUser)

router.delete("/:id", userController.deleteUser)

export default router;