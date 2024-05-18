
import { Link,useNavigate } from "react-router-dom"
import React, { useState } from "react"
import { UserAuth } from "../context/AuthContext"

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {user,logIn} = UserAuth()
    const navigate =useNavigate()



    function emailHandler(event) {
        setEmail(event.target.value)
    }
    function passwordHandler(event) {
        setPassword(event.target.value)
    }

    async function handleFormSubmit(event){
        event.preventDefault();
        try{
            await logIn(email,password)
           
            navigate("/")
      }catch(err){
          console.log(err);
      }
    }
    return (
        <>
            <div className="w-full h-screen">
                <img className="hidden sm:block absolute w-full h-full object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_small.jpg" />
                <div className="bg-black/70 fixed top-0 left-0 w-full h-screen" />
                <div className="fixed w-full px-4 py-24 z-20">
                    <div className="max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg">
                        <div className="max-w-[320px] mx-auto py-16">
                            <h1  className="text-3xl font-bold" >Login</h1>
                            <form onClick={handleFormSubmit} className="w-full flex flex-col py-4">
                                <input onChange={emailHandler} className="p-3 my-2 bg-gray-700 rounded" type="email" placeholder="email" autoComplete="email" />
                                <input onChange={passwordHandler} className="p-3 my-2 bg-gray-700 rounded" type="password" placeholder="password" autoComplete="current-password" />
                                <button className="bg-red-600 py-3 my-6 rounded font-bold">Login</button>

                                <div className="flex justify-between items-center text-gray-600">
                                    <p>
                                        <input type="checkbox" className="mr-2" />Remember me
                                    </p>
                                    <p>Need Help?</p>
                                </div>
                                <p className="my-4">
                                    <span className="text-gray-600 mr-2 ">New to Netflix?</span>
                                    <Link to={"/sign-up"}>Sign up</Link>
                                </p>
                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}


export default Login