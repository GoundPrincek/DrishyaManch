import mongoose from 'mongoose';
import { DB_NAME } from '../constant.js';

const connectDB = async () => {
    try {
        const mongoUrl = process.env.MONGODB_URL;

        if (!mongoUrl) {
            console.warn('MONGODB_URL is not set. Skipping database connection.');
            return false;
        }

        await mongoose.connect(mongoUrl, {
            dbName: DB_NAME,
            serverSelectionTimeoutMS:10000,
        });

        console.log(`\nMongoDB connected !! DB HOST : ${mongoose.connection.host}`);
        return true;
    } catch (error) {
        console.error('MONGODB connection failed:', error);
        return false;
    }
};

export default connectDB;