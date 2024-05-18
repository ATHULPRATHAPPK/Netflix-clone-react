import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movieitem from "./Movieitem";

function MovieRow({ title, url }) {
   const [movieList, setList] = useState([]);
   const sliderRef = useRef();

   useEffect(() => {
      async function fetchMovie() {
         try {
            let response = await axios.get(url);
            setList(response.data.results);
         } catch (error) {
            console.error("Error fetching movies:", error);
         }
      }
      fetchMovie();
   }, [url]);

   const slide = (offset) => {
      const slider = sliderRef.current;
      if (slider) {
         slider.scrollLeft += offset;
      }
   };

   return (
      <>
         <h2 className="font-bold md:text-xl p-4 capitalize">{title}</h2>
         <div className="relative flex items-center group">
            <MdChevronLeft
               onClick={() => slide(-500)}
               className="bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer"
               size={40}
            />
            <div ref={sliderRef} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
               {movieList.map((movie) => (
                  <Movieitem key={movie.id} movie={movie} />
               ))}
            </div>
            <MdChevronRight
               onClick={() => slide(500)}
               className="bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer"
               size={40}
            />
         </div>
      </>
   );
}

export default MovieRow;
