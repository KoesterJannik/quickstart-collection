import { Hono } from "hono";

const authRouter = new Hono()
authRouter.get("/register", (c) => c.text("Auth!"));

export default authRouter;