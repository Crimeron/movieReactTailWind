import React from 'react'

const Comments = () => {
  return (
    <>
    <div className="mt-4 font-bold text-web_white text-2xl">LAST COMMENTS</div>
    <div className="flex flex-col md:flex-row my-4 bg-web_dark_gray rounded-lg">
    <div className="text-web_white p-4 relative flex-grow">
        <div>
        <a
        href="/"
        className="absolute ml-2 font-bold text-sm lg:text-lg top-0 left-0 bg-web_dark_gray text-web_white p-2 transition duration-300 hover:text-web_red"
        >
        Elemental
        </a>
        <p className="mt-6 text-left text-xs lg:text-base">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, minima.
        </p>
        <p className='bg-web_red cursor-pointer hover:bg-web_gray transition ease-in duration-300 hover:text-web_black rounded w-max px-2 py-1 mt-2 text-sm md:text-base'>
            Crimeron
        </p>
        </div>
    </div>
    
    </div>

    </>
  )
}

export default Comments