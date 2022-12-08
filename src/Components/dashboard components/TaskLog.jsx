import React, { useState } from 'react'
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import taskApiData from '../../mockApi/taskApiData';
import CancelIcon from '@mui/icons-material/Cancel';

const TaskLog = () => {

    const [ popUpToggle, setPopUpToggle ] = useState(false);


    return (
        <>
            {/* desktop view */}
            <div className='hidden sm:flex col-start-1 col-end-4 row-start-1 md:row-end-3 w-full bg-white flex-col items-center px-6 rounded-xl shadow-md max-h-[370px]'>
                <div className='w-full pb-2 pt-3'>
                    <div className='w-full flex items-center pb-3'>
                        <div className='w-full'>
                            <h1 className='text-[18px] md:text-[20px] font-[500]'>Task Log</h1>
                        </div>
                        <div className='w-full'>
                            <div className='w-full flex gap-3 items-end'>
                                <input type="search" className='outline-none px-2 py-1 w-[40%] ml-auto border-b border-b-[#5f66e1]' />
                                <SearchRoundedIcon fontSize="medium" className="text-[#5f66e1]  w-[25px] cursor-pointer" />
                                <BorderColorRoundedIcon fontSize="medium" className="text-[#5f66e1] w-[25px] cursor-pointer" onClick={() => setPopUpToggle(!popUpToggle)} />
                            </div>
                        </div>
                    </div>
                    <div className='flex w-full justify-between pt-2 pb-2'>
                        <h1 className='text-[13px] md:text-[14px] font-[600] w-full'>{taskApiData?.header?.date}</h1>
                        <h1 className='text-[13px] md:text-[14px] font-[600] w-full'>{taskApiData?.header?.task}</h1>
                        <h1 className='text-[13px] md:text-[14px] font-[600] w-full'>{taskApiData?.header?.projects}</h1>
                        <h1 className='text-[13px] md:text-[14px] font-[600] w-full'>{taskApiData?.header?.remarks}</h1>
                    </div>
                </div>
                <div className='w-full relative overflow-y-scroll'>

                    <div className='w-full'>
                        {taskApiData?.content?.map((data, i) => (
                            <div key={i} className='flex items-center justify-between text-center w-full py-5 border-b border-b-[#6969692c]'>
                                <h1 className='text-[12px] md:text-[14px] w-full text-left font-[500] text-[#525252]'>{data?.date}</h1>
                                <h1 className='text-[12px] md:text-[14px] w-full text-left font-[500] text-[#525252]'>{data?.task}</h1>
                                <h1 className='text-[12px] md:text-[14px] w-full text-left font-[500] text-[#525252]'>{data?.projects}</h1>
                                <h1 className='text-[12px] md:text-[14px] w-full text-left font-[500] text-[#525252]'>{data?.remarks}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* mobile view */}
            <div className='sm:hidden col-start-1 col-end-4 row-start-1 md:row-end-3 bg-white w-full flex flex-col items-center px-6 rounded-xl shadow-md pb-2'>
                <div className='w-full'>
                    <div className='w-full flex items-center pb-3'>
                        <div className='w-full pt-4'>
                            <h1 className='text-[18px] md:text-[20px] font-[500]'>Task Log</h1>
                        </div>
                        <div className='w-full'>
                            <div className='w-full flex gap-3 items-end'>
                                <input type="search" className='outline-none px-2 py-1 w-[40%] ml-auto border-b border-b-[#5f66e1]' />
                                <SearchRoundedIcon fontSize="medium" className="text-[#5f66e1]  w-[25px] cursor-pointer" />
                                <BorderColorRoundedIcon fontSize="medium" className="text-[#5f66e1] w-[25px] cursor-pointer"  onClick={() => setPopUpToggle(!popUpToggle)}/>
                            </div>
                        </div>
                    </div>
                    <div className='w-full max-h-[320px] overflow-y-scroll'>
                        {
                            taskApiData?.content?.map((data, i) => (
                                <div className='w-full border-4 border-[#5f65e1d0] my-3 gap-3 py-3 flex flex-col justify-center items-start px-2 rounded-[6px]' key={i}>
                                    <div className='w-full flex justify-center items-start gap-3 border-b border-b-[#6969697a]'>
                                        <h1 className='w-fit  text-left text-[#333333] text-[14px]' >{taskApiData?.header?.date}</h1>
                                        <span className='text-[#333333]' >-</span>
                                        <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.date}</h1>
                                    </div>
                                    <div className='w-full flex justify-center items-start gap-3 border-b border-b-[#6969697a]'>
                                        <h1 className='w-fit  text-left text-[#333333] text-[14px]' >{taskApiData?.header?.task}</h1>
                                        <span className='text-[#333333]' >-</span>
                                        <div className='w-full max-h-[100px] overflow-y-scroll'>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.task}</h1>
                                            {/* <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.task}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.task}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.task}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.task}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.task}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.task}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.task}</h1> */}
                                        </div>
                                    </div>
                                    <div className='w-full flex justify-center items-start gap-3 border-b border-b-[#6969697a]'>
                                        <h1 className='w-fit text-left text-[#333333] text-[14px]' >{taskApiData?.header?.projects}</h1>
                                        <span className='text-[#333333]' >-</span>
                                        <div className='w-full max-h-[100px] overflow-y-scroll'>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.projects}</h1>
                                            {/* <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.projects}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.projects}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.projects}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.projects}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.projects}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.projects}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.projects}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.projects}</h1> */}
                                        </div>
                                    </div>
                                    <div className='w-full flex justify-center items-start gap-3 border-b border-b-[#6969697a]   '>
                                        <h1 className='w-fit  text-left text-[#333333] text-[14px]' >{taskApiData?.header?.remarks}</h1>
                                        <span className='text-[#333333]' >-</span>
                                        <div className='w-full max-h-[100px] overflow-y-scroll'>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.remarks}</h1>
                                            {/* <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.remarks}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.remarks}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.remarks}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.remarks}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.remarks}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.remarks}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.remarks}</h1>
                                            <h1 className='w-full text-left text-[#333333] text-[13px]' >{data?.remarks}</h1> */}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div onClick={() => setPopUpToggle(false)} className={`fixed bg-black z-[90] inset-0 opacity-60 ${ popUpToggle ? 'block' : 'hidden' }`}>

            </div>

            <div className={`fixed top-[20%] bottom-0 left-0 right-0 w-[90%] md:w-[70%] mx-auto h-[60vh] z-[100] bg-white justify-center items-center rounded-xl ${ popUpToggle ? 'block' : 'hidden' }`}>
                <div className='w-full text-right pr-5 pt-5 text-[20px]'>
                    <button onClick={() => setPopUpToggle(false)}>
                        <CancelIcon fontSize='large' className='text-[#5f66e1]' />
                    </button>
                </div>
            </div>
        </>
    )
}

export default TaskLog