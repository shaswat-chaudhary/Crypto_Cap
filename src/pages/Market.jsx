import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

export const Market = () => {

  const btn = [
    { label: 'All', value: 'all' },
    { label: 'Gainers', value: 'gainers' },
    { label: 'Losers', value: 'losers' },
  ];

  const [button, setButton] = useState('all');

  const { coins, symbol } = useContext(AppContext);

  const navigate = useNavigate();

  const [AllCoins, setAllCoins] = useState([]);

  const [search, setSearch] = useState('');

  const [pages, setPages] = useState(1);

  const handlerPage = (selected) => {
    if (selected >= 1 && selected <= AllCoins.length / 10 && selected !== pages) {
      setPages(selected)
    }
  }

  const handlerAllChange = (type) => {
    let filterCoin;
    if (type === 'gainers') {
      filterCoin = coins.filter((coin) => {
        return coin.price_change_percentage_24h > 0;
      })
    }
    else if (type === 'losers') {
      filterCoin = coins.filter((coin) => {
        return coin.price_change_percentage_24h < 0;
      })
    }
    else {
      filterCoin = coins;
    }
    setButton(type);
    setAllCoins(filterCoin);
  }


  useEffect(() => {
    setAllCoins(coins);
  }, [coins]);


  return (
    <div>

      <div className='w-full'>

        <div className='py-4 mx-3 md:mx-24 space-y-3 md:space-y-6'>
          <h3 className='font-bold text-3xl text-[#0FAE96]'>
            Market Update
          </h3>
          <p className='text-sm text-[#a1cdc6]'>
            Cryptocurrency Categories
          </p>
        </div>

        <form className='w-3/4 md:w-1/2 p-2 mx-3 border-white text-white border-[1px] rounded-lg h-10 mb-3 md:mx-24'>
          <input className='w-full h-full bg-transparent outline-none text-white'
            type="text"
            placeholder="Search Coin"
            onChange={(e) => setSearch(e.target.value)} />

        </form>

        <div>

          <div className='flex flex-row gap-4 mx-3 md:mx-24 md:gap-10 w-3/4 md:w-1/4 mb-3'>

            {
              btn.map((btn, index) => (
                <button key={btn.value} type='index'
                  onClick={() => handlerAllChange(btn.value)}
                  className={`btn border transition duration-150 text-white text-sm rounded-lg py-1.5 md:px-5 grow
                  ${btn.value === button ? 'border-[#646cff] bg-slate-900' : ''}
                  hover:border-white`}>
                  {btn.label}
                </button>
              ))
            }

          </div>

          <div className='h-[80vh] overflow-scroll md:px-24 px-3 scrollbar-hide'>

            <div className='hidden md:flex justify-between rounded-md mb-2 border-slate-700 border-[1px] py-2 px-10 bg-slate-200 sticky top-0'>

              <div className='flex gap-20 text-center items-center '>
                <p>No</p>

                <div className='flex md:flex-row gap-10 text-start md:w-[300px] justify-between'>
                  <p className='w-1/2'>Name</p>
                  <p className='w-1/2'>Symbol</p>
                </div>

              </div>

              <div className='flex gap-28 text-center items-center pr-12'>
                <p>Price</p>
                <p>Change (24h)</p>
                <p>Trade</p>
              </div>

            </div>

            <div>
              {
                AllCoins
                  .filter((coin) => {
                    return search.toLowerCase() === "" ? coin :
                      coin.name.toLowerCase().includes(search) ||
                      coin.name.toUpperCase().includes(search) || 
                      coin.symbol.toLowerCase().includes(search) || 
                      coin.symbol.toUpperCase().includes(search)
                  })

                  .slice((pages - 1) * 10, (pages - 1) * 10 + 10)


                  .map((coin, index) => (

                    <div key={coin.id} coin={coin}>

                      <Link to={'/' + coin?.id}>
                        <div className='w-full flex justify-between rounded-lg border-slate-700 border-[1px] py-2
                         md:px-10 px-3 md:mx-0 mb-2 mt-2 text-center items-center bg-cyan-100 hover:scale-105 hover:border-[#646cff] transition duration-300'>

                          <div className='flex gap-6 text-center items-center'>

                            <p className='hidden md:flex'>{index + 1}</p>
                            <img className='w-10 h-10' src={coin.image} alt={coin.name} />

                            <div className='flex flex-col md:flex-row md:gap-5 text-start md:w-[300px] md:ml-1'>
                              <p className='text-xl md:w-1/2'>{coin.name}</p>
                              <div className='w-[2px] h-5 bg-slate-600 hidden md:flex'></div>
                              <p className='font-semibold text-gray-600 md:w-1/2'>{coin.symbol.toUpperCase()}</p>
                            </div>

                          </div>

                          <div className='flex flex-col md:flex-row md:gap-10 md:w-[25%] md:justify-evenly text-end md:ml-40'>

                            <p className='font-semibold'>{symbol}{coin.current_price}</p>

                            <p>
                              {coin.price_change_percentage_24h < 0 ?
                                (
                                  <span className='text-red-600'>
                                    {coin.price_change_percentage_24h.toFixed(2)}%
                                  </span>
                                ) :
                                (
                                  <span className='text-green-600'>
                                    {coin.price_change_percentage_24h.toFixed(2)}%
                                  </span>
                                )}
                            </p>

                          </div>

                          <button className='hidden md:flex md:px-3 py-2 text-center text-white bg-[#0FAE96] text-[13px] rounded-md font-semibold '
                            onClick={() => navigate(`/coins/${coin.id}`)} key={coin.name}>
                            Trade Now
                          </button>

                        </div>
                      </Link>

                    </div>
                  ))
              }
            </div>
          </div>
        </div>


        {/* <Pagination
          className='bg-slate-300 mx-2 mt-2 md:mx-24 rounded-lg md:rounded p-1'
          count={(coins.length / 10)}
          onChange={(_, item) => {
            setPages(item);
          }}
        /> */}

        <div className='mx-3 md:mx-24 mt-2'>
          {
            AllCoins.length >  0 && <div
              className='w-full bg-slate-300 p-1 rounded-lg'
            >

              <div className='w-full md:w-1/2 flex justify-around items-center text-center'>

                <button
                  onClick={() => handlerPage(pages - 1)}
                  className={pages > 1 ? "" : "cursor-context-menu text-gray-500"}
                >
                  <GoChevronLeft className='font-bold text-lg'/>
                </button>

                {[...Array(coins.length / 10)].map((_, index) => {
                  return <button
                    key={index}
                    className={`rounded-full ${pages === index + 1 ? "bg-gray-400 w-8 h-8" : ""}`}
                    onClick={() => handlerPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                })}

                <button
                  onClick={() => handlerPage(pages + 1)}
                  className={pages < AllCoins.length / 10 ? "" : "cursor-context-menu text-gray-500"}
                >
                  <GoChevronRight className='text-lg font-bold'/>
                </button>

              </div>

            </div>
          }
        </div>



      </div>

    </div>
  )
}


