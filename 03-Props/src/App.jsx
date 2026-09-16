import React from 'react'
import Card from './Components/Card'

const App = () => {
  return (
    <div className="parent">
      <Card user='shivangi' age={21} img ="https://plus.unsplash.com/premium_photo-1779202253728-bf804678412b?w=700&auto=format&fit=crop&q=60"/>
      <Card user='atul' age={22} img= "https://plus.unsplash.com/premium_photo-1779295130407-7ee27929421b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzNnxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"/>
      <Card user='harsh' age={25} img= "https://images.unsplash.com/photo-1779419171796-1aff900f9f60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzM3xDRHd1d1hKQWJFd3x8ZW58MHx8fHx8"/>
    </div>
  )
}

export default App





