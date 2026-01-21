/**
 * Error Handler Service
 * Centralized error handling, logging, and user notifications
 * 
 * Usage:
 * try {
 *   const data = await apiService.getDoctors();
 * } catch (error) {
 *   errorHandler.handle(error, 'Failed to load doctors');
 * }
 */

export interface AppError {
  code?: string;
  message: string;
  originalError?: any;
  timestamp: Date;
  context?: Record<string, any>;
}

export type ErrorSeverity = 'info' | 'warning' | 'error' | 'critical';

/**
 * Global error store for UI notifications
 * Component can subscribe to this for toast notifications
 */
export class ErrorStore {
  private static instance: ErrorStore;
  private listeners: ((error: AppError) => void)[] = [];
  private errorHistory: AppError[] = [];

  static getInstance() {
    if (!ErrorStore.instance) {
      ErrorStore.instance = new ErrorStore();
    }
    return ErrorStore.instance;
  }

  subscribe(listener: (error: AppError) => void) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify(error: AppError) {
    this.errorHistory.push(error);
    this.listeners.forEach(listener => listener(error));

    // Keep only last 50 errors in history
    if (this.errorHistory.length > 50) {
      this.errorHistory.shift();
    }

    // Log to console in development
    if (import.meta.env.DEV) {
      console.error('[AppError]', error);
    }
  }

  getHistory() {
    return [...this.errorHistory];
  }

  clear() {
    this.errorHistory = [];
  }
}

// ============================================================================
// ERROR HANDLER
// ============================================================================
export const errorHandler = {
  /**
   * Handle network errors
   */
  handleNetworkError(error: any): AppError {
    const appError: AppError = {
      code: 'NETWORK_ERROR',
      message: 'Network error. Please check your connection and try again.',
      originalError: error,
      timestamp: new Date(),
      context: { type: 'network' }
    };
    ErrorStore.getInstance().notify(appError);
    return appError;
  },

  /**
   * Handle authentication errors
   */
  handleAuthError(error: any): AppError {
    const appError: AppError = {
      code: 'AUTH_ERROR',
      message: 'Authentication failed. Please log in again.',
      originalError: error,
      timestamp: new Date(),
      context: { type: 'auth' }
    };
    ErrorStore.getInstance().notify(appError);
    // In real app, redirect to login
    localStorage.removeItem('sealth_user');
    return appError;
  },

  /**
   * Handle validation errors
   */
  handleValidationError(message: string, details?: Record<string, any>): AppError {
    const appError: AppError = {
      code: 'VALIDATION_ERROR',
      message: message || 'Invalid input. Please check your form.',
      timestamp: new Date(),
      context: { type: 'validation', details }
    };
    ErrorStore.getInstance().notify(appError);
    return appError;
  },

  /**
   * Handle server/API errors
   */
  handleServerError(error: any, message?: string): AppError {
    const statusCode = error?.status || error?.statusCode;
    
    let userMessage = message || 'Server error. Please try again later.';
    if (statusCode === 404) {
      userMessage = 'Resource not found.';
    } else if (statusCode === 500) {
      userMessage = 'Server error. Our team has been notified.';
    } else if (statusCode === 429) {
      userMessage = 'Too many requests. Please wait a moment and try again.';
    }

    const appError: AppError = {
      code: `SERVER_ERROR_${statusCode}`,
      message: userMessage,
      originalError: error,
      timestamp: new Date(),
      context: { type: 'server', statusCode }
    };
    ErrorStore.getInstance().notify(appError);
    return appError;
  },

  /**
   * Generic error handler
   */
  handle(error: any, defaultMessage?: string): AppError {
    if (!error) {
      return { message: defaultMessage || 'Unknown error occurred', timestamp: new Date() };
    }

    // Network error
    if (error.message === 'Network request failed') {
      return this.handleNetworkError(error);
    }

    // Authentication error
    if (error.code === 'UNAUTHORIZED' || error.status === 401) {
      return this.handleAuthError(error);
    }

    // Server error
    if (error.status && error.status >= 400) {
      return this.handleServerError(error, defaultMessage);
    }

    // Generic error
    const appError: AppError = {
      message: error.message || defaultMessage || 'An error occurred',
      originalError: error,
      timestamp: new Date()
    };
    ErrorStore.getInstance().notify(appError);
    return appError;
  },

  /**
   * Clear error history
   */
  clearHistory() {
    ErrorStore.getInstance().clear();
  },

  /**
   * Get error history for debugging
   */
  getHistory() {
    return ErrorStore.getInstance().getHistory();
  }
};

export default errorHandler;
