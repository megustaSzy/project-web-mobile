import prisma from "../lib/prisma";
import bcrypt from 'bcryptjs';


interface UserData {
    name: string,
    email: string,
    password: string,
    role?: "Admin" | "User",
    notelp?: string
}

export const userService = {
    // get all user
    async getAllUsers() {
        return prisma.tb_user.findMany({
            orderBy: {
                id: 'asc'
            }
        });
    },

    // get by id
    async getUserById(id: number) {
        return prisma.tb_user.findUnique({
            where: {
                id
            }
        });
    },

    // update user
    async updatedUserById(id: number, data: UserData) {
        if(data.password) {
            data.password = await bcrypt.hash(data.password, 10)
        }

        const user = await prisma.tb_user.findUnique({
            where: {
                id
            }
        });

        if(!user) throw new Error("user tidak ditemukan");

        return prisma.tb_user.update({ where: { id }, data });
    },

    // dekete
    async deleteUserById(id: number) {
        const user = await prisma.tb_user.findUnique({
            where: {
                id
            }
        });

        if(!user) throw new Error("id tidak ditemukan");

        return prisma.tb_user.delete({
            where: {
                id
            }
        });
    }

}