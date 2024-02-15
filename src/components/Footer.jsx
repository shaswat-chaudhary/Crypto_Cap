import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BsInstagram,BsFacebook } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';

export const Footer = () => {

    const navigate = useNavigate();

    return (
        <div>
            <footer >
                <div className="md:mx-24 mx-3 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">

                        <div className='flex flex-col gap-4 w-full'>
                            <h4 onClick={() => navigate('/')} className='font-semibold text-white text-2xl cursor-pointer'>
                                Crypto<span className='text-[#0FAE96]'>Cap</span>
                            </h4>
                            <div className='text-[#b8abab] text-2xl gap-5 md:gap-10 flex '>

                                <Link to={'https://instagram.com/imshaswatkumar'} 
                                className='bg-slate-900 w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition duration-300
                                hover:bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white
                                '>
                                    <BsInstagram />
                                </Link>


                                <Link className='bg-slate-900 w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-500 text-white hover:scale-110 transition duration-300'>
                                    <BsFacebook />
                                </Link>

                                <Link className='text-white bg-slate-900 w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition duration-300 hover:bg-black'>
                                    <FaXTwitter/>
                                </Link>

                                <Link to={'https://www.linkedin.com/in/shaswat-chaudhary/'}
                                 className='text-white bg-slate-900 w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition duration-300 hover:bg-blue-500'>
                                <FaLinkedin />
                                </Link>
                            </div>
                            
                        </div>

                        <div className="grid md:grid-cols-3 md:gap-8 gap-3  py-3 items-center w-full ">
                            <div>
                                <h2 className="md:mb-6 font-semibold uppercase text-[#0FAE96]">About Us</h2>
                                 
                                <ul className="text-gray-500 gap-1 md:gap-2 dark:text-gray-400 flex flex-col text-sm">
                                    
                                    <li>
                                        <a href="#" className="hover:underline hover:text-[#646cff]">About</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline hover:text-[#646cff]">Careers</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline hover:text-[#646cff]">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline hover:text-[#646cff]">Legal & Privacy</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="md:mb-6 font-semibold uppercase text-[#0FAE96]">SERVICES</h2>
                                 
                                <ul className="text-gray-500 gap-1 md:gap-2 dark:text-gray-400 flex flex-col text-sm">
                                    
                                    <li>
                                        <a href="#" className="hover:underline hover:text-[#646cff]">Appications</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline hover:text-[#646cff]">Buy Crypto</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline hover:text-[#646cff]">Affilliate</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline hover:text-[#646cff]">Institutional Services</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="md:mb-6 font-semibold uppercase text-[#0FAE96]">LEARN</h2>
                                 
                                <ul className="text-gray-500 gap-1  md:gap-2 dark:text-gray-400 flex flex-col text-sm">
                                    
                                    <li>
                                        <a href="#" className="hover:underline hover:text-[#646cff]">What is Cryptocurrency?</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline hover:text-[#646cff]">Crypto Basic</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline hover:text-[#646cff]">Tips and Tutorials</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline hover:text-[#646cff]">Market Update</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                        <p className='border-t mt-3 pt-3 font-normal text-sm text-center text-[#808080]'>2024 CoinMarketCap. All rights reserved</p>

                </div>
            </footer>

        </div>
    )
}
