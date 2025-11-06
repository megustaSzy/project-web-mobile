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

    async getUserById (req: Request, res: Response) {
        try {
            
            const id = Number(req.params.id)
            const user = await userService.getUserById(id)

            if(!user) {
                return res.json({
                    message: "id tidak ditemukan",
                    success: false
                });
            }

            res.json(user)

        } catch (error) {
            res.json({ 
                message: "Terjadi kesalahan server", 
                success: false 
            });
        }
    }


}