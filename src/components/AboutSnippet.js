import React from 'react'
import { useNavigate } from 'react-router-dom'

function AboutSnippet() {
  let navigate = useNavigate()

  return (
    <div>
      <h2>About Me</h2>
      <h4>
        I am a seasoned professional seeking to leverage my creative ability, problem-solving skills, 
        and technical know-how in the software development sector. With full-stack experience using Ruby on Rails and React, it is my goal to provide effective and efficient product that is easy to read and reuse by other developers. Perhaps most importantly, I also bake a mean cookie.
      </h4>
      <button onClick={() => navigate("about")}>More about me...</button>
    </div>
  )
}

export default AboutSnippet