//title -->> value -->> onchange ->> set title...
import React, { useState } from 'react'

const App = () => {


  const[title,settitle] = useState('')

  const submithandler =(e) =>
  {
      e.preventDefault()
      console.log('Form Submitted',title);
      settitle('')//this is using because the e.prevent.default does not reload the page but we want to re-load the page that's why we are using this.
  }
  return (
    <div>
      <form onSubmit={(e)=>
        {
          submithandler(e)
        }
      }>
        <input type="text" placeholder='Enter your name' 
        //  onChange={(e)=>
        //  {  console.log(e.target.value); } }/>
         value ={title}
         onChange={(e)=>
         { settitle(e.target.value); } }/>
        {/* in the above example value will not show on the ui but on the console it will show the value.. as of on change it will serial wise.. */}
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
//concept-1..
//onchange={(e)=>{
//  console.log(e.target.value) }}

//concept-2.
//value ='shivangi' then the value will not change and dont give the option to write in that space..


//concept --3.
//instead of changing the value by ourself we do it by using react and then title will sent to the values and then with the help of settitle(onchange) value will change then the settitle will change the values and sent it to the title and then the value or the input will displayy..