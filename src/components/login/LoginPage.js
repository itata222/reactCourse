import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SubscribeForm from "./SubscribeForm";

const LoginPage = (props) => {
	const errorMessage = props.location.state?.needToLogin ? "You must to login!" : "";
	const [isLoginMode, setIsLoginMode] = useState(true);

	return (
		<div className="login-page">
			<div className="login-page__form">
				{ isLoginMode ?
					<LoginForm setIsLoginMode={ setIsLoginMode } errorMessage={ errorMessage } /> :
					<SubscribeForm setIsLoginMode={ setIsLoginMode } /> }
			</div>
		</div>
	);
};

export default LoginPage;

// צרו קומפוננטה של סבסקרייב;
// בתוך הקומפוננטה יש יוזרניים, גיל, אימייל, סיסמה וחזרה על הסיסמה וכפתור סאבמיט;
// ליוזרניים אסור להיות משה;
// גיל צריך להיות מעל 12;
// סיסמה צריכה להכיל 6 תוים לפחות, תו גדול, תו קטן ומספר;
// אימייל צריך להיות תקין;
// והאימייל החוזר צריך להיות זהה לאימייל הראשון;
// לכל האינפוטים מופיעה מסגרת אדומה והודעת שגיאה אם הם לא תקינים או אן נכנסו לתוכם אבל לא הכניסו ערך;
// בכפתרו לא פעיל כל עוד לא הוכנסו ערכים תקינים לכל האינפוטים;
// כאשר לוחצים סאבמיט כל הערכים מודפסים בקונסול;
