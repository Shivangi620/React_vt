import React from 'react'

//using props....


const Card = (props) => {

  return (
    <div className="card">
      <img src={props.img} alt="" />
      <h1>{props.user},{props.age}</h1>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing</h3>
      <button>TAP TO CLICK</button>
    </div>
  )
}

export default Card