import { check } from 'express-validator'
// import { db } from '../db/index'

// export const chkIsSignInValied = [
//   check('userEmail', 'userPassword').custom(( _, { req }) => {
//     const newUserData = {
//         email: req.body.userEmail,
//         password: req.body.userPassword,
//     };
//     let isChkValue = {
//         email: '',
//         password: '',
//     }
//     db.connect((err) => {
//         if(err) {
//             console.log(err.message);
//             return;
//         } else {
//             db.query('select email, password from users where email = ?', newUserData.email,  (err, result, fields) => {
//                 if(err) {
//                     console.log(err.message);
//                 } else {
//                     isChkValue.email = result[0].email;
//                     isChkValue.password = result[0].password;
//                     if(isChkValue.email !== newUserData.email && isChkValue.password !== newUserData.password) {
//                         throw new Error('ユーザー名、もしくは、パスワードが一致していません')
//                     } else {
//                         return true;
//                     }
//                 }
//             })
//         }
//     })
//     db.end((err) => {
//         if(err) {
//             console.log(err.message);
//         } else {
//             console.log('disconnected Database');
//         }
//     });
//   }),
// ]

export const chkIsSignUpValied = [
  check('userName').isAlphanumeric().withMessage('ユーザー名を半角英数字で入力をしてください'),
  check('userEmail').isEmail(),
  check('userPassword').isAlphanumeric().isLength({ min: 7, max: 32 }).withMessage('パスワードを半角英数字の7文字以上で入力をしてください'),
  check('confirmPasswd').custom(( _, { req }) => { 
      if (req.body.userPassword !== req.body.confirmPasswd) { 
          throw new Error('パスワード（確認）と一致しません')
      }
      return true;
  }),
]