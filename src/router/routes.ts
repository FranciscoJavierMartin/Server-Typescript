import { Router, Request, Response } from "express";

const router = Router();

// This is only a example of how create a route on express
router.get('/',(req:Request,res:Response)=>{
  res.send('Hello world');
});

export default router;