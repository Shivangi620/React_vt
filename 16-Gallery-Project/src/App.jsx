// import React from 'react'
// import axios from 'axios'


// const App = () => {
//   const getdata = () =>
//   {
//      console.log('data aa gyaa');
     
//   }
//   return (
//     <div className='bg-black h-screen text-white'>
//      <button onClick={getdata} 
//       className='bg-amber-500 mt-4 px-4 py-2 active:scale-95 rounded text-white'>
//       get data</button>
//     </div>
//   )
// }

// export default App



//EXAMPLES FOR AXIOS METHODS..

// import React from 'react'

// const App = () => {
//   const getdata =() =>
//   {
//     axios.getdata('https://picsum.photos/v2/list?page=2&limit=100')
//     axios.post('https://picsum.photos/v2/list?page=2&limit=100',{username:'Shivangi',password:'shivangi@123'})
//     axios.put('https://picsum.photos/v2/list?page=2&limit=100',{username:'Shivangi',password:'shivangi@123'})
//   }
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default App



//EXAMPLE -3.
//GALLERY PROJECT.
import React, { useEffect, useState } from 'react'
import axios from 'axios'



const App = () => {

  const[userdata , setuserdata] = useState([])

  const [index , setIndex] = useState(1);
  const getdata = async() =>
  {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=20`)
    
      setuserdata(response.data);  
  }


  useEffect(function()
  {
    getdata()

  },[index])

  let printuserdata = <h3 className='text-gray-400 absolute top-1/2 left-1/2 -translatex-1/2 -translatey-1/2 '>Loading</h3>

  if(userdata.length>0)
  {
      printuserdata = userdata.map(function(elem , idx)
      { 
       return(
           <div key ={idx}> 
            <a href={elem.url} target='blank'>
            <div className='h-40 w-full overflow-hidden bg-white'>
            <img className ='h-full w-full object-cover ' src = {elem.download_url} alt="" />
          </div>
          <h2 className='font-bold text-lg'>{elem.author}</h2>
          </a>
           </div>
           )
      })
  }
  return (
    <div className='bg-black  overflow-auto h-screen text-white'>
        <h1 className='fixed bg-red-500 text-6xl'>{index}</h1>
       <div className='flex flex-wrap gap-5 object-cover '>
          {printuserdata}
        </div>

        {/* PREV BUTTON */}
        <div className='flex justify-center gap-6 items-center text-white'> 
          <button
           className='bg-amber-400 text-sm cursor active:scale-95 text-black rounded px-4 py-2'
           onClick={()=>
           {
            if(index>1)
            {
              setIndex(index-1)
              setuserdata([])
            }
              
           }}>
           Prev
           </button>
            <h4>Page {index}</h4>
           {/* //NEXT BUTTON */}
          <button
           className='bg-amber-400 text-sm cursor active:scale-95 text-black rounded px-4 py-2'
           onClick={()=>
           {
                 setIndex(index+1)
                 setuserdata([])
           }}>
           Next
           </button>
        </div>
    </div>
  )
}

export default App

