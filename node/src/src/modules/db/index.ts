import mysql from 'mysql2/promise'
import dotENV from 'dotenv';

dotENV.config();

export const db = mysql.createConnection({
    host: 'mysql',
    user: 'user',
    password: 'secret',
    database: 'bulletinboard'
})

// export const startConnectDB = db.connect((err) => {
//     if(err) {
//         console.log(err.message);
//         return;
//     }
//     console.log('START Connecte DB Success');
// });

// export const closeConnecteDB = db.end((err) => {
//     if(err) {
//         console.log(err.message);
//     } else {
//         console.log('Close Connect DB success');
//     }
// });