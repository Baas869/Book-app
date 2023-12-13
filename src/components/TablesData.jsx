import {motion, AnimatePresence} from 'framer-motion'
import BookContext from '../data/BooksData'
import * as FaIcons from 'react-icons/fa'
import { useContext } from 'react'

function TablesData({book}) {
  const { deleteBook, editBook } = useContext(BookContext)
  return (
    
      <>
        <tr>
          <td>{book.title}</td>
          <td>{book.author}</td>
          <td>{book.isbn}#</td>
          <td><a href="#" className="edit" onClick={() => editBook(book)} ><FaIcons.FaEdit /></a></td>
          <td><a href="#" className="delete" onClick={() => deleteBook(book.id)}><FaIcons.FaTimes /></a></td>
        </tr>
      </>
   
  )
}


export default TablesData
