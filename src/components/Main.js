import React from 'react'

function Main({showMovie}) {
  return (
    <div className=''>
        <div className='md:w-9/12 flex flex-col justify-center items-center'>
            <div className='md:flex md:flex-wrap'>
                {showMovie}
            </div>
        </div>
        <div className='hidden md:'>

        </div>
    </div>
  )
}

export default Main