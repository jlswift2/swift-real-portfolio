import React from 'react'
import AboutSnippet from '../Components/AboutSnippet'
import Contact from '../Components/Contact'
import HomeIntro from '../Components/HomeIntro'
import Projects from '../Components/Projects'
import Skills from '../Components/Skills'

function Home() {
  return (
    <div>
      <HomeIntro />
      <AboutSnippet />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home