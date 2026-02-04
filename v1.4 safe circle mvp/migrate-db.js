import { Pool } from 'pg';
import { readFileSync } from 'fs';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

async function migrate() {
  console.log('🔄 Starting database migration...\n');
  
  try {
    // Drop and recreate schema
    console.log('📦 Resetting schema...');
    await pool.query('DROP SCHEMA IF EXISTS public CASCADE');
    await pool.query('CREATE SCHEMA public');
    await pool.query('GRANT ALL ON SCHEMA public TO avnadmin');
    console.log('✅ Schema reset complete\n');
    
    // Read and execute schema.sql
    console.log('📝 Running schema.sql...');
    const schema = readFileSync('./database/schema.sql', 'utf-8');
    await pool.query(schema);
    console.log('✅ Schema created successfully\n');
    
    // Verify tables were created
    const result = await pool.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      ORDER BY table_name
    `);
    
    console.log('📊 Created tables:');
    result.rows.forEach(row => console.log(`   - ${row.table_name}`));
    
    console.log('\n✅ Migration complete!');
    
  } catch (error) {
    console.error('❌ Migration failed:', error.message);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

migrate();
