import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<div className="header">
			<div className="header__nav">
				<NavLink to='/home' activeClassName='active-link'>Home</NavLink>
				<div>
					<NavLink to='/rooms' activeClassName='active-link'>Rooms</NavLink>
					<NavLink to='/login' activeClassName='active-link'>Login</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Header;

