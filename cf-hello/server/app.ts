import { Hono } from "hono";

export const app = new Hono();

app.get("/", (c) => c.text("Api v2"));
