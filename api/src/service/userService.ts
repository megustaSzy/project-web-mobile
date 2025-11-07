import { PrismaClient, Role } from "@prisma/client";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET!;

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

    // get by id
    async getUserById(id: number) {
        return prisma.tb_user.findUnique({
            where: {
                id
            }
        });
    },

    // registrasi
    async registerUser(data: UserData) {

        const existingUser = await prisma.tb_user.findUnique({
            where: {
                email: data.email
            }
        });

        if(existingUser) {
            throw new Error("email sudah digunakan")
        }

        const hashedPassword = await bcrypt.hash(data.password, 10);

        return prisma.tb_user.create({
            data: {
                name: data.name,
                email: data.email,
                password: hashedPassword,
                role: data.role || "User",
                notelp: data.notelp || ""
            }
        });
    },

    // login
    async loginUser(email: string, password: string) {

    const user = await prisma.tb_user.findUnique({
        where: { email }
    });

    if (!user) {
        throw new Error("email tidak ditemukan");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("password salah");
    }

    const token = jwt.sign(
        {
            id: user.id,
            email: user.email,
            role: user.role,
        },
        process.env.JWT_SECRET!,
        { expiresIn: "7d" }
    );

    const { password: _, ...safeUser } = user;

    return { user: safeUser, token };
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