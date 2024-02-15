import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { News } from '../components/News';
import { LineChart } from '../components/LineChart';


export const CoinsPage = () => {

  const { id } = useParams();

  const [coinInfo, setCoinInfo] = useState([]);

  const { symbol, currency } = useContext(AppContext);

  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchCoin = async () => {
      setLoading(true);
      try {
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
        const data = await res.json();
        setCoinInfo(data);
      
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }

    fetchCoin();
  }, [id])


  return (
    <div className='mx-3 flex flex-col gap-2 md:mx-24'>

      <div className='w-full flex items-center text-xl py-1 font-semibold relative mt-2 border-b border-slate-100'>
        <Link to='/'>
          <IoIosArrowRoundBack className='w-9 h-9 absolute left-0 top-1 text-white hover:text-[#646cff]' />
        </Link>
        <p className='w-full text-center py-1 text-[#0FAE96]'>
          {coinInfo?.name}
        </p>
      </div>

      <div className='flex gap-5 text-center items-center py-1'>
        <img src={coinInfo?.image?.large} alt={coinInfo?.name} className='w-12 h-12 rounded-full bg-slate-100 shadow-lg object-contain' />
        <p className='text-xl font-semibold tracking-wider text-white'>{coinInfo?.symbol}</p>
      </div>

      <div className='flex justify-between text-center items-center'>
        <p className='text-2xl font-bold text-white'>
          {symbol}{coinInfo?.market_data?.current_price[currency.toLowerCase()]}
        </p>
        <p>{
          coinInfo?.market_data?.price_change_percentage_24h < 0 ? (
            <span className='text-red-700 font-medium text-lg'>
              {coinInfo?.market_data?.price_change_percentage_24h.toFixed(2)}% ▾
            </span>
          ) : (
            <span className='text-green-500 font-medium text-lg'>
              {coinInfo?.market_data?.price_change_percentage_24h.toFixed(2)}% ▴
            </span>
          )
        }
        </p>
      </div>

      <LineChart />

      <p className='font-semibold text-xl text-white mt-4'>Market Status</p>

      <div className='border border-gray-400 bg-slate-900 text-white p-2 rounded-md flex flex-col gap-2 font-medium'>
        <p className='flex flex-1 justify-between'>
          Market Rank
          <span>
            #{coinInfo?.market_cap_rank}
          </span>
        </p>
        <p className='flex flex-1 justify-between'>
          Current Price
          <span>
            {symbol}{coinInfo?.market_data?.current_price[currency.toLowerCase()]}
          </span>
        </p>
        <p className='flex flex-1 justify-between'>
          Market Cap
          <span>
            {symbol}{coinInfo?.market_data?.market_cap[currency.toLowerCase()]}
          </span>
        </p>
        <p className='flex flex-1 justify-between'>
          Total Volume
          <span>
            {symbol}{coinInfo?.market_data?.total_volume[currency.toLowerCase()]}
          </span>
        </p>
      </div>

      <div className='w-full flex flex-col gap-1 mb-3'>
        <p className='text-xl font-semibold text-white'>What is {coinInfo?.symbol} ?</p>
        <span className='break-words border bg-slate-900 text-white rounded-md p-2 border-gray-400'>
          {coinInfo?.description?.en.split("").slice(0, 300).join("") + "..."}
        </span>
      </div>

      {/* <News /> */}

    </div>
  )
}
