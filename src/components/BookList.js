import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class BookList extends Component {
	static contextType = ThemeContext;
	render() {
		const { isLightTheme, light, dark } = this.context;
		const theme = isLightTheme ? light : dark;
		return (
			<div
				className="book-list"
				style={{
					background: theme.bg,
					color: theme.text,
				}}
			>
				<h2>Book List</h2>
				<ul>
					<li style={{ background: theme.ui }}>the way of kings 1</li>
					<li style={{ background: theme.ui }}>the way of kings 2</li>
					<li style={{ background: theme.ui }}>the way of kings 3</li>
				</ul>
			</div>
		);
	}
}

export default BookList;
