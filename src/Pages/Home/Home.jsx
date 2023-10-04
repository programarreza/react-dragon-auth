import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BrakingNews from "./BrakingNews";
import News from "./News";

const Home = () => {

	const newses = useLoaderData()

	return (
		<div>
			<Header></Header>
			<BrakingNews></BrakingNews>
			<Navbar></Navbar>
			<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
				<div className="border-2">
					<LeftSideNav></LeftSideNav>
				</div>

				<div className="border-2 md:col-span-2">
					<h2 className="text-3xl">Dragon News Home</h2>
					{
						newses.map(news => <News 
							key={news._id}
							news={news}
						></News>)
					}
				</div>

				<div className="">
					<RightSideNav></RightSideNav>
				</div>
			</div>
		</div>
	);
};

export default Home;