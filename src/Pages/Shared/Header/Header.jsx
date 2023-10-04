import moment from "moment/moment";
import logo from "../../../assets/logo.png"
const Header = () => {
	return (
		<div className="text-center mt-12">
			<img className="mx-auto" src={logo} alt="logo" />
			<p className="text-lg text-dark-3">Journalism Without Fear or Favour</p>
			<p className="text-xl font-medium text-dark-2">{moment().format("dddd, MMMM d, YYYY")}</p>
		</div>
	);
};

export default Header;