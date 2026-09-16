//FEATURE BASED AND ATOMIC BASED..
//FEATURE BASED MEANS MAKING ALL THINGS TOGETHER AND ATOMIC BASED MEANS MAKING DIFFERENT-DIFFERENT COMPONENTS
import React from 'react'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section1/Section2/Section2'

const users=[
  {
    img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
    intro:'',
    tag:'Satisfied',
    color:'royalblue'
   
  },
  {
    img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D',
    intro:'',
    tag:'Underserved',
    color:'green'
  },
  {
    img:'https://plus.unsplash.com/premium_photo-1663134310533-fc3b59225810?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjY3fHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww',
    intro:'',
    tag:'Underbanked',
    color:'blue'
  },
   {
    img:'https://plus.unsplash.com/premium_photo-1661576428246-40893bd7d743?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjU5fHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww',
    intro:'',
    tag:'Underbanked',
    color:'black'
  },
   {
    img:'https://plus.unsplash.com/premium_photo-1661729968988-ca585d9da659?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjkxfHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww',
    intro:'',
    tag:'Underserved',
    color:'orange'
  },
   {
    img:'https://images.unsplash.com/photo-1758876020290-8b5e2a326a97?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIwfHx3b3JraW5nJTIwcHJvZmVzc2lvbmFsfGVufDB8fDB8fHww',
    intro:'',
    tag:'Underbanked',
    color:'pink'
  },
]

const App = () => {
  return (
    <div>
      <Section1 users ={users}/>
      <Section2/>
    </div>
  )
}

export default App

///APP HAS NO DIRECT CHILD... HERE WE HAVE TO MOVE OUR DATA TO THE RIGHT CONTENT
//APP -->.SECTION1 -->> PAGE1CONTENT-->>RIGHTCONTENT.
