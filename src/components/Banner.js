import React from "react";
import "../styles/Banner.css";

const Banner = () => {
	return (
		<header
			className="banner"
			style={{
				backgroundSize: "cover",
				backgroundPosition: "center center"
			}}>
			<div className="banner__content">
				<h1 className="banner__title">Movie name</h1>
				<div className="banner__buttons">
					<button className="banner__button">Play</button>
					<button className="banner__button">My List</button>
				</div>
				<div className="banner__description">Test description</div>
			</div>
			<div className="banner-fadeBottom" />
		</header>
	);
};

export default Banner;
