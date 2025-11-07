import { userService } from "../service/userService";
import { Request, Response } from "express";

export const userController = {
  // GET all users (Admin only)
  async getAllUsers(req: Request, res: Response) {

    const users = await userService.getAllUsers();

    res.status(200).json({
      users,
      success: true
    });
  },

  // GET user by ID
  async getUserById(req: Request, res: Response) {

    const id = Number(req.params.id);

    if (isNaN(id)) {

      return res.status(400).json({
        message: "ID tidak valid",
        success: false

      });
    }

    const user = await userService.getUserById(id);
    
    if (!user) {

      return res.status(404).json({
        message: "user tidak ditemukan",
        success: false
      });
    }

    res.status(200).json({
      user,
      success: true
    });
  },

  // REGISTER
  async register(req: Request, res: Response) {
    const user = await userService.registerUser(req.body);
    res.status(201).json({
      message: "berhasil membuat akun",
      success: true,
      user
    });
  },

  // LOGIN
  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "email dan password wajib diisi",
        success: false
      });
    }

    const { user, token } = await userService.loginUser(email, password);

    res.status(200).json({
      message: "login berhasil",
      success: true,
      user,
      token
    });
  },

  // UPDATE user by ID
  async updateUser(req: Request, res: Response) {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({
        message: "id tidak valid",
        success: false
      });
    }

    const user = await userService.updatedUserById(id, req.body);

    res.status(200).json({
      message: "user berhasil diperbarui",
      success: true,
      user
    });
  },

  // DELETE user by ID
  async deleteUser(req: Request, res: Response) {

    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({
        message: "id tidak valid",
        success: false
      });
    }

    await userService.deleteUserById(id);

    res.status(200).json({
      message: "user berhasil dihapus",
      success: true
    });
  },

  // GET PROFILE (protected route)
  async getProfile(req: Request, res: Response) {

    const currentUser = (req as any).user;
    
    res.status(200).json({
      user: currentUser,
      success: true
    });
  }
};
