import React, { useContext, useState, useEffect } from 'react'
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from '../context/AppContext';
import { Link } from 'react-scroll'


export const Navbar = () => {

    const navigate = useNavigate();

    const { currencyChange, currency } = useContext(AppContext);

    const [click, setClick] = useState(false);

    const [activeLink, setActiveLink] = useState('header');

    const clickHandler = () => {
        setClick(!click);
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            if (scrollPosition < 500) {
                setActiveLink('header');
            } else if (scrollPosition >= 500 && scrollPosition < 1000) {
                setActiveLink('features');
            } else if (scrollPosition >= 1000 && scrollPosition < 1500) {
                setActiveLink('market');
            } else if (scrollPosition >= 1500 && scrollPosition < 2500) {
                setActiveLink('learn');
            }

        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (

        <div className='w-full md:sticky top-0 z-50 mx-auto bg-slate-950'>

            <nav className=' border-slate-700 border-b-[1px] flex justify-between'>

                <div className='p-2 md:h-20 gap-0 flex items-center w-full justify-between md:px-24 relative'>

                    <h4 onClick={() => navigate('/')} className='py-2 w-52 text-2xl text-white font-bold cursor-pointer'>
                        Crypto<span className='text-[#0FAE96]'>Cap</span>
                    </h4>

                    <ul className='gap-20 font-semibold text-blue-500 text-lg hidden md:flex p-2'>

                        <li className={`${activeLink === 'header' ? 'active' : ''} cursor-pointer`}>
                            <Link to="header" smooth={true} duration={500}>
                                Home
                            </Link>
                        </li>
                        <li className={`${activeLink === 'features' ? 'active' : ''} cursor-pointer`}>
                            <Link to="features" smooth={true} duration={500}>
                                Features
                            </Link>
                        </li>
                        <li className={`${activeLink === 'market' ? 'active' : ''} cursor-pointer`}>
                            <Link to="market" smooth={true} duration={500}>
                                Market
                            </Link>
                        </li>
                        <li>
                            <Link to="learn" smooth={true} duration={500}>
                                Learn
                            </Link>
                        </li>


                    </ul>


                    <div className='mr-2'>
                        <select
                            value={currency}
                            onChange={currencyChange}
                            className='w-24 h-10 bg-black font-medium outline-none text-[#646cff] border border-slate-600 rounded-md px-2 hover:border-[#646cff] transition duration-200 cursor-pointer'>

                            <option value={"INR"}>INR</option>
                            <option value={"USD"}>USD</option>
                        </select>
                    </div>

                    <NavLink to={'https://www.linkedin.com/in/shaswat-chaudhary/'}>
                        <img onClick={clickHandler}
                            className='cursor-pointer w-11 h-11 rounded-full ring-1'
                            src='https://avatars.githubusercontent.com/u/63004581?v=4'
                            alt='user'
                        />
                    </NavLink>

                    {/* <div style={{ display: click ? 'block' : 'none' }}
                        className='bg-teal-300 w-72 absolute top-16 right-1 rounded-lg'>

                        <div className='flex flex-col gap-2 items-center p-1'>
                            <Avatar
                                style={{ width: '70px', height: '70px' }}
                                className='cursor-pointer'
                                src='https://avatars.githubusercontent.com/u/63004581?v=4'
                                alt='user'
                            />

                            <p className='text-xl font-bold'>
                                Shaswat kumar chaudhary
                            </p>

                            <div className='font-semibold w-full flex justify-between p-1 rounded-md text-lg bg-red-300 items-center'>
                                <p>Sign Out</p>
                                <LogoutIcon />
                            </div>
                        </div>

                    </div> */}

                </div>

            </nav>
        </div>
    )
}
