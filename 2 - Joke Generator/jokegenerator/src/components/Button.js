import React from "react";

const Button = (props) => {
	return <button onClick={props.callApi} className="transition duration-500 bg-red-500 hover:bg-red-600 active:bg-red-400 text-white rounded-xl p-4">Generate a joke</button>;
}

export default Button;