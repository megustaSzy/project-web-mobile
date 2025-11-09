import prisma from "../lib/prisma";
import bcrypt from "bcryptjs";
import { createError } from "../utils/createError";


interface UserData {
    name?: string;
    email?: string;
    password?: string;
    role?: "Admin" | "User";
    notelp?: string;
}

export const userService = {
    async getAllUsers() {
        return prisma.tb_user.findMany({
            orderBy: { id: "asc" }
        });
    },

    async getUserById(id: number) {
        return prisma.tb_user.findUnique({ where: { id } });
    },

    async updatedUserById(id: number, data: UserData) {
        const user = await prisma.tb_user.findUnique({ where: { id } });
        if (!user) createError("user tidak ditemukan", 404);

        // Hash password jika diupdate
        if (data.password) {
            data.password = await bcrypt.hash(data.password, 10);
        }

        return prisma.tb_user.update({
            where: { id },
            data
        });
    },

    async deleteUserById(id: number) {
        const user = await prisma.tb_user.findUnique({ where: { id } });
        if (!user) createError("id tidak ditemukan", 404);

        return prisma.tb_user.delete({ where: { id } });
    }
};
