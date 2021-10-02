import React, { useState, useEffect } from "react";
import "../styles/Banner.css";
import { truncate } from "../util/strings";
import instance from "../api/axios";
import requests from "../api/Requests";

const Banner = () => {
	const [movie, setMovie] = useState([]);
	useEffect(() => {
		const fetchMovie = async () => {
			const { data } = await instance.get(requests.fetchNetflixOriginals);
			setMovie(
				data.results[Math.floor(Math.random() * (data.results.length - 1))]
			);
		};
		fetchMovie();
	}, []);
	return (
		<header
			className="banner"
			style={{
				backgroundSize: "cover",
				backgroundPosition: "center center",
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url("https://image.tmdb.org/t/p/original${
			movie?.backdrop_path || movie?.poster_path
		}")`,
			}}>
			<div className="banner__content">
				<h1 className="banner__title">
					{movie?.title || movie?.name || movie?.original_name}
				</h1>
				<div className="banner__buttons">
					<button className="banner__button">Play</button>
					<button className="banner__button">My List</button>
				</div>
				<div className="banner__description">
					{truncate(movie?.overview, 150)}
				</div>
			</div>
			<div className="banner-fade-bottom" />
		</header>
	);
};

export default Banner;
