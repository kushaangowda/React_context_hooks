import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
	const { isLightTheme, light, dark } = useContext(ThemeContext);
	const theme = isLightTheme ? light : dark;
	const { isAuthenticated, toggleAuth } = useContext(AuthContext);
	return (
		<nav
			style={{
				background: theme.ui,
				color: theme.text,
			}}
		>
			<h1>Context App</h1>
			<button onClick={toggleAuth}>
				{isAuthenticated ? "Logged in" : "Logged out"}
			</button>
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
		</nav>
	);
};

export default Navbar;
