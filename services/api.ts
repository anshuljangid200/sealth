/**
 * SEALTH API Service Layer
 * Centralized API communication with mock data fallback
 * 
 * This layer acts as an abstraction between the frontend and backend.
 * Replace mock data calls with actual API endpoints as backend develops.
 * 
 * Usage:
 * const doctors = await apiService.getDoctors();
 * const orders = await apiService.getOrders(roleId);
 */

import { UserRole, User } from '../types';
import {
  MOCK_DOCTORS,
  MOCK_ORDERS,
  MOCK_CONSULTATION_MESSAGES,
  MOCK_ADMIN_KPIS,
  MOCK_REGIONAL_LOAD,
  MOCK_PATIENTS,
  MOCK_MEAL_PLANS,
  MOCK_COACH_CLIENTS,
  MOCK_VITAL_SIGNS,
} from '../constants';

// ============================================================================
// API BASE URL - Change this when backend is ready
// ============================================================================
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';
const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK === 'true' || true; // Default to mock

// ============================================================================
// UTILITY: Simulate API delay (remove when real API is integrated)
// ============================================================================
const simulateDelay = (ms: number = 300) => new Promise(resolve => setTimeout(resolve, ms));

// ============================================================================
// DOCTOR SERVICE
// ============================================================================
export const doctorService = {
  /**
   * Fetch all doctors/experts (can be filtered client-side)
   */
  async getAllDoctors() {
    await simulateDelay();
    
    // TODO: Replace with real API call:
    // const response = await fetch(`${API_BASE_URL}/doctors`);
    // return response.json();
    
    return MOCK_DOCTORS;
  },

  /**
   * Get single doctor by ID
   */
  async getDoctorById(id: number) {
    await simulateDelay();
    return MOCK_DOCTORS.find(d => d.id === id) || null;
  },

  /**
   * Search doctors by name, specialty, or hospital
   */
  async searchDoctors(query: string) {
    await simulateDelay();
    const q = query.toLowerCase();
    return MOCK_DOCTORS.filter(d =>
      d.name.toLowerCase().includes(q) ||
      d.specialty.toLowerCase().includes(q) ||
      d.hospital.toLowerCase().includes(q)
    );
  },

  /**
   * Filter doctors by specialty
   */
  async getDoctorsBySpecialty(specialty: string) {
    await simulateDelay();
    return MOCK_DOCTORS.filter(d => d.specialty === specialty);
  },

  /**
   * Book consultation with doctor
   */
  async bookConsultation(doctorId: number, userId: string, timeSlot: string) {
    await simulateDelay();
    
    // TODO: POST ${API_BASE_URL}/consultations
    // Body: { doctorId, userId, timeSlot }
    
    return {
      success: true,
      consultationId: `CONS-${Date.now()}`,
      message: 'Consultation booked successfully'
    };
  },

  /**
   * Get conversation history
   */
  async getMessages(conversationId: string) {
    await simulateDelay();
    return MOCK_CONSULTATION_MESSAGES;
  },

  /**
   * Send message in consultation
   */
  async sendMessage(conversationId: string, message: string, senderId: string) {
    await simulateDelay();
    
    // TODO: POST ${API_BASE_URL}/messages
    // Body: { conversationId, message, senderId }
    
    return {
      success: true,
      messageId: `MSG-${Date.now()}`,
      timestamp: new Date().toISOString()
    };
  }
};

// ============================================================================
// ORDER SERVICE (Kitchen/Delivery)
// ============================================================================
export const orderService = {
  /**
   * Fetch all orders for user/kitchen/delivery
   */
  async getOrders(roleId?: UserRole) {
    await simulateDelay();
    
    // TODO: GET ${API_BASE_URL}/orders?role=${roleId}
    
    return MOCK_ORDERS;
  },

  /**
   * Get single order details
   */
  async getOrderById(orderId: string) {
    await simulateDelay();
    return MOCK_ORDERS.find(o => o.id === orderId) || null;
  },

  /**
   * Update order status
   */
  async updateOrderStatus(orderId: string, status: 'NEW' | 'PREPARING' | 'READY' | 'DELIVERED') {
    await simulateDelay();
    
    // TODO: PATCH ${API_BASE_URL}/orders/${orderId}
    // Body: { status }
    
    return {
      success: true,
      orderId,
      newStatus: status,
      timestamp: new Date().toISOString()
    };
  },

  /**
   * Create new order
   */
  async createOrder(customerName: string, mealId: string, quantity: number) {
    await simulateDelay();
    
    // TODO: POST ${API_BASE_URL}/orders
    // Body: { customerName, mealId, quantity }
    
    return {
      success: true,
      orderId: `ORD-${Date.now()}`,
      message: 'Order placed successfully'
    };
  }
};

// ============================================================================
// PATIENT SERVICE (Doctor view)
// ============================================================================
export const patientService = {
  /**
   * Get doctor's patients
   */
  async getPatients(doctorId: string) {
    await simulateDelay();
    
    // TODO: GET ${API_BASE_URL}/doctors/${doctorId}/patients
    
    return MOCK_PATIENTS;
  },

  /**
   * Get patient health records
   */
  async getPatientRecords(patientId: string) {
    await simulateDelay();
    
    // TODO: GET ${API_BASE_URL}/patients/${patientId}/records
    
    return {
      vitals: MOCK_VITAL_SIGNS,
      prescriptions: [],
      labReports: [],
      appointments: []
    };
  },

  /**
   * Update patient health data
   */
  async updatePatientData(patientId: string, data: any) {
    await simulateDelay();
    
    // TODO: PATCH ${API_BASE_URL}/patients/${patientId}
    // Body: data
    
    return { success: true, patientId };
  }
};

