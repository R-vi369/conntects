import React from 'react'
// import VideosHere from './VideosHere';
import {BiSearchAlt2} from 'react-icons/bi'
import '../styles/Find.scss'

const Find = () => {
  return (
    <>

      <div className="find">
       
     <div className="find_search">
   
     <div className="find_search_input">
       < BiSearchAlt2/>
       <input type="text"  placeholder='Search'/>
     </div>


     </div>

      </div>




    </>
  )
}

export default Find