import { useEffect, useState, useContext } from "react"
import BookApp from "./shared/BookApp"
import Button from "./shared/Button"
import BookContext from '../data/BooksData'

function BookForm() {
    const { addBooks, editBookitems, updateEditBook, setEditBookItems } = useContext(BookContext)

    useEffect(() => {
        if(editBookitems.edit === true){
            setBookItems(editBookitems.books)
            setIsbnDisabled(true)
            setTextCondition('ISBN can\'t be modify')            
        }
    }, [editBookitems])
    const [bookItems, setBookItems] = useState({
        title: '',
        author: '',
        isbn: ''
    })
   
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [isbnDisabled, setIsbnDisabled] = useState(false)
    const [textCondition, setTextCondition] = useState()
   
    const handleInput = (e) => {
        setBookItems({...bookItems,
            [e.target.name]: e.target.value,
        })
        
    } 


    useEffect(() =>{
        if(editBookitems.edit === false){
            if(bookItems?.isbn.length > 1 ){
                setTextCondition('ISBN must be 4 digits number')
            }else  if(bookItems?.isbn.length < 1){
                setTextCondition('')
            }
        }
        
        if(bookItems?.title !== '' && bookItems?.author !== '' && bookItems?.isbn.length === 4){
           
            setBtnDisabled(false)
            setIsbnDisabled(true)
        }else{
            setBtnDisabled(true)
        }

    }, [bookItems])
    const handleBook = (e) =>{
        
        if(!btnDisabled){
            e.preventDefault()
            if(editBookitems.edit === true){
                updateEditBook(editBookitems.books.id, bookItems)
            }else{
                addBooks(bookItems)
            }
            setBookItems({
                title: '',
                author: '',
                isbn: ''
            })
            setBtnDisabled(true)
            setIsbnDisabled(false)
            setEditBookItems({...editBookitems, 
                books: {},
                edit: false
            })
        }
       
    }
    const clearInputs = (e) =>{
        setBookItems({
            title: '',
            author: '',
            isbn: ''
        })
        setBtnDisabled(true)
        setIsbnDisabled(false)
        setEditBookItems({...editBookitems, 
            books: {},
            edit: false
        })
        
        e.preventDefault()
    }
  return (
    <BookApp className='book-app'>
        <form onSubmit={handleBook}>
            <h2 className='mg-t mg-b'>Add Book</h2>
            <div className='mg-t mg-b'>
                <input onChange={handleInput} type='text' 
                className='input-primary'
                name='title'
                placeholder='Book Title ' 
                value={bookItems.title}
                />
            </div>
            <div className='mg-t mg-b'>
                <input onChange={handleInput} 
                className='input-primary' type='text' 
                name='author'
                placeholder='Book Author' 
                value={bookItems.author}
                />
                
            </div>
            <div className='mg-t mg-b'>
                <input onChange={handleInput} 
                className='input-primary' type='number' 
                name='isbn'
                placeholder='ISBN' 
                value={bookItems.isbn}
                disabled={isbnDisabled} 
                />
                <div className='mg-b' style={{fontStyle: 'italic'}}>{textCondition}</div>
            </div>
            {/* add radio button to reset the input */}
            <button onClick={clearInputs} className='btn-primary mg' style={{padding: '5px', color: '#fff', fontSize: '13px', cursor: 'pointer'}}>clear inputs</button>
            {/* add submit button */}
            <Button version='primary' isDisabled={btnDisabled}>Add book</Button>
        </form>
    </BookApp>
    
  )
}

export default BookForm