// ============================================================================
// ADMIN SERVICE
// ============================================================================
export const adminService = {
  /**
   * Get system KPIs
   */
  async getKPIs() {
    await simulateDelay();
    
    // TODO: GET ${API_BASE_URL}/admin/kpis
    
    return MOCK_ADMIN_KPIS;
  },

  /**
   * Get regional performance data
   */
  async getRegionalData() {
    await simulateDelay();
    
    // TODO: GET ${API_BASE_URL}/admin/regions
    
    return MOCK_REGIONAL_LOAD;
  },

  /**
   * Get all users
   */
  async getAllUsers() {
    await simulateDelay();
    
    // TODO: GET ${API_BASE_URL}/admin/users
    
    return [];
  },

  /**
   * Generate report
   */
  async generateReport(reportType: string, dateRange: { from: Date; to: Date }) {
    await simulateDelay();
    
    // TODO: POST ${API_BASE_URL}/admin/reports
    // Body: { reportType, dateRange }
    
    return {
      success: true,
      reportId: `RPT-${Date.now()}`,
      downloadUrl: '#'
    };
  }
};

// ============================================================================
// MEAL PLAN SERVICE
// ============================================================================
export const mealService = {
  /**
   * Get all meal plans
   */
  async getMealPlans() {
    await simulateDelay();
    
    // TODO: GET ${API_BASE_URL}/meals/plans
    
    return MOCK_MEAL_PLANS;
  },

  /**
   * Personalize meal plan for user
   */
  async personalizeMealPlan(userId: string, preferences: any) {
    await simulateDelay();
    
    // TODO: POST ${API_BASE_URL}/meals/personalize
    // Body: { userId, preferences }
    
    return {
      success: true,
      planId: `PLAN-${Date.now()}`,
      meals: MOCK_MEAL_PLANS
    };
  },

  /**
   * Get nutrition summary
   */
  async getNutritionSummary(userId: string) {
    await simulateDelay();
    
    // TODO: GET ${API_BASE_URL}/nutrition/summary?userId=${userId}
    
    return {
      totalCalories: 2100,
      macros: { protein: 120, carbs: 250, fat: 70 },
      micronutrients: { iron: 18, calcium: 1200 },
      recommendation: 'Increase protein intake for muscle recovery'
    };
  }
};

// ============================================================================
// COACH SERVICE
// ============================================================================
export const coachService = {
  /**
   * Get coach's clients
   */
  async getClients(coachId: string) {
    await simulateDelay();
    
    // TODO: GET ${API_BASE_URL}/coaches/${coachId}/clients
    
    return MOCK_COACH_CLIENTS;
  },

  /**
   * Get client progress
   */
  async getClientProgress(clientId: string) {
    await simulateDelay();
    
    // TODO: GET ${API_BASE_URL}/clients/${clientId}/progress
    
    return {
      workoutDays: 18,
      workoutMinutes: 2340,
      caloriesBurned: 45000,
      averageIntensity: 7.2,
      streak: 5
    };
  },

  /**
   * Assign workout plan
   */
  async assignWorkoutPlan(clientId: string, planId: string) {
    await simulateDelay();
    
    // TODO: POST ${API_BASE_URL}/clients/${clientId}/workout-plan
    // Body: { planId }
    
    return { success: true, message: 'Workout plan assigned' };
  }
};

// ============================================================================
// VITAL SIGNS SERVICE (Health metrics)
// ============================================================================
export const vitalService = {
  /**
   * Get user vital signs
   */
  async getVitals(userId: string) {
    await simulateDelay();
    
    // TODO: GET ${API_BASE_URL}/vitals?userId=${userId}
    
    return MOCK_VITAL_SIGNS;
  },

  /**
   * Record new vital measurement
   */
  async recordVital(userId: string, vitalType: string, value: number, unit: string) {
    await simulateDelay();
    
    // TODO: POST ${API_BASE_URL}/vitals
    // Body: { userId, vitalType, value, unit, timestamp: new Date() }
    
    return {
      success: true,
      vitalId: `VIT-${Date.now()}`,
      timestamp: new Date().toISOString()
    };
  },

  /**
   * Get vital trend
   */
  async getVitalTrend(userId: string, vitalType: string, days: number = 30) {
    await simulateDelay();
    
    // TODO: GET ${API_BASE_URL}/vitals/trend?userId=${userId}&type=${vitalType}&days=${days}
    
    return {
      vitalType,
      data: [],
      trend: 'stable',
      comparison: '+2%'
    };
  }
};

// ============================================================================
// EXPORT ALL SERVICES
// ============================================================================
export const apiService = {
  doctors: doctorService,
  orders: orderService,
  patients: patientService,
  admin: adminService,
  meals: mealService,
  coach: coachService,
  vitals: vitalService
};

export default apiService;
