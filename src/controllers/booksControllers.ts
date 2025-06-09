import { Request, Response } from"express"
import { Book } from "../models/booksModels"



const getAllBooks = async (req: Request, res: Response): Promise <any> =>{
    try{
        const Books= await Book.find()
        return res.status(200).json({
            success:true,
            data:Books,
            message:"Recuperar todos los libros"
        })
    }catch(error){
        const err = error as Error 
        return res.status(500).json({
            success: "Error al recuperar los libros",
            message: err.message
         })
    }
}

const deleteBooks = async (req: Request, res: Response): Promise<any> => {

    try{
        const id =req.params.id
        const deleteBooks = await Book.findByIdAndDelete(id)
        if (!deleteBooks) return res.status(404).json({ succes: false, message: "Libro no encontrado"})
            return res.json({
              success: true,
              data: deleteBooks,
              message: "Libro borrado con exito"
              })
    }catch (error) {
     const err = error as Error
     return res.status(500).json({
        success: false,
        message: "Error al eliminar el libro",
        error: err.message
     })   
    }
}

const createBooks = async (req: Request, res: Response): Promise<any> => {
    try{ 
        //recibir los datos del cuerpo de la peticion
        const body =  req.body

        const newBook = new Book (body)
        const savedBook = await newBook.save()
        res.status(201).json({
            success: true ,
            data: savedBook,
            message: "Libro creado con exito"
        })
        
    } catch (error){
      const err = error as Error
      res.status(404).json({ 
        success: false,
        message: "Error al crear el libro",
        error: err.message
    
    })  
    }
}


const updateBooks = async (req: Request, res: Response): Promise<any> => {
    try{ 
      const id = req.params.id
      const body = req.body
      
      const updateBook = await Book.findByIdAndUpdate(id, body, { new: true })
      if (!updateBook) return res.status(404).json({ succsess: false, message: "Libro no encontrado para actualizar",
      error:"BookNotFound"})

      res.status(200).json({
        succsess: true,
        data:updateBook,
        message: "Libro actualizado con exito"
      })
    } catch (error) {
      const err = error as Error
      res.status(500).json({
        succsess: false,
        message:"Error al actualizar el libro",
        error: err.message

      })
    }
}

const getBookById = async (req: Request, res: Response): Promise<any> => {
    try {
        const book = await Book.findById(req.params.id)
        if(!book) {
            return res.status(404).json({ succesess: false, message: "Libro no encontrado",
            error:"BookNotFound" })
        }
        res.status(200).json({
            success: true,
            data: book,
            message: "Libro recuperado correctamente"

        })
    }catch (error){
        res.status(500).json
        ({ success: false, message: "Error al buscar el libro", error
        })
    }
}

export { getAllBooks, deleteBooks, createBooks, updateBooks, getBookById }