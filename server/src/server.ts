import 'dotenv/config'
import fastify from 'fastify'
import { memoriesRoutes } from './routes/memories'

import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { authRoutes } from './routes/auth'

const app = fastify()

app.register(cors, {
  origin: true,
})
app.register(jwt, {
  secret: 'alsdkfjakj1l3k12j3lkjlk1j23',
})
app.register(authRoutes)
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
    host: '0.0.0.0',
  })
  .then(() => {
    console.log('🚀 HTTP server running on http://localhost:3333')
  })
