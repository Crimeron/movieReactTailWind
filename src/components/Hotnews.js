import React from 'react'

const Hotnews = (data) => {
  const overviews = data["hotnews-data"];
  console.log(overviews);
  return (
<>
  <p className='font-bold text-web_white text-xl lg:text-2xl'>OVERVIEWS</p>
  <div className='flex flex-col md:flex-row my-4 bg-web_dark_gray rounded-lg'>
  <img className='w-20 md:w-24 xl:w-32 h-auto rounded-lg md:h-full' src="https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg" alt="Oppenheimer Poster" />
  <div className="text-web_white p-4 relative">
    <h2 className="absolute font-bold uppercase text-sm lg:text-lg top-0 left-0 bg-web_dark_gray text-web_white p-2">Oppenheimer</h2>
    <p className='mt-6 text-left text-xs lg:text-base'>The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.</p>
  </div>
  </div>


</>

  )
}

export default Hotnews