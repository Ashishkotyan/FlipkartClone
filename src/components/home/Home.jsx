import { Box, makeStyles } from "@material-ui/core";

// components
import Navbar from "./Navbar";
import Banner from './Banner';
import Slide from './Slide';
import MidSection from "./MidSection";

// import { products } from '../../constant/data';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts as listProducts } from "../../redux/actions/productActions";

// import { products } from '../../constant/data';
const userStyle = makeStyles({
    component: {
        padding: 10,
        background: '#f2f2f2'
    },
    rightwrapper: {
        background: '#ffffff',
        padding: '5px',
        margin: '12px 0 0 10px',

    }

})
const Home = () => {
    const classes = userStyle();
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    const  {products}  = useSelector(state => state.getProducts);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(listProducts());
    // }, [dispatch])

    return (
        <div>
            <Navbar />
            <Box className={classes.component}>
                <Banner />
                <Box style={{ display: 'flex' }}>
                    <Box style={{ width: '83%' }}>
                        <Slide timer={true}
                            title="Deal of the Day"
                            products={products}
                        />
                    </Box>
                    <Box className={classes.rightwrapper}>
                        <img src={adURL} style={{ width: 230 }} />
                    </Box>

                </Box>
                <MidSection />
                <Slide timer={true}
                    title="Discounts for You"
                    products={products}
                />
                <Slide timer={false}
                    title="Suggested Items"
                    products={products} />
                <Slide timer={false}
                    title="Top Selection"
                    products={products}
                />
                <Slide timer={false}
                    title="Recommended Items"
                    products={products} />
                <Slide timer={false}
                    title="Bestsellers"
                    products={products}
                />
            </Box>
        </div>
    )
}

export default Home;