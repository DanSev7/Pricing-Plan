import axios, { AxiosError } from 'axios';
import env from '../config/environment';

// Enhanced environment configuration with better detection
const API_BASE_URL = env.apiUrl;

// Log the environment and API URL for debugging
console.log('Final API Base URL in paymentService:', API_BASE_URL);

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for debugging
// apiClient.interceptors.request.use(
//   (config) => {
//     console.log('Axios request to:', config.baseURL + config.url);
//     console.log('Request config:', config);
//     return config;
//   },
//   (error) => {
//     console.log('Axios request error:', error);
//     return Promise.reject(error);
//   }
// );

// // Add response interceptor for debugging
// apiClient.interceptors.response.use(
//   (response) => {
//     console.log('Axios response:', response.status, response.config.url);
//     return response;
//   },
//   (error) => {
//     console.log('Axios response error:', error.response?.status, error.config?.url);
//     return Promise.reject(error);
//   }
// );

/**
 * Initialize a payment with the backend
 * @param paymentData - Payment information
 * @returns Promise with payment response
 */
export const initializePayment = async (paymentData: {
  amount: number;
  email: string;
  firstName: string;
  lastName: string;
  plan: string;
}) => {
  try {
    const response = await apiClient.post('/payment', paymentData);
    
    // Return the response data directly, preserving the structure
    return response.data;
  } catch (error) {
    console.error('Payment initialization error:', error); // Added logging
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.data) {
        const data = axiosError.response.data as { error?: string };
        throw new Error(data.error || 'Failed to initialize payment');
      }
      // Handle network errors specifically
      if (error.code === 'NETWORK_ERROR') {
        throw new Error('Unable to connect to payment server. Please check your network connection.');
      }
    }
    throw new Error('An unexpected error occurred');
  }
};

export default {
  initializePayment,
};