import express from 'express';
import addUserController from '../controllers/user-controller.js';
const route = express.Router();

const routes = async ()=>{
    await route.post('/adduser', addUserController)
} 

export default routes;