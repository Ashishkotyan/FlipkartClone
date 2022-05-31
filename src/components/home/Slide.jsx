import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {prod}  from '../card/Product.jsx'

import { makeStyles, Box, Typography, Button } from "@material-ui/core";

import Countdown from "react-countdown";
import { fontWeight } from "@material-ui/system";
import { Divider } from "@material-ui/core";
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const userStyle = makeStyles({
    image: {
        height: 150,
    },
    component: {
        marginTop: 12,
        Background: '#ffffff'
    },
    dealtetx: {
        fontSize: 22,
        fontWeight: 600,
        lineHeight: "32px",
        marginRight: 25,

    },
    timer: {
        color: '#7f7f7f',
        marginLeft: 10,
        display: 'flex',
        alignItems: 'center'

    },
    deal: {
        padding: '15px 20px',
        display: 'flex'
    },
    button: {
        marginLeft: 'auto',
        background: '#2874f0',
        borderRadius: 2,
        fontSize: 13
    },
    text: {
        fontSize: 16,
        marginTop: 5
    },
    wrapper: {
        padding:"36px 15px"
    }

})


const Slide = ({timer, title, products}) => {
    const classes = userStyle();
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';


    const renderer = ({ hours, minutes, seconds }) => {
        return <span className={classes.timer}>{hours} : {minutes} : {seconds} left</span>;
    }

    return (
        <Box className={classes.component}>
            <Box className={classes.deal}>
                <Typography className={classes.dealtetx}>{title}</Typography>
               {
                
               timer &&
               <>
                <img src={timerURL} style={{ width: 24 }} />
                <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                <Button variant="contained" color="primary" className={classes.button}>View All</Button>
                </>
               }
            </Box>
            <Divider/>
            <Carousel responsive={responsive}
                infinite={true}
                draggable={false}
                swipeable={false}
                centerMode={true}
                autoPlay={true}
                keyBoardControl={true}
                showDots={false}
                removeArrowOnDeviceType={["tablet", "mobil"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >
                {
                    prod.map(product => (
                        <Box textAlign="center"  className={classes.wrapper}>
                            <img src={product.url} className={classes.image} />
                            <Typography className={classes.text} style={{ fontWeight: 600, color: '#212121' }} >{product.title.shortTitle}</Typography>
                            <Typography className={classes.text} style={{ color: 'green' }} >{product.discount}</Typography>
                            <Typography className={classes.text} style={{color: '#212121', opacity:'.6' }}>{product.tagline}</Typography>
                        </Box>
                    ))
                }
            </Carousel>
        </Box>
    )
    
}

export default Slide;