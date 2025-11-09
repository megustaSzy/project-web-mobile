import { Request, Response, NextFunction } from "express";

export const authorizeRoles = (...allowedRoles: string[]) => {
    
    return (req: Request, res: Response, next: NextFunction) => {

        const user = (req as any).user;

        if (!user) {
            return res.json({
                message: "Unauthorized",
                success: false,
            });
        }

        if (!allowedRoles.includes(user.role)) {
            return res.json({
                message: "role tidak memiliki akses",
                success: false,
            });
        }

        next();
    };
};
