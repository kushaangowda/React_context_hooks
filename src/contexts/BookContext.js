import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
	const [books, setBooks] = useState([
		{ title: "kings 1", id: 1 },
		{ title: "kings 2", id: 2 },
		{ title: "kings 3", id: 3 },
		{ title: "kings 4", id: 4 },
	]);

	return (
		<BookContext.Provider value={{ books }}>
			{props.children}
		</BookContext.Provider>
	);
};

export default BookContextProvider;
