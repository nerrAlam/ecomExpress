
// all the imports here
import dotenv from 'dotenv';
import path from 'path';

// requireing all the path from .env
dotenv.config({path: path.join(process.cwd(), '.env')});

// all the exports here
export default {
    port: process.env.PORT,
    dataBaseUrl: process.env.DATABASE_URL,
};