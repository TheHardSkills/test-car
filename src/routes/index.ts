import { Request, Response, Router } from 'express';
import {SignUpController} from '../controllers/signUpController';

 export function routes(router: Router): Router {
    const signUpController = new SignUpController()

    router.post('/signup', signUpController.getData);
  
  
    router.all('*', (req: Request, res: Response) => {
    res.status(200).send("200 test");
    });
  
    return router;
  }

  // module.exports = { routes }
  