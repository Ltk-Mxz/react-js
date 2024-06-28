import React from "react";
import Button from "./Button";

const Joke = () => {
	const [Joke, setJoke] = React.useState("");

	const fetchApi = () => {
		fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
			.then((res) => res.json())
			.then((data) => setJoke(data.joke));
	};

	return (
		<div className="bg-slate-400 h-full w-full text-3xl font-bold flex flex-col justify-evenly items-center gap-4 px-8">
			<p className="text-center">{Joke}</p>
			<Button callApi={fetchApi} /> 
		</div>
	);
}

export default Joke;