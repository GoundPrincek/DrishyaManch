import mongoose from 'mongoose';
import { DB_NAME } from '../constant.js';

const connectDB = async () => {
    console.log('Mongo URL:', process.env.MONGODB_URL);

    const mongoUrl = process.env.MONGODB_URL;
    if (!mongoUrl) {
        throw new Error('MONGODB_URL is not set');
    }

    await mongoose.connect(mongoUrl, {
        dbName: DB_NAME,
        serverSelectionTimeoutMS: 10000,
    });

    console.log(`\nMongoDB connected !! DB HOST : ${mongoose.connection.host}`);
};

export default connectDB;