import {Pool} from "pg";

const pgpool = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'postgres',
    port: 5432,
    database: 'postgres'
});

createTable();

async function createTable(){
    await pgpool.query(`CREATE TABLE product(name VARCHAR(255))`);


    let res = await pgpool.query(`SELECT * FROM product`);
    console.log(res);
}