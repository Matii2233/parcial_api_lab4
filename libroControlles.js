import Autors from "../models/Autors"
import Libros from "../models/Libros"

export const getAllLibros = (req, res) => {
  const libros = await Libros.find()
  res.status(200).json(libros)
}
export const getLibro = (req, res) => {
  const {id} = req.params
  const libro = await Libros.findById(id)
  res.status(200).json(libro)
}
export const createLibro = (req, res) => {
  const {titulo, resumen, genero, publicacion, disponible} = req.body
  const libro = new Libros ({
    titulo: titulo || '',
    resumen: resumen,
    genero, genero,
    publicacion: publicacion,
    disponible: disponible
  })

  const newLibro = await libro.save()
  res.status(201).json({message: "libro creado: ", newLibro})
}
export const updateLibro = (req, res) => {
  const {id} = req.params
  const libro =  await Libros.findById(id)

  const newLibro = {
    titulo: req.body.titulo || libro.titulo,
    resumen: req.body.resumen || libro.resumen,
    genero: req.body.genero || libro.genero,
    publicacion: req.body.publicacion || libro.publicacion,
    disponible: req.body.disponible || libro.disponible,
  }

  const libroUpdated = newLibro.save()
  res.status(200).json({message: "libro actualizado: ", libroUpdated})
}
export const deleteLibro = (req, res) => {
  const {id} = req.params
  const libro = await Libros.findByIdAndDelete(id)

  const autors = await Autors.find()
  const libroFound
  const found = false
  autors.forEach((autor) => {
    libroFound = autor.libros.find(l => l._id.toString() === bookId)
    if (libroFound) {
      found = true
    }
  }) 

  if (found) return res.status(400).json({message: "no se puede eliminar un libro que perteece a un autor"})

  const libroDeleted = libro.save()
  res.status(200).json({message: "libro eliminado: ", libroDeleted})
}
