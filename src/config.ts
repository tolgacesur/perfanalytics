import dotEnv from 'dotenv';

// Enable environment variables
dotEnv.config();

export default {
    port : parseInt(process.env.PORT),
    database : {
        name: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD
    }
}