import React from 'react'
import { Feature } from '../../Components'
import './features.css'

const features = () => {
  const featuresData = [
    {
      title : 'Improving end distrusts instantly',
      text : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex error eveniet facilis corrupti suscipit nostrum quisquam rerum debitis ipsam dignissimos.'
    },
    {
      title : 'Become the tended active',
      text : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex error eveniet facilis corrupti suscipit nostrum quisquam rerum debitis ipsam dignissimos.'
    },
    {
      title : 'Message or am nothing',
      text : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex error eveniet facilis corrupti suscipit nostrum quisquam rerum debitis ipsam dignissimos.'
    },
    {
      title : 'Really boy law county',
      text : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex error eveniet facilis corrupti suscipit nostrum quisquam rerum debitis ipsam dignissimos.'
    }
  ]
  return (
   <div className="gpt3__features section__padding" id='features'>
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You just Need To Realize it. Step into Future today & Make it Happen.</h1>
      <p>Request early access</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) =>(
        <Feature title={item.title} text={item.text} key={item.title + index } />
      ))}
    </div>
   </div>
  )
}

export default features