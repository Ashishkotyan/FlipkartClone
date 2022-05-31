import { useState } from "react";
import { Dialog, DialogContent, makeStyles, Box, Typography, Button, TextField } from "@material-ui/core";
import { authenticatesignup, authenticateLogin } from "../../servics/api";





const userStyle = makeStyles({

    componennt: {
        height: '70vh',
        width: '90vh'
    },
    image: {
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height: '70vh',
        backgroundRepeat: 'no-repeat',
        background: '#2874f0',
        width: '40%',
        backgroundPosition: 'center 85%',
        padding: '45px 35px',
        '& >*': {
            color: '#ffffff',
            fontWeight: 600,

        }

    },
    login: {
        padding: '25px 35px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        '& >*': {
            marginTop: 10
        }

    },
    text: {
        color: '#878787',
        fontSize: 12,
    },
    loginbtn: {
        textTransform: 'none',
        color: '#ffffff',
        background: '#FB641B',
        height: 48,
        borderRadius: 2


    },
    requestbtn: {
        textTransform: 'none',
        color: '#2874f0',
        background: '#FFFFFF',
        height: 48,
        borderRadius: 2,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 /20%)',


    },
    createtext: {
        textAlign: 'center',
        marginTop: 'auto',
        fontSize: 14,
        color: '#2874f0',
        fontWeight: 600,
        cursor: 'pointer'

    },
    error: {
        fontSize: 13,
        color: '#ff6161',
        marginTop: 10,
        fontWeight: 600,
        lineHeight: 0
    }


})

const initialvalue = {
    login: {
        view: 'login',
        heading: 'Login',
        subheading: 'Get access to your Order, Wishlist and Recommendations',

    },
    signup: {
        view: 'signup',
        heading: `Looks like you're new here!`,
        subheading: 'Sign up with your mobile number to get start',

    }

}

const signupinitialValue = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
}

const logininitialValue = {
    username: '',
    password: '',

}

const Login = ({ open, setopen, setAccount }) => {


    const classes = userStyle();

    const [account, toggleAccount] = useState(initialvalue.login);
    const [signup, setSignup] = useState(signupinitialValue);
    const [login, setLogin] = useState(logininitialValue);
    const [error, setError] = useState(false);

    const handleclose = () => {
        setopen(false);
        toggleAccount(initialvalue.login)
    }
    const toggleUseraccount = () => {
        toggleAccount(initialvalue.signup)
    }
    const signupUser = async () => {

        let response = await authenticatesignup(signup);
        if (!response) return;
        handleclose();
        setAccount(signup.username)
    }
    const loginUser = async () => {
        let response = await authenticateLogin(login);
        if (!response) {

            setError(true);
            return;
        }
        handleclose();
        setAccount(login.username)

    }
    const oninputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
        console.log(signup)
    }

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
        console.log(login)


    }



    return (

        <Dialog open={open} onClose={handleclose}>


            <DialogContent className={classes.componennt}>
                <Box style={{ display: 'flex' }}>
                    <Box className={classes.image}>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>{account.subheading}</Typography>
                    </Box>


                    {
                        account.view === 'login' ?

                            <Box className={classes.login}>
                                <TextField onChange={(e) => onValueChange(e)} name="username" label='Enter Email/Mobile number' />
                                <TextField onChange={(e) => onValueChange(e)} name="password" label='Enter Password' />
                                {error && <Typography className={classes.error}>Invalid username and password</Typography>}
                                <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                                <Button variant='contained' onClick={() => loginUser()} className={classes.loginbtn} >Login</Button>
                                <Typography className={classes.text} style={{ textAlign: 'center' }}>OR</Typography>
                                <Button variant='contained' className={classes.requestbtn}>Request OTP</Button>
                                <Typography onClick={() => toggleUseraccount()} className={classes.createtext}>New to Flipkart? Create an account</Typography>
                            </Box> :
                            <Box className={classes.login}>
                                <TextField onChange={(e) => oninputChange(e)} name="firstname" label='Enter Firstname' />
                                <TextField onChange={(e) => oninputChange(e)} name="lastname" label='Enter Lastname' />
                                <TextField onChange={(e) => oninputChange(e)} name="username" label='Enter Username' />
                                <TextField onChange={(e) => oninputChange(e)} name="email" label='Enter Email' />
                                <TextField onChange={(e) => oninputChange(e)} name="password" label='Enter Password' />
                                <TextField onChange={(e) => oninputChange(e)} name="phone" label='Enter Your Phone No.' />
                                <Button onClick={() => signupUser()} variant='contained' className={classes.loginbtn}>Singup</Button>

                            </Box>
                    }
                </Box>

            </DialogContent>

        </Dialog>
    )


}
export default Login;