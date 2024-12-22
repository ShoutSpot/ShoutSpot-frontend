import React, { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebaseConfig";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useDispatch } from "react-redux";
import { toggleIsLoggedIn } from "../../features/LoginSlice";

export const Signup: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState<string | null>(null);

    // Handle form input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    // Handle Google Sign-Up
    const handleGoogleSignUp = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
        
            // Send user details to backend to complete sign-up
            const url = 'http://localhost:3000/api/signup';
            const response = await axios.post(url, {
                googleUID: user.uid,
                email: user.email,
                firstname: user.displayName,
                googleSignUp: true
            });
    
            // Check for specific status code using Axios response
            if(response.status === 409){
                setError("You already have an account. Please sign in instead.");
                return;
            }

    
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("photoURL", user.photoURL || "/userlogo.png");
            dispatch(toggleIsLoggedIn());
            navigate("/dashboard"); 
        } catch (error) {
            setError("Google sign-up failed.");
        }
    };

    // Handle Email/Password Sign-Up
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const url = 'http://localhost:3000/api/signup';
            const response = await axios.post(url, {
                email: formData.email,
                firstname: formData.name,
                password: formData.password,
                googleSignUp: false
            });
    
            localStorage.setItem("token", response.data.token); // Store JWT token immediately after checking status
    
            console.log("Manual signUp successful ", response.data);
        } catch (error: any) {
            if (error.response) {
                setError(error.response.data.error);
            }
        }
    };

    return (
        <main className="flex-grow">
            <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true"></div>
            <section className="relative">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                        <div className="max-w-3xl mx-auto text-center pb-12">
                            <h2 className="mt-6 text-3xl font-extrabold text-white">Sign up</h2>
                        </div>
                        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
                            {error && <div className="text-red-500 text-center mb-4">{error}</div>}
                            <div>
                                <div className="flex flex-wrap bg-gray-50">
                                    <div className="w-full">
                                        <button
                                            type="button"
                                            className="btn px-0 text-white bg-gray-50 hover:bg-gray-100 w-full relative flex items-center py-3"
                                            onClick={handleGoogleSignUp}
                                        >
                                            <img className="mx-4 h-5 w-5 object-contain" src="/google.png" alt="Google" />
                                            <span className="h-6 flex items-center border-r border-gray-300 mr-4" aria-hidden="true"></span>
                                            <span className="flex-auto pl-16 pr-8 -ml-16 text-gray-600">Sign up with Google</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center my-6">
                                <div className="border-t border-gray-500 dark:border-gray-300 border-dotted flex-grow mr-3" aria-hidden="true"></div>
                                <div className="text-gray-500 dark:text-gray-400">Or, register with your email</div>
                                <div className="border-t border-gray-500 dark:border-gray-300 border-dotted flex-grow ml-3" aria-hidden="true"></div>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-wrap -mx-3 mb-4">
                                    <div className="w-full px-3">
                                        <label
                                            className="block text-gray-500 dark:text-gray-300 text-sm font-medium mb-1"
                                            htmlFor="name"
                                        >
                                            First name <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            className="form-input w-full text-gray-600 dark:text-gray-800"
                                            placeholder="Your first name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-4">
                                    <div className="w-full px-3">
                                        <label
                                            className="block text-gray-500 dark:text-gray-300 text-sm font-medium mb-1"
                                            htmlFor="email"
                                        >
                                            Email <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            className="form-input w-full text-gray-600 dark:text-gray-800"
                                            placeholder="you@example.com"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-4">
                                    <div className="w-full px-3">
                                        <label
                                            className="block text-gray-500 dark:text-gray-300 text-sm font-medium mb-1"
                                            htmlFor="password"
                                        >
                                            Password <span className="text-red-600">*</span>
                                        </label>
                                        <input
                                            id="password"
                                            type="password"
                                            className="form-input w-full text-gray-600 dark:text-gray-800"
                                            placeholder="Password"
                                            required
                                            value={formData.password}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-wrap mt-6 bg-blue-600 hover:bg-blue-700">
                                    <div className="w-full">
                                        <button type="submit" className="btn text-white w-full py-3">
                                            Sign up
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div className="text-gray-600 dark:text-gray-400 text-center mt-4 text-sm">
                                Already have an account?{" "}
                                <a
                                    className="text-blue-600 hover:text-gray-600 dark:hover:text-gray-200 transition duration-150 ease-in-out"
                                    href="/signin"
                                >
                                    Sign in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};
