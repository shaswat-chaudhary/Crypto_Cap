import React from 'react'
import { CustomBtn } from '../components/CustomBtn'

export const Features = () => {

  return (
    <div className='w-full overflow-hidden'>

      <div className='p-2 md:p-10 justify-center md:text-center text-start flex flex-col gap-5'>
        <h3 className='text-2xl text-[#0D3E36] font-bold '>
          CryptoCap Amazing Features
        </h3>

        <p className='text-[#4D625F] text-sm font-semibold '>
          Explore sensational features to prepare your best investment in cryptocurrency
        </p>
      </div>


      <div className='p-2 flex flex-col gap-10 align-middle md:py-6 md:px-16 justify-between md:items-center items-start'>

        <div className='md:w-1/2 space-y-3 md:text-center'>
          <h5 className='font-semibold text-lg'>
            New In Cryptocurrency?
          </h5>
          <p>
            We'll tell you what cryptocurrencies are, how they work and why you should own one right now. So let's do it.
          </p>
        </div>

        <CustomBtn 
        containerStyles={`px-5 py-2 text-center text-white bg-[#0FAE96] text-[15px] rounded-md font-semibold`}
        title={'Learn & Explore Now'}
        />

      </div>

    </div>
  )
}
