import mongoose from 'mongoose';





const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.9tsoj.mongodb.net/ECOMMERCE?retryWrites=true&w=majority`;
    try{
   await mongoose.connect(URL, {useNewUrlParser:true,useUnifiedTopology:true,useFindAndModify:false});
   console.log("data base is connected");
    } catch(error) {
        console.log(error)
    }
}
export default Connection;