import '../styles/header.scss'
import { LiaHomeSolid , LiaShoppingBasketSolid } from 'react-icons/lia'
import { GiMagicLamp } from 'react-icons/gi'
import {TbFriends } from 'react-icons/tb'
import {HiOutlineChatAlt} from 'react-icons/hi'
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <>
            <div className="header">
                <div className="header_logo">
                    <Link to='/' className='LinkMain'>
                    Connects
                    <GiMagicLamp  className='header_icons'/>
                    </Link>
                </div>



                <div className="header_icons_text">
                    <Link to='/' className="header_home">
                    <LiaHomeSolid className='header_icon active_icon' />
                    <p>Home</p>
                    </Link>

                    <Link to='/Find' className="header_friends">

                    <TbFriends  className='header_icon'/>
                    <p>Find</p>
                    </Link>

                    <Link to='/Message' className="header_messaging">

                    <HiOutlineChatAlt className='header_icon'/>
                    <p>Messaging</p>
                    </Link>

                    <Link to='/Story' className="header_shop">

                    <LiaShoppingBasketSolid className='header_icon'/>
                    <p>Story</p>
                    </Link>

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