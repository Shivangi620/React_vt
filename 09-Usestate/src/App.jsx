//STATE MANAGEMENT BASICS -- WITH ONE MINI PROJECT USING INCREMENT AND DECREMENT...
//Example--1..
//this code value change only on the console..
//not on the screen.
// import React from 'react'

//const { useState } = require("react")

// const App = () => {

//   let a =20;
//   function changeA()
//   {
//     console.log(a);
//     a =30;
//     console.log(a);
//   }

//   return (
//     <div>
//       <h1>The value of a is {a}</h1>
//       <button onClick={changeA}>Click</button>
//     </div>
//   )
// }

// export default App

//Example --2.
//using the react and with the use of react we change the values..

//because with the use of react we dont have to re- render the whole web..
// just render the only part which is required.

// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//    here seta is used to set the values.
//    const [a , setA] = useState(30);
//      const [a , setA] = useState('anjali');


//   return (
//     <div>
//       <h1>The value of a is {a}</h1>
//      <button >Click</button>
//     </div>
//   )
// }

// export default App



//Example.3
//use state is a function inside the react and num is the const we can't directly change the value.
//num-- work for read , setNum == change the value.

// import { useState } from 'react'
// const App = () =>
// {
//   const [num , setNum] =useState(10)
//   const [username , setUsername] = useState('Shivangi')
//   const [address , setadress] =useState("patna")
//   const [arr ,setarray] = useState([10, 20 , 30])

//   function changeNum()
//   {
//     setNum(22)
//     setUsername('atul')
//     setadress("bihar")
//     setarray([30 , 40 ,50])
//   }

//   return (
//     <div>
//       <h1>The value of a is {num} <br/> value of user is {username}<br/>the adress of the user is {address} <br/> {arr}</h1>
//       <button onClick={changeNum}>Click</button>
//     </div>
//   )
// }
// export default App



///UI BASED EXAMPLE.....
//USESTATE..

// import React from 'react'
// import { useState } from 'react'

// const App = () => {

//    const [num, setNum ] =useState(0)

//    function increasenum ()
//    {
//     setNum(num+1)
     
//    }

//    function decreasenum()
//    {  
//     setNum(num-1)

//    }

//    function jumpfive()
//    {
//     setNum(num+5)
//    }
//   return (
//     <div>
//         <h1>{num}</h1>
//       <button onClick={increasenum}>increase</button>
//       <button onClick={decreasenum}>decrease</button>
//       <button onClick={jumpfive}>jump by 5</button>
//     </div>
//   )
// }

// export default App

//destructuring concepts.
//JAVASCRIPT IS A SYNCHRONOUS AS WELL AS ASYNCHORNOUS LANGUAGE...
//ARRAY , FUNCTION , THEY ARE THE REFERENCE THEY USE THE REFERENCE , THEIR VALUES ARE NOT DIRECTLY STORED IN THE MEMORY AS CONSTANT VARIABLE 
//THEY USE REFERNCE OR THE LOCATION.

//BARBER EXAMPLE.
//JAVASCRITPT IS A ASYCHRONOUS THAT'S WHY THE VALUES SUDDEN NOT CHANGE FOR THAT PARTICULAR CODE..

//this example shows the how the values are changes on the ui but not on the console.
//and if the setnum is also 10 then also the react will not render .
//as because of the same value

// import React, { useState } from 'react'

// const App = () => {

// const [num , setNum] =useState(10)
// const btnclicked =()=>
// {
//     console.log(num);
//     setNum(90);
//     console.log(num);
    
// }
//   return (
//     <div>
//         <h1>{num}</h1>
//       <button onClick={btnclicked}>click</button>
//     </div>
//   )
// }

// export default App

//EXAMPLE...

//SETNUM ME NEWNUM PASS KARR DIYA....
//HERE WE CREATED DUPLICATE OF OBJECT WITH{}..

// import React, { useState } from 'react'
// const App = () => {
// const [num , setnum]=useState({user :'SHIVANGI',age :23})

// const btnclicked = ()=>
// {
    
//   const newNum ={num};
//   newNum.user ='ATUL';
//   newNum.age =20
//   setnum(newNum);

// }
//   return (
//     <div>
//       <h1>The name and age of the user is {num.user},{num.age}</h1>
//       <button onClick={btnclicked}>CLICK</button>
//     </div>
//   )
// }

// export default App


///ANOTHER EXAMPLE...

// import React, { useState } from 'react'

// const App = () => {
//     const[num ,setnum]=useState([10,20,30])
//     const  btnclicked = () =>
//     {
//          const newNum = [num]
//          newNum.push(100)
//          setnum(newNum)
//     }
   

//   return (
//     <div>
//       <h1>ARRAY{num}</h1>
//       <button onClick={btnclicked}>click</button>
//     </div>
//   )
// }

// export default App




//BATCH UPDATE....
//if writing 3 times setnum num+1 it will not update the num value becuase it does not identify the num values,...that's why previous is used for the updations..
// setNum(num+1)
    // setNum(num+1)
    // setNum(num+1)

import React, { useState } from 'react'

const App = () => {
const [num , setNum]= useState(10)

const btnclicked =()=>
{
    
    setNum(prev =>(prev+1))
    setNum(prev =>(prev+1))
    setNum(prev =>(prev+1))
}
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={btnclicked}>CLICK</button>
    </div>
  )
}

export default App
