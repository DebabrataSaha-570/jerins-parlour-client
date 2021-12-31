import { Button, Container, MenuItem, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';

const Register = () => {
    return (
        <>
            <Navigation></Navigation>
            <Container>
                <Box sx={{ width: '35%', mx: 'auto', mt: 5, border: '1.5px solid lightGray', py: 4, px: 5 }}>
                    <Typography
                        variant="h6"
                    >
                        Create an account
                    </Typography>
                    <form action="">
                        <TextField sx={{ width: '100%', my: 2 }} id="standard-basic" label="First Name" variant="standard" />

                        <TextField sx={{ width: '100%', mb: 2 }} id="standard-basic" label="Last Name" variant="standard" />

                        <TextField sx={{ width: '100%', mb: 2 }} id="standard-basic" label="Email Address" variant="standard" />

                        <TextField sx={{ width: '100%', mb: 2 }} id="standard-basic" label="Password" variant="standard" />
                        <TextField sx={{ width: '100%', mb: 3 }} id="standard-basic" label="Confirm Password" variant="standard" />

                        <Button sx={{ width: '100%' }} variant="contained" type="submit">Create an Account</Button>
                    </form>
                    <Typography sx={{ mt: 2 }} style={{ textAlign: 'center' }} variant="subtitle1" gutterBottom component="div">
                        Already Have an account?  <Link to="/login">Login</Link>
                    </Typography>
                </Box>

                <Box sx={{ width: '35%', mx: 'auto', my: 2 }} style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ flexGrow: 1, borderBottom: '1px solid lightGray', margin: '5px' }}></span>
                    <span>Or</span>
                    <span style={{ flexGrow: 1, borderBottom: '1px solid lightGray', margin: '5px' }}></span>
                </Box>

                <Box sx={{ width: '35%', mx: 'auto', mb: 5 }}>
                    <Button sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%', border: 1, borderColor: 'grey.500', borderRadius: '30px' }} style={{ color: 'black', textTransform: 'capitalize' }}>
                        <img style={{ marginRight: '110px' }} width="35px" src="https://img.icons8.com/color/48/000000/google-logo.png" />

                        <Typography variant="subtitle1">Continue With Google</Typography>

                    </Button>
                </Box>

            </Container>
        </>
    );
};

export default Register;