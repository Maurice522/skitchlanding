import React from 'react'
import cashier from "../Assets/cashier.png"
import Vector1 from "../Assets/Vector1.png"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Login = () => {
  return (
    <div className='relative h-[80vh] flex justify-center items-center gap-24 max-sm:flex-col'>
        <img className='absolute h-[92.6vh] top-0 left-0 -z-10' src={Vector1} alt="" />
    <div className='max-sm:pt-28'>
        <img src={cashier} alt="" />
    </div>

    <div className='flex flex-col max-sm:w-36 max-sm:items-center gap-8'>
    <TextField
  sx={{width:"380px",}}
        hiddenLabel
       placeholder='User name'
        size="small"
      />
      <TextField
  sx={{width:"380px"}}
        hiddenLabel
       placeholder='Password'
        size="small"
      />

      <div className='flex justify-end'>
      <Button variant="contained" color="success">
  Login
</Button>
      </div>
    </div>
    </div>
  )
}

export default Login