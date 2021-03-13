import { RequestHandler } from 'express'
import { db } from '../modules/db/index'

export const signin: RequestHandler = (req, res, next): void => {
    const data = {
        page : {
            title: 'Login Page',
            guide: 'Set Your Email and Password.',
            action: 'Login'
        },
        url : {
            href: '/signup',
            action: 'Create New Account Here'
        },
        script : 'js/main.js'
    }
    res.render('../views/signin.ejs', data);
}

export const postSignin: RequestHandler = async (req, res, next) => {
    let connection;
    try {
        connection = await db;
        const newUserData = {
            email: req.body.userEmail,
            password: req.body.userPassword,
        };
        await connection.beginTransaction();
        const [rows1] = await connection.query('select email, password from users where email = ?', newUserData.email);
        
        await connection.commit();

        if(rows1[0].email !== newUserData.email && rows1[0].password !== newUserData.password) {
            console.log('miss match email or password');
            return;
        } 
    } catch(err) {
        console.log(err);
        return;
    } finally {
        connection?.end();
        if(connection){
            console.log('still have ...');
        }
    }
    res.redirect('/home');
}