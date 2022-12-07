import React, { useEffect, useState } from 'react'
import userDashboardData from '../../mockApi/userDashboardApi'
import PowerSettingsNewRoundedIcon from "@mui/icons-material/PowerSettingsNewRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import taskApiData from '../../mockApi/taskApiData';
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Calendar from 'react-calendar';
import eventsApiData from '../../mockApi/eventsApiData';
import hexToRGB from '../../helpers/hexToRGB';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import leaveApiData from '../../mockApi/leaveApiData';
import attendanceApiData from '../../mockApi/attendanceApiData';
// import 'react-calendar/dist/Calendar.css';

const MainDasboard = () => {

    const [date, setDate] = useState(new Date());

    function refreshClock() {
        setDate(new Date());
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
          clearInterval(timerId);
        };
    }, []);
    


  return (
    <div className='bg-[#E5E5F8] py-10'>
        <div className='w-[90%] mx-auto flex justify-between'>  
            <div className='flex flex-col justify-start items-start'>
                <h1 className='poppins text-[18px] md:text-[23px] tracking-tight leading-3 md:leading-4 font-[600]'>Hello <span className='text-[#5f66e1]'>{userDashboardData?.user_data?.user_name}</span></h1>
                <p className='text-[#575757] font-[500] text-[14px] md:text-[18px]'>{userDashboardData?.user_data?.user_position}</p>
            </div>
            <div className='flex justify-between gap-2 md:gap-5 items-start'>
            <h1 className='poppins text-[14px] md:text-[18px] tracking-tight font-[600] text-[#5f66e1]'>{date.toLocaleTimeString()}</h1>
            <button>
                <PowerSettingsNewRoundedIcon
                    className="text-[#5f66e1] rotate-90"
                    fontSize="medium"
                />
            </button>
            </div>
        </div>
        {/* <div className='w-[90%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 py-5'>
            {
                userDashboardData?.pageCardData?.map((data, i) => (
                    <div className=' w-full max-w-[500px] flex flex-col justify-center bg-white rounded-xl shadow-md' key={i}>
                        <h1 className='text-center pt-3 pb-1 text-[20px] font-[500]'>{data?.header}</h1>
                        <h1 className='text-center pb-5 text-[32px] font-[500] text-[#5f66e1]'>{data?.duration}<span className='text-[12px] pl-1'>{data?.duration_unit}</span></h1>
                        <div className='flex justify-between w-[80%] mx-auto py-3'>
                            {
                                data?.content?.map((sub_data, sub_index) => (
                                    <div key={sub_index}>
                                        <h1 className='text-center text-[15px] font-[500]'>{sub_data?.duration}/{sub_data?.out_of}</h1>
                                        <h1 className='text-[13px] text-[#535353]'>{sub_data?.name}</h1>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
            <div className=' w-full max-w-[500px] flex flex-col justify-center bg-white rounded-xl shadow-md'>
                <h1 className='text-center py-4'>dd</h1>
                <h1 className='text-center py-4'>dd</h1>
                <div className='flex justify-center w-[90%] mx-auto py-4'>
                    <div>
                        <h1 className='text-center'>dd</h1>
                        <h1>dd</h1>
                    </div>
                </div>
            </div>
        </div> */}
        <div className='w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 py-5'>
            <div className=' w-full max-w-[500px] flex flex-col justify-center bg-white rounded-xl shadow-md pb-2'>
                <h1 className='text-center pt-3 pb-1 text-[18px] md:text-[20px] font-[500]'>Leaves</h1>
                <h1 className='text-center pb-5 text-[32px] font-[500] text-[#5f66e1]'>0<span className='text-[12px] pl-1'>days</span></h1>
                <div className='flex justify-between w-[75%] mx-auto pt-3'>
                    <div>
                        <h1 className='text-center text-[15px] font-[600] text-[#535353]'>0/6</h1>
                        <h1 className='text-[13px] text-[#535353]'>Sick</h1>
                    </div>
                    <div>
                        <h1 className='text-center text-[15px] font-[600] text-[#535353]'>0/6</h1>
                        <h1 className='text-[13px] text-[#535353]'>Casual</h1>
                    </div>
                    <div>
                        <h1 className='text-center text-[15px] font-[600] text-[#535353]'>0/6</h1>
                        <h1 className='text-[13px] text-[#535353]'>Paid</h1>
                    </div>
                </div>
            </div>
            <div className=' w-full max-w-[500px] flex flex-col justify-center bg-white rounded-xl shadow-md pb-2'>
                <h1 className='text-center pt-3 pb-1 text-[18px] md:text-[20px] font-[500]'>On Desk</h1>
                <h1 className='text-center pb-5 text-[32px] font-[500] text-[#5f66e1]'>1<span className='text-[12px] pl-1'>days</span></h1>
                <div className='flex justify-between w-[55%] mx-auto pt-3'>
                    <div>
                        <h1 className='text-center text-[15px] font-[600] text-[#535353]'>0 days</h1>
                        <h1 className='text-[13px] text-[#535353] text-center'>WFO</h1>
                    </div>
                    <div>
                        <h1 className='text-center text-[15px] font-[600] text-[#535353]'>0 days</h1>
                        <h1 className='text-[13px] text-[#535353] text-center'>WFH</h1> 
                    </div>
                </div>
            </div>
            <div className=' w-full max-w-[500px] flex flex-col justify-center bg-white rounded-xl shadow-md pb-2'>
                <h1 className='text-center pt-3 pb-1 text-[18px] md:text-[20px] font-[500]'>Overtime</h1>
                <h1 className='text-center pb-5 text-[32px] font-[500] text-[#5f66e1]'>0<span className='text-[12px] pl-1'>hours</span></h1>
                <div className='flex justify-between w-[55%] mx-auto pt-3'>
                    <div>
                        <h1 className='text-center text-[15px] font-[600] text-[#535353]'>0 hours</h1>
                        <h1 className='text-[13px] text-[#535353] text-center'>WFO</h1> 
                    </div>
                    <div>
                        <h1 className='text-center text-[15px] font-[600] text-[#535353]'>0 hours</h1>
                        <h1 className='text-[13px] text-[#535353] text-center'>WFH</h1> 
                    </div>
                </div>
            </div>
            <div className=' w-full max-w-[500px] flex flex-col justify-between bg-white rounded-xl shadow-md pb-2'>
                <h1 className='py-3 w-[90%] mx-auto text-[18px] md:text-[20px] font-[500]'>December 5</h1>
                <div className='flex justify-between w-[80%] mx-auto py-1'>
                    <div>
                        <h1 className='text-center'>--:--</h1>
                    </div>
                    <div>
                        <h1 className='text-center'>--:--</h1>
                    </div>
                </div>
                <button className='w-[90%] mx-auto rounded-lg text-white p-2 bg-[#5f66e1]'>Clock In</button>
            </div>
        </div>
        <div className='w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-rows-2 gap-5'>

            {/* grid item - task log */}
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
                                {/* <input type="text" placeholder='Enter date' className='text-[14px] w-full mx-2' />
                                <input type="text" placeholder='Enter task' className='text-[14px] w-full mx-2' />
                                <input type="text" placeholder='Enter project' className='text-[14px] w-full mx-2' />
                                <input type="text" placeholder='Enter remarks' className='text-[14px] w-full mx-2' /> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* grid item - calender */}
            <div className='w-full bg-white border-4 border-[#5f65e19f] md:row-start-1 md:row-end-3 col-start-1 md:col-start-4 col-end-4 md:col-end-5 px-2 rounded-xl shadow-md py-2 max-h-[370px]'>
                {/* <h1 className='text-[18px] font-[500]'>calender</h1> */}
                <Calendar   />
            </div>

            {/* grid item - events */}
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
                    {/* <div className='h-[1px] w-[95%] mx-auto bg-[#696969b6]'></div> */}
                </div>
                    <div className='w-[95%] mx-auto relative max-h-[320px] overflow-y-scroll'>
                        {
                            eventsApiData?.content?.map((data, index) => {
                                return (
                                    <div className='w-full border-b border-b-[#696969b6]' key={index}>
                                    {/* {console.log(hexToRGB(data?.color, 50))}    */}
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

            {/* grid item - leaves */}
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

            {/* grid item - attendance */}
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
        </div>

    </div>
  )
}

export default MainDasboard