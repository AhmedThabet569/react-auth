import { ThemeProvider } from "@emotion/react"
import { Avatar, Box, Button, Container, createTheme, CssBaseline, Grid, Typography,TextField,Link } from "@mui/material"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";
 const defaultTheme =  createTheme();
const Register = () => {
    const navigate = useNavigate();
    const [formdata, setFormdata] = useState({
      email: "",
      password:'',
    });
    const handleChange =  (event) => {
       const {name,value} = event.target;
       setFormdata({
           ...formdata,
           [name]:value
       })
    }
    const handleSubmit = (event) => { 
      event.preventDefault();
      console.log(formdata);
     try {
          const response =   createUserWithEmailAndPassword(auth, formdata.email, formdata.password);
          console.log("success addes",response);
          navigate('/dashboard');
          
     } catch (error) {
            console.log(error.message);
     }
    }
  
    const handleClickLogin = () => {
        navigate('/login');
    }
  return (
    <>
       <ThemeProvider theme={defaultTheme}>

          <Container component="main" maxWidth="xs">
               <CssBaseline />
               <Box sx={{
                 marginTop: 8,
                 display: 'flex',
                 flexDirection: 'column',
                 alignItems: 'center',
               }}>
                   <Avatar sx={{ m: 1 , bgcolor:'secondary.main'}}>
                      <LockOutlinedIcon />
                   </Avatar>
                   <Typography component="h1" variant="h5">
                     Sign Up
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        autoComplete="email"
                                        name="email"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        autoFocus
                                        onChange={handleChange}
                                        value={formdata.email}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        autoComplete="new-password"
                                        name="password"
                                        required
                                        fullWidth
                                        type="password"
                                        id="password"
                                        label="password"
                                        autoFocus
                                        onChange={handleChange}
                                        value={formdata.password}
                                    />
                                </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}  onClick={handleSubmit}> Sign Up</Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to="/login" variant="body2" sx={{ cursor: 'pointer' }}  onClick={handleClickLogin}>
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                 </Box>
          </Container>
       </ThemeProvider>
    </>
  )
}

export default Register
