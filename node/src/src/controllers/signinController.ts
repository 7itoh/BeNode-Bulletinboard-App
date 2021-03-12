import { RequestHandler } from 'express'
import { db } from '../modules/db/index'

export const signin: RequestHandler = (req, res, next): void => {
    db.connect((err) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log('success');
        }
    })
    res.render('../views/signin.ejs');
}