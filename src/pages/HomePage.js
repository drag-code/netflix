import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import "../styles/HomePage.css";

const HomePage = () => {
	return (
		<div className="home-screen">
			<Navbar />
			<Banner />
		</div>
	);
};

export default HomePage;
