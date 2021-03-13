import express from 'express'
import bodyParser from 'body-parser'
import router from './route/index'
import dotENV from 'dotenv'

dotENV.config();
const port = process.env.ENV_PORT;

const app = express();

app
    .set('view engine', 'ejs')
    .set('views', './src/views')

app
app
    .use(bodyParser.urlencoded({
    extended: true}))
    .use(bodyParser.json())
    .use(express.static('dist/public'))
    .use('/', router)


app.listen(port, () => {
    console.log(`Listening Port_Num ${port}`);
})