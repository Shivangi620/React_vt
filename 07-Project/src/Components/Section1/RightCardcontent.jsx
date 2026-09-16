import React from 'react'

const RightCardcontent =(props) => {
  return (
     <div className='absolute top-0 left-0 h-full w-width p-8 flex flex-col justify-between'>
        <h2 className='bg-white text-xxl font-bold rounded-full h-12 w-12 flex justify-center items-center '>{props.id+1}</h2>
      <div>
      <p className ='text-xl text-white mb-10 leading-relaxed '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, quibusdam.</p>
      <div className = 'flex justify-between'>
        <button  style={{backgroundColor:props.color}}className ='0 text-white font-medium  px-8 py-2- rounded-full'>{props.tag}</button>
        <button style={{backgroundColor:props.color}} className =' text-white font-medium  px-4 py-3- rounded-full'><i class="ri-arrow-right-up-line"></i></button>
      </div>
    </div>
    </div>
  )
}

export default RightCardcontent
