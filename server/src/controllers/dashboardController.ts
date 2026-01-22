import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';

// @desc    Get Customer Dashboard Data
// @route   GET /api/dashboard/customer
export const getCustomerDashboard = async (req: AuthRequest, res: Response) => {
    res.json({
        metrics: { calories: 2100, water: 2.5, sleep: 7.5, steps: 8500 },
        plan: 'Premium Health Plan',
        nextMeal: 'Quinoa Salad',
        appointments: [{ doctor: 'Dr. Sharma', time: '10:00 AM' }]
    });
};

// @desc    Get Doctor Dashboard Data
// @route   GET /api/dashboard/doctor
export const getDoctorDashboard = async (req: AuthRequest, res: Response) => {
    res.json({
        pendingConsultations: 5,
        patientsToday: 12,
        upcomingSchedule: [
            { patient: 'Amit Kumar', time: '11:00 AM', status: 'Confirmed' },
            { patient: 'Sanjana Singh', time: '01:30 PM', status: 'Pending' }
        ]
    });
};

// @desc    Get Coach Dashboard Data
// @route   GET /api/dashboard/coach
export const getCoachDashboard = async (req: AuthRequest, res: Response) => {
    res.json({
        activeClients: 25,
        workoutPlansToReview: 3,
        performanceStats: { overallProgress: '85%', avgAttendance: '92%' }
    });
};

// @desc    Get Kitchen Dashboard Data
// @route   GET /api/dashboard/kitchen
export const getKitchenDashboard = async (req: AuthRequest, res: Response) => {
    res.json({
        activeOrders: 18,
        mealsPrepared: 145,
        inventoryAlerts: ['Milk', 'Spinach']
    });
};

// @desc    Get Delivery Dashboard Data
// @route   GET /api/dashboard/delivery
export const getDeliveryDashboard = async (req: AuthRequest, res: Response) => {
    res.json({
        pendingDeliveries: 8,
        successfulDeliveries: 124,
        currentRoute: 'Indira Nagar -> MG Road'
    });
};

// @desc    Get Admin Dashboard Data
// @route   GET /api/dashboard/admin
export const getAdminDashboard = async (req: AuthRequest, res: Response) => {
    res.json({
        totalUsers: 1250,
        activeSubscriptions: 450,
        revenue: '₹2,45,000',
        platformHealth: 'Excellent'
    });
};
