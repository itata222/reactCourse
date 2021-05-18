import React from "react";
// import RouterExmple from "./react-tutorial-playground/rouer-example/RouterExample";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
// import LoginPage from "./components/login/LoginPage";
import Chatroom from "./components/chatroom/Chatroom";


const App = () => (
	<div>
		<Header />
		{/* <LoginPage /> */ }
		<Chatroom />
		<Footer />
		{/* <RouterExmple /> */ }
	</div>
);

export default App;

// אנא צרו ראוטינג לאתר;
// home;
// login;
// ליצור קומפוננטה ל;
// rooms;
// בתוך הקומפוננטה הזו יש ליצור רשימת חדרים שכאשר לוחצים על אחד מהם עובדרים לאותו החדר;
// בחדר צ'ט יש להוסיף בכותרת של שם החדר את השם הספציפי;
// בנוסף בקומפוננטת החדרים יש להוסיף אינפוט וכפתור שמאפשר לגשת לחדר חדש;
// בתוך הלוגין והסבסקרייב יש לנווט לחדרים כאשר לוחצים סאבמיט;
// בתוך ההדר צרו סימון למיקום של המשתמש באתר;
