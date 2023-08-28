import React from 'react'
import '../styles/HeroRight.scss'
import photo from '../assets/photo.png'
import video from '../assets/video.png'
import article from '../assets/article.png'
const HeroRight = () => {
  return (
    <>
      <div className="heroRight">
        <div className="heroRight_post">
          <div className="heroRight_post_pac">

          <img src="https://imgv3.fotor.com/images/slider-image/A-blurry-image-of-a-woman-wearing-red.jpg" alt="" />

          <input type="text" placeholder='Share Something...' />
          </div>


          <div className="heroRight_share">
            <div className="photo">
              <img src={photo} alt="" />
              <p>Photo</p>
            </div>
            <div className="video">
            <img src={video} alt="" />
         
              <p>Video</p>
            </div>
            <div className="article">
              <img src={article} alt="" />
                 
              <p>Write an Article</p>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}

export default HeroRight