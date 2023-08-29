import React from 'react'
import '../styles/Story.scss'
import storyApi from '../story.json'
const Story = () => {
  return (
    <>
    <div className="story">
      <div className="story_container">
        
          
 {
    storyApi.map(items =>{
      return(
        <div className="box" key={items.id}>
          <img src= {items.img} alt=""/>
          <p>
          {items.Name}
          </p>
        </div>
      )

    })
 }
      </div>
    </div>
    
    </>
  )
}

export default Story