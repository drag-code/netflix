import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
	const [show, setShow] = useState(false);

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
		<div className={`nav ${show && "bg-black"}`}>
			<div className="nav__content">
				<img
					src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
					alt=""
					className="nav__logo"
				/>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
					alt=""
					className="nav__avatar"
				/>
			</div>
		</div>
	);
};

export default Navbar;
