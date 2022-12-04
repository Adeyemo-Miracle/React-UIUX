import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../Components'

const whatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id='wgpt3'>
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, cum unde excepturi harum consectetur dolores eius, libero molestiae porro quo eum, voluptatum sint praesentium beatae nesciunt voluptates blanditiis ratione nulla  porro quo eum, voluptatum sint praesentium beatae nesciunt voluptates blanditiis ratione nulla!" />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The Possibilities are beyond your Imagination
        </h1>
        <p>explore your library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nostrum, rerum quisquam dignissimos nobis reprehenderit."/>
        <Feature title="Knowledgebase" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa inventore quaerat ipsam incidunt consequuntur explicabo, voluptas quibusdam."/>
        <Feature title="Education" text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut similique obcaecati velit molestias rerum nobis."/>
      </div>
    </div>
  )
}

export default whatGPT3