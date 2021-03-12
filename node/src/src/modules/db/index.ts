import mysql from 'mysql2'
import dotENV from 'dotenv';

dotENV.config();

export const db = mysql.createConnection({
    host: 'mysql',
    user: 'user',
    password: 'secret',
    database: 'bulletinboard'
})