import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import {AiOutlineClose} from "react-icons/ai"
import { UserAuth } from "../context/AuthContext"
import { db } from "../services/firebase";
import endpoints from "../services/movieServices";
import {arrayRemove,doc,onSnapshot,updateDoc,deleteDoc} from "firebase/firestore"
import React,{useState,useEffect} from "react";
import Movieitem from "../components/Movieitem";
function Profile(){

     const [movies,setmovies] =useState([])
     const {user} = UserAuth()

     useEffect(()=>{

        if(user){
            onSnapshot(doc(db,"user", `${user.email}`),(doc)=>{
                if(doc.data()) setmovies(doc.data().favshow)
            })
        }
     },[user?.email]);

     const removeShow = async (movie) => {
          const userDoc = doc(db,"user",user.email) 
        try {
          await updateDoc(userDoc, {
            favshow: arrayRemove(movie),
          });
          console.log("Movie removed from favorites list in Firestore");
        } catch (error) {
          console.error("Error removing movie from favorites list in Firestore: ", error);
        }
      };

    return(
        <>
        <div>
          <img className="block w-full h-[500px] object-cover" src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_small.jpg" />
          <div className="bg-black/80 fixed top-0 left-0 w-full h-[500px]">
            <div className="absolute top-[20%] p-4 md:p-8 my-12">
              <h1 className="text-3xl md:text-5xl my-4">My Shows </h1>
              <p className="text-gray-400 text-lg">{user.email}</p>
      
             
      
            </div>
            
          </div>
          <p className="text-gray-400 px-5 my-3">Fav Shows</p>
          <div className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide flex">
                {movies.map((movie) => (
                  <div key={movie.id} className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2">
                    <img className="w-full h-40 block object-cover object-top" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`} alt={movie.title} />
                    <div className="absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100">
                      <p className="whitespace-normal text-xs md:text-sm flex justify-center items-center h-full">{movie.title}</p>
                      <p onClick={()=>removeShow(movie)}>
  <AiOutlineClose size={30} className="absolute top-2 right-2 text-xl sm:text-lg" />
</p>

                    </div>
                  </div>
                ))}
              </div>
        </div>
      </>
      
    )
}

export default Profile