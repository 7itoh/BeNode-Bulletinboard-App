import { RequestHandler } from 'express'

export const signup: RequestHandler = (req, res, next): void => {
    res.render('../views/signup.ejs');
}