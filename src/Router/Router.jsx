import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
				loader: () => fetch("/news.json")
			},
			{
				path: "/news-details/:id",
				element: <PrivateRoute>
					<NewsDetails></NewsDetails>
				</PrivateRoute>
			},
			{
				path: "/login",
				element: <Login></Login>
			},
			{
				path: "/register",
				element: <Register></Register>
			}
		]
	}
])
export default router;