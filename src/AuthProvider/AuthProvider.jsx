import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)


	// login with google
	const googleProvider = new GoogleAuthProvider();
	const googleLogin = () => {
		setLoading(true)
		return signInWithPopup(auth, googleProvider)
	}

	// Login with Facebook
	const facebookProvider = new FacebookAuthProvider();
	const facebookLogin = () => {
		signInWithPopup(auth, facebookProvider)
	}

	// github login
	const githubProvider = new GithubAuthProvider()
	const githubLogin = () => {
		setLoading(true)
		return signInWithPopup(auth, githubProvider)
	}


	// sign Up with email and password
	const createUser = (email, password) => {
		setLoading(true)
		return createUserWithEmailAndPassword(auth, email, password)
	}

	// sign In with email and password
	const login = (email, password) => {
		setLoading(true)
		return signInWithEmailAndPassword(auth, email, password)
	}

	// sign Out
	const logOut = () => {
		setLoading(true)
		return signOut(auth)
	}

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (user) => {
			setUser(user);
			setLoading(false)
		})
		return () => {
			unSubscribe();
		}
	}, [])


	const AuthInfo = {
		user,
		loading,
		googleLogin,
		facebookLogin,
		githubLogin,
		createUser,
		login,
		logOut,
	}



	return (
		<AuthContext.Provider value={AuthInfo}>
			{children}
		</AuthContext.Provider>

	);
};

export default AuthProvider;

AuthProvider.propTypes = {
	children: PropTypes.node
}