import express from "express"
import { getAllLibros } from "../controllers/libroControlles"
import { getLibro } from "../controllers/libroControlles"
import { createLibro } from "../controllers/libroControlles"
import { updateLibro } from "../controllers/libroControlles"
import { deleteLibro } from "../controllers/libroControlles"

const routes = express.Router()

routes.get("/", getAllLibros)
routes.get("/:id", getLibro)
routes.post("/", createLibro)
routes.put("/:id", updateLibro)
routes.delete(":id", deleteLibro)

export default routes