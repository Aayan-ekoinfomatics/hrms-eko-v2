import React from 'react'
import attendanceApiData from '../../mockApi/attendanceApiData'

const Attendance = () => {
  return (
    <div className='w-full bg-white px-2 rounded-xl shadow-md py-2 col-start-1 col-end-4 md:col-start-3 md:col-end-5'>
                <div className='w-[95%] mx-auto pt-2'>
                    <h1 className='text-[18px] md:text-[20px] font-[500]'>Attendance</h1>
                </div>
                    <div className='w-[95%] mx-auto flex justify-between pt-4 pr-4 items-center'>
                        {
                            attendanceApiData?.header?.map((data, i) => (
                                <h1 className='text-[14px] w-full font-[600]' key={i}>{data?.label}</h1>
                            ))
                        }
                    </div>
                <div className='w-[95%] mx-auto pt-4  max-h-[320px] overflow-y-scroll'>
                    <div className='w-full '>
                        {
                            attendanceApiData?.content?.map((data, i) => (
                                <div className='flex justify-between py-5 border-b border-b-[#6969692c]' key={i}>
                                    <h1 className='text-[13px] w-full' >{data?.date}</h1>
                                    <h1 className='text-[13px] w-full' >{data?.check_in}</h1>
                                    <h1 className='text-[13px] w-full' >{data?.check_out}</h1>
                                    <h1 className='text-[13px] w-full' >{data?.duration}</h1>
                                    <h1 className='text-[13px] w-full' >{data?.status }</h1>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
  )
}

export default Attendance