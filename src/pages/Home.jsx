import Hero from "../components/Hero"
import MovieRow from "../components/MovieRow"
import endpoints from "../services/movieServices"
function Home(){


    return(
       <>
       <Hero/>
       <MovieRow title="popular" url={endpoints.popular} />
       <MovieRow title="topRated" url={endpoints.topRated}/>
       <MovieRow title="trending" url={endpoints.trending}/>
       <MovieRow title="comedy" url={endpoints.comedy}/>
       <MovieRow title="upcoming" url={endpoints.upcoming}/>
  
       </>
    )

    


}

export default Home