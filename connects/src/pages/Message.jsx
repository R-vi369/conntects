import React from 'react'
import '../styles/Message.scss'
import {Link} from 'react-router-dom'
const Message = () => {
  return (
    <>
    
    <div className="message">
     <div className="message_box">

      <div className="message_box_chat">

      <Link to='/Chat' className='chat_1'>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRph3mlYMw82dYEhPlBJY88zW7EkvzWHpDYS6aBFJDc8pZXpEZWjDsc-WbESCd0BJvZrBjs&s" alt="" />
           <p>hey i am jack from usa</p>
      </Link> 
      </div>
     </div>



    </div>
    
    
    
    
    
    </>
  )
}

export default Message