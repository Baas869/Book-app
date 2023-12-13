import TablesData from "./TablesData"
import PropTypes from 'prop-types'
import BookContext from "../data/BooksData"
import { useContext } from "react"
import Spinner from "./shared/Spinner"



function BooksItems() {

  const { bookLists, isLoading } = useContext(BookContext)


  if(!isLoading && (!bookLists || bookLists.length === 0)){
    return <p>No book added yet</p>
  }
  if(isLoading){
    return<p><Spinner /></p>
  }
  return (
    <div className='input-collection-table'>
      
        <div className='mg'>Books Availabe : ({bookLists.length})</div>

      <div className="input-table">
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>ISBN#</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody id="book-list">
                {bookLists.map((book) =>(
                    <TablesData key={book.id} book={book} />
                ))}
            </tbody>
        </table>

      </div>
    </div>

  )
}
BooksItems.propTypes ={
  bookLists: PropTypes.array,
  
}


export default BooksItems
