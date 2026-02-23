import express from 'express'
import {Register , login } from '../controller/authcontroller.js'

const router =express.Router();

router.post("/register" , Register);
router.post("/login" , login)

export default router;