import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { loginAction } from "../../actions/loginActions";
import { LoginContext } from "../../context/LoginContext";
import { saveUserOnCookie } from "../../cookies/cookies";
import { loginToSite } from "../../server/auth";

const LoginForm = (props) => {
	const { dispatchUserData } = useContext(LoginContext);

	const [email, setEmail] = useState("");
	// const emailState = useState("");
	const [password, setPassword] = useState("");
	const [isEmailinputValid, setIsEmailInputValid] = useState(true);
	const [isPasswordInputValid, setIsPasswordInputValid] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		if (props.errorMessage !== "") {
			setErrorMessage(props.errorMessage);
		}
	}, [props.errorMessage]);

	const history = useHistory();

	const isFormInavlid = () => {
		return email === "" || password === "";
	};

	const onBlurEmailInput = (event) => {
		const theEmail = event.target.value.trim();
		if (theEmail === "") {
			setEmail("");
			// emailState[1]("")
			setIsEmailInputValid(false);
		} else {
			setEmail(theEmail);
			setIsEmailInputValid(true);
		}
	};

	const onBlurPasswordInput = (event) => {
		const thePassword = event.target.value.trim();
		setPassword(thePassword === "" ? "" : thePassword);
		setIsPasswordInputValid(thePassword !== "");
	};

	const onSubmitform = (event) => {
		event.preventDefault();
		console.log("login form:", email, password);
		// dispatchUserData(loginAction());
		// history.push("/rooms");
		loginToSite(email, password).then(
			(userData) => {
				dispatchUserData(loginAction(userData));
				saveUserOnCookie(userData);
				history.push("/rooms");
			},
			(err) => {
				if (err.message === "Email or password are invalid.") {
					setErrorMessage(err.message);
				}
			}
		);
	};

	const onClickSubscribe = () => {
		props.setIsLoginMode(false);
	};

	return (
		<div className="login-form">
			<h3>Login</h3>
			{errorMessage !== "" && <div className="error-message">{ errorMessage }</div> }
			<form onSubmit={ onSubmitform }>
				<input placeholder="Email" onBlur={ onBlurEmailInput } />
				{ !isEmailinputValid && <div className="invalid-message">You must enter your email.</div> }
				<input type="password" placeholder="Password" onBlur={ onBlurPasswordInput } />
				{ !isPasswordInputValid && <div className="invalid-message">You must enter your password.</div> }
				<div className="login-form__nav">
					<button type="submit" disabled={ isFormInavlid() }>Submit</button>
					<div onClick={ onClickSubscribe }>Subscribe</div>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
