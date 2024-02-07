import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BsInstagram, BsYoutube, BsFacebook } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';

export const Footer = () => {

    const navigate = useNavigate();

    return (
        <div>
            <footer >
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between ">

                        <div className='flex flex-col gap-4'>
                            <h4 onClick={() => navigate('/')} className='font-semibold text-2xl cursor-pointer'>
                                Crypto<span className='text-[#0FAE96]'>Cap</span>
                            </h4>
                            <div className='text-[#808080] text-2xl flex justify-between w-36 '>
                                <BsInstagram />
                                <BsFacebook />
                                <FaXTwitter />
                                <BsYoutube />
                            </div>
                            <h3 className='font-normal text-[#808080]'>2023 CoinMarketCap. All rights reserved</h3>
                        </div>

                        <div className="grid md:grid-cols-3 md:gap-8 gap-">
                            <div>
                                <h2 className="md:mb-6 text-sm font-semibold uppercase text-[#0D3E36]">About Us</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="">
                                        <a href="#" className="hover:underline">About</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">Careers</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">Legal & Privacy</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-[#0D3E36] uppercase">Services</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="">
                                        <a href="#" className="hover:underline ">Applications</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">Buy Crypto</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">Affilliate</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">Institutional Services</a>
                                    </li>
                                   
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-[#0D3E36] uppercase">Learn</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="">
                                        <a href="#" className="hover:underline">What is Cryptocurrency?</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">Crypto Basic</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">Tips and Tutorials</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">Market Update</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>

        </div>
    )
}
