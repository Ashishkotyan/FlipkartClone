import express from "express";
import dotenv from 'dotenv';

// components
import Connection from './database/dbConnet.js';
import DefaultData from './default.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import Routes from './/routes/routes.js'




dotenv.config();
const app = express();

app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use('/', Routes);


const PORT = 8000;

const username = process.env.db_username;
const password = process.env.db_password;


Connection(username, password);
app.listen(PORT, () => console.log(`Servers is Succesfully Run..`));

//DefaultData data to database  

DefaultData();
