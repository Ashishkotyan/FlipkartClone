import Product from '../model/productSchema.js';

export const getProducts = async (request, response) => {

  try {
    const products = await Product.find({});
    response.json(products);
  } catch (error) {
    console.log(error)
  }
}


export const getProductByid = async (request, response) => {


  try {

    const product = await Product.findOne({ 'id': request.params.id })
    response.json(product);
  } catch (error) {
    console.log(error);
  }



}