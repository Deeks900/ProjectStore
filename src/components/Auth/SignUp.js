import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import { Grid, Typography } from '@mui/material';
import { Link } from "react-router-dom";

function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [msg, setMsg] = useState('');
    const [msgColor, setMsgColor] = useState("");

    const clearMsg = ()=>{
        setTimeout(()=>{
            setMsg('')
            setMsgColor("")
        }, 3000)
    }

    const handleSubmit = ()=>{
        if(password != confirmPassword){
            setMsgColor('#FF6263');
            setMsg('Confirm Password does not match Password!')
            // clearMsg();
            return;
        }
        else if(firstName && lastName && email && password && confirmPassword){
            setMsg('SignUp Successful!')
            setMsgColor("#6EC72D");
            clearMsg();
            //write code for submission
        }
        else{
            setMsgColor("#FF6263");
            setMsg('Please fill all the fields!')
           
            clearMsg();
            return;
        }
    }

  return (
    <div style={{display:'flex', justifyContent:"center", alignItems:"center", height:'90vh'}}>
    <Grid minWidth={{md:478, xs:300, sm:350, lg:550}}>
    <Card variant="outlined">
        
    <CardContent >
        <h2 style={{marginTop:'-4px'}}>SignUp</h2>
       
       {/* outer container */}
       <div style={{display:'flex', flexDirection:'column'}}>

        {/* First and Last Name */}
        <TextField
        sx={{mb:2}}
        value={firstName}
        onChange={(event)=>setFirstName(event.target.value)}
         required
          id="outlined-number"
          placeholder=' First Name'
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
         sx={{ mb:2}}
         value={lastName}
         onChange={(event)=>setLastName(event.target.value)}
         required
          id="outlined-number"
          placeholder=' Last Name'
          InputLabelProps={{
            shrink: true,
          }}
        />

       <TextField
         sx={{ mb:2}}
         value={email}
         onChange={(event)=>setEmail(event.target.value)}
         required
          id="outlined-number"
          placeholder='Email'
          InputLabelProps={{
            shrink: true,
          }}
        />

      
        <TextField
        fullWidth
         sx={{ mb:2}}
         value={password}
         onChange={(event)=>setPassword(event.target.value)}
         required
          id="outlined-number"
          placeholder='Password'
          type={showPassword?'text':'password'}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {showPassword ? <VisibilityOffIcon onClick={()=>{setShowPassword(!showPassword)}}/> : <VisibilityIcon onClick={()=>{setShowPassword(!showPassword)}} />}
              </InputAdornment>
            ),
          }}
        />

        <TextField
        fullWidth
        value={confirmPassword}
         sx={{mb:2}}
         onChange={(event)=>setConfirmPassword(event.target.value)}
         required
          id="outlined-number"
          placeholder='Confirm Password'
          type={showConfirmPassword?'text':'password'}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {showConfirmPassword ? <VisibilityOffIcon onClick={()=>{setShowConfirmPassword(!showConfirmPassword)}}/> : <VisibilityIcon onClick={()=>{setShowConfirmPassword(!showConfirmPassword)}}/>}
              </InputAdornment>
            ),
          }}
        />
                
</div>
    
   

    </CardContent>
    <CardActions sx={{display:'flex', flexDirection:'column',  justifyContent:'center'}}>
         {msg && msgColor && <div style={{border:'3px solid white', fontWeight:'bold', color:'white', borderRadius:'10px', paddingRight:'17px', paddingLeft:'17px', marginTop:'-30px', marginBottom:'10px', backgroundColor:msgColor, paddingTop:'6px', paddingBottom:'6px'}}>{msg}</div>}
        <Button onClick={handleSubmit} sx={{mb:1,backgroundColor:'#1C8D73'}} variant="contained">Submit</Button>
       <Typography >You already have a account ? <Link to={`/signin`}>SignIn</Link></Typography>
    </CardActions>
    </Card>
  </Grid>
  </div>
  )
}

export default SignUp