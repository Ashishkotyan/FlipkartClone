import Carousel from "react-material-ui-carousel";
import { bannerData } from "../../constant/data";
import { makeStyles } from "@material-ui/core";

const userStyle = makeStyles({
    image: {
        width: '100%',
        height: 280
    },
    top:{
        marginTop:10
    }
})
const Banner =() => {
    const classes = userStyle();
    return(
       <Carousel 
            autoPlay={true}
            animation = 'slide'
            indicators={false}
            navButtonsAlwaysVisible={true}
            cycleNavigation = {true}
            navButtonsProps={{
                style: {
                    background:'#ffffff',
                    color:'#494949',
                    borderRadius:0,
                    margin:0,
                    height:70
                }
            }} className={classes.top}
            >
           {
               bannerData.map(image => (
                <img  src={image} className={classes.image} />
               ))
           }
       </Carousel>
    )


}
export default Banner;