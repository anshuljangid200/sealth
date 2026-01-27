import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';

const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register user
router.post('/register', async (req, res) => {
    const { name, email, password, role } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide email and password' });
    }

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        user = new User({ name, email, password, role });
        await user.save();

        const payload = { userId: user.id, role: user.role };
        const token = jwt.sign(payload, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });

        res.status(201).json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role } });
    } catch (error) {
        console.error('SERVER REGISTRATION ERROR:', error);
        res.status(500).json({ message: 'Server error: ' + (error as Error).message });
    }
});

// @route   POST /api/auth/login
// @desc    Login user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide email and password' });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const payload = { userId: user.id, role: user.role };
        const token = jwt.sign(payload, process.env.JWT_SECRET || 'secret', { expiresIn: '7d' });

        res.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role } });
    } catch (error) {
        console.error('SERVER LOGIN ERROR:', error);
        res.status(500).json({ message: 'Server error: ' + (error as Error).message });
    }
});

export default router;
