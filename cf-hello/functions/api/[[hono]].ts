import { Hono } from "hono";
import { handle } from "hono/cloudflare-pages";
import { app } from "../../server/app";

const hono = new Hono().basePath("/api");

hono.route("/", app);

export const onRequest = handle(hono);
