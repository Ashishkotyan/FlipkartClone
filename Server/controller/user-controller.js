// import { request, response } from 'express';
import User from '../model/userSchema.js'



export const userSignup = async (request, response) => {

    try {
        const exist = await User.findOne({ username: request.body.username })
        if (exist) {
            return response.status(401).json("Username is already exist");
        }
        const user = request.body;
        const newuser = new User(user);
        await newuser.save();

        response.status(200).json('user is successfully registered')
    } catch (error) {
        console.log(error)
    }


}
//  


export const userLoginIn = async (request, response) => {
    try {
        let user = await User.findOne({ username: request.body.username, password: request.body.password });
        if (user) {
            return response.status(200).json(`${request.body.username} login Succesfully!`);
        }
        else {
            response.status(401).json('Invalid id');

        }
    } catch (error) {
        console.log(error);
    }
}