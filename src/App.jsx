//FOR CREATING REACT FOLDER USE -->> npm create vite.


// function App()
// {
//   return 'hello , guys !'
// }
// export default App

//point to be notes in src -> app.jsx and the parent of this file is main.jsx. and the parent of the main.jsx is index.html.
//in index.html we have seen that there is id called root. so for that we create div .

//for rafce import extension ES7 React/Redux.....
//one mor extension to be download is simple react snippet
// 

// import React from 'react'

//WITHOUT ID.
// const App = () => {
//   return (
//     <div>
//       <h1>hellooo guys</h1>
//       <h2>heiiiiiiii cutieeeee</h2>
//     </div>
//   )
// }

// export default App

//WITH ID WORK.
// import React from 'react'
// const App = () => {
//   return (
//     <div id ='dad'>
//       <h1 id ='child1'>hello guyss</h1>
//       <h2 id ='child2'>helooo from shivuuu</h2>
//     </div>
//   )
// }

// export default App


//NOW USING DAD AND CHACHA IN TO ONE DIV.
//  import React from 'react'
 
//  const App = () => {
//    return (
//      <div>
//        <div id ='papa'>
//         <h1 id ="child1"> helloooooo</h1>
//         <h2 id ="child2"> helloooo guysss!</h2>
//        </div>
//        <div id ="chacha">
//         <h1 id ="chil1">welcome</h1>
//        </div>
//      </div>
//    )
//  }
 
//  export default App
 
//BUT INSTEAD OF USING ONE ANOTHER DIV WE USE FRAGMENTS OR WE CAN SAY A EMPTY TAGS OR WRAPPER..

 import React from 'react'
 
 const App = () => {
   return (
     <>
       <div id ='papa'>
        <h1 id ="child1"> helloooooo</h1>
        <h2 id ="child2"> helloooo guysss!</h2>
       </div>
       <div id ="chacha">
        <h1 id ="chil1">welcome</h1>
       </div>
     </>
   )
 }
 
 export default App
 