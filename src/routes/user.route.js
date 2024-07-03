
import express from "express";
import asyncHandler from 'express-async-handler';

import { userSignin,ChallengeMissions } from "../controllers/user.controller.js";


export const userRouter = express.Router();

userRouter.post('/signin', asyncHandler(userSignin));
userRouter.post('/addMission', asyncHandler(ChallengeMissions));

