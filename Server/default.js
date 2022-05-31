import { products } from './constant/product.js'
import Product from "./model/productSchema.js";

const DefaultData = async () => {
console.log('ddd')
    
try{
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("data is imported succesfully")

}catch(error){
    console.log(error)
}
    
          

}

export default DefaultData;