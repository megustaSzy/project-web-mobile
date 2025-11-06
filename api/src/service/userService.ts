import { PrismaClient, Role } from "@prisma/client";
import { error } from "console";

const prisma = new PrismaClient();

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

    async getUserById(id: number) {
        return prisma.tb_user.findUnique({
            where: {
                id
            }
        });
    },

    async registerUser(data: UserData) {

        const existingUser = await prisma.tb_user.findUnique({
            where: {
                email: data.email
            }
        });

        if(existingUser) {
            throw new Error("email sudah digunakan")
        }

        return prisma.tb_user.create({
            data: {
                name: data.name,
                email: data.email,
                password: data.password,
                role: data.role || "User",
                notelp: data.notelp || ""
            }
        });
    },

    async loginUser (email: string, password: string) {

        const user = await prisma.tb_user.findUnique({
            where: {
                email
            }
        });

        if(!user) throw new Error ("email tidak ditemukan");

        if(user.password !== password) throw new Error("password salah");

        return user;
    },

    
}