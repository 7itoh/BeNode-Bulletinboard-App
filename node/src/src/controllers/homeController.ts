import { RequestHandler } from 'express'

export const home: RequestHandler = (req, res, next): void => {
    res.render('../views/home.ejs');
}
