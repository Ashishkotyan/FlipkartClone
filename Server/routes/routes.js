import express from 'express';
import { userLoginIn, userSignup } from '../controller/user-controller.js'
import {getProducts, getProductByid} from '../controller/product-controller.js'

const router = express.Router();

router.post('/signup', userSignup);

router.post('/login', userLoginIn);

// collecting data to mongodb imagee

router.get('/products', getProducts);

router.get('/product/:id', getProductByid);

export default router;