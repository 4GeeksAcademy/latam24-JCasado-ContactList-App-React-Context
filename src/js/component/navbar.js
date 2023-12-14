import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="container-fluid d-flex justify-content-center navbar navbar-grey bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"> Jorge's agenda </span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary"> Go back </button>
				</Link>
			</div>
		</nav>
	);
};
