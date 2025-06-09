import {Router} from "express"

import { getAllBooks, deleteBooks, createBooks, updateBooks, getBookById } from "../controllers/booksControllers"

const BooksRoutes = Router()

// GET - http://localhost:1234/api/books/
BooksRoutes.get("/",getAllBooks);

//GET - http://localhost:1234/api/books/:id
BooksRoutes.get("/:id", getBookById);

//DELETE - http://localhost:1234/api/books/:id 
BooksRoutes.delete("/:id", deleteBooks);

//POST - http://localhost:1234/api/books/
BooksRoutes.post("/", createBooks);

//PATCH - http://localhost:1234/api/books/:id
BooksRoutes.patch("/:id", updateBooks);

export { BooksRoutes }