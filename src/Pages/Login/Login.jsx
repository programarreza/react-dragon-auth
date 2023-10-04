import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";
const Login = () => {
	const location = useLocation()
	const navigate = useNavigate()
	console.log("location in the login page", location);


	const { signIn } = useContext(AuthContext)
	const handleLogin = (e) => {
		e.preventDefault();
		// const email = e.target.email.value;
		// const password = e.target.password.value;
		// console.log(email, password);
		const form = new FormData(e.currentTarget);
		const email = form.get("email");
		const password = form.get("password");
		console.log(email, password);

		signIn(email, password)
			.then(() => {
				console.log("Login successful");

				// navigate after login
				navigate(location?.state ? location.state : "/");
			})
			.catch(error => {
				console.log(error.message);
			})

	}

	return (
		<>
			<Navbar></Navbar>
			<div className="hero min-h-[90vh] bg-base-200">
				<div className="hero-content flex-col ">
					<div className="text-center ">
						<h1 className="text-4xl text-dark-2 font-semibold">Login your account</h1>
					</div>
					<div className="card flex-shrink-0 w-[400px] max-w-lg shadow-2xl bg-base-100">
						<form onSubmit={handleLogin} className="card-body">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email address</span>
								</label>
								<input type="email" name="email" placeholder="email" className="input input-bordered" required />
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input type="password" name="password" placeholder="password" className="input input-bordered" required />
								<label className="label">
									<a href="#" className="label-text-alt link link-hover">Forgot password?</a>
								</label>
							</div>

							<div className="form-control mt-6">
								<input type="submit" className="btn btn-primary" value="Login" />
							</div>

							<p>Dont Have An Account ? <Link className="text-rose" to={"/register"}>Register</Link></p>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;