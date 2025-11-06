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
            const user = await userService.registerUser(req.body);

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

    async login (req: Request, res: Response) {
        try {
            
            const { email, password } = req.body;

            if(!email || !password) {
                return res.json({
                    message: ""
                })
            }
        } catch (error) {
            
        }


    }
}