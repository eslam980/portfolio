import Head from 'next/head'
import About from '../components/About'
import Aboutme from '../components/Aboutme'
import Banners from '../components/banners'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>eslam980 | Legendary</title>
        <meta name="description" content="I'm eslam980 A Gamer | Legend | Programmer and That's everything you need to know About Me." />
        <link rel="icon" href="/assets/about.png" />
      </Head>
    <Main />
    <Banners/>
    <Aboutme/>
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
