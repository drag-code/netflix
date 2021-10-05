import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = ({subscription}) => {
	const [show, setShow] = useState(false);
	const history = useHistory();

	const transitionNavbar = () => {
		if (window.scrollY > 100) {
			setShow(true);
		} else {
			setShow(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", transitionNavbar);
		return () => {
			window.removeEventListener("scroll", transitionNavbar);
		};
	}, []);

	return (
		<div className={`nav ${show && 'bg-black'}`}>
			<div className="nav__content">
				<img
					src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
					alt=""
					className="nav__logo"
					onClick={() => subscription?.name && history.push("/")}
				/>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
					alt=""
					className="nav__avatar"
					onClick={() => history.push("/profile")}
				/>
			</div>
		</div>
	);
};

export default Navbar;
