import React, { useState } from "react";
import SignUpPage from "./SignUpPage";
import "../styles/Login.css";

const LoginPage = () => {
	const [show, setShow] = useState(false);
	return (
		<div className="login">
			<div className="login__background">
				<a href="/"><img
					src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
					alt="login background"
					className="login__logo"
				/></a>
				<button className="login__signInButton" onClick={() => setShow(true)}>
					Sign In
				</button>
				<div className="login__gradient"></div>
			</div>
			<div className="login__body">
				{show ? (
					<SignUpPage />
				) : (
					<>
						<h1>Unlimited films, TV programmes and more.</h1>
						<h2>Watch anywhere. Cancel anytime.</h2>
						<h5>
							Ready to watch? Enter your email to create or restart your
							membership
						</h5>
						<div className="login__input">
							<form>
								<input
									className="email"
									type="email"
									placeholder="Email address"
								/>
								<button className="submit" onClick={() => setShow(true)}>
									GET STARTED
								</button>
							</form>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default LoginPage;
