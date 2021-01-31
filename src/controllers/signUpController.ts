import { Request, Response, NextFunction } from 'express';
export class SignUpController{
    getData(req: Request, res: Response, next: NextFunction){
        try {
            console.log("req", req);
        } catch (error) {
            console.log("error", error);
            
        }                
    }
}