import { Box, Button, Typography, Container, TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {
    const { user, signInWithGoogle } = useAuth()
    return (
        <>
            <Navigation></Navigation>
            <Container>
                <Box sx={{ width: '35%', mx: 'auto', mt: 5, border: '1.5px solid lightGray', py: 4, px: 5 }}>
                    <Typography
                        variant="h6"
                    >
                        Log In
                    </Typography>
                    <form action="">
                        <TextField sx={{ width: '100%', mb: 2 }} id="standard-basic" type="email" label="Email Address" variant="standard" />

                        <TextField sx={{ width: '100%', mb: 2 }} id="standard-basic" label="Password" variant="standard" />
                        <TextField sx={{ width: '100%', mb: 3 }} id="standard-basic" label="Confirm Password" variant="standard" />

                        <Button sx={{ width: '100%' }} variant="contained" type="submit">Login</Button>
                    </form>
                    <Typography sx={{ mt: 2 }} style={{ textAlign: 'center' }} variant="subtitle1" gutterBottom component="div">
                        Don't Have an account?  <Link to="/register">create an account</Link>
                    </Typography>
                </Box>

                <Box sx={{ width: '35%', mx: 'auto', my: 2 }} style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ flexGrow: 1, borderBottom: '1px solid lightGray', margin: '5px' }}></span>
                    <span>Or</span>
                    <span style={{ flexGrow: 1, borderBottom: '1px solid lightGray', margin: '5px' }}></span>
                </Box>

                <Box sx={{ width: '35%', mx: 'auto', mb: 5 }}>

                    <Button onClick={signInWithGoogle} sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%', border: 1, borderColor: 'grey.500', borderRadius: '30px' }} style={{ color: 'black', textTransform: 'capitalize' }}>
                        <img style={{ marginRight: '110px' }} width="35px" src="https://img.icons8.com/color/48/000000/google-logo.png" />

                        <Typography variant="subtitle1">Continue With Google</Typography>

                    </Button>
                </Box>

            </Container>
        </>
        // <>
        //     <Navigation></Navigation>
        //     <Container>
        //         <Box style={{ marginTop: '250px' }} sx={{ width: '35%', mx: 'auto', mb: 5, }}>
        //             <Typography sx={{ textAlign: 'center', my: 3 }} variant="h6">Login With</Typography>
        //             <Button sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%', border: 1, borderColor: 'grey.500', borderRadius: '30px' }} style={{ color: 'black', textTransform: 'capitalize' }}>
        //                 <img style={{ marginRight: '100px' }} width="35px" src="https://img.icons8.com/color/48/000000/google-logo.png" />

        //                 <Typography variant="subtitle1">Continue With Google</Typography>

        //             </Button>
        //             <Typography sx={{ mt: 2 }} style={{ textAlign: 'center' }} variant="subtitle1" gutterBottom component="div">
        //                 Don't Have an account?  <Link to="/register">Create an account</Link>
        //             </Typography>
        //         </Box>
        //     </Container>
        // </>
    );
};

export default Login;