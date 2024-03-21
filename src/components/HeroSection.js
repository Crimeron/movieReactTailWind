import React from 'react'
import MovieCard from './MovieCard';

export const Content = () => {
  return (
    <>
      <div className="container mx-auto">
      <div className='font-bold text-web_white text-4xl my-4'>
      <a
          href="/"
          className="hover:text-web_red from-web_red to-web_white bg-gradient-to-r bg-clip-text text-transparent transition duration-600"
        >
          Upcoming
        </a>
        <a
         href="/"
         className='ml-2'>
          Movies
        </a>
      </div>
      <MovieCard/>
      </div>
    </>

  )
}
export default Content;
