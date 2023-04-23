import React from 'react'
import TextField from '@mui/material/TextField';
import Input from '@mui/joy/Input';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Button from '@mui/joy/Button';

export default function ResetPass() {
  return (
    <div>
        <div class="split left">
  <div class="centered">
    
  </div>
</div>

<div class="split right">
  <div class="topMargined">
    {/* <img src="img_avatar.png" alt="Avatar man" /> */}
    <h1>Reset Password</h1>
    </div>
    <div class="topMargined-login">

    <FormLabel sx={{fontWeight:"500", fontSize:"24px"}}>Email</FormLabel>
    <Input
    sx={{width:"80%", margin:'1.5% 0% 3% 0%', height:'50px'}}
  color="neutral"
  placeholder="Enter you email"
  size="md"
  variant="outlined"
/>

<FormLabel sx={{fontWeight:"500", fontSize:"24px"}}>Password</FormLabel>
    <Input
    sx={{width:"80%", margin:'1.5% 0% 3% 0%', height:'50px'}}
  color="neutral"
  placeholder="Enter your Mobile number"
  size="md"
  type='number'
  variant="outlined"
/>

{/* <FormLabel sx={{fontWeight:"500", fontSize:"16px", textDecoration:'underline'}}><a href='#' style={{color:"#000"}}>Forgot Password?</a></FormLabel> */}

  </div>
  <div className='centered-button'>
  <Button size="md" sx={{width:"80%", backgroundColor:'#000', height:'50px'}}>Next Step</Button>

  </div>
</div>

    </div>
  )
}
