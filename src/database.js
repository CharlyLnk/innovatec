import {createPool} from 'mysql2/promise';

const pool = createPool({
    host: 'localhost',
    port: '3307',
    user: 'root',
    password: '1234',
    database: 'prueba01'
});

export default pool;