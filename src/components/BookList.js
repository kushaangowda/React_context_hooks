import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { ThemeContext } from "../contexts/ThemeContext";

const BookList = () => {
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const theme = isLightTheme ? light : dark;
	const { books } = useContext(BookContext);
	return (
		<div
			className="book-list"
			style={{ background: theme.bg, color: theme.text }}
		>
			<h2>Book List</h2>
			<ul>
				{books.map((book) => {
					return (
						<li style={{ background: theme.ui }} key={book.id}>
							{book.title}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default BookList;
