import axios from "axios"
import endpoints  from "../services/movieServices"
import React,{useState,useEffect} from "react"
function Hero(){

    const [movie,setMovie]= useState({})

    useEffect(()=>{
     const dataFetch = async ()=>{
        let responce =   await axios.get(endpoints.popular)
        console.log(responce.data.results);
        const movies = responce.data.results;
        const randomMovie = movies[Math.floor(Math.random() * movies.length)]
        setMovie(randomMovie)
     }
     dataFetch()
    },[]);

    if(!movie){
        return(
        <>
        <p>fetching...</p>
        </>
        )
        
    }
 
    const truncate = (str,length)=>{
        if(!str) return ""
        return(
            str.length > length ? str.slice(0,length)+ "..." : str
        )
    }

    const {title,backdrop_path,release_date, overview} = movie;
    console.log(movie);

    return(
        <div className="w-full has-[550px] lg:h-[850px]">
           <div className="w-full h-full" >
              <div className="absolute w-full h-[550px] lg:h-[850px] bg-gradient-to-r from-black" />
                <img className="w-full h-full object-cover object-top"
                   src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                   alt={title}
                />
              
              <div className="absolute w-full top-[10%] lg:top-[25%] p-4 md:p-8">
                <h1 className="text-3xl md:text-6xl font-bold">{title}</h1>
                <div className="mt-8 mb-4">
                    <button className="capitalize border bg-gray-300 py-2 px-5 text-black " >play</button>
                    <button className="capitalize border border-gray-300 py-2 px-5 ml-4">watch later</button>
                </div>
                <p className="text-gray-400 text-sm">{release_date}</p>
                <p className="w-full md:max-w-[70%] lg:max-w-[35%] xl:max-w-[35%] text-gray-200 " >{truncate(overview,160)}</p>
              </div>

           </div>
        </div>
    )
}

export default Hero