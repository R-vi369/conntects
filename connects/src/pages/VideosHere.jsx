import React from 'react'
import '../styles/Video.scss'
import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import ThumbUpOffAlt from '@mui/icons-material/ThumbUpOffAlt'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import senddd from '../assets/billie_dp.jpg'
const VideosHere = () => {
  return (
    <>

      <div className="videosHere">
        <div className="videosHere_top">
          <div className="videosHere_top_left">
            <Avatar className='ava' />
            <p>mega Gracia u</p>
            <p style={{ color: "blue" }}>Follow</p>
          </div>
          <div className="videosHere_top_right">
            <MoreHorizIcon />
            < CloseIcon />
          </div>
        </div>
        <div className="videosHere_mid">
          <img src={senddd} alt="" />

          <div className="reactions">

            <div className="liked">
             <ThumbUpOffAlt style={{width: "1.2rem"}}/>
              <p>Like</p>
            </div>
            <div className="commented">
            <ChatBubbleOutlineIcon style={{width: "1.2rem"}}/>
              <p>Comment</p>
            </div>
            <div className="sharedd">
            <SendIcon style={{width: "1.2rem"}}/>
              <p>Share</p>
              
            </div>
          </div>
        </div>


      </div>


    </>
  )
}

export default VideosHere