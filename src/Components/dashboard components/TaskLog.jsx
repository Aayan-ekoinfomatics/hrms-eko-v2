import React from 'react'
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import taskApiData from '../../mockApi/taskApiData';

const TaskLog = () => {
  return (
    <div className='col-start-1 col-end-4 row-start-1 md:row-end-3 w-full bg-white flex flex-col items-center px-6 rounded-xl shadow-md max-h-[370px]'>
                <div className='w-full pb-2 pt-3'>
                    <div className='w-full flex items-center pb-3'>
                        <div className='w-full'>
                            <h1 className='text-[18px] md:text-[20px] font-[500]'>Task Log</h1>
                        </div>
                        <div className='w-full'>
                            <div className='w-full flex gap-3 items-end'>
                                <input type="search" className='outline-none px-2 py-1 w-full border-b border-b-[#5f66e1]' />
                                <SearchRoundedIcon fontSize="medium" className="text-[#5f66e1]  w-[25px] cursor-pointer" />
                                <BorderColorRoundedIcon fontSize="medium" className="text-[#5f66e1] w-[25px] cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    <div className='flex w-full justify-between pt-2 pb-2'>
                        <h1 className='text-[14px] font-[500] text-[#727272ee] w-full'>{taskApiData?.header?.date}</h1>
                        <h1 className='text-[14px] font-[500] text-[#727272ee] w-full'>{taskApiData?.header?.task}</h1>
                        <h1 className='text-[14px] font-[500] text-[#727272ee] w-full'>{taskApiData?.header?.projects}</h1>
                        <h1 className='text-[14px] font-[500] text-[#727272ee] w-full'>{taskApiData?.header?.remarks}</h1>
                    </div>
                </div>
                <div className='w-full relative overflow-y-scroll'>
                    
                    <div className='w-full'>
                        {taskApiData?.content?.map((data, i) => (
                            <div key={i} className='flex items-center justify-between text-center w-full py-5 border-b border-b-[#5252524f]'>
                                <h1 className='text-[14px] w-full text-left font-[500] text-[#525252]'>{data?.date}</h1>
                                <h1 className='text-[14px] w-full text-left font-[500] text-[#525252]'>{data?.task}</h1>
                                <h1 className='text-[14px] w-full text-left font-[500] text-[#525252]'>{data?.projects}</h1>
                                <h1 className='text-[14px] w-full text-left font-[500] text-[#525252]'>{data?.remarks}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
  )
}

export default TaskLog