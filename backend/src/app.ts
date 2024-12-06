import express from 'express'
import globalErrorHandler from './ErrorHandler/glbalErrorHandler'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import userRouter from './module/users/user.router'
import formRoute from './module/form/form.route'
const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({origin: ["https://onlinejob-1.onrender.com","https://onlinejob-2.onrender.com"],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true}))
app.use(cookieParser())

// routes
const url = '/api/v1'
app.use(`${url}/user`,userRouter)
app.use(`${url}/form`,formRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(globalErrorHandler)
export default app
