import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { logoutAction } from "../../actions/loginActions";
import { LoginContext } from "../../context/LoginContext";
import { deleteUserFromCookie } from "../../cookies/cookies";

const Header = () => {
	const { userData, dispatchUserData } = useContext(LoginContext);
	const history = useHistory();

	const onClickLogout = () => {
		dispatchUserData(logoutAction());
		deleteUserFromCookie();
		history.push("/home");
	};

	return (
		<div className="header">
			<div className="header__nav">
				<NavLink className="home-nav" to="/home" activeClassName="header__active-link">
					Home
				</NavLink>
				<div>
					<NavLink to="/rooms" activeClassName="header__active-link">Rooms</NavLink>
					{
						!!userData.user ?
							<div className="header__logout-nav" onClick={ onClickLogout }>Logout</div> :
							<NavLink to="/login" activeClassName="header__active-link">Login</NavLink>
					}
				</div>
			</div>
		</div>
	);
};

export default Header;

// צרו שתי קומפוננטות
// לוגין פייג' שתהיה בגודל של כל העמוד מלבד ההדר
// מתחתיה צרו קומפוננטה של פוטר
// שבתוכה שני לינקים
// about us 
// contact us
