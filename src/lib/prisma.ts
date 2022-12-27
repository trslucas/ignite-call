import { PrismaClient } from '@prisma/client'

// conexão com o banco de dados que vem do .env
export const prisma = new PrismaClient({
  log: ['query'],
})
