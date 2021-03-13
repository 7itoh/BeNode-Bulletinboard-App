import { Router, Request, Response, NextFunction } from 'express'
import { signin, postSignin } from '../controllers/signinController'
import { signup, postSingup } from '../controllers/signupController'
import { home } from '../controllers/homeController'
import { chkIsSignUpValied } from '../modules/validator/index'

const router = Router();

router
    .get('/', (req: Request, res: Response, next: NextFunction): void => { res.redirect('signin'); })
    .get('/signin', signin)
    .get('/signup', signup)
    .get('/home', home);

router
    .post('/signin/add', postSignin)
    .post('/signup/add', chkIsSignUpValied, postSingup)

export default router;