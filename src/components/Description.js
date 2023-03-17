import { formatIsbn, formatAppendix } from '../utils/functions';

function Description({ book, setBook, isMobile, setIsMobile }) {
	return (
		<div className='description'>
			{isMobile && (
				<span className='backBtn' onClick={() => setBook(null)}>
					{`< Back`}
				</span>
			)}

			<img
				className='bookCover'
				src={`/covers/${book.isbn}.jpg`}
				alt='cover'
			></img>
			<div className='bookInformation'>
				<p className='bookTitle'>{book.title}</p>
				<p className='bookData'>{`ISBN: ${formatIsbn(book.isbn)}`}</p>
				<p className='bookData'>{`Appendix: ${formatAppendix(
					book.appendixPage
				)}`}</p>
			</div>
		</div>
	);
}

export default Description;
