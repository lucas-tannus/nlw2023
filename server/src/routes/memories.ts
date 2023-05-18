import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { prisma } from '../lib/prisma'

export async function memoriesRoutes(app: FastifyInstance) {
  app.get('/memories', async () => {
    const memories = await prisma.memory.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    })

    return memories.map((memory) => ({
      id: memory.id,
      coverUrl: memory.coverUrl,
      excerpt: memory.content.substring(0, 115).concat('...'),
    }))
  })

  app.get('/memories/:id', async (request) => {
    const paramSchema = z.object({
      id: z.string().uuid(),
    })
    const { id } = paramSchema.parse(request.params)

    const memory = prisma.memory.findUniqueOrThrow({
      where: {
        id,
      },
    })

    return memory
  })

  app.post('/memories', async (request) => {
    const bodySchema = z.object({
      coverUrl: z.string(),
      content: z.string(),
      isPublic: z.coerce.boolean().default(false),
    })

    const { coverUrl, content, isPublic } = bodySchema.parse(request.body)

    const memory = await prisma.memory.create({
      data: {
        content,
        coverUrl,
        isPublic,
        userId: '705646ca-d2ed-4586-9259-70e98b9d1ee6',
      },
    })

    return memory
  })

  app.put('/memories/:id', async (request) => {
    const paramSchema = z.object({
      id: z.string().uuid(),
    })
    const { id } = paramSchema.parse(request.params)

    const bodySchema = z.object({
      coverUrl: z.string(),
      content: z.string(),
      isPublic: z.coerce.boolean().default(false),
    })

    const { coverUrl, content, isPublic } = bodySchema.parse(request.body)

    const updatedMemory = await prisma.memory.update({
      where: {
        id,
      },
      data: {
        coverUrl,
        content,
        isPublic,
      },
    })

    return updatedMemory
  })

  app.delete('/memories/:id', async (request) => {
    const paramSchema = z.object({
      id: z.string().uuid(),
    })
    const { id } = paramSchema.parse(request.params)

    await prisma.memory.delete({
      where: {
        id,
      },
    })
  })
}
