import React from 'react'
import possibilityImage from '../../assets/possibility.png'
import './possibility.css'

const possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The possibities are beyond your imagination</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, vitae voluptate? Id at, fugiat distinctio quas dolore, quasi sit reiciendis et quaerat, harum magnam! Exercitationem Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rem, non consequatur ipsam error sunt cupiditate explicabo nam voluptates nihil</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default possibility