import React, { useContext, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from '../context/AppContext';

export const Navbar = () => {

    const navigate = useNavigate();

    const { currencyChange, currency } = useContext(AppContext);

    const [click, setClick] = useState(false);

    const clickHandler = () => {
        setClick(!click);
    }


    return (

        <div className='sticky top-0 z-50 w-full mx-auto bg-white'>

            <nav className=' border-slate-700 border-b-[1px] flex justify-between '>

                <div className='p-2 md:h-20 gap-0 flex items-center w-full justify-between md:px-24 relative'>

                    <h4 onClick={() => navigate('/')} className='py-2 w-52 md:text-2xl text-xl font-bold cursor-pointer'>
                        Crypto<span className='text-[#0FAE96]'>Cap</span>
                    </h4>

                    <ul className='gap-20 font-semibold text-lg hidden md:flex p-2'>
                        <li >
                            <Link>
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link>
                                Features
                            </Link>
                        </li>

                        <li>
                            <Link>
                                Market
                            </Link>
                        </li>

                        <li>
                            <Link>
                                Learn
                            </Link>
                        </li>
                    </ul>


                    <div>
                        <select
                            value={currency}
                            onChange={currencyChange}
                            className='w-24 h-10 outline-none bg-slate-200 border border-slate-600 rounded-[4px] px-1'
                        >

                            <option value={"INR"}>INR</option>
                            <option value={"USD"}>USD</option>
                        </select>
                    </div>

                    <Link>
                        <img onClick={clickHandler}
                            className='cursor-pointer w-12 h-12 rounded-full'
                            src='https://avatars.githubusercontent.com/u/63004581?v=4'
                            alt='user'
                        />
                    </Link>

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
