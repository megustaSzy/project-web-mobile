import { userService } from "../service/userService"
import { Request, Response } from "express";


export const userController = {
    // GET controller 
    async getAllUsers(req: Request, res: Response) {
        try {

            const users = await userService.getAllUsers();

            res.json({
                users: users
            })

        } catch (error: any) {
            res.json({ 
                message: "Terjadi kesalahan server", 
                success: false 
            });
        }
    },

    async getUserById(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);

            if (isNaN(id)) return res.json({ 
                message: "ID tidak valid", 
                success: false 
            });

            const user = await userService.getUserById(id);

            if(!user) {
                res.json({
                    message: "user tidak ditemukan",
                    success: false
                })
            }

            res.json({ 
                user, 
                success: true 
            });
        } catch (error: any) {
            res.json({ 
                message: error.message, 
                success: false 
            });
        }
    },

    async register (req: Request, res: Response) {
        try {
            await userService.registerUser(req.body);

            res.json({
                message: "berhasiil membuat akun",
                success: true
            });

        } catch (error: any) {
            res.json({
                message: error.message,
                success: false
            });
        }
        
    },

    async login(req: Request, res: Response) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "email dan password wajib diisi",
                success: false
            });
        }

        const { user, token } = await userService.loginUser(email, password);

        return res.status(200).json({
            message: "Login Berhasil",
            success: true,
            user,
            token
        });

    } catch (error: any) {
        return res.status(401).json({
            message: error.message,
            success: false,
        });
    }
    },


    async updateUser (req: Request, res: Response) {
        try {
            const id = Number(req.params.id);

            if (isNaN(id)) return res.json({
                message: "id tidak valid",
                success: false
            })

            const user = await userService.updatedUserById(id, req.body);

            res.json({
                user,
                success: true
            })
        } catch (error: any) {
            res.json({
                message: error.message,
                success: false
            })
        }
    },

    async deleteUser (req: Request, res: Response) {
        try {
            const id = Number(req.params.id);

            if(isNaN(id)) return res.json({
                message: "id tidak valid",
                success: false
            })

            await userService.deleteUserById(id);

            res.json({
                message: "user berhasil dihapus",
                success: true
            })
        } catch (error: any) {
            res.json({
                message: error.message,
                success: false
            })
        }
    },

    async getProfile (req: Request, res: Response) {
        const currentUser = (req as any).user;
        res.json({
            user: currentUser,
            message: "Login Berhasil",
            success: true
        })
    }
}