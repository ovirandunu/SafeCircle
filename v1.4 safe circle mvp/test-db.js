import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

console.log('Testing database connection...');
console.log('DATABASE_URL:', process.env.DATABASE_URL?.substring(0, 40) + '...\n');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('❌ Connection failed:', err.message);
    if (err.code) console.error('Error code:', err.code);
  } else {
    console.log('✅ Connected successfully!');
    console.log('Server time:', res.rows[0].now);
  }
  pool.end();
});
