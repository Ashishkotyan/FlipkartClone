import { classExpression } from "@babel/types";
import { Box, makeStyles } from "@material-ui/core";
import { imageURL } from "../../constant/data";

const userStyle = makeStyles({

    wrapper: {
        display: 'flex',
        justifyContent: 'space-between'

    }
})


const MidSection = () => {
    const classes = userStyle();
    const coronaURL = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';
    return (
        <>

            <Box className={classes.wrapper}>
                {
                    imageURL.map(image => (
                        <img src={image} style={{ width: "33%" }} />
                    ))
                }
            </Box>
            <img src={coronaURL} style={{ width: '100%', marginTop: 20 }} />

        </>

    )
}

export default MidSection;