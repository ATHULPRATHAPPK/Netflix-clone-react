import React,{useState} from "react";
import {FaHeart,FaRegHeart} from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { doc,arrayUnion,updateDoc } from "firebase/firestore";
import { db } from "../services/firebase";
function Movieitem({movie}) {
   const [like,setLike] =useState(false)
    const {title, backdrop_path,poster_path} = movie
    const {user} = UserAuth()
   const addFavShow = async()=>{
      
    const userEmail = user?.email;

    if(userEmail){
        const userDoc = doc(db,"user",userEmail)
        setLike(!like)
        await updateDoc(userDoc,{
          favshow: arrayUnion({...movie})
        })
    }else{
      alert("please login...")
    }

   }

    return(

        <div className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2">
       <img className="w-full h-40 block object-cover object-top" src={`https://image.tmdb.org/t/p/original/${backdrop_path || poster_path  }`} alt={title} size={20} />
   
   <div className="absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100">
   <p className="whitespace-normal text-xs md:text-sm flex justify-center items-center h-full ">{title}</p>
   <p onClick={addFavShow} >
  {like ? (
    <FaHeart size={20} className="absolute top-2 left-2 text-gray-300" />
  ) : (
    <FaRegHeart size={20} className="absolute top-2 left-2 text-gray-300" />
  )}
</p>

   </div>

        </div>
    )
    
}

export default Movieitem