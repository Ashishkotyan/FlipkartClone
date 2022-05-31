import axios from "axios";

const url = 'http://localhost:8000';

export const authenticatesignup = async (user) => {
    try {
        return await axios.post(`${url}/signup`, user)
    } catch (error) {
        console.log('Error while calling api' + error)
    }
}


export const authenticateLogin = async (user) => {
    try {
        return await axios.post(`${url}/login`, user)

    } catch (error) {

        console.log("error while calling login api" + error);
    }
}