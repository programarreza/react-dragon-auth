import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BrakingNews = () => {

	return (
		<div className="flex">
			<button className="btn bg-rose hover:bg-rose">Latest</button>
			<Marquee pauseOnHover={true}>
				<Link to={"/"}>I can be a React component, multiple React components, or just some text. I can be a React component, multiple React components, or just some text.</Link>
			</Marquee>
			
		</div>
	);
};

export default BrakingNews;