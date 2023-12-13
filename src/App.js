import Header from "./components/Header"
import BooksItems from "./components/BooksItems"
import BookForm from "./components/BookForm"
import { BookContextProvider } from './data/BooksData'

function App() {
    
  
    return(
        <>
            <BookContextProvider>
                <Header />
                <div className='container'>
                    <BookForm />
                    <BooksItems  />
                </div>
            </BookContextProvider>
        </>
       
    )
}

export default App