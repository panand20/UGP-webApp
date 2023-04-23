import React from 'react'
import TextField from '@mui/material/TextField';
import Input from '@mui/joy/Input';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Button from '@mui/joy/Button';
import Grid from '@mui/joy/Grid';
export default function SecuritySection() {
  return (
    <div>
        <div class="split left">
  <div class="centered">
    
  </div>
</div>

<div class="split right">
  <div class="topMargined">
    {/* <img src="img_avatar.png" alt="Avatar man" /> */}
    <h1>Security Section</h1>
    </div>
    <div class="topMargined-login">
    <FormLabel sx={{fontWeight:"500", fontSize:"24px"}}>OTP</FormLabel>

    <Grid container spacing={1} sx={{width:"80%", alignItems:'center', }}>
  <Grid xs={3}>
  <Input
    sx={{width:"40%", margin:'1.5% 0% 3% 0%', height:'50px'}}
  color="neutral"
  // placeholder="Password"
  size="md"
  type='password'
  variant="outlined"
/>
  </Grid>
  
  <Grid xs={3}>
  <Input
    sx={{width:"40%", margin:'1.5% 0% 3% 0%', height:'50px'}}
  color="neutral"
  // placeholder="Password"
  size="md"
  type='password'
  variant="outlined"
/>
  </Grid>
  <Grid xs={3}>
  <Input
    sx={{width:"40%", margin:'1.5% 0% 3% 0%', height:'50px',display:'flex', justifyContent:'center'}}
  color="neutral"
  // placeholder="Password"
  size="md"
  type='password'
  variant="outlined"
/>
  </Grid>

  <Grid xs={3}>
  <Input
    sx={{width:"40%", margin:'1.5% 0% 3% 0%', height:'50px', float:"right"}}
  color="neutral"
  // placeholder="Password"
  size="md"
  type='password'
  variant="outlined"
/>
  </Grid>
</Grid>

    

    <FormLabel sx={{fontWeight:"500", fontSize:"24px"}}>New Password</FormLabel>
    <Input
    sx={{width:"80%", margin:'1.5% 0% 3% 0%', height:'50px'}}
  color="neutral"
  placeholder="Password"
  size="md"
  type='password'
  variant="outlined"
/>

<FormLabel sx={{fontWeight:"500", fontSize:"24px"}}>Confirm Password</FormLabel>
    <Input
    sx={{width:"80%", margin:'1.5% 0% 3% 0%', height:'50px'}}
  color="neutral"
  placeholder="Password"
  size="md"
  type='password'
  variant="outlined"
/>

{/* <FormLabel sx={{fontWeight:"500", fontSize:"16px", textDecoration:'underline'}}><a href='#' style={{color:"#000"}}>Forgot Password?</a></FormLabel> */}

  </div>
  <div className='centered-button'>
  <Button size="md" sx={{width:"80%", backgroundColor:'#000', height:'50px'}}>Login</Button>

  </div>
</div>

    </div>
  )
}
