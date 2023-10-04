import { useContext } from "react";
import { AiFillGithub, AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
	const { googleLogin, githubLogin } = useContext(AuthContext)
	// console.log(12, googleLogin);

	return (
		<>
			<div className="p-4 space-y-3 mb-4">
				<h2 className="text-3xl mb-2">Login With </h2>
				<button onClick={googleLogin} className="btn w-full btn-outline">
					<FcGoogle />
					Login with Google
				</button>
				<button onClick={githubLogin} className="btn w-full btn-outline">
					<AiFillGithub />
					Login with Github
				</button>
			</div>

			{/* social login */}
			<div className="p-4 space-y-0">
				<h2 className="text-3xl mb-2">Find Us On </h2>
				<a href="https://www.facebook.com" className="flex items-center gap-2 text-2xl border  rounded-t-lg py-4 pl-4">
					<BsFacebook></BsFacebook>
					Facebook
				</a>
				<a href="https://twitter.com" className="flex items-center gap-2 text-2xl  border-x py-4 pl-4">
					<AiFillTwitterCircle></AiFillTwitterCircle>
					Twitter
				</a>
				<a href="https://www.instagram.com/" className="flex items-center gap-2 text-2xl border rounded-b-lg  py-4 pl-4">
					<AiOutlineInstagram></AiOutlineInstagram>
					Instagram
				</a>
			</div>

			{/* Q zone */}
			<div className="p-4 space-y-3 mb-4">
				<h2 className="text-3xl mb-2">Q Zone</h2>

				<img src={qZone1} alt="" />
				<img src={qZone2} alt="" />
				<img src={qZone3} alt="" />
			</div>
		</>
	);
};

export default RightSideNav;