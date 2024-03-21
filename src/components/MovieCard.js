import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function MovieCard() {

    const [moviesData, setMoviesData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const topRatedOptions = {
          method: 'GET',
          url: 'https://api.themoviedb.org/3/movie/upcoming',
          params: { language: 'en-US', page: '1' },
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDRjZmNmOGUxOWVmZDY4M2QyNWQ3YmI1Y2NlMTg5NiIsInN1YiI6IjY0ZjM2ZWI5Y2FhNTA4MDBlOTUyZjNjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hxWxWvp-dM2Z_YJSasMgGfHOpzRKR75hV2ZVya67yhI'
          }
        };
  
        try {
          const response = await axios.request(topRatedOptions);
          const topRatedMovies = response.data.results;
          setMoviesData(topRatedMovies);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, []);
    
    
  return (
    <>
 
      <Carousel
        showThumbs={false}
        showStatus={false}
        swipeable={false}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={20}
        autoPlay={true}
        emulateTouch={true}
        stopOnHover={true}
        showIndicators={false}
        dynamicHeight={true}
      >
        {moviesData.map((movie) => (
          <div key={movie.id} className="carousel-item cursor-pointer w-full h-96 group">
            <img 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="carousel-image object-cover object-center"
              />
               <div className="absolute inset-0 left-0 right-0 bg-web_black bg-opacity-50 align-middle font-bold text-web_white p-2 opacity-0 group-hover:opacity-100"><p>{movie.title}</p></div>
          </div>
        ))}
      </Carousel>
    
    </>
  );
}

export default MovieCard;
