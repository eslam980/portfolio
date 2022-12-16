import Head from 'next/head';
// import Banners from '../components/banners';
import Main from '../components/Main';
import Projects from '../components/Projects';
import Skills from '../components/Skills';


export default function Home() {
  return (
    <div>
      <Head>
        <title>eslam980 | Legendary</title>
        <meta name="description" content="I'm eslam980 A Gamer | Legend | Programmer and That's everything you need to know About Me." />
        <link rel="icon" href="/assets/about.png" />
      </Head>
    <Main />
    <Skills />
    <Projects />
    {/* <Banners/> */}
    </div>
  )
}
