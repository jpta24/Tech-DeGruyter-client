import  books  from "../data/books.json";

function Library() {
    const formatIsbn = (isbn) =>{
        return `${isbn.slice(0, 3)}-${isbn.slice(3, 4)}-${isbn.slice(4, 9)}-${isbn.slice(9, 12)}-${isbn.slice(12)}`;
      }

    return (
        <div className='library'>
            {books.books.map(book=>{
                return <span className='isbn-number' key={book.isbn}><span>{formatIsbn(book.isbn)}</span><span style={{marginLeft:'30px'}}>{">"}</span></span>
            })}
        </div>
  )
}

export default Library