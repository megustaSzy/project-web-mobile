import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.json({
            message: "token tidak ditemukan",
            success: false
        });
    }

    try {

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET!
        ) as { id: number };

        const user = await prisma.tb_user.findUnique({

            where: { id: decoded.id },

            select: { id: true, name: true, email: true, role: true }
        });

        if (!user) {

            return res.json({
                message: "user tidak ditemukan",
                success: false

            });
        }

        (req as any).user = user;

        next();

    } catch (error) {
        
        return res.json({
            message: "token tidak valid",
            success: false
        });
    }
};
