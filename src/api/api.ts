const API_BASE_URL = 'http://localhost:5000/api';

export const api = {
    auth: {
        login: async (credentials: any) => {
            const response = await fetch(`${API_BASE_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials),
            });
            return response.json();
        },
        register: async (userData: any) => {
            const response = await fetch(`${API_BASE_URL}/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
            });
            return response.json();
        },
    },
    dashboard: {
        getData: async (role: string, token: string) => {
            const response = await fetch(`${API_BASE_URL}/dashboard/${role.toLowerCase()}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.json();
        },
    },
};
