import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { IoTrendingDownOutline, IoTrendingUp } from 'react-icons/io5';


const TopCoins = ({ coin }) => {

    const { symbol } = useContext(AppContext);

    const navigate = useNavigate()

    return (

        <div className='w-full flex-nowrap snap-center'>

            <div onClick={() => navigate('/' + coin?.id)}
                className='w-[297px] px-5 py-4 flex flex-col justify-between rounded-2xl bg-cyan-100 border-2 border-[#808080] cursor-pointer hover:border-[#646cff]
                transition duration-200'>

                <div className='w-full flex flex-col gap-4'>

                    <div className='w-full flex justify-between text-center items-center '>

                        <div className='w-[70%] flex justify-between items-center'>
                            <img className='w-12 h-12' src={coin.image} />
                            <p className='font-bold text-lg'>{coin.symbol.toUpperCase()}</p>
                            <p className='bg-gray-400 text-sm px-1 rounded-sm font-semibold'>
                                {coin.name.toUpperCase()}
                            </p>

                        </div>

                        <div>
                            <p>Rank {coin.market_cap_rank}</p>
                        </div>
                    </div>

                    <div className='border-[1px] border-[#c5c5c54f]'></div>

                    <div className='flex flex-row items-center gap-2 justify-between'>
                        <div>
                            <p className='text-2xl font-medium py-0'>
                                {symbol}{coin.current_price}
                            </p>
                            {coin.price_change_percentage_24h < 0 ? (
                                <p className='text-red-700 font-medium text-lg'>
                                    {coin.price_change_percentage_24h.toFixed(2)}%
                                </p>
                            ) : (
                                <p className='text-green-700 font-medium text-lg'>
                                    {coin.price_change_percentage_24h.toFixed(2)}%
                                </p>
                            )}
                        </div>

                        <div className='p-1 mr-5'>
                            {coin.price_change_percentage_24h < 0 ? (
                                <IoTrendingDownOutline size={40} color='red' />
                            ) : (
                                <IoTrendingUp size={40} color='green' />
                            )}
                        </div>

                    </div>

                </div>

            </div >
        </div>

    )
}
export default TopCoins
