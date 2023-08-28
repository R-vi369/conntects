import React, { useState } from 'react'
import '../styles/HeroLeft.scss'
const HeroLeft = () => {
  const [count, setCount] = useState('Friend Request');
  const remove=()=>{
    setCount('remove')
  }
  const accept=()=>{
    setCount('Accept')
  }
  return (
    <>
      <div className="heroLeft">

        <div className="heroLeft_friendReq">

          <img src="https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?cs=srgb&dl=pexels-anastasiya-gepp-2065200.jpg&fm=jpg" alt="" />
          <p>Jennifer</p>
          <h1>{count}</h1>
          <div className="btn">

           <button onClick={remove}>Remove</button>
           <button onClick={accept}>Accept</button>
          </div>

        </div>

      </div>

    </>
  )
}

export default HeroLeft