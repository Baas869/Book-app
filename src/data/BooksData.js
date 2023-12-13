// import {v4 as uuidv4} from 'uuid'
import { createContext, useState, useEffect } from "react";


const BookContext = createContext()

export const BookContextProvider = ({ children }) => {

    const [bookLists, setBookLists] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [editBookitems, setEditBookItems] = useState({
        books: {},
        edit: false
    })

    useEffect(() =>{
        fetchBooksData()
    }, [])

    const fetchBooksData = async () =>{
        const response = await fetch('/booksfeedback?_sort=id&_order=desc')
        const data = await response.json()

        setBookLists(data)
        setIsLoading(false)
    }
    const deleteBook = async (id) =>{
        if(window.confirm('Are you sure, you want to delete book')){
            await fetch(`/booksfeedback/${id}`, {method: 'DELETE'})
            setBookLists(bookLists.filter((book) => book.id !== id))
        }
   }

   const addBooks = async (newBooks) =>{
    const response = await fetch('/booksfeedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newBooks)
    })
    const data = await response.json()

    setBookLists([data, ...bookLists])
}
const editBook = (books) =>{
    setEditBookItems({
        books,
        edit: true
    })
}
    const updateEditBook = async (id, updateBooks) => {
        const response = await fetch(`/booksfeedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateBooks)
        })
        const data = await response.json()
        setBookLists(bookLists.map((book) => book.id === id ? {...book, ...data} : book))
    }

    return <BookContext.Provider value={{bookLists,
        editBookitems,
        isLoading,
        deleteBook,
        addBooks,
        editBook,
        updateEditBook,
        setEditBookItems
    
    }}>
        {children}
    </BookContext.Provider>
}

export default BookContext