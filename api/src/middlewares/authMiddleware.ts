import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            message: "Token tidak ditemukan",
            success: false,
        });
    }

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET!
        ) as { id: number };

        const user = await prisma.tb_user.findUnique({
            where: { id: decoded.id },
            select: { id: true, name: true, email: true, role: true },
        });

        if (!user) {
            return res.status(404).json({
                message: "User tidak ditemukan",
                success: false,
            });
        }

        (req as any).user = user;

        next();

    } catch (error) {
        return res.status(403).json({
            message: "Token tidak valid",
            success: false,
        });
    }
};
