import React from "react";
// import RouterExmple from "./react-tutorial-playground/rouer-example/RouterExample";
import Header from "./components/main/Header";
import Footer from "./components/main/Footer";
import Rooms from './components/rooms/Rooms';
import PageNotFound from './components/pageNotFound/PageNotFound';
import LoginPage from "./components/login/LoginPage";
import Chatroom from "./components/chatroom/Chatroom";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";


const App = () => (
	<BrowserRouter>
		<Header />
		<Switch>
			<Route path='/' exact>
				<Redirect to="/home" />
			</Route>
			<Route path='/home' component={Chatroom}></Route>
			<Route path='/rooms' component={Rooms}></Route>
			<Route path='/login' component={LoginPage}></Route>
			<Route path='*' component={PageNotFound}></Route>
		</Switch>
		<Footer />
	</BrowserRouter>
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
