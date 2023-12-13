import {v4 as uuidv4} from 'uuid'
import { createContext, useState } from "react";


const BookContext = createContext()

export const BookContextProvider = ({ children }) => {

    const [bookLists, setBookLists] = useState([
        {
            id: 1, 
            title: 'Go back home', 
            author: 'Shakto Baas', 
            isbn: 8696
        },
        {
            id: 2, 
            title: 'No place like home', 
            author: 'Adeola', 
            isbn: 1932
        },
        {
            id: 3, 
            title: 'Welcome back home', 
            author: 'Omowumi', 
            isbn: 4334
        }
    ]
    )
    const [editBookitems, setEditBookItems] = useState({
        books: {},
        edit: false
    })

    const deleteBook = (id) =>{
        if(window.confirm('Are you sure, you want to delete book')){
            setBookLists(bookLists.filter((book) => book.id !== id))
        }
   }

   const addBooks = (newBooks) =>{
    newBooks.id = uuidv4()
    setBookLists([newBooks, ...bookLists])
}
const editBook = (books) =>{
    setEditBookItems({
        books,
        edit: true
    })
}
    const updateEditBook = (id, updateBooks) => {
        setBookLists(bookLists.map((book) => book.id === id ? {...book, ...updateBooks} : book))
    }

    return <BookContext.Provider value={{bookLists,
        deleteBook,
        addBooks,
        editBook,
        editBookitems,
        updateEditBook,
        setEditBookItems
    
    }}>
        {children}
    </BookContext.Provider>
}

export default BookContext