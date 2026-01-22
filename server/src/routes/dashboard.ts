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

router.get('/customer', protect, authorize('Customer'), getCustomerDashboard);
router.get('/doctor', protect, authorize('Doctor'), getDoctorDashboard);
router.get('/coach', protect, authorize('Coach'), getCoachDashboard);
router.get('/kitchen', protect, authorize('Kitchen'), getKitchenDashboard);
router.get('/delivery', protect, authorize('Delivery'), getDeliveryDashboard);
router.get('/admin', protect, authorize('Admin'), getAdminDashboard);

export default router;
