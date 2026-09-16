import  { useState } from 'react'

const App = () => {

  const[title, settitle]= useState('')
  const[detail, setdetail]= useState('')

  const[task ,setTask] =useState([])

  const submitHandler =(e)=>
  {
    e.preventDefault()
    const copytask =[...task];

    copytask.push({title ,detail})

    setTask(copytask)  
 
    settitle('')
    setdetail('')
  }  

  const deletenote =(idx)=>
  {
    const copytask =[...task];
    copytask.splice(idx,1)

    setTask(copytask)
    
  }

  return (

  
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e)=>
        {
          submitHandler(e);
        }
      }className='flex gap-4 lg:w-1/2items-start flex-col p-10 '>
        <h1 className='text-3xl  font-bold'>Add Notes</h1>

       {/* pehla input */}
        <input 
        type="text" 
        placeholder='Enter Notes Heading' 
        className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
        value={title}
        onChange={(e)=>
        {
          settitle(e.target.value)
        }
        }
        />


        {/* Detailed input */}
        <textarea 
        type="text" 
        className='px-5 w-full font-medium  h-32 py-2 flex-row flex items-start outline-none border-2 rounded'
        placeholder='Write Details' 
        value={detail}
        onChange={(e)=>
        {
          setdetail(e.target.value)
        }
        }
        />

    
       <button className='bg-white outline-none text-black w-full font-medium px-5 py-2 rounded active:scale-95'>Add note</button>
      </form>
      <div className=' lg:border-l-2 lg:w-1/2  p-10'>
      <h1 className='text-3xl font-bold'>Recent Notes</h1>
      <div className='flex flex-wrap items-start justify-start  gap-4 mt-5 h-[90%] overflow-auto'>
      {task.map(function(elem ,idx)
      {
       return <div key={idx} className=" flex justify-between flex-col h-52 w-40 rounded-xl items-start text-black bg-cover py-9 px-4 bg-[url('https://img.magnific.com/free-vector/blank-cream-notepaper-design_53876-97377.jpg?semt=ais_hybrid&w=740&q=80')]">
       <div>
       <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
       <p className=' mt-4 leading-tight font-medium text-xs text-gray-800'>{elem.detail}</p>
     </div>
     <button onClick ={() =>
      {
       deletenote (idx) 
      }}
      className='  w-full cursor-pointer active:scale-95 bg-red-400 py-1 text-xs rounded font-bold text-white mt-15'>Delete </button>
     </div>
      })}
       </div>
      </div>
    </div>
  )
}

export default App
