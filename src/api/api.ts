const API_BASE_URL = (import.meta as any).env.VITE_API_URL || 'http://localhost:5000/api';
// Connect to your Google Apps Script
const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbxpHMjq6rqLsVRBoK7KYILSB4yFPji6raeEtP0mEiTDRa2M-Vtyp2TF5XINeSIYaWFh/exec';

export const api = {
    auth: {
        login: async (credentials: any) => {
            // Log to Google Sheet
            try {
                await fetch(GOOGLE_SHEET_URL, {
                    method: 'POST',
                    mode: 'no-cors',
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

            const response = await fetch(`${API_BASE_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Login failed');
            }

            return response.json();
        },
        register: async (userData: any) => {
            const userName = userData.name || userData.email.split('@')[0];
            const normalizedData = { ...userData, name: userName };

            // Log to Google Sheet
            try {
                await fetch(GOOGLE_SHEET_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        action: 'register',
                        ...normalizedData,
                        timestamp: new Date().toISOString()
                    }),
                });
            } catch (e) {
                console.warn('Google Sheet logging failed', e);
            }

            const response = await fetch(`${API_BASE_URL}/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(normalizedData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Registration failed');
            }

            return response.json();
        },
    },
    dashboard: {
        getData: async (role: string, token: string) => {
            const response = await fetch(`${API_BASE_URL}/dashboard/${role.toLowerCase()}`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to fetch dashboard data');
            }

            return response.json();
        },
    },
};
