import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import '../styles/Notify.scss'
const Notification = ({ img, text, time, icon }) => {
    return (
        <>
          <div className="notify_box">

         <div className="notify">
        <div className="notify_left">
          <img src={img} alt="" />
            <p>{text}</p>

        </div>
          <div className="notify_right">
            <p>{time}</p>
            < MoreHorizIcon/>
          </div>
          </div>
          </div>
        </>
    )
}

export default Notification