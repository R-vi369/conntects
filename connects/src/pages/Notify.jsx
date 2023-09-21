import React from 'react'


import Notification from './Notification'
import '../styles/Notify.scss'
const notify = () => {
  return (
    <>
        <div className="notification_wrapper">

        <Notification img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBLEL8sHlNoaJHdCEuyegpU58s7sPcBfNzCRDKv0vffh3cCgYKZixAcrlj2YG4PJruQqM&usqp=CAU" text="Great work, keep it up dude." time="2s" icons='' />

        <Notification img="https://static-bebeautiful-in.unileverservices.com/celeb-inspo-to%20rock-the-sleek-hair-trend-600x350-picmobhome.jpg" text=" Awesome." time="15s" icons='' />

        <Notification img="https://img.mensxp.com/media/content/2020/Oct/Celeb-Approved-Footwear-For-The-Festive-Season1200_5f8302a241d97.jpeg" text="Share some more projects." time="1m" icons='' />

        <Notification img="https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg" text="looks similar to fb, insta and linkedin." time="4m" icons='' />


        <Notification img="https://images.herzindagi.info/image/2023/Jan/celeb-inspired-outfits.jpg" text="Have you used chatgpt to build this?" time="7m" icons='' />

        <Notification img="https://grazia.wwmindia.com/content/2021/apr/krsna1617891000.jpg" text="Hola amigo. kese ho thik ho?" time="14m" icons='' />
              
        <Notification img="https://rukminim2.flixcart.com/image/850/1000/j7usl8w0/poster/x/x/j/medium-kirsna-sglance-poster-png6n7po369-original-imaexz76wjageqps.jpeg?q=90" text=" You need to add more features." time="25m" icons='' />

        <Notification img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Fran_Drescher_2018.jpg/640px-Fran_Drescher_2018.jpg" text="Haha, how did you build that? " time="39m" icons='' />

        <Notification img="https://www.success.com/wp-content/uploads/2009/11/Deepak-Chopra-A-Life-of-Fullfillment-1-1024x682.jpg" text=" I like your profile, want to collab?" time="1h" icons='' />

        </div>

   
    </>
  )
}

export default notify