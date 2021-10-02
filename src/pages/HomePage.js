import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Row from "../components/Row";
import "../styles/HomePage.css";
import requests from "../api/Requests";

const HomePage = () => {
	return (
		<div className="home-screen">
			<Navbar />
			<Banner />
			<Row
				title="TRENDING"
				fetchUrl={requests.fetchTrending}
				isLargeRow={true}
			/>
			<Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
			<Row title="ACTION" fetchUrl={requests.fetchActionMovies} />
			<Row title="COMEDY" fetchUrl={requests.fetchComedyMovies} />
			<Row title="HORROR" fetchUrl={requests.fetchHorrorMovies} />
		</div>
	);
};

export default HomePage;
