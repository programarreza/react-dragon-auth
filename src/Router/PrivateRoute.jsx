import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { MoonLoader } from "react-spinners";

const PrivateRoute = ({children}) => {
	const {user, loading} = useContext(AuthContext)
	const location = useLocation()

	if(loading){
		return <div className="h-[100vh] flex items-center  justify-center">
			<MoonLoader color="#000" />
		</div>
	}
	else if(user) {
		return children;
	}
	return <Navigate state={location.pathname} to={"/login"}></Navigate>

};

export default PrivateRoute;

PrivateRoute.propTypes = {
	children: PropTypes.node
}