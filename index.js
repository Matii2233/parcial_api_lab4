import express from express
import cors from "cors"
import bodyParser from "body-parser"
import {config} from "dotenv"
import autorRoutes from "./routes/autor.routes.js"
import libroRoutes from "./routes/libro.routes.js"

config()

const app = express()
app.use(cors())
app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URL, { dbName: process.env.DB_NAME })
const db = mongoose.connection

app.use("/autors", autorRoutes)
app.use("/libros", libroRoutes)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto: ${port}`)
})