import { RequestHandler } from 'express'
import { validationResult } from 'express-validator'
import { db } from '../modules/db/index'

export const signup: RequestHandler = (req, res, next): void => {
    const data = {
        page : {
            title: 'SignUp Page',
            guide: 'Create New Account',
            action: 'Click'
        },
        url : {
            href: '/signin',
            action: 'Return Back to Login Page'
        },
        script : 'js/main.js'
    }
    res.render('../views/signup.ejs', data);
}

export const postSingup: RequestHandler = async(req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() }).end();
      return;
    }
    let connection
    try {
        connection = await db;
        await connection.beginTransaction();

        const newUserData = await{
            username: req.body.userName,
            email: req.body.userEmail,
            password: req.body.userPassword,
        };

        const [row1] = await connection.query('insert into users set ?', newUserData);
        await connection.commit();
    } catch(err) {
        console.log(err);
    } finally {
        if(connection){
            connection.end();
            res.redirect('/home');
        } else {
            return;
        }
    }
}