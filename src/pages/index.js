import Navbar from '../components/Navbar'
import Head from 'next/head'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Ash | Software Engineer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon2.ico" />
      </Head>
      <Navbar /> 
    </div>
  )
}
