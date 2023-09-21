import React from 'react'
// import VideosHere from './VideosHere';
import {BiSearchAlt2} from 'react-icons/bi'
import '../styles/Find.scss'

const Find = () => {
  return (
    <>

      <div className="find">
        <div className="find_wrap">
       <div className="find_box">
        <BiSearchAlt2/>
        <input type="text" placeholder='search' />
       </div>
             
        </div>
      </div>




    </>
  )
}

export default Find