import { authService } from "../services/authService";
import { Request, Response } from "express";

export const authController = {
    // REGISTER
    async register(req: Request, res: Response) {
        const user = await authService.registerUser(req.body);
        res.status(201).json({
            message: "berhasil membuat akun",
            success: true,
            user
        });
    },

    // LOGIN
    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({
                    message: "email dan password wajib diisi",
                    success: false
                });
            }

            const { user, token } = await authService.loginUser(email, password);

            return res.status(200).json({
                message: "login berhasil",
                success: true,
                user,
                token,   // token dikirim via response
            });

        } catch (error: any) {
            return res.status(401).json({
                message: error.message,
                success: false
            });
        }
    },

    // LOGOUT (tanpa cookie)
    async logout(req: Request, res: Response) {
        return res.status(200).json({
            message: "Logout berhasil (hapus token di client)",
            success: true
        });
    }
};
