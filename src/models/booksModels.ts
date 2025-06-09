import{ Schema, model } from "mongoose"

const booksSchema = new Schema ({
    title: {type: String, required:true, unique:true},
    author: {type: String, required:true},
    publishedYear: {type: Number},
    genre: {type: String},
    aviable: {type: Boolean, default:true},
    })

    const Book = model("Book", booksSchema)

    export {Book}