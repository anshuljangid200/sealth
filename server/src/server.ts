import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import authRoutes from './routes/auth';
import dashboardRoutes from './routes/dashboard';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);

// Basic Route
app.get('/api', (req, res) => {
    res.send('Sealth API is running...');
});

// Export app for Vercel Serverless
export default app;

// Only connect and listen if not in serverless environment
if (process.env.NODE_ENV !== 'production') {
    // Connect to Database
    connectDB();
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
} else {
    // In production (Vercel), we still need to connect to DB
    connectDB();
}
