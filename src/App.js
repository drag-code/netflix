import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth, onAuthStateChanged } from "./config/firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				dispatch(login({
					uid: user.uid,
					email: user.email
				}));
			} else {
				dispatch(logout());
			}
		});
		return unsubscribe;
	}, [dispatch]);
	return (
		<div className="app">
			<Router>
				{user == null ? (
					<LoginPage />
				) : (
					<Switch>
						<Route exact path="/">
							<HomePage />
						</Route>
						<Route path="/profile">
							<ProfilePage />
						</Route>
					</Switch>
				)}
			</Router>
		</div>
	);
}

export default App;
