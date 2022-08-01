import React from 'react'
import hero from './images/illustration-hero.svg'
import music from './images/icon-music.svg'

const Summary = () => {
  return (
    <div className='flex w-screen h-screen lg:h-[100%] pt-[100px] pb-[100px]'>
        <div className='flex flex-col bg-white w-[327px] h-[567px] rounded-2xl mx-auto my-auto overflow-hidden lg:w-[450px] lg:h-[697px]'>
            <img className='lg:h-[220px]' src={hero}></img>
            <h1 className='text-black text-[22px] font-main font-black text-center mt-[32px] lg:text-[28px] lg:mt-[45px] cursor-default'><span className='shadow-md'>Order Summary</span></h1>
            <p className='text-[#717FA6] text-[15px] text-center font-main mx-[24px] mt-[16px] lg:text-[16px] lg:mx-16 cursor-default'>You can now listen to millions of songs, audiobooks, podcasts on any device anywhere you like!</p>
            <div className='flex flex-row w-[279px] h-[81px] bg-[#F7F9FF] rounded-2xl items-center mx-auto justify-between mt-[24px] lg:w-[354px] lg:h-[98px]'>
                <img className='ml-4' src={music}></img>
                <div className='flex flex-col'>
                    <p className='text-[14px] text-[#1F2E55] font-main font-black cursor-default'>Annual Plan</p>
                    <p className='font-main text-[14px] text-[#717FA6] cursor-default'>59.99/year</p>
                </div>
                <p className='text-[#382AE1] text-[13px] font-main font-bold underline mr-4 hover:no-underline hover:text-[#766CF1] hover:cursor-pointer'>Change</p>
            </div>
            <button className='w-[279px] h-[50px] bg-[#382AE1] rounded-2xl mx-auto mt-[24px] shadow-2xl hover:bg-[#766CF1] lg:w-[354px]'>
            <p className='text-white font-main font-black'>Proceed to Payment</p>
            </button>
            <p className='text-center text-[15px] text-[#717FA6] font-main font-black mt-[24px] hover:text-black hover:cursor-pointer lg:mt-[32px]'>Cancel Order</p>
        </div>
    </div>
  )
}

export default Summary