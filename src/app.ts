import fastify from "fastify";
import { Prisma, PrismaClient } from "@prisma/client";

export const app = fastify()

const prisma = new PrismaClient()
prisma.user.create({
    data:{
        nome:' João Vitor',
        email:'jotinha@email.com'
    },
})
