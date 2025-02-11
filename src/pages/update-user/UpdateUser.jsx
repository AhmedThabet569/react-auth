import { ThemeProvider } from "@emotion/react"
import { Avatar, Box, Button, Container, createTheme, CssBaseline, Grid, Typography, TextField, Link } from "@mui/material"
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {  useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../../utils/firebase";
import {  doc, getDoc, updateDoc } from "firebase/firestore";
const defaultTheme = createTheme();

import { useParams } from 'react-router-dom';

const UpdateUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: '',
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormdata({
      ...formdata,
      [name]: value
    })
  }

      const fetchUsers = async () => {
         try {
           const response = await getDoc(doc(db, "users",id));
             console.log(response);
             if(response.exists()){
               setFormdata(response.data());
             }else{
                console.log("No such document!");
             }
           
         } catch (error) {
           console.log(error.message);
          
         }
      }
      useEffect(() => {
        
          fetchUsers();
        
      }, [id])
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formdata);
    //   here login to firebasestore
    try {
      const result = await updateDoc(doc(db, "users",id), formdata);
      console.log(result);
      navigate('/dashboard');

    } catch (error) {
      console.log(error.message);

    }
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
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
            Update User
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="first name"
                        name="firstname"
                        required
                        fullWidth
                        id="first name"
                        label="first name"
                        autoFocus
                        onChange={handleChange}
                        value={formdata.firstname}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="last name"
                        name="lastname"
                        required
                        fullWidth
                        id="last name"
                        label="last name"
                        autoFocus
                        onChange={handleChange}
                        value={formdata.lastname}
                    />
                </Grid>
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
                        autoComplete="phone"
                        name="phone"
                        required
                        fullWidth
                        id="phone"
                        label="phone"
                        autoFocus
                        onChange={handleChange}
                        value={formdata.phone}
                    />
                </Grid>

            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }} onClick={handleSubmit}>Update User</Button>

        </Box>
    </Box>
</Container>
</ThemeProvider>
    </>
  )
}

export default UpdateUser