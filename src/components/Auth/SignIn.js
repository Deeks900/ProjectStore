import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Grid';
import {img2} from './../../assets';
import { Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  one: {
    [theme.breakpoints.down('sm')]:{
      display:'none'
    },
    [theme.breakpoints.between('sm', 'md')]:{
      width:'40vh',
      height:'40vh',
      marginTop:'24vh'
    },
    [theme.breakpoints.between('md', 'lg')]: {
      width:'50vh',
      height:'60vh',
      marginTop:'16vh'
    },
    [theme.breakpoints.between('lg', 'xl')]:{
      height:'90vh',
      width:'90vh'
    }
    
  },
}));


// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function SignIn(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [msg, setMsg] = useState('');
  const [msgColor, setMsgColor] = useState("");

  const clearMsg = ()=>{
    setTimeout(()=>{
        setMsg('')
        setMsgColor("")
    }, 3000)
}

  const handleLogin = ()=>{
    if(email && password){
      setMsg('Login Successful!')
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

  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{justifyContent:'space-around'}}>
        
        {/* Left side start */}
        <Grid item xs={0} sm={5} md={5} lg={5} sx={{my:3}}> 
          <img className={classes.one} {...props} src={img2}/>
        </Grid>
        {/* Left side ends */}

        {/* right side starts */}
        <Grid item xs={11} sm={5} md={6} lg={6} sx={{my:15}}>
        <Card variant="outlined">
          <h3>Login</h3>
        <CardContent >
        <TextField
         sx={{ mb:2}}
         fullWidth
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
        </CardContent>

        <CardActions sx={{display:'flex', flexDirection:'column',  justifyContent:'center'}}>
         {msg && msgColor && <div style={{border:'3px solid white', fontWeight:'bold', color:'white', borderRadius:'10px', paddingRight:'17px', paddingLeft:'17px', marginTop:'-30px', marginBottom:'10px', backgroundColor:msgColor, paddingTop:'6px', paddingBottom:'6px'}}>{msg}</div>}
        <Button onClick={handleLogin} sx={{mb:1,backgroundColor:'#1C8D73'}} variant="contained">Login</Button>
       <Typography >Don't have an account ?<Link to={'/signup'}>SignUp</Link></Typography>
    </CardActions>
        </Card>
        </Grid>
        {/* right side ends */}

      </Grid>
      
    </Box>
  );
}