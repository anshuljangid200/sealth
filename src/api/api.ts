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
                console.log('Backend down, searching in mock database');

                // Check if user exists in mock localStorage
                const mockUsers = JSON.parse(localStorage.getItem('sealth_mock_users') || '[]');
                const existingUser = mockUsers.find((u: any) => u.email === credentials.email && u.password === credentials.password);

                if (existingUser) {
                    return {
                        token: 'mock-token-' + Math.random(),
                        user: {
                            ...existingUser,
                            id: 'mock-id-' + Math.random()
                        }
                    };
                }

                // Default mock success if not found (for easy testing)
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

            try {
                const response = await fetch(`${API_BASE_URL}/auth/register`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(normalizedData),
                });
                return response.json();
            } catch (error) {
                // Save to localStorage for mock persistence
                const mockUsers = JSON.parse(localStorage.getItem('sealth_mock_users') || '[]');
                mockUsers.push(normalizedData);
                localStorage.setItem('sealth_mock_users', JSON.stringify(mockUsers));

                return {
                    token: 'mock-token-' + Math.random(),
                    user: {
                        id: 'mock-id-' + Math.random(),
                        name: userName,
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
