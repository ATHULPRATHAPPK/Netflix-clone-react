import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const { user, signUp } = UserAuth();
    const navigate = useNavigate();

    function emailHandler(event) {
        setEmail(event.target.value);
    }

    function passwordHandler(event) {
        setPassword(event.target.value);
    }

    async function handleFormSubmit(event) {
        event.preventDefault();
        setLoading(true);
        setError("");
        try {
            await signUp(email, password);
            navigate("/");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="w-full h-screen">
            <img className="hidden sm:block absolute w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="Background" />
            <div className="bg-black/70 fixed top-0 left-0 w-full h-screen" />
            <div className="fixed w-full px-4 py-24 z-20">
                <div className="max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg">
                    <div className="max-w-[320px] mx-auto py-16">
                        <h1 className="text-3xl font-nsans-bold">Sign Up</h1>
                        {error && <p className="bg-red-600 p-3 my-2 rounded">{error}</p>}
                        <form onSubmit={handleFormSubmit} className="w-full flex flex-col py-4">
                            <input onChange={emailHandler} className="p-3 my-2 bg-gray-700 rounded" type="email" placeholder="Email" autoComplete="email" required />
                            <input onChange={passwordHandler} className="p-3 my-2 bg-gray-700 rounded" type="password" placeholder="Password" autoComplete="current-password" required />
                            <button className="bg-red-600 py-3 my-6 rounded font-bold" type="submit" disabled={loading}>
                                {loading ? "Signing Up..." : "Sign Up"}
                            </button>
                            <div className="flex justify-between items-center text-gray-600">
                                <p>
                                    <input type="checkbox" className="mr-2" /> Remember me
                                </p>
                                <p>Need Help?</p>
                            </div>
                            <p className="my-4">
                                <span className="text-gray-600 mr-2">Already subscribed to Netflix?</span>
                                <Link to="/log-in">Sign in</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
