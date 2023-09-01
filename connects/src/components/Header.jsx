import '../styles/header.scss'
import { LiaHomeSolid, LiaShoppingBasketSolid } from 'react-icons/lia'
import { GiMagicLamp } from 'react-icons/gi'
import { TbFriends } from 'react-icons/tb'
import { HiOutlineChatAlt } from 'react-icons/hi'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <div className="header">
                <div className="header_logo">
                    <Link to='/' className='LinkMain'>
                        <div className="connects">
                            Connects
                        </div>
                        <GiMagicLamp className='header_icons' />
                    </Link>
                    <div className="notification">
                        <Link to='/Notify' style={{textDecoration: 'none'}}>
                        <IoIosNotificationsOutline /><sup>87</sup>
                        </Link>
                    </div>
                </div>



                <div className="header_icons_text">
                    <Link to='/' className="header_home">
                        <LiaHomeSolid className='header_icon active_icon' />
                        <p>Home</p>
                    </Link>

                    <Link to='/Find' className="header_friends">

                        <TbFriends className='header_icon' />
                        <p>Find</p>
                    </Link>

                    <Link to='/Message' className="header_messaging">

                        <HiOutlineChatAlt className='header_icon' />
                        <p>Messaging</p>
                    </Link>

                    <Link to='/Story' className="header_shop">

                        <LiaShoppingBasketSolid className='header_icon' />
                        <p>Story</p>
                    </Link>

                </div>



                <div className="avatar">
                    <img src="https://img.olympicchannel.com/images/image/private/t_s_w960/t_s_16_9_g_auto/f_auto/primary/qpr4zk5ybnwg0gpmuctd" alt="" />
                    <h3>Ravi</h3>
                </div>


            </div>



        </>
    )
}

export default Header