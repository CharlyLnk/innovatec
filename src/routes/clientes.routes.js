import {Router} from 'express'
import pool from '../database.js'

const router = Router();

router.get('/add', (req, res) => {
    res.render('clientes/add');
})

router.get('/list', async(req, res)=> {
    try{
        const [result] = await pool.query('SELECT * FROM clientes');
        res.render('clientes/list', {clientes: result});
        //console.log(result);
    }
    catch(err){
        res.status(500).json({message: err.message});
    }
});

export default router;