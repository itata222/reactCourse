import React from "react";
import ReactDOM from "react-dom";

import "./react-tutorial-playground/01-regular-html-js/databinding.scss";
import validator from "validator";
import { nanoid } from "nanoid";

let title = "React";
let subTitle = "learning in fun and pleasure";
let titleClass = "headline";
let divMouseX = 0;
let divMouseY = 0;
let divMouseClass = "mouse-div";
let isButtonDisabled = false;
let isDivShowExist = true;
let isCircleDiv = true;
let inputMailClass = "";
let isMailInvalid = false;
let messages = [];
let isButtonMessageDisabled = true;
const squares = [];

const onInputInputChangeTitle = (event) => {
	const newTitle = event.target.value.trim();
	if (newTitle.length === 0) {
		title = "React";
		renderUI();
		return;
	}
	title = newTitle;
	console.log(newTitle);
	renderUI();
};

const onMousemoveDivMouse = (event) => {
	// console.log(event.nativeEvent);
	divMouseX = event.nativeEvent.offsetX;
	divMouseY = event.nativeEvent.offsetY;

	if (divMouseX > 150 && divMouseY > 150) {
		divMouseClass = "mouse-div blue";
	}

	if (divMouseX > 150 && divMouseY < 151) {
		divMouseClass = "mouse-div yellow";
	}
	if (divMouseX < 150 && divMouseY > 150) {
		divMouseClass = "mouse-div red";
	}
	if (divMouseX < 151 && divMouseY < 151) {
		divMouseClass = "mouse-div green";
	}

	renderUI();
};

const onClickButtonshow = () => {
	isDivShowExist = !isDivShowExist;
	renderUI();
};

const onChangeSelect = (event) => {
	isCircleDiv = event.target.value === "circle";
	renderUI();
};

const onInputInputEmail = (event) => {
	const email = event.target.value.trim();
	isMailInvalid = email.length > 0 && !validator.isEmail(email);
	inputMailClass = isMailInvalid ? "input-invalid" : "";
	renderUI();
};

const onSubmitFormMessages = (event) => {
	event.preventDefault();
	const message = event.target.children[0].value.trim();
	const id = nanoid();
	messages.push({ message, id });
	console.log(id);
	event.target.children[0].value = "";
	isButtonMessageDisabled = true;
	renderUI();
};

const oninputinputMessage = (event) => {
	const message = event.target.value.trim();
	if (message.length === 0) {
		isButtonMessageDisabled = true;
		renderUI();
	} else if (isButtonMessageDisabled === true) {
		isButtonMessageDisabled = false;
		renderUI();
	}
};

const removeMessage = (index) => {
	messages.splice(index, 1);
	renderUI();
};

const isSquareBlack = (index) => {
	const isEvenColumn = index % 2 === 0;
	const isEvenRow = Math.floor(index / 8) % 2 === 0;

	if (isEvenRow) {
		return isEvenColumn ? false : true;
	} else {
		return isEvenColumn ? true : false;
	}
};

const setSquares = () => {
	for (let i = 0; i < 64; i++) {
		squares.push({ isBlack: isSquareBlack(i), hasApiece: false, id: nanoid() });
	}
};
setSquares();

const onClickSquare = (index) => {
	if (!squares[index].isBlack) return;

	squares[index].hasApiece = !squares[index].hasApiece;
	renderUI();
};

// צרו ריבוע שבתוכו כתוב את מיקום העכבר הפנימי
// הריבוע מחולק לארבעה ריבועים דימיוניים
// שנו את צבע הריבוע לפי מיקום העכבר בהתאם לריבוע הפנימי

// צרו אינפוט של אימייל - כאשר מקלידים והערך איננו אימייל תקין
// מופיעה מסגרת אדומה מסביב לאינפוט ומופיעה אזהרה שהאימייל איננו תקין

// צרו לוח של דמקה
// כאשר לוחצים על משבצת שחורה מופיע כלי במשבצת
// ואם לוחצים שוב על המשבצת אז הכלי הכלי נעלם

const Damka = () => {
	return (
		<div className="board">
			{squares.map((square, i) => (
				<div
					className={square.isBlack ? "square-black" : "square-white"}
					onClick={() => {
						onClickSquare(i);
					}}
					key={square.id}
				>
					{square.hasApiece && <div className="piece"></div>}
				</div>
			))}
		</div>
	);
};

function renderUI() {
	const jsx = (
		<div>
			<h1 className={titleClass}>{title}</h1>
			<h2>{subTitle}</h2>
			<input placeholder="Change title" onInput={onInputInputChangeTitle} />
			<div className={divMouseClass} onMouseMove={onMousemoveDivMouse}>
				x: {divMouseX}; y: {divMouseY}
			</div>
			<button
				disabled={isButtonDisabled}
				onClick={() => {
					alert("I was clicked");
				}}
			>
				{isButtonDisabled ? "Disabled" : "Click on me"}
			</button>
			<button onClick={onClickButtonshow}>{isDivShowExist ? "Remove" : "Show"}</button>
			{isDivShowExist && <div className="div-show">Showing</div>}
			<select onChange={onChangeSelect}>
				<option value="circle">Circle</option>
				<option value="square">Square</option>
			</select>
			{isCircleDiv ? <div className="circle"></div> : <div className="square"></div>}
			<input placeholder="email" className={inputMailClass} onInput={onInputInputEmail} />
			{isMailInvalid && <div className="div-warning">Email invalid</div>}
			{[<div key={"1"}>1</div>, <div key={"2"}>2</div>, <div key={"3"}>3</div>]}
			<form onSubmit={onSubmitFormMessages}>
				<input placeholder="add message" onInput={oninputinputMessage} />
				<button type="submit" disabled={isButtonMessageDisabled}>
					Submit
				</button>
			</form>
			{messages.length === 0 ? (
				<div>No messages</div>
			) : (
				messages.map((message, i) => (
					<div className={i % 2 === 0 ? "blue" : "yellow"} key={message.id}>
						<div className="display-inline-block">{message.message}</div>
						<button
							className="display-inline-block"
							onClick={() => {
								removeMessage(i);
							}}
						>
							Remove
						</button>
					</div>
				))
			)}
			{/* <div className="board">
				{squares.map((square, i) => (
					<div
						className={square.isBlack ? "square-black" : "square-white"}
						onClick={() => {
							onClickSquare(i);
						}}
						key={square.id}
					>
						{square.hasApiece && <div className="piece"></div>}
					</div>
				))}
			</div> */}
			<Damka />
			<Damka />
		</div>
	);
	ReactDOM.render(jsx, document.getElementById("root"));
}
renderUI();
