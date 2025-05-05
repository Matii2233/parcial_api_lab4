import express from "express"
import { addLibroToAutor } from "../controllers/autorController"
import { deleteAutor } from "../controllers/autorController"
import { updateAutor } from "../controllers/autorController"
import { createAutor } from "../controllers/autorController"
import { getAutor } from "../controllers/autorController"
import { getAllAutors } from "../controllers/autorController"

const routes = express.Router()

routes.get("/", getAllAutors)
routes.get("/:id", getAutor)
routes.post("/", createAutor)
routes.put("/:id", updateAutor)
routes.delete(":id", deleteAutor)
routes.put("/:id/addBook/:bookId", addLibroToAutor)

export default routes