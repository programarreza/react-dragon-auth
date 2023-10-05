import Marquee from "react-fast-marquee";

const BrakingNews = () => {

	return (
		<div className="flex">
			<button className="btn bg-rose hover:bg-rose">Latest</button>
			<Marquee>
			I can be a React component, multiple React components, or just some text.
			I can be a React component, multiple React components, or just some text.
			I can be a React component, multiple React components, or just some text.
			</Marquee>
			
		</div>
	);
};

export default BrakingNews;