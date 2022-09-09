const { Client } = require("pg");
const { Pool } = require("pg");
const dotenv = require("dotenv")
dotenv.config()

// Connect to a PostgreSQL Database Using a Single Client
const connectDbSingleClient = async () => {
    try {
        const client = new Client({
            user: process.env.PGUSER,
            host: process.env.PGHOST,
            database: process.env.PGDATABASE,
            password: process.env.PGPASSWORD,
            port: process.env.PGPORT
        })

        await client.connect()
        const res = await client.query('SELECT * FROM emp_data')
        console.log(res)
        await client.end()
    } catch (error) {
        console.log(error)
    }
}
// connectDbSingleClient();
// End of Connect to a PostgreSQL Database Using a Single Client


//Using a Connection Pool
const connectDBPool = async () => {
    try {
        const pool = new Pool({
            user: process.env.PGUSER,
            host: process.env.PGHOST,
            database: process.env.PGDATABASE,
            password: process.env.PGPASSWORD,
            post: process.env.PGPORT
        });
        await pool.connect();
        const res = await pool.query("SELECT * from emp_data");
        console.log(res.rows);
        await pool.end();
    } catch (err) {
        console.log(err)
    }
}

// connectDBPool();

// End of using Using a Connection Pool



const selectCommandWithConnectionPool = async () => {
    try {
        const pool = new Pool();
        const res = await pool.query('SELECT * FROM emp_data');
        console.log("=======================");
        console.log(res);
        console.log("=======================");
        await pool.end();
    } catch (error) {
        console.log(error);
    }
}

selectCommandWithConnectionPool();

