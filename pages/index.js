import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Navbar from '@/Components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    // <main
    //   className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    // >

    // </main>
    <div>
      <Head>
        <title>Aprilda Peter | Front-End Developer</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/porto1.svg" />
      </Head>
      <Navbar/>
    </div>
  )
}
