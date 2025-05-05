import mongoose from "mongoose"

const autorSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: false
  },
  bio: {
    type: String,
    required: false,
  },
  fechaNacimiento: {
    type: Date,
    required: true
  },
  nacionalidad: {
    type: String,
    required: true
  },
  libros: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "libro"
  }]
})

export default autor = mongoose.model('autor', autorSchema)