import {Link,useNavigate} from "react-router-dom"
import { UserAuth } from "../context/AuthContext"
function Navbar(){
  const {user,logOut} =UserAuth()
  const navigate = useNavigate()

const handleLogOut = async()=>{
  try{
    await logOut()
    navigate('/')
  }catch (err){
       console.log(err);
  }
}


    return(
        <div className="absolute w-full p-4 flex items-center justify-between z-50">
   
     <Link to={"/"} >  
     <h1 className="uppercase text-red-600 font-bold text-5xl">netflix</h1>
     
     </Link>
     {
      user?.email?(
         <div>
         <Link to={"/profile"}>
            <button className="capitalize pr-4">profile</button>
         </Link>
 
        
            <button onClick={handleLogOut} className="capitalize bg-red-600 px-6 py-2 rounded">Logout</button>
    
    
      </div>
         
      ): <div>
      <Link to={"/log-in"}>
         <button className="capitalize pr-4">Login</button>
      </Link>

      <Link to={"/sign-up"}>
         <button className="capitalize bg-red-600 px-6 py-2 rounded">Sign up</button>
      </Link>
 
   </div>
     }
    
        </div>
    )
}

export default Navbar