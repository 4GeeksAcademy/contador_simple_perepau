import React from "react";
import Digit from "./digit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

//create your first component
const Home = (props) => {
	return (
		<div className="d-flex flex-row justify-content-center align-items-center text-center bg-dark m-3">
			<div className="d-felx justify-content-center align-items-center m-3 py-3">
				<FontAwesomeIcon icon={faClock} size="6x" className="text-white" />
			</div>
			<Digit digitValue={props.digitSix} />
			<Digit digitValue={props.digitFive} />
			<Digit digitValue={props.digitFour} />
			<Digit digitValue={props.digitThree} />
			<Digit digitValue={props.digitTwo} />
			<Digit digitValue={props.digitOne} />
		</div>
	);
};

export default Home;