import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const userService = {
    // get all user
    async getAllUsers() {
        return prisma.tb_user.findMany({
            orderBy: {
                id: 'asc'
            }
        });
    },
}