import { Hono } from 'hono'
import authRouter from './routes/authRouter'
import { Layout } from './views/BaseLayout'
const app = new Hono()

app.get('/', (c) => c.html(<Layout />))
app.route("/auth",authRouter)
console.log(`Server is running on http://localhost:${process.env.PORT}`)

export default app