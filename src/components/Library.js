import { useState, useEffect } from 'react';

import books from '../data/books.json';
import { formatIsbn, listenerResize } from '../utils/functions';

function Library({ setBook, book }) {
	const classLibrary = book ? 'no-Library' : 'library';

	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		listenerResize(setIsMobile)
	}, []);

	const numberBooks = books.books.length;

	const initialState = numberBooks < 4 ? null : true;

	const [isCollapsed, setIsCollapsed] = useState(initialState);

	const sliceA =
		numberBooks < 4 || !isCollapsed || !isMobile ? books.books.length : 3;

	return (
		<div className={classLibrary}>
			{books.books.slice(0, sliceA).map((book) => {
				return (
					<span
						className='isbn-number'
						key={book.isbn}
						onClick={() => {
							setBook(book);
						}}
					>
						<span>{formatIsbn(book.isbn)}</span>
						<span style={{ marginLeft: '30px' }}>{'>'}</span>
					</span>
				);
			})}
			{isMobile &&
				isCollapsed !== null &&
				(isCollapsed ? (
					<span className='showBtn' onClick={() => setIsCollapsed(false)}>
						show more...
					</span>
				) : (
					<span className='showBtn' onClick={() => setIsCollapsed(true)}>
						show less...
					</span>
				))}
		</div>
	);
}

export default Library;
