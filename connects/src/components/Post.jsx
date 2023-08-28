import React from 'react'
import '../styles/Post.scss'
import love from '../assets/heart.png'
import chat from '../assets/chat.png'
import share from '../assets/send.png'
import save from '../assets/save.png'
const Post = () => {
    return (
        <>
            <div className="post">

                <div className="post_avatar">
                    <img src="https://cdn.britannica.com/92/215392-050-96A4BC1D/Australian-actor-Chris-Hemsworth-2019.jpg" alt="" />
                    <div className="post_avatar_text">

                        <h4>Chris Hemsworth</h4>
                        <p>Australian actor</p>
                    </div>
                </div>
                <div className="post_img">
                    <img src="https://media.kvue.com/assets/CCT/images/e1a3e6d0-c1e0-4039-8966-e383cb1dda29/e1a3e6d0-c1e0-4039-8966-e383cb1dda29_750x422.jpg" alt="" />
                </div>
                <div className="post_icons">
                    
                  <div className="first">
                  <img src={love} alt="" />
                   <img src={chat} alt="" />
                   <img src={share} alt="" />
                  </div>
                   <div className="last">
                   <img src={save} alt="" />
                   </div>
               
                </div>
                <p>345 Likes</p>
                <p>i am chis posting this pic from india</p>

            </div>


        </>
    )
}

export default Post