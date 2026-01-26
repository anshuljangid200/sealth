const API_BASE_URL = 'http://localhost:5000/api';
// Replace this with your Google Apps Script Web App URL
const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbyQzY6_Jc-Yf8-k6C-v5A9I-x-EwW-fL-8/exec'; // Placeholder

export const api = {
    auth: {
        login: async (credentials: any) => {
            // Log to Google Sheet
            try {
                await fetch(GOOGLE_SHEET_URL, {
                    method: 'POST',
                    mode: 'no-cors', // Important for Google Apps Script
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        action: 'login',
                        ...credentials,
                        timestamp: new Date().toISOString()
                    }),
                });
            } catch (e) {
                console.warn('Google Sheet logging failed', e);
            }

            // Mock Success for all roles if backend is down
            try {
                const response = await fetch(`${API_BASE_URL}/auth/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(credentials),
                });
                return response.json();
            } catch (error) {
                console.log('Backend down, returning mock data');
                // Simulate successful login for developer convenience
                return {
                    token: 'mock-token-' + Math.random(),
                    user: {
                        id: 'mock-id',
                        name: credentials.email.split('@')[0],
                        email: credentials.email,
                        role: credentials.role || 'CUSTOMER'
                    }
                };
            }
        },
        register: async (userData: any) => {
            // Log to Google Sheet
            try {
                await fetch(GOOGLE_SHEET_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        action: 'register',
                        ...userData,
                        timestamp: new Date().toISOString()
                    }),
                });
            } catch (e) {
                console.warn('Google Sheet logging failed', e);
            }

            try {
                const response = await fetch(`${API_BASE_URL}/auth/register`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(userData),
                });
                return response.json();
            } catch (error) {
                return {
                    token: 'mock-token-' + Math.random(),
                    user: {
                        id: 'mock-id',
                        name: userData.name,
                        email: userData.email,
                        role: userData.role || 'CUSTOMER'
                    }
                };
            }
        },
    },
    dashboard: {
        getData: async (role: string, token: string) => {
            try {
                const response = await fetch(`${API_BASE_URL}/dashboard/${role.toLowerCase()}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                return response.json();
            } catch (error) {
                return { status: 'success', data: {} };
            }
        },
    },
};
