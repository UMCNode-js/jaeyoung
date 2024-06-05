import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',  
    user: process.env.DB_USER || 'root', 
    port: process.env.DB_PORT || 3306, 
    database: process.env.DB_TABLE || 'nodebird', 
    password: process.env.DB_PASSWORD || 'password', 
    waitForConnections: true,
    connectionLimit: 10,       
    queueLimit: 0,             
});

// 쿼리 실행하여 연결 상태 확인
async function checkDBConnection() {
    try {
      const [results] = await pool.query('SHOW tables');
      console.log('DB connection successful:', results);
    } catch (error) {
      console.error('DB connection failed:', error);
    }
  }
  
  checkDBConnection();



