import React, { useState } from 'react'
import '../styles/HeroRight2.scss'
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
const HeroRight2 = () => {
  const [count, setCount] = useState(<TurnedInNotIcon />);
  const saveItem = () => {
    setCount(!count)

  }
  const [following, setFollowing] = useState("Follow")
  const Follow = () => {
    setFollowing(!following)
  }
  return (
    <>
      <div className="heroRight2">

        <div className="profile">
          <img src="https://avatars.githubusercontent.com/u/108292786?s=400&u=8cd906ad42c90cc795c8954bf9c5afc7723da517&v=4" alt="" />
          <h2>Ravi</h2>
          <p>Frontend-dev ! React.js</p>

        </div>

        <div className="heroRight_view">
          <div className="view">

            <p>Who's viewed your profile</p>
            <p>769</p>
          </div>
          <div className="impressions">
            <p>Impressions of your post</p>
            <p>570</p>
          </div>
          <div className="item">
            <p onClick={saveItem}>
              {count ? <TurnedInNotIcon /> : <TurnedInIcon />}


            </p>
            <p>My items</p>
          </div>

        </div>

        <div className="recent">
          <p>Recent</p>


          <div className="recent_serach">
            <div className="searching">
              <TravelExploreIcon />
              <p>Frontend Developers - javascript</p>
            </div>
            <div className="searching">
              <TravelExploreIcon />
              <p>React.js and native work project</p>
            </div>
            <div className="searching">
              <TravelExploreIcon />
              <p>Projects - Development, manage</p>
            </div>

            <div className="searching">
              <TravelExploreIcon />
              <p>Netflix - using next.js & Ui, UX</p>
            </div>
            <div className="searching">
              <TravelExploreIcon />
              <p>Internship - PPO, Web-dev</p>
            </div>

          </div>

          <div className="hastag">
            <p>#WebDev</p>
            <p>#React.js</p>
            <p>#Frontend</p>
            <p>#Sass</p>
            <p>#materialUI</p>
          </div>



        </div>

        <div className="follow">
          <p>Stay up to date with free resources on HR <br /> compliance and culture news.</p>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzzbQTdTmDLehmvWeWS3a3bMCFcPdnYp66fnOLcAylECBeexUOipGqN5l_5M_FwaFueM&usqp=CAU" alt="" />
          <p>to get access, just follow us on Connects</p>
          <button onClick={Follow}>

            {following ? "Follow" : "Followed"}
          </button>
        </div>




      </div>

    </>
  )
}

export default HeroRight2