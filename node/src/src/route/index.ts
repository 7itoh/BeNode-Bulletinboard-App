import { Router, Request, Response, NextFunction } from 'express'
import { signin } from '../controllers/signinController'
import { signup } from '../controllers/signupController'
import { home } from '../controllers/homeController'

const router = Router();

router
    .get('/', (req: Request, res: Response, next: NextFunction): void => { res.redirect('signin'); })
    .get('/signin', signin)
    .get('/signup', signup)
    .get('/home', home);

export default router;