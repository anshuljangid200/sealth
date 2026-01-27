import express from 'express';
import { protect, authorize } from '../middleware/auth';
import {
    getCustomerDashboard,
    getDoctorDashboard,
    getCoachDashboard,
    getKitchenDashboard,
    getDeliveryDashboard,
    getAdminDashboard
} from '../controllers/dashboardController';

const router = express.Router();

router.get('/customer', protect, authorize('CUSTOMER'), getCustomerDashboard);
router.get('/doctor', protect, authorize('DOCTOR'), getDoctorDashboard);
router.get('/coach', protect, authorize('COACH'), getCoachDashboard);
router.get('/kitchen', protect, authorize('KITCHEN'), getKitchenDashboard);
router.get('/delivery', protect, authorize('DELIVERY'), getDeliveryDashboard);
router.get('/admin', protect, authorize('ADMIN'), getAdminDashboard);

export default router;
