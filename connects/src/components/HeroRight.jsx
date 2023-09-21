import React from 'react'
import '../styles/HeroRight.scss'
import photo from '../assets/photo.png'
import video from '../assets/video.png'
import article from '../assets/article.png'
import Post from './Post'
import billie_dp from '../assets/billie_dp.jpg'
import billie_post from '../assets/billie_post.jpg'
import chris_dp from '../assets/crish_dp.jpg'
import chris_post from '../assets/chris_post.jpg'


const HeroRight = () => {
//   const [share, setShare] = useState();
//   const [mainTask, setMainTask] = useState([])
//    const sharePost=(e)=>{
//     setShare(e.target.value)
//    }

//    const submitHandler =(e)=>{
//     e.preventDefault()
//  setMainTask([...mainTask, {share}])
//     setShare("")
//     console.log(mainTask);
//    }

//     const renderTask = ''

 
//    renderTask = mainTask.map((t,i)=>{
//           return(

//             <div>
//             {t.share}
//           </div>
//             );
//    })

  return (
    <>
      <div className="heroRight">
        <div className="heroRight_post">
          <div className="heroRight_post_pac">
            <img src="https://avatars.githubusercontent.com/u/108292786?s=400&u=8cd906ad42c90cc795c8954bf9c5afc7723da517&v=4" alt="" />
            <form action="">

            <input type="text" placeholder='Share Something...' />
            </form>
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

           {/* <div className="sharepost">
         <p>{renderTask}</p>

           </div> */}

        <Post dp={chris_dp} name="Cris Hemsworth" career="Australian Actor" img={chris_post} like="3459334" caption="i am chis posting this pic from india" />

        <Post dp={billie_dp} name="Billie Eilish" career="
            American singer-songwriter" img={billie_post} like="6512879" caption="i am chis posting this pic from india" />



      </div>

    </>
  )
}

export default HeroRight