import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import { Link, useNavigate } from "react-router-dom";

function AuthPage() {
    const [flag, setFlag] = useState(true);
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    // const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submission here,
        console.log("Email:", email);
        console.log("Password:", password);
    };

    const loginHandler = () => {
        setFlag(true);
    };
    const signUpHandler = () => {
        setFlag(false);
    };
    return (
        <>
            <header className="flex justify-center my-10 ">
                <Link
                    to="/"
                    className="hover:scale-105 primaryTransition bg-slate-200 shadow-xl rounded-full "
                >
                    <img
                        src={process.env.PUBLIC_URL + "/assets/Logo.png"}
                        alt="Logo.png"
                    />
                </Link>
            </header>
            <div className="flex justify-center max-h-full max-w-full">
                <div className="relative px-6 pt-7 pb-3 m-7 before:bg-slate-100 before:rounded-2xl before:shadow-md before:contents-[' '] before:absolute before:bottom-14 before:right-0 before:w-full before:h-full before:-z-10">
                    <div className="flex justify-around mb-5">
                        <button
                            onClick={loginHandler}
                            className={
                                flag
                                    ? "px-4 py-2 text-gray-700 font-bold bg-white rounded-lg shadow-lg min-w-40"
                                    : "px-4 py-2 text-gray-700 bg-slate-100 rounded-lg min-w-40"
                            }
                        >
                            ورود به سایت
                        </button>
                        <button
                            onClick={signUpHandler}
                            className={
                                flag
                                    ? "px-4 py-2 text-gray-700 bg-slate-100 rounded-lg min-w-40"
                                    : "px-4 py-2 text-gray-700 font-bold bg-white rounded-lg shadow-lg min-w-40"
                            }
                        >
                            عضویت در سایت
                        </button>
                    </div>
                    {flag ? (
                        <Login
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                            handleSubmit={handleSubmit}
                        />
                    ) : (
                        <SignUp
                            userName={userName}
                            setUserName={setUserName}
                            email={email}
                            setEmail={setEmail}
                            password={password}
                            setPassword={setPassword}
                            handleSubmit={handleSubmit}
                        />
                    )}
                </div>
            </div>
        </>
    );
}

export default AuthPage;
