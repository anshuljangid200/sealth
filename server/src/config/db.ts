import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/sealth');
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.warn(`⚠️ MongoDB connection failed: ${(error as Error).message}`);
        console.warn('Backend will continue running in MOCK MODE.');
    }
};

export default connectDB;
