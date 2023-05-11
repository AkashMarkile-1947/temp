import Image from 'next/image'
import { Inter } from 'next/font/google'
import HeroSection from '../../components/Hero'
import Clients from '../../components/Clients'
import AboutUsPage from '../../components/About'
import { HeroLinks } from '../../components/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <HeroSection />
    <div className="flex w-full bg-black flex md:hidden  bottom-0 justify-around flex-wrap py-4">
      <HeroLinks title="Data Internet" />
      <HeroLinks title="Control panel" />
      <HeroLinks title="Wherehouse Management" />
      <HeroLinks title="Components Manufacturing" />
    </div>
    <AboutUsPage />
    <hr className="w-full" />
    <Clients />
    </>
    )
}
