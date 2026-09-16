//Example.1
// import React from 'react'

//functions called using the functions method and using button.
// const App = () => {
//   function btnClicked()
//   {
//      console.log('button is clicked');
     
//   }

//   function mouseEnter()
//   {
//      console.log('mouse enter.');
     
//   }
//   return (
//     <div>
//       <button onMouseEnter={mouseEnter} onDoubleClick={btnClicked}>Click here </button>
//     </div>
//   )
// }
// export default App
//we don't call the function directly because it call directly. so need to call the function.


//EXAMPLE 2..
//instead of creating a separating function we do make a function in the time of calling itself.

// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <button onClick={()=>
//         {
//           console.log('button clicked');
          
//         }
//       }>do click here </button>
//     </div>
//   )
// }

// export default App



//Example -3.
// import React from 'react'

// const App = () => {

//   function inputchanging()
//   {
//     console.log("user is typing");
    
//   }
//   return (
//     <div>
//       <input onChange={inputchanging} type='text' placeholder='Enter Name'></input>
//     </div>
//   )
// }

// export default App
//onchange because we want that should change on typing not only on clicked that using here the change.



//Example 4..

//getting the values.

// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <input onChange ={function(elem) 
//         {
//            console.log(elem.target.value);
           
//         }}
//         type="text" placeholder='Enter name' />
//     </div>
//   )
// }

// export default App
//if we directly the function input changing then it will run direclty.
//that's why one function is created.

// import React from 'react'

// const App = () => {
//   function inputChanging(val)
//   {
//     console.log(val);
    
//   }
//   return (
//     <div>
//       <input onChange ={function(elem)
//       {
//         console.log(elem.target.value);
//       }
//       }
//       type="text" placeholder='Enter Name' />
//     </div>
//   )
// }

// export default App


//Example..

// import React from 'react'

// const App = () => {
//   return (
//     <div onMouseMove={(elem) =>

//       {
//        console.log(elem.clientY);
       
//       }
//     }
//     className='box'>
    
      
//     </div>
//   )
// }

// export default App







//Example---  PAGE scrolling.


// import React from 'react'

// const App = () => {
//   const pagescrollling =(elem) =>
//     {
//        console.log("page scrolling at the speed of ->");
       
//     }
//   return (
//     <div onWheel={(elem)=> {
//      console.log(elem.deltaY);
     
//     }}>
//       <div className="page1"></div>
//       <div className="page2"></div>
//       <div className="page3"></div>
//     </div>
//   )
// }

// export default App




// import React from 'react'

// const App = () => {

//   const pagescrollling =(elem)=>
//   {
//      if(elem>0)
//      {
//       console.log("sedha scrolling");
      
//      }
//      else{
//       console.log("ulta scrolling");
      
//      }
//   }
//   return (
//     <div onWheel={(elem)=>
//     {
     
//       pagescrollling(elem.deltaY);
//     }}>

//         <div className="page1"></div>
//         <div className="page2"></div>
//          <div className="page3"></div>
      
//     </div>
//   )
// }

// export default App



import React from 'react'

const App = () => {
  function btnClicked()
  {
    console.log('hello');
    
  }
  return (
    <div>
      <button>Click</button>
    </div>
  )
}

export default App

