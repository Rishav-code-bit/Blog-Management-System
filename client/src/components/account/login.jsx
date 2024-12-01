import { useState } from 'react';
import { Box, TextField, Button, styled, Typography } from '@mui/material';

import { API } from '../../service/api.js';

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
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    font-weight: 600;
`

const signupInitialValues = {
    name: '',
    username: '',
    password: ''
}

 const Login = () => {

    const imageURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSujfPXQY1nr8l61HzCh13MTSWOqC4HsdlKjA&s';

    const [account, toggleAccount] = useState('login');
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, setError] = useState('');

    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value});
    }

    const signupUser = async () => {
        let response = await API.userSignup(signup);
        if(response.isSuccess){
            setError('');
            setSignup(signupInitialValues);
            toggleAccount('login');
        } else{
             setError('Something went wrong! pleaase try again');
        }
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

                        {error && <Error>{error}</Error>}
                        
                        <LoginButton variant="contained">Login</LoginButton>
                        <Typography style={{ textAlign : 'center'}}>OR</Typography>
                        <SignupButton onClick={() => toggleSignup()}>Create an account</SignupButton>
                    </Wrapper>
                    :
                    <Wrapper>
                        <TextField onChange={(e) => onInputChange(e)} name='name' label="Enter Name"/>
                        <TextField onChange={(e) => onInputChange(e)} name='username' label="Enter Username"/>
                        <TextField onChange={(e) => onInputChange(e)} name='password' label="Enter password"/>
                        {error && <Error>{error}</Error>}
                        <SignupButton variant="contained" onClick={()=> signupUser}>Sign Up</SignupButton>
                        <Typography style={{ textAlign : 'center'}}>OR</Typography>
                        <LoginButton variant="contained" onClick={() => toggleSignup()}>Already have an account</LoginButton>
                    </Wrapper>
            }
            </Box>
        </Component>
    )
 }

 export default Login; 