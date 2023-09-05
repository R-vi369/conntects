import React from 'react'
import '../styles/Video.scss'
import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
const Video = () => {
  return (
    <>
    
    <div className="video">
         

    </div>
    
    <div className="avatar">
          <div className="avatar_left">
            <Avatar />
            <p>mega Gracia u</p>
            <p>Follow</p>
          </div>
          <div className="avatar_right">
            <MoreHorizIcon />
            < CloseIcon />
          </div>
        </div>
    </>
  )
}

export default Video