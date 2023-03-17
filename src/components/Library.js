import  books  from "../data/books.json";
import {formatIsbn }from "../utils/functions";

function Library({setBook}) {
    
    return (
        <div className='library'>
            {books.books.map(book=>{
                return (
                    <span 
                        className='isbn-number' 
                        key={book.isbn} 
                        onClick={() =>{
                            setBook(book)
                        }}>
                        <span>{formatIsbn(book.isbn)}</span>
                        <span style={{marginLeft:'30px'}}>{">"}</span>
                    </span>)
            })}
        </div>
  )
}

export default Library