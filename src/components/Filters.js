import React from 'react'

const Filters = () => {
  return (
    <>
        <div className='border-t-4 border-b-4 pb-8'>
        <p className='mt-4 font-bold text-web_white text-2xl'>FILTERS</p>
        <select className="mt-3 sm:mt-5 block appearance-none w-full bg-web_white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-gray-800" name="country-names" id="country-names">          <option value="Select">Country</option>
          <option value="turkey">Turkey</option>
          <option value="russia">Russia</option>
          <option value="egypt">Egypt</option>
          <option value="usa">United States</option>
          <option value="canada">Canada</option>
          <option value="uk">United Kingdom</option>
          <option value="france">France</option>
          <option value="germany">Germany</option>
          <option value="japan">Japan</option>
          <option value="australia">Australia</option>
          <option value="brazil">Brazil</option>
          <option value="india">India</option>
          <option value="china">China</option>
      </select>


        <select name="movie-categories" id="movie-categories" className=" mt-3 block appearance-none w-full bg-web_white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          <option value="select-category">Category</option>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
          <option value="horror">Horror</option>
          <option value="sci-fi">Science Fiction</option>
          <option value="romance">Romance</option>
          <option value="adventure">Adventure</option>
        </select>

        <select name="movie-categories" id="movie-categories" className=" mt-3 block appearance-none w-full bg-web_white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          <option value="select-category">Year</option>
          <option value="action">2023</option>
          <option value="comedy">2022</option>
          <option value="drama">2021</option>
          <option value="horror">2020</option>
          <option value="sci-fi">2019</option>
          <option value="romance">2018</option>
          <option value="adventure">2017</option>
        </select>

        <select name="movie-categories" id="movie-categories" className=" mt-3 block appearance-none w-full bg-web_white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          <option value="select-category">IMBD's</option>
          <option value="action">9 And Above</option>
          <option value="comedy">8 And Above</option>
          <option value="drama">7 And Above</option>
          <option value="horror">6 And Above</option>
          <option value="sci-fi">5 And Above</option>
          <option value="romance">4 And Above</option>
          <option value="adventure">3 And Above</option>
        </select>

        <div className='flex flex-col sm:flex-row sm:justify-between'>
        <button className='mt-3 sm:mt-5 rounded bg-web_red text-web_white hover:bg-web_gray transition ease-in duration-300 hover:text-web_black px-6 py-3'>
          Bring Movies
        </button>
        <button className='mt-3 sm:mt-5 rounded bg-web_white text-web_red hover:bg-web_gray transition ease-in duration-300 hover:text-web_black px-6 py-3'>
          Reset
        </button>
      </div>

        </div>
  

    </>

  )
}

export default Filters