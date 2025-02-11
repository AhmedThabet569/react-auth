import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import visuallyHidden from '@mui/utils/visuallyHidden';
import { styled } from '@mui/material/styles';
import { Navigate, useNavigate } from 'react-router-dom';
import { use } from 'react';


export default function Home() {
    const navigate = useNavigate();
    const handleClickSignUp = () => {
        navigate('/register');
    }
    const handleClickLogin = () => {
        navigate('/login');
    }
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundRepeat: 'no-repeat',

        backgroundImage:
          'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
        >
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
            }}
          >
            React Fireabse Application
          
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' , gap:2}}>
          <Link to="/register" variant="button" onClick={handleClickSignUp}>
                                    Sign Up
                                </Link>
                                <Link to="/login" variant="button" sx={{ cursor: 'pointer' }}  onClick={handleClickLogin}>
                               Sign in
                                </Link>
                                </Box>
        </Stack>
      </Container>
    </Box>
  );
}
