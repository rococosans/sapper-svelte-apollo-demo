import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookeParser from 'cookie-parser'
import env from 'dotenv'
import db from './db'
import graphQLServer from './graphql'

env.config('.env')
db()

// Node App (Express)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const app = express()
const corsOptions = {
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookeParser())

// If there is a user cookie, extract the token and put the userId onto the req for future requests to access
app.use((req, res, next) => {
  const { token } = req.cookies
  if (token) {
    const { userId } = token
    req.userId = userId
  }
  next()
})

// GraphQL Server
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
graphQLServer().applyMiddleware({
  app,
  path: '/',
  cors: corsOptions,
})

export default app
