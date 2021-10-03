import React, { useRef } from "react";
import "../styles/SignUpPage.css";
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "../config/firebase";

const SignUpPage = () => {
	const emailRef = useRef();
	const passwordRef = useRef();

	const signIn = async(e) => {
		try {
			e.preventDefault();
			await signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
		} catch (error) {
			alert(error);
		}
	};

	const signUp = async (e) => {
		try {
			e.preventDefault();
			await createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value);
		} catch (error) {
			alert(error);
		}
	};

	return (
		<div className="signUpPage">
			<form>
				<h1>Sign In</h1>
				<input ref={emailRef} type="email" placeholder="Email" />
				<input ref={passwordRef} type="password" placeholder="Pasword" />
				<button type="submit" onClick={signIn}>
					Sign In
				</button>
			</form>
			<h4>
				<span className="signUpPage__gray">New to Netflix?</span>{" "}
				<span className="signUpPage__link" onClick={signUp}>
					Sign up now.
				</span>
			</h4>
		</div>
	);
};

export default SignUpPage;
