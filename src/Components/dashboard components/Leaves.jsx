import React from 'react'
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import hexToRGB from '../../helpers/hexToRGB';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import leaveApiData from '../../mockApi/leaveApiData';

const Leaves = () => {
  return (
    <div className='w-full bg-white px-2 rounded-xl shadow-md pt-2 col-start-1 col-end-4 md:col-start-2 md:col-end-3'>
                <div className='w-[95%] mx-auto pb-2'>
                    <div className='w-full flex items-center justify-between pt-3'>
                        <div className=''>
                            <h1 className='text-[18px] md:text-[20px] font-[500]'>Leaves</h1>
                        </div>
                        <button className=''>
                            <AddRoundedIcon className="text-white bg-[#5f66e1] w-full rounded-md p-1" fontSize='large' />
                        </button>
                    </div>
                </div>
                <div className='w-[95%] max-h-[320px] mx-auto overflow-y-scroll pt-4'>
                    {
                        leaveApiData?.leaves?.map((data, i) => (
                            <div className='w-full border-b border-b-[#696969b6] py-2' key={i}>
                                <div className='w-full flex justify-between'>
                                    <div>
                                        <p className='text-[12px] text-[#696969b9]'>{data?.application}</p>
                                    </div>
                                    <div>
                                        <p className='text-[13px]' style={{color: data?.color, backgroundColor: hexToRGB(data?.color, 0.1) }}>{data?.status}</p>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    <h1 className='text-[18px] font-[600]'>{data?.date}</h1>
                                </div>
                                <div className='w-full flex justify-between'>
                                    <h1 className='text-[11px]' style={{color: data?.type_color}}>{data?.type}</h1>
                                    <button className='bg-[#afafaf7e] text-[#696969] rounded-[5px] mr-2'>
                                        <KeyboardArrowRightIcon fontSize='medium' />
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                    </div>
            </div>
  )
}

export default Leaves