import { Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
	const location = useLocation()
	const navigate = useNavigate()

	const {createUser} = useContext(AuthContext)

	const handleRegister = (e) => {
		e.preventDefault();
		// const name = e.target.name.value;
		// const photo = e.target.photo.value;
		// const email = e.target.email.value;
		// const password = e.target.password.value;
		// console.log(name, photo, email, password);

		const form = new FormData(e.currentTarget)
		const name = form.get("name")
		const photo = form.get("photo")
		const email = form.get("email")
		const password = form.get("password")
		console.log(name, photo, email, password);

		// create user
		createUser(email, password)
		.then(result => {
			console.log(result.user);

			// navigate after registration
			navigate(location?.state ? location.state : "/")
		})
		.catch(error => {
			console.error(error.message);
		})

	}

	return (
		<div>
			<Navbar></Navbar>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col ">
					<div className="text-center ">
						<h1 className="text-4xl text-dark-2 font-semibold">Register your account</h1>
					</div>
					<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
						<form onSubmit={handleRegister} className="card-body">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Your Name </span>
								</label>
								<input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Photo  URL </span>
								</label>
								<input type="text" name="photo" placeholder="Enter Your image Url" className="input input-bordered" required />
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email </span>
								</label>
								<input type="email" name="email" placeholder="email" className="input input-bordered" required />
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input type="password" name="password" placeholder="password" className="input input-bordered" required />

								<div className="flex items-center justify-between gap-3 mt-3">
									<input type="checkbox" name="check" id="" />
									<p>Accept <Link to={""}>Term & Conditions</Link></p>
								</div>
							</div>
							<div className="form-control mt-6">
								<button className="btn btn-primary">Register</button>
							</div>
						</form>
						<Toaster />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;