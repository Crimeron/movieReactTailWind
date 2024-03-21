import React, { useEffect, useState } from "react";
import axios from "axios";
import Filters from "./Filters";
import Hotnews from "./Hotnews";
import Comments from "./Comments";

const Content = () => {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const topRatedOptions = {
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/now_playing",
        params: { language: "en-US", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDRjZmNmOGUxOWVmZDY4M2QyNWQ3YmI1Y2NlMTg5NiIsInN1YiI6IjY0ZjM2ZWI5Y2FhNTA4MDBlOTUyZjNjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hxWxWvp-dM2Z_YJSasMgGfHOpzRKR75hV2ZVya67yhI",
        },
      };

      try {
        const response = await axios.request(topRatedOptions);
        const topRatedMovies = response.data.results;
        setMoviesData(topRatedMovies);
        const moviesWithYear = topRatedMovies.map((movie) => {
          const releaseDate = new Date(movie.release_date);
          const year = releaseDate.getFullYear();
          return { ...movie, year };
        });

        setMoviesData(moviesWithYear);
        console.log(moviesWithYear);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container bg-web_black">
      <div className="font-bold flex text-web_white bg-web_black py-4 text-2xl md:text-3xl lg:text-4xl my-4 space-x-2">
        <a
          href="/"
          className="hover:text-web_red from-web_red to-web_white bg-gradient-to-r bg-clip-text 
           transition duration-600"
        >
          LATEST
        </a>
        <a
          href="/"
          className="hover:text-web_red transition duration-300 border-transparent hover:border-web_red"
        >
          POPULAR
        </a>
        <a href="/" className="hover:text-web_red transition duration-300">
          BEST
        </a>
      </div>

      <div className="flex">
        {/* Left Content */}
        <div className="flex-grow">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            {moviesData.map((movie) => (
              <div
                key={movie.id}
                className="w-full md:w-64 lg:w-[22rem] xl:w-64 ml-4 mt-4 group relative"
              >
                {" "}
                <div className="image_card relative group cursor-pointer transition hover:animate-pulse">
                  <img
                    alt={movie.title}
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  />
                  <div className="title_gradient bg-gradient-to-t from-black w-full h-full absolute left-0 bottom-0">
                    <div className="absolute text-[0.60rem] md:text-base left-0 bottom-10 font-bold group-hover:bottom-0  text-white p-2">
                      {movie.title}
                    </div>
                    <div className="absolute left-0 bottom-0 text-[0.60rem] md:text-base group-hover:hidden text-white p-2">
                      {movie.year}
                    </div>
                    <div className="absolute right-0 bottom-0 text-[0.60rem] md:text-sm group-hover:hidden text-white p-2">
                      {movie.vote_average}
                    </div>
                    <div className="absolute inset-0 justify-center items-center hidden text-web_white group-hover:flex text-6xl">
                      <i class="fa-regular fa-circle-play"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content (Filter) */}
        <div className="w-full ml-5 md:w-1/4 p-4 bg-web_black">
          <Hotnews hotnews-data={moviesData} />
          <Filters />
          <Comments />
        </div>
      </div>
      <div className="">
        <ul className="flex flex-wrap sm:flex-nowrap justify-center my-10">
          <li className="p-1.5 ml-3 bg-web_red rounded">1</li>
          <li className="p-1.5 ml-3 bg-web_white cursor-pointer hover:bg-web_gray rounded">
            2
          </li>
          <li className="p-1.5 ml-3 bg-web_white cursor-pointer hover:bg-web_gray rounded">
            3
          </li>
          <li className="p-1.5 ml-3 bg-web_white cursor-pointer hover:bg-web_gray rounded">
            4
          </li>
          <li className="p-1.5 ml-3 bg-web_white cursor-pointer hover:bg-web_gray rounded">
            5
          </li>
          <li className="p-1.5 ml-3 bg-web_white cursor-pointer hover:bg-web_gray rounded">
            164
          </li>
          <li className="p-1.5 ml-3 bg-web_white cursor-pointer hover:bg-web_gray rounded">
            165
          </li>
          <li className="p-1.5 ml-3 bg-web_white cursor-pointer hover:bg-web_gray rounded">
            Next
          </li>
        </ul>
      </div>
      <footer className="bg-web_black text-gray-300 mx-auto py-10 flex flex-col items-center">
        <div className="mb-4">
          <a href="/" class="text-2xl font-bold text-white hover:text-web_red">
            Footer
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="/" class="hover:text-web_red">
            Movies
          </a>
          <a href="/" class="hover:text-web_red">
            Series
          </a>
        </div>
        <div class="mt-4">
          <p>&copy; 2023 Movie Website. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Content;
