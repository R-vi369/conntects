import '../styles/header.scss'
import { LiaHomeSolid , LiaShoppingBasketSolid } from 'react-icons/lia'
import { GiMagicLamp } from 'react-icons/gi'
import {TbFriends } from 'react-icons/tb'
import {HiOutlineChatAlt} from 'react-icons/hi'
const Header = () => {
    return (
        <>
            <div className="header">
                <div className="header_logo">
                    Connects
                    <GiMagicLamp  className='header_icons'/>
                </div>



                <div className="header_icons_text">
                    <div className="header_home">

                    <LiaHomeSolid className='header_icon active_icon' />
                    <p>Home</p>
                    </div>

                    <div className="header_friends">

                    <TbFriends  className='header_icon'/>
                    <p>Friends</p>
                    </div>

                    <div className="header_messaging">

                    <HiOutlineChatAlt className='header_icon'/>
                    <p>Messaging</p>
                    </div>

                    <div className="header_shop">

                    <LiaShoppingBasketSolid className='header_icon'/>
                    <p>Shop</p>
                    </div>

                </div>


                   <div className="avatar">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRcLUO1YT9xjfHdUJXTr3b_vl9bd2R0FIbIA&usqp=CAU" alt="" />
                      <h3>Ravi</h3>
                   </div>

            </div>



        </>
    )
}

export default Header