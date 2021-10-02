import React, { useState, useEffect } from "react";
import instance from "../api/axios";
import "../styles/Row.css";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const fetchMovies = async () => {
			const { data } = await instance.get(fetchUrl);
			setMovies([...movies, ...data.results]);
			return data;
		};
		fetchMovies();
	}, [fetchUrl]);

	return (
		<div className="row">
			<h1 className="row__title">{title}</h1>
			<div class="row__posters">
				{
					movies.map(
						(movie) =>
							((isLargeRow && movie.poster_path) ||
								(!isLargeRow && movie.backdrop_path)) && (
								<img
									src={`https://image.tmdb.org/t/p/original${
										isLargeRow ? movie.poster_path : movie.backdrop_path
									}`}
									alt={movie.name}
									className={`row__poster ${isLargeRow && "row__poster-large"}`}
									key={movie.id}
								/>
							)
					)
				}
			</div>
		</div>
	);
};

export default Row;
