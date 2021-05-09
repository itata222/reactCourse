import React, { useState } from "react";

const LoginForm = (props) => {
	const [email, setEmail] = useState("");
	// const emailState = useState("");
	const [password, setPassword] = useState("");
	const [isEmailinputValid, setIsEmailInputValid] = useState(true);
	const [isPasswordInputValid, setIsPasswordInputValid] = useState(true);

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
	};

	const onClickSubscribe = () => {
		props.setIsLoginMode(false);
	};

	return (
		<div className="login-form">
			<h3>Login</h3>
			<form onSubmit={onSubmitform}>
				<input placeholder="Email" onBlur={onBlurEmailInput} />
				{!isEmailinputValid && <div className="invalid-message">You must enter your email.</div>}
				<input type="password" placeholder="Password" onBlur={onBlurPasswordInput} />
				{!isPasswordInputValid && <div className="invalid-message">You must enter your password.</div>}
				<div className="login-form__nav">
					<button type="submit" disabled={isFormInavlid()}>Submit</button>
					<div onClick={onClickSubscribe}>Subscribe</div>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
