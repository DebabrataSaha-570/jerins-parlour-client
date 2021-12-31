import { Box, Button, Typography, Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {
    return (
        <>
            <Navigation></Navigation>
            <Container>
                <Box style={{ marginTop: '250px' }} sx={{ width: '35%', mx: 'auto', mb: 5, }}>
                    <Typography sx={{ textAlign: 'center', my: 3 }} variant="h6">Login With</Typography>
                    <Button sx={{ display: 'flex', justifyContent: 'flex-start', width: '100%', border: 1, borderColor: 'grey.500', borderRadius: '30px' }} style={{ color: 'black', textTransform: 'capitalize' }}>
                        <img style={{ marginRight: '100px' }} width="35px" src="https://img.icons8.com/color/48/000000/google-logo.png" />

                        <Typography variant="subtitle1">Continue With Google</Typography>

                    </Button>
                    <Typography sx={{ mt: 2 }} style={{ textAlign: 'center' }} variant="subtitle1" gutterBottom component="div">
                        Don't Have an account?  <Link to="/register">Create an account</Link>
                    </Typography>
                </Box>
            </Container>
        </>
    );
};

export default Login;