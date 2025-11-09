import { Request, Response } from "express";
import { userService } from "../services/userService";
import { createError } from "../utils/createError";

export const userController = {

  async getAllUsers(req: Request, res: Response) {

    const users = await userService.getAllUsers();

    return res.status(200).json({ 
      success: true, 
      users });
  },

  async getUserById(req: Request, res: Response) {

    const id = Number(req.params.id);

    if (isNaN(id)) createError("id tidak valid", 400);

    const user = await userService.getUserById(id);

    if (!user) createError("user tidak ditemukan", 404);

    return res.status(200).json({ success: true, user });
  },

  async updateUser(req: Request, res: Response) {

    const idUpdate = Number(req.params.id);

    if (isNaN(idUpdate)) createError("id tidak valid", 400);

    const currentUser = (req as any).user;

    if (currentUser.role !== "Admin" && currentUser.id !== idUpdate) {
      createError("akses ditolak", 403);
    }

    const updatedUser = await userService.updatedUserById(idUpdate, req.body);

    return res.status(200).json({
      success: true,
      message: "user berhasil diperbarui",
      user: updatedUser,
    });
  },

  async deleteUser(req: Request, res: Response) {

    const idDelete = Number(req.params.id);

    if (isNaN(idDelete)) createError("id tidak valid", 400);

    const currentUser = (req as any).user;

    if (currentUser.role !== "Admin") createError("akses ditolak", 403);

    await userService.deleteUserById(idDelete);

    return res.status(200).json({
      success: true,
      message: "user berhasil dihapus",
    });
  },

  async getProfile(req: Request, res: Response) {

    const currentUser = (req as any).user;

    return res.status(200).json({ 
      success: true, 
      user: currentUser });
  }
};
