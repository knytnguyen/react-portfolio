import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#FDFAF2]'>
        {/* CONTAINER */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-3xl py-1 text-[#16192C]'>Hello! My name is</p>

            <h2 className='text-4xl font-bold py-3 sm:text-7xl text-[#16192C]'> Kenny Nguyen,</h2>

            <p className='text-4xl py-3 font-bold text-[#16192C]'>
                <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString('Welcome to my Portfolio!')
                    .pauseFor(3300)
                    .changeDeleteSpeed(50)
                    .deleteAll()
                    .changeDelay(100)
                    typewriter.typeString('I hope you enjoy the stay ٩(^‿^)۶')
                    .start();
                }}
                />
            </p>

            <p className='text-2xl text-[#16192C] py-2 max-w-[700px]'>This is my first ever <span className='font-bold inline bg-gradient-to-r from-red-500 via-blue-400 to-lime-600 bg-[length:100%_5px] bg-no-repeat bg-left-bottom'>React.js and Tailwind CSS</span> project, Check out my work below!</p>

            <div className='pt-10'>
                <button className='text-[#16192C] bg-[#A2D6E7] group border-2 px-6 py-3 my-2 flex items-center border-[#121212] hover:bg-[#E6CCF5]'>
                    <Link to="about" smooth={true} duration={700}> View Work </Link>
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