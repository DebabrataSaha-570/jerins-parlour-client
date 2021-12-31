import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';

const Register = () => {
    return (
        <>
            <Navigation></Navigation>
            <Container>
                <Box sx={{ width: '35%', mx: 'auto', mt: 5, border: '1.5px solid lightGray', p: 5 }}>
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

                </Box>
            </Container>
        </>
    );
};

export default Register;