import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import Typical from 'react-typical'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#FDFAF2]'>
        {/* CONTAINER */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-3xl py-3 text-[#16192C]'>Hi! My name is</p>

            <h2 className='text-4xl font-bold py-3 sm:text-7xl text-[#16192C]'> Kenny Nguyen,</h2>

            <p className='text-4xl py-3 sm:text-5xl font-bold text-[#16192C]'>
                I am a
                <Typical
                    wrapper="b"
                    loop={1}
                    steps={[
                        ' student.', 2000, 
                        ' lifelong enthusiast.', 2000,
                        ' software developer.', 2000
                    ]}
                />
            </p>

            <p className='text-2xl text-[#16192C] py-2 max-w-[700px]'>Welcome to my first ever React project! I hope you enjoy the stay ^_^</p>

            <div className='pt-10'>
                <button className='text-[#16192C] bg-[#A2D6E7] group border-2 px-6 py-3 my-2 flex items-center border-[#121212] hover:bg-[#E6CCF5]'>
                    <Link to="about" smooth={true} duration={500}> View Work </Link>
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3 '/>
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home