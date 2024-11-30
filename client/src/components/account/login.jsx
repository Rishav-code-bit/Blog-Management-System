import { useState } from 'react';
import { Box, TextField, Button, styled, Typography } from '@mui/material';

const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Image = styled('img')({
    width: 100,
    margin: 'auto',
    display: 'flex',
    padding: '50px 0 0'
});

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    flex-direction: column;
    & > div, & > button, & > p{
        margin-top: 20px;
    }
`

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);
`

 const Login = () => {

    const imageURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSujfPXQY1nr8l61HzCh13MTSWOqC4HsdlKjA&s';

    const [account, toggleAccount] = useState('login');

    const toggleSignup = () => {
        toggleAccount('signup');
    }

    const toggleLogin = () => {
        toggleAccount('login');
    }

    return (
        <Component>
            <Box>
            <Image src={imageURL} alt="login"/>
            {
                account === 'login' ? 
                    <Wrapper>
                        <TextField label="Enter username"/>
                        <TextField label="Enter password"/>
                        <LoginButton variant="contained">Login</LoginButton>
                        <Typography style={{ textAlign : 'center'}}>OR</Typography>
                        <SignupButton onClick={() => toggleSignup()}>Create an account</SignupButton>
                    </Wrapper>
                    :
                    <Wrapper>
                        <TextField label="Enter Name"/>
                        <TextField label="Enter Username"/>
                        <TextField label="Enter password"/>
                        <SignupButton variant="contained">Sign Up</SignupButton>
                        <Typography style={{ textAlign : 'center'}}>OR</Typography>
                        <LoginButton variant="contained" onClick={() => toggleLogin()}>Already have an account</LoginButton>
                    </Wrapper>
            }
            </Box>
        </Component>
    )
 }

 export default Login; 