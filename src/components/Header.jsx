import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Spinner } from './Spinner'
import TopCoins from './TopCoins';
import { CustomBtn } from './CustomBtn';

export const Header = () => {

    const { coins, loading } = useContext(AppContext);

    const topCoins = coins.slice(0, -95);

    return (
        <div className='md:w-[90%] mx-auto mt-12' >

            <div className='flex flex-col md:w-2/3 mx-auto w-full justify-center text-center'>

                <div className='gap-10'>
                    <h3 className='text-[#0FAE96] text-2xl md:text-4xl font-bold p-2.5'>
                        Start and Build Your Crypto Portfolio Here
                    </h3>

                    <p className='font-Robot font-normal text-lg text-[#d6dedd] p-2.5'>
                        Only at CryptoCap, you can build a good portfolio and learn best practices about cryptocurrency.
                    </p>
                </div>

                <div className='p-10'>
                    <CustomBtn
                        containerStyles={'px-5 py-2 text-center text-white bg-[#0FAE96] text-[15px] rounded-md font-semibold'}
                        title='Get Started' />
                </div>
            </div>


            <h5 className='text-white font-semibold mx-3 py-3 text-lg'>
                Market Trend
            </h5>

            {
                loading ? (<Spinner />) : topCoins.length === 0 ?
                    (
                        <div className='w-full p-5'>
                            <p className='text-center text-lg'>Data Not Found</p>
                        </div>
                    ) :
                    (
                        <div className='flex items-center overflow-x-scroll scroll scroll-smooth whitespace-normal scrollbar-hide gap-5 md:gap-14 snap-x pl-3'>
                            {topCoins.map((coin) => (
                                <TopCoins key={coin.id} coin={coin} />
                            ))}

                        </div>
                    )
            }

        </div>
    )
}