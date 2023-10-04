import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {

	const [categories, setCategories] = useState([])

	useEffect(() => {
		fetch("categories.json")
		.then(response => response.json())
		.then(data => setCategories(data))

	},[])
	return (
		<div className="space-y-6">
			<h2 className="text-2xl">All categories</h2>
			{
				categories.map(category =>  <Link key={category.id}
					className="block text-xl font-semibold ml-4"
					to={`/categories/${category.id}`}
				>{category.name}
				</Link>)
			}
		</div>
	);
};

export default LeftSideNav;