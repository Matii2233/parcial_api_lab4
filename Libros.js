import mongoose from "mongoose"

const libroSchema = mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  resumen: {
    type: String,
    required: false,
  },
  genero: {
    type: String,
    required: true
  },
  publicaciones: {
    type: Date,
    required: true
  },
  disponible: {
    type: Boolean,
    required: true
  }
})

export default libro = mongoose.model('libro', libroSchema)