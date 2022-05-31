import { useState, useContext } from "react";

import { Box, Button, makeStyles, Typography, Badge } from "@material-ui/core";
import { ShoppingCart } from '@material-ui/icons';
import { Link } from "react-router-dom";


// components

import LoginDialog from "../login/Login";
import { LoginContext } from "../../context/ContexPovider.jsx";
import Profile from "./Profil";

const userStyle = makeStyles({
    login: {
        background: '#ffffff',
        color: 'blue',
        textTransform: 'none',
        fontWeight: '600',
        borderRadius: 2,
        padding: '5px 40px',
        boxShadow: 'none'

    },
    wrapper: {
        margin: '0 7% 0 auto',
        display: 'flex',
        '& > *': {
            marginRight: 50,
            alignItems: 'center',
            textDecoration: 'none',
            color: '#fff'
        }
    },
    container: {
        display: 'flex'
    }

})


const HeaderButton = () => {
    const classes = userStyle();
    const [open, setopen] = useState(false);
    const { account, setAccount } = useContext(LoginContext);

    const openloginDialog = () => {
        setopen(true)
    }


    return (

        <Box className={classes.wrapper} >

            {
                account ? <Profile account = {account} setAccount ={setAccount}/> : 
                <Link>
                    <Button variant="contained" onClick={() => openloginDialog()} className={classes.login}>Login</Button>
                </Link>
            }
            <Link><Typography style={{ marginTop: 5 }}>More</Typography></Link>
            <Link to='/Card' className={classes.container}>
                <Badge badgeContent={2} color="secondary">
                    <ShoppingCart />
                </Badge>

                <Typography style={{ marginLeft: 10 }}>Cart</Typography>
            </Link>
            <LoginDialog open={open} setopen={setopen} setAccount = {setAccount} />
        </Box>

    )
}

export default HeaderButton;