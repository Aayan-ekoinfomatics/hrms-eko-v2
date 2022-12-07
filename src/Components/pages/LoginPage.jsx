import React, { useEffect, useRef, useState } from 'react'
import img from '../../assets/icons/eko_logo.svg'
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";

const LoginPage = () => {

    const [showPassword, setShowPassword] = useState(false);

    const [errorText, setErrorText] = useState(null);

    const emailRef = useRef(null)
    const passwordRef = useRef(null)


    const loginFunctionality = (e) => {
        e.preventDefault()

        if(emailRef?.current?.value?.length === 0 || passwordRef?.current?.value?.length === 0) {
            setErrorText('Please fill both the fields')
        }else {
            console.log('email: ', emailRef?.current?.value)
            console.log('password: ', passwordRef?.current?.value)

            localStorage.setItem('email', emailRef?.current?.value)
            localStorage.setItem('password', passwordRef?.current?.value)
        }
        
    }

    // useEffect(() => {
    //   console.log(loginData)
    // }, [loginData])
    


  return (
    <div className='w-full flex justify-center items-center h-screen bg-gradient-to-tr from-[#E5E5F8] to-[#B8BCFF]'>
        <form className='bg-white rounded-md px-3 min-w-[300px]' onSubmit={loginFunctionality}>
            <div className='w-full flex justify-center py-3 my-3'>
                <img src={img} className='w-[90px]' />
            </div>
            <div className='my-3'>
                <input type="email" className='w-full border border-[#69696946] rounded-md pl-2 py-[10px] text-[13px] focus:outline-[#5f66e1]' placeholder='Email' ref={emailRef} />
                <p className='text-red-400 text-[10px] pl-1 pt-1 hidden'>Some error occured</p>
            </div>
            <div className=' my-3'>
                <div className='flex items-center rounded-md border border-[#69696946]'>
                <input type={showPassword ? 'text' : 'password'} className='w-full rounded-md pl-2 py-[10px] text-[13px] focus:outline-[#5f66e1]' placeholder='Password' ref={passwordRef} />
                <div className='px-1 cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
                    {
                        showPassword ?
                        <VisibilityRoundedIcon  fontSize="small"
                        className="text-[#5f66e1]" />
                        :
                        <VisibilityOffRoundedIcon  fontSize="small"
                        className="text-[#b8bcff]" />
                    }
                </div>
                </div>

                {
                    errorText && 
                    <p className='text-red-500 text-[10px] pl-1 pt-1'>{errorText}</p>
                }
            </div>
                <button className='text-center w-full py-2 mb-3 mt-3 rounded-md text-white bg-gradient-to-tr from-[#5f66e1] to-[#b8bcff]'>
                    Login
                </button>
        </form>
    </div>
  )
}

export default LoginPage