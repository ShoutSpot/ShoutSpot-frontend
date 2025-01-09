import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router";
import useOutsideClick from "../customHooks/useOutsideClick";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { toggleIsLoggedIn } from "../features/LoginSlice";
import { toast } from 'react-toastify';
import axios from "axios";
import circleImage from '../../public/circle.png';



export function Navbar2 () {
    
    const isLoggedIn = useSelector((state: RootState) => {return state.loginProps.isLoggedIn});
    const [photoUrl, setPhotoUrl] = useState(localStorage.getItem('photoURL') || "/userlogo.png");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleNavigate() {
        navigate('/signin');  // Adjust the path as needed
    }

    const dropdownRef = useRef<HTMLDivElement>(null);

    useOutsideClick(dropdownRef, () => {
        if (isDropdownOpen) setIsDropdownOpen(false);
    });

    useEffect(() => {
        if (localStorage.getItem('token')) dispatch(toggleIsLoggedIn()); 
    }, [])

    useEffect(()=> {
        
        setPhotoUrl(localStorage.getItem('photoURL') || "/userlogo.png");
    }, [isLoggedIn])

    function handleSignupNavigate() {
        navigate('/signup');  // Adjust the path as needed
    }

    function handleSignOut() {
        dispatch(toggleIsLoggedIn());
        setIsDropdownOpen(false);
        localStorage.removeItem('token');
        navigate("/");
    }

    const notify = () => {
        toast("This is a testing toast notification !");
    }

    const notifySuccess = () => {
        toast.success("SignIn Successful !");
    }

    const notifyFailure = (message: any) => {
        toast.error(message);
    }

    const handleGuestSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const url = import.meta.env.VITE_API_URL || 'http://localhost:4000';
            const response = await axios.post(`${url}/api/login`, {
                email: "guest@gmail.com",
                password: "shoutspot@2025",
                googleSignIn: false
            });

            localStorage.setItem("token", response.data.token);
            dispatch(toggleIsLoggedIn());
            notifySuccess();
            navigate("/dashboard");
        } catch (error) {
            notifyFailure("Failed to sign in with email/password.");
        }
    };

    return (
        <>
            <nav className="bg-white dark:bg-gray-900 fixed w-full z-30 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
                    <a href="/dashboard" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={circleImage} alt="Description" className="h-8 w-8" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ShoutSpot</span>
                    </a>

                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">HomePage</a>
                            </li>
                            <li>
                                <a href="/dashboard" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Dashboard</a>
                            </li>
                        </ul>
                    </div>

                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse justify-around">
                        {!isLoggedIn ?
                            (<>
                                <button style={{marginRight: "20px"}} type="button" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleGuestSignIn}>Guest Sign In(for recruiters)</button>
                                <button style={{marginRight: "20px"}} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleNavigate}>Sign In</button>
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleSignupNavigate}>Sign Up</button>

                            </>)
                            :
                            (<>
                                <button type="button"
                                    className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button"
                                    aria-haspopup="true"
                                    aria-expanded={isDropdownOpen}
                                    data-dropdown-toggle="user-dropdown"
                                    data-dropdown-placement="bottom"
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                >
                                    <span className="sr-only">Open user menu</span>
                                    <img className="w-8 h-8 rounded-full" src={photoUrl} loading="lazy" onError={(e) => e.currentTarget.src = "/userlogo.png"} alt="user photo" />
                                </button>
                                {
                                    isDropdownOpen &&
                                    <div ref={dropdownRef} className="origin-top-right absolute right-7 top-12 mt-2 w-56 rounded-md border bg-gray-800 border-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none cursor-pointer" aria-labelledby="headlessui-menu-button-46" id="headlessui-menu-items-88" role="menu" tabIndex={0}>
                                        <div className="py-1" role="none">
                                            <a className="text-white hover:bg-gray-700 block py-2 px-4 text-sm" id="headlessui-menu-item-89" role="menuitem" tabIndex={-1} href="/dashboard" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>Dashboard</a>
                                            <a className="text-white hover:bg-gray-700 block py-2 px-4 text-sm" id="headlessui-menu-item-91" role="menuitem" tabIndex={-1} href="#" onClick={() => {setIsDropdownOpen(!isDropdownOpen); notify()}}>Settings</a>
                                            <button className="w-full block py-2 px-4 text-sm text-left text-white hover:bg-gray-700" id="headlessui-menu-item-94" role="menuitem" tabIndex={-1} onClick={handleSignOut}>Sign out</button>
                                        </div>
                                    </div>
                                }
                            </>
                            )
                        }
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-8 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                </div>
                
            </nav>
        </>
    )
}