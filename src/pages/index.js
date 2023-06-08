import Image from 'next/image'
import { Inter } from 'next/font/google'
import { motion } from 'framer-motion'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center sm:p-24 max-sm:p-4 bg-bg-main`}
    >
      <div className='p-4 bg-bg-card max-w-[308px] rounded-xl'>
        <div className='relative group flex justify-center items-center cursor-pointer'>
          <Image className='rounded-xl' src={'/images/image-equilibrium.jpg'} width={308} height={308} alt='nft-image' />
          <div className='absolute flex justify-center items-center top-0 w-full h-full rounded-xl bg-cyan opacity-0 duration-300 group-hover:opacity-50 ' />
          <Image className='absolute group-hover:opacity-100 opacity-0 duration-300' src={'/images/icon-view.svg'} width={48} height={48} alt='icon-view' />
        </div>

        <h1 className='text-white hover:text-cyan duration-200 cursor-pointer text-xl my-6 font-semibold'>Equilibrium #3429</h1>
        <p className='text-soft-blue mb-6'>Our Equilibirum collection promotes balance and calm.</p>

        <div className='flex justify-between border-b border-line my-2 pb-4'>

          <div className='flex items-center gap-2'>
            <Image src={'/images/icon-ethereum.svg'} width={11} height={18} alt='icon-eth' />
            <a className='text-cyan font-semibold'>0.041 ETH</a>
          </div>

          <div className='flex items-center gap-2'>
            <Image src={'/images/icon-clock.svg'} width={17} height={17} alt='icon-clock' />
            <a className='text-soft-blue'>3 days left</a>
          </div>

        </div>
        <div className='flex gap-4 items-center py-2'>
          <Image src={'/images/image-avatar.png'} width={33} height={33} alt='image-avatar' />
          <p className='text-soft-blue'> Creation of <span className='text-white hover:text-cyan duration-200 cursor-pointer'>Jules Wyvern</span></p>
        </div>


      </div>


    </main >
  )
}
