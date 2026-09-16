// import React from 'react'
//for running the file first just go into that file and the run , npm run dev.

//IMPORTING THE CARD FROM THE CARD FILE INTO THE APP.JSX.
// import Card from './Components/card'
// const App = () => {
//   return (
//     <div>
//       <div className='card'>
//         <h1>hellooo</h1>
//         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, voluptas.</p>
//       </div>
//       {Card()}
//     </div>
//   )
// }


//{card} -->. for variable calling. we use curly braces.
// export default App

// import family from './card'
// {
//   console.log("family");
// }



//another example..

// import React from 'react'

// const App = () => {

//   const user = "shivangi"
//   return (
//     <div>
//       <h1>hello guys i'm user.</h1>
//       <h1>hello guys im {user} </h1>
      
//     </div>
//   )
// }

// export default App


import React from 'react'
import Card from './Components/card'
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <div>
      <Card/>
      <Navbar/>
    </div>
  )
}

export default App;
