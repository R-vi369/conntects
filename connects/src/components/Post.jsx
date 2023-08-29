import React, { useState } from 'react'
import '../styles/Post.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';

import TelegramIcon from '@mui/icons-material/Telegram';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import TurnedInIcon from '@mui/icons-material/TurnedIn';



const Post = ({ dp, name, img, caption, like, career }) => {
    const [save, setSave] = useState();
    const turnSave = () => {
        setSave(!save)
    }

    const [love, setLove] = useState()
    const Lovebtn = () => {
        setLove(!love)
    }

    return (
        <>
            <div className="post">

                <div className="post_avatar">
                    <img src={dp} alt="" />
                    <div className="post_avatar_text">

                        <h4>{name}</h4>
                        <p>{career}</p>
                    </div>
                </div>
                <div className="post_img">
                    <img src={img} alt="" />
              
                </div>
                <div className="post_icons">

                    <div className="first">
                        <p onClick={Lovebtn}>

                            {
                                love ? <FavoriteIcon style={{ color: 'red' }} /> : < FavoriteBorderIcon />
                            }
                        </p>
                        <MarkChatUnreadIcon />
                        <TelegramIcon />
                    </div>
                    <div className="last" onClick={turnSave}>
                        {
                            save ? < TurnedInNotIcon /> : < TurnedInIcon />
                        }


                    </div>


                </div>
                <div className="like_count">

                    <p>{like} Like</p>
                    <p>{caption}</p>
                </div>

            </div>


        </>
    )
}

export default Post