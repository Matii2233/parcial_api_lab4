import Autors from "../models/Autors"

export const getAllAutors = (req, res) => {
  const autors = await Autors.find()
  res.status(200).json(autors)
}
export const getAutor = (req, res) => {
  const {id} = req.params
  const autor = await Autors.findById(id)
  res.status(200).json(autor)
}
export const createAutor = (req, res) => {
  const {nombre, bio, fechaNacimiento, nacionalidad, libros} = req.body
  const autor = new Autors ({
    nombre: nombre || "",
    bio: bio,
    fechaNacimiento, genero,
    nacionalidad: nacionalidad,
    libros: libros
  })

  const newAutor = await autor.save()
  res.status(201).json({message: "autor creado: ", newAutor})
}
export const updateAutor = (req, res) => {
  const {id} = req.params
  const libro =  await Autors.findById(id)

  const newAutor = {
    nombre: req.body.nombre || libro.nombre,
    bio: req.body.bio || libro.bio,
    fechaNacimiento: req.body.fechaNacimiento || libro.fechaNacimiento,
    nacionalidad: req.body.nacionalidad || libro.nacionalidad,
    libros: req.body.libros || libro.libros,
  }

  const autorUpdated = newAutor.save()
  res.status(200).json({message: "autor actualizado: ", autorUpdated})
}
export const deleteAutor = (req, res) => {
  const {id} = req.params
  const autor = await Autors.findByIdAndDelete(id)

  const autorDeleted = autor.save()
  res.status(200).json({message: "autor eliminado: ", autorDeleted})
}

export const addLibroToAutor = (req, res) => {
  const {id, bookId} = req.params
  const autor = await Autors.findById(id)
  const libro = req.body
  autor.libros.push(libro)

  const libroFound = autor.libros.find(l => l._id.toString() === bookId)
  if (libroFound) return res.status(400).json({message: "el libro ya existe", libroFound})

  const autorUpdated = autor.save()
  res.status(201).json({message: "libro añadido al autor: ", autorUpdated})
}