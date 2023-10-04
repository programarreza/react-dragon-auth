import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [loading, setLoading] = useState(true)
	

	// sign Up
	const createUser = (email, password) => {
		setLoading(true)
		return createUserWithEmailAndPassword(auth, email, password);
	}


	// sign In
	const signIn = (email, password) => {
		setLoading(true)
		return signInWithEmailAndPassword(auth, email, password);
	}

	// sign Out
	const logOut = () => {
		setLoading(true)
		return signOut(auth);
	}


	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, currenUser => {
			console.log("use in the auth state change", currenUser);
			setUser(currenUser);
			setLoading(false);
		})
		return () => {
			unSubscribe();
		}
	}, [])

	const authValue = {
		user,
		loading,
		createUser,
		logOut,
		signIn,
	}

	return (
		<AuthContext.Provider value={authValue}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;

AuthProvider.propTypes = {
	children: PropTypes.node
}