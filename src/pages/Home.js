import React from 'react'
import Contact from '../components/Contact'
import HomeIntro from '../components/HomeIntro'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

function Home() {
  return (
    <div>
      <HomeIntro />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home