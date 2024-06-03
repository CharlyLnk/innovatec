import express from 'express';
import { engine } from 'express-handlebars';
import {join, dirname} from 'path';
import { fileURLToPath } from 'url';
import morgan from 'morgan';
import ClientesRoutes from './routes/clientes.routes.js';

//Initialization
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

//Settings
app.set('port', process.env.PORT || 4000);
app.set('views', join(__dirname, 'views'));
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: join(app.get('views'), 'layouts'),
    partialsDir: join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Routes
app.post('/', (req, res)=>{
    res.render('index')
})
app.use(ClientesRoutes)

//Public files
app.use(express.static(join(__dirname, 'public')));

//Run server
app.listen(app.get('port'), ()=>
    console.log('Server listening on port', app.get('port')));