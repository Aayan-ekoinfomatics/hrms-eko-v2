import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import eventsApiData from '../../mockApi/eventsApiData';
import hexToRGB from '../../helpers/hexToRGB';

const Events = () => {
  return (
    <div className='w-full bg-white col-start-1 md:col-start-1 col-end-4 md:col-end-2  px-2 rounded-xl shadow-md py-2 '>
                <div className='w-[95%] mx-auto pt-2'>
                    <div className='w-full flex justify-between items-center pb-4'>
                        <div className='w-full flex justify-start'>
                            <h1 className='text-[18px] md:text-[20px] font-[500]'>Events</h1>
                        </div>
                        <button className=' text-right flex justify-end items-center px-1'>
                            Month
                            <span><KeyboardArrowDownIcon fontSize='medium' /></span>
                        </button>
                    </div>
                </div>
                    <div className='w-[95%] mx-auto relative max-h-[320px] overflow-y-scroll'>
                        {
                            eventsApiData?.content?.map((data, index) => {
                                return (
                                    <div className='w-full border-b border-b-[#696969b6]' key={index}>
                                    <h1 className='text-[15px] py-2 text-[#353535] font-[600]'>{data?.event_name}</h1>
                                    <div className='w-full flex justify-between py-2 text-[#525252]'>
                                        <h1 className={`text-[12px]`}>{data?.event_date}</h1>
                                        <h1 className={`text-[13px] font-[600]`} style={{color: data?.color, backgroundColor: hexToRGB(data?.color, 0.1) }} >{data?.event_type}</h1>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>
            </div>
  )
}

export default Events