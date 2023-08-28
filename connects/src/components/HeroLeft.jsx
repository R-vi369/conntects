import React, { useState } from 'react'
import '../styles/HeroLeft.scss'
const HeroLeft = () => {
  const [count, setCount] = useState('Friend Request');
  const remove=()=>{
    setCount(
      <div className="remove" style={{color: "red"}}>
        Remove
      </div>
    )
  }
  const accept=()=>{
    setCount(
      <div className="accept" style={{color: 'green'}}>
         Friends
      </div>
      
      )
  }
  return (
    <>
      <div className="heroLeft">

        <div className="heroLeft_friendReq">

          <img src="https://www.befunky.com/images/prismic/5418fdb1-d4fd-4c3b-8ab9-e6eb9a5e7d82_photo-of-a-woman-with-green-hair-3886347-cartoonized-original.jpeg?auto=avif,webp&format=jpg&width=863" alt="" />
          <p>Jennifer</p>
          <h1>{count}</h1>
          <div className="btn">

           <button onClick={remove} className='btn_both btn1'>Remove</button>
           <button onClick={accept} className='btn_both btn2'>Accept</button>
          </div>

        </div>

      </div>

    </>
  )
}

export default HeroLeft